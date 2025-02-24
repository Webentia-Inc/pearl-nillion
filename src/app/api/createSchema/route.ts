// app/api/createSchema/route.ts
import { NextResponse } from 'next/server';
import { SecretVaultWrapper } from 'secretvaults';
import { secretVaultOrgConfig } from '../../../config/secretVaultOrgConfig';
import schema from '../../../schemas/example.json' assert { type: 'json' };

export async function GET() {
  try {
    const org = new SecretVaultWrapper(
      secretVaultOrgConfig.nodes,
      secretVaultOrgConfig.orgCredentials
    );
    await org.init();

    // Create a new collection schema
    const newSchema = await org.createSchema(schema, 'Web3 Experience Survey');
    console.log('📚 New Schema:', newSchema);

    return NextResponse.json({ success: true, schema: newSchema });
  } catch (error) {
    console.error('❌ Failed to use SecretVaultWrapper:', (error as Error).message);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}