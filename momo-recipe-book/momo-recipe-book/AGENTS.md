# AGENTS.md — Momo's Recipe Book

## 1. Project goal
Build a cute, responsive, Traditional-Chinese recipe library that can grow by adding structured recipe data. The website must work as a static site on GitHub Pages, without API keys or a backend.

## 2. Tech and structure
- Plain HTML, CSS, and JavaScript. No build step or external dependencies.
- `index.html`: semantic page structure and accessible controls.
- `styles.css`: all visual styles, mobile-first responsive layout.
- `app.js`: loading, searching, filtering, card rendering, modal details.
- `data/recipes.js`: the only source of recipe content, exported as `window.MOMO_RECIPES`.
- `AGENTS.md`: permanent instructions for AI contributors.
- `README.md`: how to preview, add content, deploy and test.

## 3. Design system
- Language: Traditional Chinese (`zh-Hant`). Voice: friendly, concise, helpful; avoid exaggerated health claims.
- Palette: cream `#FFF9F0`, orange `#E97844`, dark text `#342B28`, sage `#7D9A7A`.
- Use rounded cards, generous whitespace, readable text, clear button labels, visible focus indicators.
- Responsive at 360px, 768px, and desktop. Never allow horizontal scrolling.
- Keep UI text in Traditional Chinese; English only for product name and technical terms.

## 4. Recipe data contract
Every new recipe in `data/recipes.js` MUST be an object with these fields:
- `id`: unique lowercase kebab-case ASCII slug, e.g. `tomato-egg`.
- `name`: nonempty Traditional Chinese name.
- `emoji`: one emoji representing the dish.
- `time`: positive integer, total estimated minutes.
- `difficulty`: exactly one of `新手`, `簡單`, `進階`.
- `category`: exactly one of `主食`, `配菜`, `湯品`, `點心`.
- `ingredients`: nonempty array of ingredient strings with amounts when practical.
- `steps`: array with at least 2 concrete, ordered preparation steps.
- `tip`: short optional helpful note; use empty string if none.
Never add a recipe with a duplicate `id` or missing required field. Do not claim recipes are medically safe for specific conditions.

## 5. How AI should add a recipe
1. Read this file and existing recipe objects first.
2. Add exactly one well-formed object to `data/recipes.js`; do not rewrite unrelated recipes.
3. Follow the allowed categories and difficulty values.
4. Ensure all listed ingredients are reflected in steps; steps must be feasible with common kitchen equipment.
5. Keep cooking safety clear: fully cook poultry and other raw proteins; avoid unsafe shortcut claims.
6. Check search by dish name and ingredient, category/difficulty filters, detail view, and mobile layout.
7. Update README recipe count only if it is explicitly hardcoded (currently it is not).

## 6. How AI should change the UI
- Reuse existing CSS classes, tokens, and card/detail patterns.
- Do not hardcode recipe content into `index.html` or `app.js`.
- Do not add a framework, external API, tracking, or secrets without user approval.
- Preserve keyboard accessibility, labels, responsive behavior, and current features.
- Prefer minimal diffs; explain what changed and how to verify it.

## 7. Acceptance checklist
- `index.html` opens locally and works on GitHub Pages.
- Recipe cards render without errors; search and filters can be combined.
- Clicking a recipe opens complete ingredients and ordered steps; close works via button, backdrop, and Escape.
- Empty search results show a useful message.
- No external API key or private data is committed.
- All content and behavior are consistent with this AGENTS.md.

## 8. Example instruction for a future AI
“Read AGENTS.md, then add a 15-minute beginner tomato-and-egg dish to data/recipes.js. Keep all existing features and styling, and verify search/filter/detail behavior.”
