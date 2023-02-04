const now = String(Date.now());

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./styles/tailwind.config.js");
  eleventyConfig.addWatchTarget("./styles/tailwind.css");
  eleventyConfig.addWatchTarget("./_site/styles.css");

  eleventyConfig.addShortcode("version", function () {
    return now;
  });
};
