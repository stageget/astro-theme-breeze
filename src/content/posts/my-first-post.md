---
title: "從 0 到 1：我的 Astro 部落格架設實錄"
createdAt: "2026-03-03"
category: "technology" # ⚠️ 注意：這裡必須是 categories.json 裡有的 ID
tags: ["astro", "tutorial"]
summary: "分享我架設這個部落格時踩過的坑，包含解決 Husky 報錯與實作 Draft 功能的過程。"
draft: true
---

1. 前言：為什麼是 Astro？

簡單提一下你對 Notion vs. Astro 的掙扎。

為什麼身為開發者，你最後選擇了「掌握權」而不是「便利性」。

2. 主題挑選的血淚史 (The Theme Journey)

聊聊你從 Breeze 到 Whono 又退回 Breeze 的心路歷程（這很有趣！）。

重點：適合自己的才是最好的，不要為了追求美觀而犧牲了寫作的動力。

3. 技術攻堅：那些我踩過的坑

這裡是你展現專業的地方，也是文章的精華：

Husky 與 pnpm 的愛恨情仇：分享你是如何解決 command not found 的問題（把 pnpm 改成 npx 的那個技巧）。

自定義 Content Schema：分享你在 content.config.ts 裡幫 Projects 加上 draft 欄位的經驗。

Draft 隱身術：解釋 import.meta.env.PROD 是如何幫你在本機預覽草稿，卻不會在正式站曝光的邏輯。

4. 自動化部署流程

介紹你如何透過 Git Push 觸發 Vercel 自動構建。

5. 未來展望

預告你接下來會分享的專案開發筆記（例如解決 Supabase 權限的問題）。
