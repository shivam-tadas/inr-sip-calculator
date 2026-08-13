# 📈 INR SIP Calculator

An interactive, modern, and responsive **Systematic Investment Plan (SIP) Calculator** tailored for Indian Rupee (INR ₹) investments. Built with clean Vanilla Web technologies, offering real-time wealth projection and glassmorphic UI aesthetics.

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
- **🇮🇳 Indian Numbering System (`en-IN`)**: Numbers are formatted naturally with Indian comma separators (Lakhs and Crores, e.g., `₹23,23,391`).
- **🎛️ Dual Synchronized Controls**: Bidirectional bindings between smooth interactive range sliders and manual number input fields.
- **⚡ Smart Preset Chips**: One-click preset buttons for common values:
  - **Monthly Investment**: ₹2.5k, ₹5k, ₹10k, ₹25k, ₹50k
  - **Expected Returns**: 8% (Conservative / Debt), 12% (Broad Index), 15% (Active Equity), 18% (Aggressive / Small-cap)
  - **Tenure**: 5, 10, 15, 20, 25 Years
- **📊 Proportional Ratio Breakdown Bar**: Dynamic visual comparison bar displaying the percentage split between your actual principal investment and compound growth gains.
- **🎨 Modern Light Turquoise Glassmorphism**: Built with an ambient glowing background, refined typography (*Outfit* & *Plus Jakarta Sans*), subtle micro-interactions, and full mobile responsiveness.
- **🚀 Zero External Runtime Dependencies**: Pure HTML5, CSS3, and modern ES6+ JavaScript.

---

## 🧮 Mathematical Formula

The application calculates the future maturity value of a monthly SIP using the standard compound interest formula for annuities:

$$M = P \times \left( \frac{(1 + i)^n - 1}{i} \right) \times (1 + i)$$

Where:
- **$M$** = Expected Maturity Amount
- **$P$** = Monthly Investment Amount (₹)
- **$i$** = Monthly Interest Rate $\left(\frac{\text{Annual Rate}}{12 \times 100}\right)$
- **$n$** = Total Number of Installments $(\text{Years} \times 12)$

---

## 📁 Project Structure

```text
inr-sip-calculator/
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
