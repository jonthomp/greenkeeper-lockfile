"use strict";

const gitHelpers = require("../lib/git-helpers");

const env = process.env;

module.exports = {
  repoSlug: env.BUDDY_REPO_SLUG,
  branchName: env.BUDDY_EXECUTION_BRANCH,
  firstPush:
    gitHelpers.getNumberOfCommitsOnBranch(env.BUDDY_EXECUTION_BRANCH) === 1,
  correctBuild: env.BUDDY_EXECUTION_PULL_REQUEST_ID > 0,
  uploadBuild: true,
};
