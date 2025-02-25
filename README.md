<h1>This is a NextJS Template integrated with Nillion SecretVault.</h1>

<h3>Getting Started</h3>
<p><strong>What is Nillion SecretVault:- </strong>Nillion's SecretVault is a decentralized storage system that keeps sensitive data secret by storing encrypted shares across a cluster of nilDB nodes. Each nilDB node stores a separate share of the encrypted data, ensuring no single node can reveal the original value.</p>

<p>We have integrated SecretVault Quickstart Example with NextJS and built the backend part. Anyone can use this template to modify the code according to their requirements.</p>

<h4>How pearl-nillion template works?</h4>
<ul>
  <li>Clone the Template.</li>
  <li>Run npm i.</li>
  <li>Create an Organization at https://sv-sda-registration.replit.app/ and save those credentials exactly as given in .env.example.</li>
  <li>Run the command: npm run dev</li>
</ul>

<h4>Nillion SecretVault related Files</h4>
<ul>
  <li>/src/app/api/createSchema/route.ts</li>
  <li>src/app/api/interactSecretVault/route.ts</li>
  <li>src/config/secretVaultOrgConfig.ts</li>
  <li>src/lib/secretVaultData.ts</li>
  <li>src/queries/createSchema.ts</li>
  <li>src/schemas/example.json</li>
  <li>secretvaults.d.ts</li>
</ul>

