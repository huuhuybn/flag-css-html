# Flag CSS HTML 🏳️

Web開発者向けの国旗を提供する無料で軽量なCSSライブラリ。絵文字ベースとスプライトベースの国旗、ドロップダウンメニュー、レスポンシブデザイン、モバイルファーストアプローチをサポート。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/demo-live-green)](https://huuhuybn.github.io/flag-css-html/)

## 🌐 言語

- [English](README.md)
- [Tiếng Việt](README.vi.md)
- [中文](README.zh.md)
- [日本語](README.ja.md)
- [한국어](README.ko.md)

## 🌍 ライブデモ

- **ドキュメント**: [https://huuhuybn.github.io/flag-css-html/](https://huuhuybn.github.io/flag-css-html/)
- **サンプルサイト**: [http://miconvert.com](http://miconvert.com) - 実際の実装例

## ✨ 特徴

- 🎨 **2つのバージョン**: 絵文字ベース（画像不要）またはスプライトベース（1つのPNGファイル）
- 📱 **レスポンシブ**: モバイルファースト設計、すべての画面サイズに完璧に対応
- ⚡ **軽量**: 圧縮後わずか約5KB、依存関係なし
- 🔧 **カスタマイズ可能**: 複数のサイズ、スタイル、アニメーション
- 🌐 **250以上の国旗**: ISO 3166-1-alpha-2コードに基づく完全なコレクション
- 📦 **ドロップダウン対応**: 言語セレクター用の美しいドロップダウンメニュー

## 🚀 クイックスタート

### CDN（推奨）

```html
<!-- 絵文字ベースの国旗 -->
<link rel="stylesheet" href="https://huuhuybn.github.io/flag-css-html/css/flag-icon.css">

<!-- または スプライトベースの国旗 -->
<link rel="stylesheet" href="https://huuhuybn.github.io/flag-css-html/css/flag-sprite.css">

<!-- ドロップダウン（オプション） -->
<link rel="stylesheet" href="https://huuhuybn.github.io/flag-css-html/css/flag-dropdown.css">
<script src="https://huuhuybn.github.io/flag-css-html/js/flag-dropdown.js"></script>
```

### ダウンロード

```bash
git clone https://github.com/huuhuybn/flag-css-html.git
```

## 📖 使い方

### 国旗を表示

```html
<!-- 日本の国旗 -->
<span class="fi fi-jp"></span>

<!-- サイズ付き -->
<span class="fi fi-us fi-lg"></span>
<span class="fi fi-cn fi-xl"></span>

<!-- アニメーション付き -->
<span class="fi fi-kr fi-lg fi-hover"></span>
```

### サイズクラス

| クラス | サイズ |
|--------|--------|
| `.fi-xs` | 極小 |
| `.fi-sm` | 小 |
| `.fi-md` | 中（デフォルト） |
| `.fi-lg` | 大 |
| `.fi-xl` | 極大 |
| `.fi-2xl` | 特大 |

### ドロップダウンメニュー

```html
<div class="fi-dropdown">
  <button class="fi-dropdown-toggle">
    <span class="fi fi-jp"></span>
    <span>日本語</span>
  </button>
  <ul class="fi-dropdown-menu">
    <li><a href="#"><span class="fi fi-jp"></span> 日本語</a></li>
    <li><a href="#"><span class="fi fi-us"></span> English</a></li>
    <li><a href="#"><span class="fi fi-cn"></span> 中文</a></li>
  </ul>
</div>
```

## 📄 ライセンス

このプロジェクトはMITライセンスの下でライセンスされています - 詳細は[LICENSE](LICENSE)ファイルを参照してください。

---

Made with ❤️ Web開発者コミュニティへ
