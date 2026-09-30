const core = require('@actions/core');

try {
  // Get input from workflow
  const encodedSecret = core.getInput('encoded_secret');

  // Decode the base64 secret
  const decodedSecret = Buffer.from(encodedSecret, 'base64').toString('utf-8');

  // Mask the secret using core.setSecret (implements add-mask)
  core.setSecret(decodedSecret);

  // Set as output so subsequent steps can use it
  core.setOutput('masked_output', decodedSecret);

  // Print log to test redaction
  console.log(`Successfully decoded and masked secret: ${decodedSecret}`);
} catch (error) {
  core.setFailed(`Action failed with error: ${error.message}`);
}
