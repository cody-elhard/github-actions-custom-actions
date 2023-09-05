// Github Action main file
const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  // Get input values
  const bucket = core.getInput('bucket', { required: true });
  const region = core.getInput('bucket-region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });

  // Upload files to S3

  core.notice('Starting deploy to S3');
  // Log all inputs
  core.info(`Bucket: ${bucket}`);
  core.info(`Region: ${region}`);
  core.info(`Dist folder: ${distFolder}`);
}

run();
