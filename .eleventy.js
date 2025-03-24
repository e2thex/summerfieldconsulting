module.exports = function(eleventyConfig) {
    // Copy assets directly to output
    eleventyConfig.addPassthroughCopy("src/assets");
    // Add specific passthrough for troubleshooting
    eleventyConfig.addPassthroughCopy({"src/assets/media/ErikSummerfield.png": "assets/media/ErikSummerfield.png"});
    
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };
};