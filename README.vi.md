# Flag CSS HTML 🏳️

Thư viện CSS miễn phí cung cấp cờ các quốc gia cho lập trình viên web. Hỗ trợ cờ dạng emoji và sprite, dropdown menus, responsive, mobile-first.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/demo-live-green)](https://huuhuybn.github.io/flag-css-html/)

## 🌐 Ngôn ngữ

- [English](README.md)
- [Tiếng Việt](README.vi.md)
- [中文](README.zh.md)
- [日本語](README.ja.md)
- [한국어](README.ko.md)

## 🌍 Demo trực tiếp

- **Tài liệu**: [https://huuhuybn.github.io/flag-css-html/](https://huuhuybn.github.io/flag-css-html/)
- **Trang mẫu**: [http://miconvert.com](http://miconvert.com) - Ví dụ thực tế

## ✨ Tính năng

- 🎨 **Hai phiên bản**: Dạng Emoji (không cần ảnh) hoặc Sprite (1 file PNG)
- 📱 **Responsive**: Mobile-first, hoạt động hoàn hảo trên mọi màn hình
- ⚡ **Nhẹ**: Chỉ ~5KB minified, không dependencies
- 🔧 **Tùy biến cao**: Nhiều size, style và animation
- 🌐 **250+ Cờ**: Đầy đủ theo chuẩn ISO 3166-1-alpha-2
- 📦 **Dropdown sẵn có**: Menu dropdown đẹp cho language selector

## 🚀 Bắt đầu nhanh

### CDN (Khuyến nghị)

```html
<!-- Cờ dạng Emoji -->
<link rel="stylesheet" href="https://huuhuybn.github.io/flag-css-html/css/flag-icon.css">

<!-- HOẶC Cờ dạng Sprite -->
<link rel="stylesheet" href="https://huuhuybn.github.io/flag-css-html/css/flag-sprite.css">

<!-- Dropdown (Tùy chọn) -->
<link rel="stylesheet" href="https://huuhuybn.github.io/flag-css-html/css/flag-dropdown.css">
<script src="https://huuhuybn.github.io/flag-css-html/js/flag-dropdown.js"></script>
```

### Tải về

```bash
git clone https://github.com/huuhuybn/flag-css-html.git
```

## 📖 Cách sử dụng

### Hiển thị cờ

```html
<!-- Cờ Việt Nam -->
<span class="fi fi-vn"></span>

<!-- Với kích thước -->
<span class="fi fi-us fi-lg"></span>
<span class="fi fi-jp fi-xl"></span>

<!-- Với animation -->
<span class="fi fi-kr fi-lg fi-hover"></span>
```

### Các class kích thước

| Class | Kích thước |
|-------|------------|
| `.fi-xs` | Rất nhỏ |
| `.fi-sm` | Nhỏ |
| `.fi-md` | Vừa (mặc định) |
| `.fi-lg` | Lớn |
| `.fi-xl` | Rất lớn |
| `.fi-2xl` | Cực lớn |

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

### Các biến thể Dropdown

- `.fi-dropdown-dark` - Theme tối
- `.fi-dropdown-compact` - Kích thước nhỏ gọn
- `.fi-dropdown-lg` - Kích thước lớn
- `.fi-dropdown-rounded` - Bo góc tròn
- `.fi-dropdown-solid` - Màu nền đặc
- `.fi-dropdown-icon-only` - Chỉ hiển thị icon

## 🎨 Cờ dạng Sprite

Cho các dự án ưa thích cờ dạng ảnh:

```html
<link rel="stylesheet" href="css/flag-sprite.css">

<span class="fis fis-gb"></span>
<span class="fis fis-de fis-lg"></span>
<span class="fis fis-fr fis-rounded"></span>
```

## 📁 Cấu trúc dự án

```
flag-css-html/
├── index.html              # Trang tài liệu
├── css/
│   ├── flag-icon.css       # Cờ dạng Emoji
│   ├── flag-sprite.css     # Cờ dạng Sprite
│   ├── flag-dropdown.css   # Style dropdown
│   └── style.css           # Style trang
├── js/
│   ├── flag-dropdown.js    # Chức năng dropdown
│   └── main.js             # Script trang
└── images/
    └── flags-sprite.png    # Ảnh sprite
```

## 🤝 Đóng góp

Mọi đóng góp đều được hoan nghênh! Hãy thoải mái gửi Pull Request.

## 📄 Giấy phép

Dự án này được cấp phép theo MIT License - xem file [LICENSE](LICENSE) để biết chi tiết.

---

Made with ❤️ cho cộng đồng lập trình viên web
