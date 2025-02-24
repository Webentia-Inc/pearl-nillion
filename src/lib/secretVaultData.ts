// src/lib/secretVaultData.ts
import { SecretVaultWrapper } from 'secretvaults';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { v4 as uuidv4 } from 'uuid';
import { secretVaultOrgConfig } from '../config/secretVaultOrgConfig';

const SCHEMA_ID = '571a330e-2398-41bc-bc39-2d41237be285'; // Use env variable or replace with actual schema ID

const web3ExperienceSurveyData = [
    {
      years_in_web3: { '%allot': 4 },
      responses: [
        { rating: 5, question_number: 1 },
        { rating: 3, question_number: 2 },
      ],
    },
    {
      years_in_web3: { '%allot': 1 },
      responses: [
        { rating: 2, question_number: 1 },
        { rating: 4, question_number: 2 },
      ],
    },
  ];

export async function interactWithSecretVault() {
  try {
    const collection = new SecretVaultWrapper(
      secretVaultOrgConfig.nodes,
      secretVaultOrgConfig.orgCredentials,
      SCHEMA_ID
    );
    await collection.init();

    // Write data to nodes
    const dataWritten = await collection.writeToNodes(web3ExperienceSurveyData);
    console.log('dataWritten', dataWritten);

    // Extract new IDs from the written data
    const newIds = [
      ...new Set(dataWritten.map((item) => item.data.created).flat()),
    ];
    console.log('created ids:', newIds);

    // Read data from nodes
    const dataRead = await collection.readFromNodes({});
    console.log('📚 total records:', dataRead.length);
    console.log(
      '📚 Read new records:',
      dataRead.slice(0, web3ExperienceSurveyData.length)
    );

    return { success: true, dataWritten, dataRead };
  } catch (error) {
    console.error('❌ Failed to use SecretVaultWrapper:', (error as Error).message);
    return { success: false, error: (error as Error).message };
  }
}