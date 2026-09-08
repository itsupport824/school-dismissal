GitHub Pages + Firebase 無登入版
==============================

此版本特點
---------
- 不需要老師帳戶
- 不需要登入
- 老師直接開 control.html 即可控制
- Firebase 只負責即時同步放學狀態
- 可同時多班放學
- 放學中：黃底黑字
- 已完成：淡綠色
- 長按班別約 0.7 秒可直接標記完成

重要安全提醒
-----------
因為不設登入，Database Rules 必須允許公開寫入。
即是任何知道 Firebase 資料庫位置或控制頁網址的人，都有可能更改資料。

因此：
1. 不要公開分享 control.html 網址
2. 不要把 control.html 連結放在網站首頁
3. 可以只將 control.html 的網址傳給當值老師
4. 正式長期使用仍建議日後加入登入或其他權限保護

Firebase 設定
------------
1. 建立 Firebase Project
2. 建立 Web App
3. 建立 Realtime Database
4. 將 Firebase 提供的 firebaseConfig 填入 firebase-config.js
5. Realtime Database > Rules
6. 將 database.rules.json 內容貼上並 Publish

不需要：
- Firebase Authentication
- 老師帳戶
- login.html

GitHub Pages
------------
將全部檔案上載至 GitHub repository 根目錄：

index.html
display.html
control.html
firebase-config.js
common.js
database.rules.json

再到：
Settings > Pages > Deploy from a branch > main > /(root)

使用網址例子
-----------
LED WALL:
https://USERNAME.github.io/school-dismissal/display.html

老師手機:
https://USERNAME.github.io/school-dismissal/control.html

建議：
只將 control.html 加到老師手機主畫面，不要公開張貼。
