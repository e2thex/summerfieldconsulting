module.exports = function(eleventyConfig) {
    // Copy assets directly to output
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/tools/ScrumRACI/script.js");
    eleventyConfig.addPassthroughCopy("src/assets/js");
    
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };
};