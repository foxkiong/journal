# 狐狸筆記 (Journal)

> 極簡無色階 · 長者高易讀設計的個人網誌

- **線上網址**: [https://foxkiong.github.io/journal/](https://foxkiong.github.io/journal/)
- **舊網誌存檔**: [https://foxkiong.github.io/myBlog/](https://foxkiong.github.io/myBlog/) (2005–2018 年 800 篇)

---

## 🌟 主題特色

1. **極簡無色階 (Monochrome Grayscale)**：以純黑、深灰、淺灰與純白構成，零刺眼色彩，專注文字本質。
2. **長者高易讀 (Senior Accessibility)**：
   - 預設字級 **21px**（可切換 25px、29px）。
   - 行距 **1.85**，段落留白充裕。
   - 高對比度（18:1 對比，符合 WCAG AAA 標準）。
   - 限制文字欄寬約 700px，視線不跳行、不疲累。
3. **零外部依賴**：原生 Jekyll 相容，不依賴龐大 Gem 或 JavaScript 框架，頁面極速秒開。

---

## ✍️ 如何發布新文章

### 方法一：手機網頁後台（Sveltia CMS，最推薦）
1. 在手機瀏覽器（Chrome 或 Safari）打開：  
   👉 **[https://foxkiong.github.io/journal/admin/](https://foxkiong.github.io/journal/admin/)**
2. 點擊瀏覽器選單中的 **「加到主畫面」**，它會像手機 App 一樣常駐在你的桌面。
3. 首次登入請使用你的 **GitHub 個人存取權杖 (Personal Access Token)**（具備 `repo` 權限）。瀏覽器會自動記住，日後點開即用。
4. 點擊 **「新增文章」**：
   - 填寫標題與正文。
   - 點擊工具列的 **圖片圖示**，可直接從手機相簿挑選相片或拍照上傳。
   - 點擊 **「發布」**，系統將自動提交至 GitHub 並在 1 分鐘內更新網站。

---

### 方法二：本機 Git 指令發布
只需在 `_posts/` 目錄下新增 Markdown 檔案：

1. **命名格式**：`YYYY-MM-DD-文章標題.md`  
   例如：`_posts/2026-11-20-autumn-walk.md`

2. **檔案頭部（Front Matter）**：
   ```markdown
   ---
   layout: post
   title: "文章標題"
   date: 2026-11-20 10:00:00 +0800
   author: 狐狸
   ---

   這裡填寫文章正文...
   ```

3. **插入圖片**：
   將圖片放置於 `assets/images/`，在 Markdown 內引用：
   ```markdown
   ![圖片描述]({{ '/assets/images/photo.jpg' | relative_url }})
   ```

4. **提交並推送**：
   ```powershell
   git add -A
   git commit -m "Add new post: 文章標題"
   git push origin master
   ```
   GitHub Pages 將在 1~2 分鐘內自動構建並發布。

---

## 📁 目錄結構

```text
journal/
├── _config.yml         # 網站全域設定（標題、描述、網址）
├── _includes/
│   ├── header.html     # 頂部標題、導航與字體切換器
│   └── footer.html     # 頁尾資訊與版權宣告
├── _layouts/
│   ├── default.html    # 全站基礎 HTML 骨架
│   ├── home.html       # 首頁佈局（最新文章列表）
│   ├── post.html       # 文章內頁（大字體、麵包屑、前後篇導航）
│   ├── page.html       # 一般頁面（關於、歸檔）
│   └── archive.html    # 全文歸檔（依年份聚合）
├── _posts/             # 所有網誌文章存放處
│   └── 2026-11-18-welcome-to-journal.md
├── assets/
│   ├── css/
│   │   └── style.css   # 極簡無色階專用樣式表
│   ├── js/
│   │   └── font-size.js # 字體縮放控制腳本
│   └── images/         # 圖片存放目錄
├── index.md            # 首頁
├── archive.md          # 依年份整理的文章歸檔頁
├── about.md            # 關於本誌
├── 404.md              # 找不到頁面
└── README.md
```
