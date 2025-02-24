

import { SecretVaultWrapper } from 'secretvaults';
import { secretVaultOrgConfig } from "../config/secretVaultOrgConfig";
import schema from '../schemas/example.json' assert { type: 'json' };

async function main() {
  try {
    const org = new SecretVaultWrapper(
        secretVaultOrgConfig.nodes,
        secretVaultOrgConfig.orgCredentials
    );
    await org.init();

    // create a new collectionschema
    const newSchema = await org.createSchema(schema, 'Web3 Experience Survey');
    console.log('📚 New Schema:', newSchema);
  } catch (error) {
    console.error('❌ Failed to use SecretVaultWrapper:', (error as Error).message);
    process.exit(1);
  }
}

main();