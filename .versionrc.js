const versionConfig = {
  bumpFiles: [{ filename: "package.json", type: "json" }],
  commitAll: true,
  commitMessageFormat: "chore(release): {{currentTag}}",
  issuePrefixes: "prm-",
  commitPaths: ["package.json", "package-lock.json"],
  types: [
    { type: "feature", section: "✨ feature" },
    { type: "design", section: "⚜️ design" },
    { type: "build", section: "👷 build" },
    { type: "bug", section: "🐛 bug fixes" },
    { type: "chore", hidden: false, section: "🚚 chore" },
    { type: "devop", hidden: false, section: "🆙 devop" },
    { type: "documentation", hidden: false, section: "📝 documentation" },
    { type: "style", hidden: false, section: "💄 styling" },
    { type: "refactor", hidden: false, section: "♻️ code refactoring" },
    { type: "performance", hidden: false, section: "⚡️ performance improvement" },
    { type: "ux", hidden: false, section: "🔥 ux change" },
    { type: "test", hidden: false, section: "✅ testing" },
  ],
};

module.exports = versionConfig;