# 🌶️ SpiceGarden — Restaurant Website

A fully responsive, 4-page restaurant website built with pure HTML, CSS and vanilla JavaScript. No frameworks, no libraries — just clean, well-structured front-end code.

## 🔗 Live Demo
[View live on GitHub Pages](https://yourusername.github.io/spicegarden)

---

## 📸 Pages

| Page | Description |
|------|-------------|
| `index.html` | Homepage with hero, features, specials & CTA |
| `menu.html` | Full menu with category tab switching |
| `about.html` | Story, stats, team & values |
| `contact.html` | Reservation form + opening hours + map |

---

## ✨ Features

- **Mouse parallax** — background tilts subtly with cursor movement
- **Scroll parallax** — hero image moves at 40% scroll speed
- **Scroll-reveal** — elements fade up as you scroll into them
- **Tab switching** — menu categories switch with smooth animation
- **Sticky navbar** with active-link highlighting
- **Reservation form** with success message on submit
- **Fully responsive** — works on mobile, tablet and desktop
- **Clean footer** consistent across all pages

---

## 🗂️ File Structure

```
spicegarden/
├── index.html        # Homepage
├── menu.html         # Menu page
├── about.html        # About page
├── contact.html      # Contact & Reservations
├── css/
│   ├── style.css     # Shared styles (navbar, footer, buttons)
│   ├── menu.css      # Menu-specific styles
│   ├── about.css     # About-specific styles
│   └── contact.css   # Contact-specific styles
├── js/
│   └── main.js       # All JavaScript (parallax, tabs, form)
└── README.md
```

---

## 🚀 How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/spicegarden.git
   ```
2. Open `index.html` in your browser — no build step needed.

---

## 🛠️ Customisation Guide

| What to change | Where |
|----------------|-------|
| Restaurant name & tagline | `index.html` → hero section |
| Menu items & prices | `menu.html` → dish cards |
| Team members | `about.html` → team section |
| Phone, email, address | All 4 HTML files → footer + contact page |
| Hero background image | `index.html` → `.hero-bg` CSS (replace Unsplash URL) |
| Colour scheme | `css/style.css` → `:root` variables |
| Google Map embed | `contact.html` → `.map-wrap` section |

---

## 🎨 Colour Palette

| Name | Value | Usage |
|------|-------|-------|
| Amber | `#c47e52` | Accent, buttons, highlights |
| Dark | `#1a0e06` | Text, footer background |
| Cream | `#faf6f0` | Light backgrounds |
| Muted | `#7a6a5a` | Secondary text |

---

## 📱 Responsive Breakpoints

- **Desktop** — 769px and above (full layout)
- **Mobile** — 768px and below (stacked layout, hamburger nav)

---

## 📚 What I Learned Building This

- CSS Grid & Flexbox layouts
- CSS custom properties (variables)
- Sticky positioning with z-index management
- Intersection Observer API for scroll-reveal
- Mouse event tracking for parallax effects
- Form handling with JavaScript
- Mobile-first responsive design
- Consistent multi-page site structure

---

## 👤 Author

Built by [Your Name] — CSE student & freelance web developer.

📧 jaikiranjp@email.com  
🔗 [Your Portfolio](https://yourusername.github.io)

---

*This project was built as a portfolio piece to demonstrate HTML, CSS and JavaScript skills.*
