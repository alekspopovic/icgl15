const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/alekspopovic/icgl15-test",
  },
  () => {
    console.log("Deploy Complete!")
  }
)
