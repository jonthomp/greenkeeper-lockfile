"use strict";

const gitHelpers = require("../lib/git-helpers");

const env = process.env;

module.exports = {
  repoSlug: env.BUDDY_REPO_SLUG,
  branchName: env.BUDDY_EXECUTION_BRANCH,
  firstPush: true,
  correctBuild: true,
  uploadBuild: true,
};
