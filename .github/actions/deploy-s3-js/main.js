// Github Action main file
const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  core.notice('Starting deploy to S3');
}

run();
