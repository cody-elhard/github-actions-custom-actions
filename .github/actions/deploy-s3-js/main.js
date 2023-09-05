// Github Action main file
const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  core.notice('Starting deploy to S3');

  // Get input values
  const bucket = core.getInput('bucket', { required: true });
  const region = core.getInput('bucket-region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });

  // env:
  //   AWS_ACCESS_KEY_ID: secrets.AWS_ACCESS_KEY_ID
  //   AWS_SECRET_ACCESS_KEY: secrets.AWS_SECRET_ACCESS_KEY

  const s3Uri = `s3://${bucket}`;
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${region} --delete`);

  // Return the url to the website as an output
  const url = `http://${bucket}.s3-website.${region}.amazonaws.com`;
  core.setOutput('url', url);
}

run();
