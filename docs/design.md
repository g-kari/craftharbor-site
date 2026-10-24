# Design

ユーザー承認: Minecraftらしい遊び心、ブロックやピクセル表現。港のドット絵を使った3案目を採用。

## Tokens and layout

- Paper `#fff6de`, ink `#24251c`, grass `#32612b`, timber `#a36c3c`, sky `#8cd4ed`, sea `#328fa9`.
- 本文: Yu Gothic UI / Hiragino Kaku Gothic ProN / Meiryo。日本語カバレッジと読みやすさを優先。
- 港のイラストとブロック状のボタンを主役に、本文や実画面は装飾を控える。
- Hero → 実画面・機能 → 導入手順 → FAQ → ダウンロード。番号は導入順序だけに使用。
- 720px以下では一列表示。FAQは標準のdetails/summary、ナビゲーションは通常のリンク。
- Modern Web Guidanceのaccessibility、responsive design、image priorityに従い、skip link、focus-visible、固定画像寸法、主画像の優先取得を使用。

## Hero image prompt / built-in image_gen

Standalone transparent hero illustration based on approved concept: a custom pixel-art harbor island, red and cream lighthouse, wooden crane, workshop with terracotta roof, grassy block island, wooden pier, crates, small server towers, blue water and seagulls. Warm cheerful limited palette, hard pixel edges. No website layout, typography, official Minecraft logo or copied game textures. AI-generated illustration, not a game screenshot.

## Actual app image

Source: CraftHarbor's existing dashboard validation capture. Synthetic workspace and graph data, explicitly captioned on the site. No generated or imagined app UI is used in the deployed page.
