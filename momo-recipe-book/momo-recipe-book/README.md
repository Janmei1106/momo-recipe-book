# Momo's Recipe Book｜魔法料理圖鑑

一個可以持續新增食譜的靜態網頁專案。使用 HTML/CSS/JavaScript，無需 API Key、後端或建置工具。

## 專案目標
展示如何透過 `AGENTS.md` 制定可重複使用的 AI 開發規則。新增食譜只需編輯 `data/recipes.js`，首頁卡片、搜尋、篩選與詳情會自動更新。

## 功能
- 搜尋料理名稱、食材
- 依類別與難度篩選
- 食譜卡片及詳細料理步驟
- 手機與桌面響應式版型

## 檔案結構
```text
momo-recipe-book/
├── AGENTS.md         # AI 開發與新增內容規則
├── README.md          # 專案介紹與部署說明
├── index.html         # 網頁結構
├── styles.css         # 全站樣式
├── app.js             # 搜尋、篩選、詳情功能
└── data/
    └── recipes.js    # 所有食譜資料
```

## 本機預覽
直接用瀏覽器開啟 `index.html`，或使用 VS Code Live Server。

## 新增食譜
先閱讀 `AGENTS.md`，再依據資料欄位規則在 `data/recipes.js` 新增物件。新增後不必修改 HTML；網站會自動產生卡片。請確認搜尋、類別/難度篩選、詳情頁、手機版正常。

## GitHub Pages 部署
1. 在 GitHub 建立公開 repository，例如 `momo-recipe-book`。
2. 將所有檔案及 `data/` 資料夾上傳至 repository 根目錄。
3. 開啟 **Settings → Pages → Build and deployment**。
4. 選擇 **Deploy from a branch**，Branch 選 `main`、Folder 選 `/ (root)`，按 Save。
5. 等待部署完成，網站網址通常是 `https://你的帳號.github.io/momo-recipe-book/`。

## 驗收
- 首頁能載入食譜卡片
- 搜尋「番茄」可找到番茄炒蛋
- 類別選「湯品」可找到玉米蛋花湯
- 點擊卡片可查看食材與步驟
- 手機尺寸可正常瀏覽

## AI 協作說明
專案初版由 ChatGPT 協助規劃與產生。使用者應自行執行、測試並依照課堂要求記錄實際修改內容。
