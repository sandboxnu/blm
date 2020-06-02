module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production"
      ? [
          require("@fullhuman/postcss-purgecss")({
            content: [
              "./pages/**/*.{js,jsx,ts,tsx}",
              "./components/**/*.{js,jsx,ts,tsx}",
            ],

            // make sure css reset isnt removed on html and body
            whitelist: ["html", "body"],
            whitelistPatterns: [/fa/],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
        ]
      : []),
  ],
};
