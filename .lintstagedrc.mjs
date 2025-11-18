export default {
  "*.{json,cjs}": "prettier --write",
  "*.md": "prettier --write",
  "*.{js,ts,jsx,tsx,mjs}": ["eslint --fix", "prettier --write"],
  "*.vue": ["eslint --fix", "prettier --write", "stylelint --fix --allow-empty-input"],
  "*.{less,css,scss}": ["stylelint --fix --allow-empty-input", "prettier --write"],
};
