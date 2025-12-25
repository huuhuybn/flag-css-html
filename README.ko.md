# Flag CSS HTML 🏳️

웹 개발자를 위한 국기를 제공하는 무료 경량 CSS 라이브러리. 이모지 기반 및 스프라이트 기반 국기, 드롭다운 메뉴, 반응형 디자인, 모바일 우선 접근 방식을 지원합니다.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/demo-live-green)](https://huuhuybn.github.io/flag-css-html/)

## 🌐 언어

- [English](README.md)
- [Tiếng Việt](README.vi.md)
- [中文](README.zh.md)
- [日本語](README.ja.md)
- [한국어](README.ko.md)

## 🌍 라이브 데모

- **문서**: [https://huuhuybn.github.io/flag-css-html/](https://huuhuybn.github.io/flag-css-html/)
- **예제 사이트**: [http://miconvert.com](http://miconvert.com) - 실제 구현 사례

## ✨ 특징

- 🎨 **두 가지 버전**: 이모지 기반(이미지 불필요) 또는 스프라이트 기반(단일 PNG 파일)
- 📱 **반응형**: 모바일 우선 설계, 모든 화면 크기에 완벽하게 작동
- ⚡ **경량**: 약 5KB 압축, 의존성 없음
- 🔧 **사용자 정의 가능**: 다양한 크기, 스타일 및 애니메이션
- 🌐 **250개 이상의 국기**: ISO 3166-1-alpha-2 코드 기반의 완전한 컬렉션
- 📦 **드롭다운 지원**: 언어 선택기를 위한 아름다운 드롭다운 메뉴

## 🚀 빠른 시작

### CDN (권장)

```html
<!-- 이모지 기반 국기 -->
<link rel="stylesheet" href="https://huuhuybn.github.io/flag-css-html/css/flag-icon.css">

<!-- 또는 스프라이트 기반 국기 -->
<link rel="stylesheet" href="https://huuhuybn.github.io/flag-css-html/css/flag-sprite.css">

<!-- 드롭다운 (선택 사항) -->
<link rel="stylesheet" href="https://huuhuybn.github.io/flag-css-html/css/flag-dropdown.css">
<script src="https://huuhuybn.github.io/flag-css-html/js/flag-dropdown.js"></script>
```

### 다운로드

```bash
git clone https://github.com/huuhuybn/flag-css-html.git
```

## 📖 사용법

### 국기 표시

```html
<!-- 한국 국기 -->
<span class="fi fi-kr"></span>

<!-- 크기 지정 -->
<span class="fi fi-us fi-lg"></span>
<span class="fi fi-jp fi-xl"></span>

<!-- 애니메이션 -->
<span class="fi fi-cn fi-lg fi-hover"></span>
```

### 크기 클래스

| 클래스 | 크기 |
|--------|------|
| `.fi-xs` | 아주 작음 |
| `.fi-sm` | 작음 |
| `.fi-md` | 보통 (기본값) |
| `.fi-lg` | 큼 |
| `.fi-xl` | 아주 큼 |
| `.fi-2xl` | 매우 큼 |

### 드롭다운 메뉴

```html
<div class="fi-dropdown">
  <button class="fi-dropdown-toggle">
    <span class="fi fi-kr"></span>
    <span>한국어</span>
  </button>
  <ul class="fi-dropdown-menu">
    <li><a href="#"><span class="fi fi-kr"></span> 한국어</a></li>
    <li><a href="#"><span class="fi fi-us"></span> English</a></li>
    <li><a href="#"><span class="fi fi-jp"></span> 日本語</a></li>
  </ul>
</div>
```

## 📄 라이선스

이 프로젝트는 MIT 라이선스에 따라 라이선스가 부여됩니다 - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

---

Made with ❤️ 웹 개발자 커뮤니티를 위해
