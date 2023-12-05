const plugin = require("tailwindcss/plugin");

const color = plugin(({ addUtilities }) => {
  addUtilities({
    ".text-primary": {
      fontSize: "16px",
    },
    ".list": {
      listStyleType: "disc",
    },
    underline: {
      textDecorationline: "underline",
    },
  });
});
module.exports = { color };
