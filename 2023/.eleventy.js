const fs = require("fs");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./styles/tailwind.config.js");
  eleventyConfig.addWatchTarget("./styles/tailwind.css");
  eleventyConfig.addWatchTarget("./_site/styles.css");

  eleventyConfig.addPassthroughCopy({
    "./fonts": "./fonts",
    "./img": "./img",
  });

  eleventyConfig.addShortcode("icon", function (icon) {
    return fs.readFileSync(`./icons/${icon}.svg`);
  });
};
