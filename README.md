# 📈 INR Lumpsum Calculator

An interactive, modern, and responsive **Lumpsum Investment Calculator** tailored for Indian Rupee (INR ₹) investments. Built with clean Vanilla Web technologies, offering real-time wealth projection and glassmorphic UI aesthetics.

---

> [!WARNING]
> ### ⚠️ Disclaimer: Vibe Coded & Non-Production Notice
> This project was **vibe coded** for experimental, educational, and prototyping purposes. 
> - It is **NOT intended or suitable for production environments**.
> - It does **NOT constitute certified financial, tax, or investment advice**. 
> - Real-world mutual fund returns fluctuate based on market conditions, expense ratios, exit loads, and taxation. Always consult a certified financial advisor before making actual investments.

---

## ✨ Features & Functionality

- **⚡ Instant Real-Time Calculations**: As you slide or type, maturity values, total invested amount, and wealth gains update instantaneously with zero lag.
- **🇮🇳 Indian Numbering System (`en-IN`)**: Numbers are formatted naturally with Indian comma separators (Lakhs and Crores, e.g., `₹3,10,585`, `₹1,00,00,000`).
- **🎛️ Dual Synchronized Controls**: Bidirectional bindings between smooth interactive range sliders and manual number input fields.
- **⚡ Smart Preset Chips**: One-click preset buttons for common values:
  - **Total Investment**: ₹25k, ₹50k, ₹1 Lakh, ₹5 Lakh, ₹10 Lakh, ₹25 Lakh
  - **Expected Returns**: 8% (Conservative / Debt), 12% (Broad Index), 15% (Active Equity), 18% (Aggressive / Small-cap)
  - **Tenure**: 5, 10, 15, 20, 25 Years
- **📊 Proportional Ratio Breakdown Bar**: Dynamic visual comparison bar displaying the percentage split between your actual principal investment and compound growth gains.
- **🎨 Modern Light Turquoise Glassmorphism**: Built with an ambient glowing background, refined typography (*Outfit* & *Plus Jakarta Sans*), subtle micro-interactions, and full mobile responsiveness.
- **🚀 Zero External Runtime Dependencies**: Pure HTML5, CSS3, and modern ES6+ JavaScript.

---

## 🧮 Mathematical Formula

The application calculates the future maturity value of a one-time lumpsum investment using the standard compound interest formula:

$$M = P \times \left(1 + \frac{r}{100}\right)^t$$

Where:
- **$M$** = Expected Maturity Amount (Future Value)
- **$P$** = Total Lumpsum Investment Amount (₹)
- **$r$** = Expected Annual Rate of Return (%)
- **$t$** = Investment Duration (Years)

### Wealth Gain:
$$\text{Est. Wealth Gain} = M - P$$

---

## 📁 Project Structure

```text
inr-lumpsum-calculator/
├── index.html       # Semantic HTML5 layout and accessibility markup
├── style.css        # Custom CSS design system, variables & glassmorphism theme
├── app.js           # Core calculation engine, UI bindings & presets manager
└── README.md        # Project documentation & disclaimer
```

---

## 🚀 Getting Started

No build step or package manager installation is required.

### Method 1: Direct Browser
Simply double-click `index.html` or open it with any web browser (Chrome, Edge, Firefox, Safari).

### Method 2: Local Static Server
You can also run it using any local HTTP server:

```bash
# Using Python
python -m http.server 8080

# Using Node / npx
npx serve .
```
Then visit `http://localhost:8080` in your browser.

---

## 🛠️ Technology Stack

- **Markup**: HTML5 (Semantic & Accessible)
- **Styling**: Vanilla CSS3 (Custom Properties, Flexbox, CSS Grid, Glassmorphism)
- **Scripting**: Vanilla JavaScript (ES6+)
- **Typography**: Google Fonts (*Outfit* & *Plus Jakarta Sans*)

