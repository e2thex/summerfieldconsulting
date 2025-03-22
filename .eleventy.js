module.exports = function(eleventyConfig) {
    // Copy assets directly to output
    eleventyConfig.addPassthroughCopy("src/assets");
    
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };
};