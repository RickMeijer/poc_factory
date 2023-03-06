export default {
  "**/*.{js,ts,jsx,tsx,svelte}": [
    "eslint --ignore-path .prettierignore",
    "prettier --check --plugin-search-dir=.",
  ],
};
