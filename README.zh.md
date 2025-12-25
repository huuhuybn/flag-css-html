# Flag CSS HTML 🏳️

为Web开发者提供国旗的免费轻量级CSS库。支持基于emoji和sprite的国旗、下拉菜单、响应式设计和移动优先方法。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/demo-live-green)](https://huuhuybn.github.io/flag-css-html/)

## 🌐 语言

- [English](README.md)
- [Tiếng Việt](README.vi.md)
- [中文](README.zh.md)
- [日本語](README.ja.md)
- [한국어](README.ko.md)

## 🌍 在线演示

- **文档**: [https://huuhuybn.github.io/flag-css-html/](https://huuhuybn.github.io/flag-css-html/)
- **示例网站**: [http://miconvert.com](http://miconvert.com) - 实际应用案例

## ✨ 特性

- 🎨 **两种版本**: 基于Emoji（无需图片）或Sprite（单个PNG文件）
- 📱 **响应式**: 移动优先设计，完美适配所有屏幕尺寸
- ⚡ **轻量级**: 仅约5KB压缩，无依赖
- 🔧 **可定制**: 多种尺寸、样式和动画
- 🌐 **250+国旗**: 基于ISO 3166-1-alpha-2代码的完整集合
- 📦 **下拉菜单**: 美观的语言选择器下拉菜单

## 🚀 快速开始

### CDN（推荐）

```html
<!-- 基于Emoji的国旗 -->
<link rel="stylesheet" href="https://huuhuybn.github.io/flag-css-html/css/flag-icon.css">

<!-- 或 基于Sprite的国旗 -->
<link rel="stylesheet" href="https://huuhuybn.github.io/flag-css-html/css/flag-sprite.css">

<!-- 下拉菜单（可选） -->
<link rel="stylesheet" href="https://huuhuybn.github.io/flag-css-html/css/flag-dropdown.css">
<script src="https://huuhuybn.github.io/flag-css-html/js/flag-dropdown.js"></script>
```

### 下载

```bash
git clone https://github.com/huuhuybn/flag-css-html.git
```

## 📖 使用方法

### 显示国旗

```html
<!-- 越南国旗 -->
<span class="fi fi-vn"></span>

<!-- 带尺寸 -->
<span class="fi fi-us fi-lg"></span>
<span class="fi fi-cn fi-xl"></span>

<!-- 带动画 -->
<span class="fi fi-jp fi-lg fi-hover"></span>
```

### 尺寸类

| 类名 | 尺寸 |
|------|------|
| `.fi-xs` | 超小 |
| `.fi-sm` | 小 |
| `.fi-md` | 中（默认） |
| `.fi-lg` | 大 |
| `.fi-xl` | 超大 |
| `.fi-2xl` | 特大 |

### 下拉菜单

```html
<div class="fi-dropdown">
  <button class="fi-dropdown-toggle">
    <span class="fi fi-cn"></span>
    <span>中文</span>
  </button>
  <ul class="fi-dropdown-menu">
    <li><a href="#"><span class="fi fi-cn"></span> 中文</a></li>
    <li><a href="#"><span class="fi fi-us"></span> English</a></li>
    <li><a href="#"><span class="fi fi-jp"></span> 日本語</a></li>
  </ul>
</div>
```

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

---

Made with ❤️ 为Web开发者社区
