# CraftHarbor site

CraftHarborのプロモーションサイト。承認された港のドット絵とブロック表現を使い、日本語本文の読みやすさを優先しています。

公開URL: https://craftharbor.0g0.xyz/

## Local development

Node.js 22以上を使用します。ランタイム依存パッケージはありません。

```sh
npm install
npm run check
npm run preview
```

http://127.0.0.1:4173 を開きます。`npm run build` で `dist/` に静的ファイルをコピーします。

## Cloudflare Pages

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Framework: None
- Source: this GitHub repository

ダウンロードはアプリ側の実在する `v0.3.1-preview/setup.exe` にリンクしています。更新時は `public/index.html` のバージョン表記とダウンロード・リリースURLを一緒に更新してください。

## Assets and privacy

港のイラストと機能紹介のアイコン・灯台ロゴはこのサイト向けのAI生成素材です。生成仕様は [docs/design.md](docs/design.md) と [docs/generated-icons.md](docs/generated-icons.md) に記載しています。Minecraftの公式ロゴ・ゲーム内テクスチャは使用していません。

アプリのスクリーンショットはCraftHarborの表示確認用サンプル環境をキャプチャしたものです。グラフは合成データであり、本物のワールド・プレイヤー・認証情報は含みません。サイト上にも同じ説明を表示しています。

外部フォント、トラッキング、フォーム、実行スクリプトは使用していません。GitHubのダウンロードリンクをクリックするとGitHubへ移動します。

CraftHarbor本体: https://github.com/g-kari/craftharbor

Minecraft公式製品ではありません。
