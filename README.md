# Flag CSS HTML 🏳️

A free, lightweight CSS library providing country flags for web developers. Features emoji-based and sprite-based flags, dropdown menus, responsive design, and mobile-first approach.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/demo-live-green)](https://huuhuybn.github.io/flag-css-html/)

## 🌐 Languages

- [English](README.md)
- [Tiếng Việt](README.vi.md)
- [中文](README.zh.md)
- [日本語](README.ja.md)
- [한국어](README.ko.md)

## 🌍 Live Demo

- **Documentation**: [https://huuhuybn.github.io/flag-css-html/](https://huuhuybn.github.io/flag-css-html/)
- **Example Site**: [http://miconvert.com](http://miconvert.com) - A real-world implementation

## ✨ Features

- 🎨 **Two Versions**: Emoji-based (no images needed) or Sprite-based (single PNG file)
- 📱 **Responsive**: Mobile-first design, works perfectly on all screen sizes
- ⚡ **Lightweight**: Only ~5KB minified, no dependencies
- 🔧 **Customizable**: Multiple sizes, styles, and animations
- 🌐 **250+ Flags**: Complete collection based on ISO 3166-1-alpha-2 codes
- 📦 **Dropdown Ready**: Beautiful dropdown menus for language selectors

## 🚀 Quick Start

### CDN (Recommended)

```html
<!-- Emoji-based Flags -->
<link rel="stylesheet" href="https://huuhuybn.github.io/flag-css-html/css/flag-icon.css">

<!-- OR Sprite-based Flags -->
<link rel="stylesheet" href="https://huuhuybn.github.io/flag-css-html/css/flag-sprite.css">

<!-- Dropdown (Optional) -->
<link rel="stylesheet" href="https://huuhuybn.github.io/flag-css-html/css/flag-dropdown.css">
<script src="https://huuhuybn.github.io/flag-css-html/js/flag-dropdown.js"></script>
```

### Download

```bash
git clone https://github.com/huuhuybn/flag-css-html.git
```

## 📖 Usage

### Display a Flag

```html
<!-- Vietnam flag -->
<span class="fi fi-vn"></span>

<!-- With size -->
<span class="fi fi-us fi-lg"></span>
<span class="fi fi-jp fi-xl"></span>

<!-- With animation -->
<span class="fi fi-kr fi-lg fi-hover"></span>
```

### Size Classes

| Class | Size |
|-------|------|
| `.fi-xs` | Extra small |
| `.fi-sm` | Small |
| `.fi-md` | Medium (default) |
| `.fi-lg` | Large |
| `.fi-xl` | Extra large |
| `.fi-2xl` | 2x Extra large |

### Dropdown Menu

```html
<div class="fi-dropdown">
  <button class="fi-dropdown-toggle">
    <span class="fi fi-vn"></span>
    <span>Tiếng Việt</span>
  </button>
  <ul class="fi-dropdown-menu">
    <li><a href="#"><span class="fi fi-vn"></span> Tiếng Việt</a></li>
    <li><a href="#"><span class="fi fi-us"></span> English</a></li>
    <li><a href="#"><span class="fi fi-cn"></span> 中文</a></li>
  </ul>
</div>
```

### Dropdown Variants

- `.fi-dropdown-dark` - Dark theme
- `.fi-dropdown-compact` - Compact size
- `.fi-dropdown-lg` - Large size
- `.fi-dropdown-rounded` - Rounded corners
- `.fi-dropdown-solid` - Solid accent color
- `.fi-dropdown-icon-only` - Icon only toggle

## 🎨 Sprite Flags

For projects that prefer image-based flags:

```html
<link rel="stylesheet" href="css/flag-sprite.css">

<span class="fis fis-gb"></span>
<span class="fis fis-de fis-lg"></span>
<span class="fis fis-fr fis-rounded"></span>
```

## 📁 Project Structure

```
flag-css-html/
├── index.html              # Documentation page
├── css/
│   ├── flag-icon.css       # Emoji-based flags
│   ├── flag-sprite.css     # Sprite-based flags
│   ├── flag-dropdown.css   # Dropdown styles
│   └── style.css           # Page styles
├── js/
│   ├── flag-dropdown.js    # Dropdown functionality
│   └── main.js             # Page scripts
└── images/
    └── flags-sprite.png    # Sprite image
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

- Inspired by [flag-icons](https://github.com/lipis/flag-icons) by Lipis
- Flag sprite from [APKCombo](https://apkcombo.com)

---

Made with ❤️ for the web development community
