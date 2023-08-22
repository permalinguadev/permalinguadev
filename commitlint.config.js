const commitlintConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-empty": [1, "never"],
    "references-empty": [1, "never"],
    "scope-empty": [1, "never"],
    "type-enum": [
      2,
      "always",
      [
        "design",
        "build",
        "chore",
        "devops",
        "documentation",
        "feature",
        "bug",
        "performance",
        "refactor",
        "style",
        "design",
        "ux",
        "test",
      ],
    ],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ["prm-"],
    },
  },
};

module.exports = commitlintConfig;