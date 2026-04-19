# ne>tECA

> **For The Community, By The Community**  
> An Open-Source ECA Opportunities Platform by **nextPrtnr**

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![nextECA.club](https://img.shields.io/badge/website-nextECA.club-red)](https://nextECA.club)

nextECA is a free, open-source platform aggregating extracurricular opportunities — hackathons, olympiads, scholarships, fellowships, competitions — for students worldwide. No paywalls. No sign-ups required. Just information.

---

## 🚀 Live Site

**[www.nextECA.club](https://nextECA.club)**  
Social: **@nextECA.org** on Facebook & LinkedIn

---

## 📁 Project Structure

```
nextECA/
├── index.html              # Main homepage
├── css/
│   ├── style.css           # Global styles (Black × Red theme)
│   └── pages.css           # Inner page styles
├── js/
│   ├── data.js             # 🔑 All opportunities data — edit here to contribute
│   └── main.js             # Rendering, filtering, animations
├── pages/
│   ├── hackathons.html     # Hackathons category page
│   ├── olympiads.html      # Olympiads category page
│   ├── international.html  # International opportunities
│   ├── about.html          # About nextECA & team
│   └── contribute.html     # How to contribute
├── images/
│   └── logo.png            # nextECA logo
└── README.md
```

---

## 🤝 How to Contribute

### Adding an Opportunity (Most Common Contribution)

1. **Fork** this repository
2. Open `js/data.js`
3. Add your opportunity object to the `opportunities` array:

```javascript
{
  id: 101, // Use next sequential number
  title: "Your Opportunity Title",
  type: "hackathon", // hackathon | olympiad | competition | scholarship | fellowship | volunteering
  country: "🇧🇩 Bangladesh", // Flag emoji + country
  description: "Brief description under 200 characters.",
  deadline: "2025-06-30", // YYYY-MM-DD
  link: "https://official-registration-link.com",
  urgent: false // true if deadline ≤ 7 days away
}
```

4. Open a **Pull Request** with title: `feat: add [Opportunity Name]`

### Other Contributions
- 🐛 **Bug reports** → Open a GitHub Issue
- 🎨 **UI/Design** → Modify `css/style.css` or `css/pages.css`
- ✍️ **Content** → Improve page text and descriptions
- 🌐 **Translation** → Help us reach more students in their language

---

## 🏃 Running Locally

No build step required. This is pure HTML/CSS/JS.

```bash
git clone https://github.com/nextECA/nextECA.git
cd nextECA
# Open index.html in your browser
# OR use a local server:
npx serve .
# OR
python3 -m http.server 8080
```

---

## 🏢 Funded & Supported By

- 🇧🇩 ICT Division, Government of Bangladesh
- 💡 iDEA (Innovation Design and Entrepreneurship Academy)
- 🎓 University Innovation Hub Program
- 🏙 Bangladesh Hi-Tech Park Authority
- 🌍 World Bank Group

---

## 📊 Stats

| Metric | Count |
|--------|-------|
| Active Opportunities | 120+ |
| Countries Covered | 45+ |
| Universities Listed | 38+ |
| Categories | 6 |

---

## 📄 License

MIT License — free to use, modify, and distribute with attribution.

---

## 🌐 Contact

- Website: [www.nextECA.club](https://nextECA.club)
- Social: [@nextECA.org](https://facebook.com/nextECA.org)
- Organization: [nextPrtnr](https://nextPrtnr.com)

---

*nextECA — Democratizing access to extracurricular opportunities, one pull request at a time.*
