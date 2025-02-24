// app/api/interactSecretVault/route.ts
import { NextResponse } from "next/server";
import { interactWithSecretVault } from "../../../lib/secretVaultData";

// Custom replacer function to handle BigInt values
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function replacer(key: string, value: any) {
    if (typeof value === 'bigint') {
      return value.toString(); // Convert BigInt to string
    }
    return value;
  }
  
  export async function GET() {
    const result = await interactWithSecretVault();
  
    if (result.success) {
      // Use the custom replacer when serializing the response
      const responseBody = JSON.stringify(result, replacer);
      return new NextResponse(responseBody, {
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      const responseBody = JSON.stringify(result, replacer);
      return new NextResponse(responseBody, {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
