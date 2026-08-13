/**
 * Lumpsum Calculator Engine & Real-time UI Manager (INR Fixed)
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements - Inputs & Sliders
  const investmentInput = document.getElementById('totalInvestmentInput');
  const investmentSlider = document.getElementById('totalInvestmentSlider');
  const investmentAffix = document.getElementById('investmentAffix');

  const rateInput = document.getElementById('returnRateInput');
  const rateSlider = document.getElementById('returnRateSlider');

  const durationInput = document.getElementById('durationInput');
  const durationSlider = document.getElementById('durationSlider');

  // DOM Elements - Hero & Display Outputs
  const displayCurrencySymbol = document.getElementById('displayCurrencySymbol');
  const totalMaturityValue = document.getElementById('totalMaturityValue');
  const totalInvestedValue = document.getElementById('totalInvestedValue');
  const totalReturnsValue = document.getElementById('totalReturnsValue');

  // Ratio Bar Elements
  const ratioInvestedBar = document.getElementById('ratioInvestedBar');
  const ratioReturnsBar = document.getElementById('ratioReturnsBar');
  const investedPercent = document.getElementById('investedPercent');
  const returnsPercent = document.getElementById('returnsPercent');

  // Presets
  const presetChips = document.querySelectorAll('.preset-chip');

  // Fixed INR Currency State
  const currentSymbol = '₹';

  /**
   * Currency Formatter (Indian Numbering Format: Lakhs & Crores)
   */
  function formatCurrency(amount) {
    if (isNaN(amount) || amount === null) amount = 0;
    const rounded = Math.round(amount);
    return rounded.toLocaleString('en-IN');
  }

  /**
   * Update the visual filled track of a range slider with light turquoise styling
   */
  function updateSliderFill(slider) {
    const min = parseFloat(slider.min) || 0;
    const max = parseFloat(slider.max) || 100;
    const val = parseFloat(slider.value) || 0;
    const percentage = Math.min(Math.max(((val - min) / (max - min)) * 100, 0), 100);

    slider.style.background = `linear-gradient(to right, #0d9488 0%, #14b8a6 ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`;
  }

  /**
   * Highlight matching preset chip
   */
  function updatePresetHighlights() {
    const investmentVal = parseFloat(investmentInput.value);
    const rateVal = parseFloat(rateInput.value);
    const durationVal = parseFloat(durationInput.value);

    presetChips.forEach(chip => {
      const target = chip.dataset.target;
      const val = parseFloat(chip.dataset.value);

      if (target === 'investment') {
        chip.classList.toggle('active', investmentVal === val);
      } else if (target === 'rate') {
        chip.classList.toggle('active', rateVal === val);
      } else if (target === 'duration') {
        chip.classList.toggle('active', durationVal === val);
      }
    });
  }

  /**
   * Core Lumpsum Calculation
   * Formula: M = P * (1 + r / 100)^t
   * P = Total Lumpsum Initial Investment
   * r = Annual Expected Return Rate in percentage
   * t = Investment Duration in Years
   */
  function calculateLumpsum() {
    const P = Math.max(0, parseFloat(investmentInput.value) || 0);
    const annualRate = Math.max(0, parseFloat(rateInput.value) || 0);
    const years = Math.max(0, parseFloat(durationInput.value) || 0);

    const rateFactor = annualRate / 100;
    let maturityAmount = 0;
    const investedAmount = P;

    if (P > 0) {
      if (years > 0 && annualRate > 0) {
        maturityAmount = P * Math.pow(1 + rateFactor, years);
      } else {
        maturityAmount = P;
      }
    }

    const estimatedReturns = Math.max(0, maturityAmount - investedAmount);

    // Update Top Large Number Display
    totalMaturityValue.textContent = formatCurrency(maturityAmount);
    if (displayCurrencySymbol) {
      displayCurrencySymbol.textContent = currentSymbol;
    }
    if (investmentAffix) {
      investmentAffix.textContent = currentSymbol;
    }

    // Update Sub-metric Cards
    totalInvestedValue.textContent = `${currentSymbol}${formatCurrency(investedAmount)}`;
    totalReturnsValue.textContent = `${currentSymbol}${formatCurrency(estimatedReturns)}`;

    // Update Ratio Breakdown Bar
    if (maturityAmount > 0) {
      const investedPct = (investedAmount / maturityAmount) * 100;
      const returnsPct = (estimatedReturns / maturityAmount) * 100;

      ratioInvestedBar.style.width = `${investedPct.toFixed(2)}%`;
      ratioReturnsBar.style.width = `${returnsPct.toFixed(2)}%`;

      investedPercent.textContent = `${investedPct.toFixed(1)}%`;
      returnsPercent.textContent = `${returnsPct.toFixed(1)}%`;
    } else {
      ratioInvestedBar.style.width = '50%';
      ratioReturnsBar.style.width = '50%';
      investedPercent.textContent = '0%';
      returnsPercent.textContent = '0%';
    }

    // Refresh Slider track fill styling
    updateSliderFill(investmentSlider);
    updateSliderFill(rateSlider);
    updateSliderFill(durationSlider);

    // Refresh active preset indicators
    updatePresetHighlights();
  }

  /**
   * Set up bidirectional binding between slider and text input
   */
  function bindSliderAndInput(slider, input, allowDecimals = false) {
    // Slider moved -> update input & recalculate
    slider.addEventListener('input', () => {
      input.value = slider.value;
      calculateLumpsum();
    });

    // Text input typed -> update slider & recalculate
    input.addEventListener('input', () => {
      let val = parseFloat(input.value);
      const min = parseFloat(slider.min);
      const max = parseFloat(slider.max);

      if (!isNaN(val)) {
        // Clamp slider value visually if within or near limits
        slider.value = Math.min(Math.max(val, min), max);
      }
      calculateLumpsum();
    });

    // On blur, sanitize text input value
    input.addEventListener('blur', () => {
      let val = parseFloat(input.value);
      const min = parseFloat(slider.min);
      if (isNaN(val) || val < min) {
        input.value = min;
        slider.value = min;
      } else if (!allowDecimals) {
        input.value = Math.round(val);
      }
      calculateLumpsum();
    });
  }

  // Initialize Input Pairs
  bindSliderAndInput(investmentSlider, investmentInput, false);
  bindSliderAndInput(rateSlider, rateInput, true);
  bindSliderAndInput(durationSlider, durationInput, false);

  /**
   * Preset buttons handler
   */
  presetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const target = chip.dataset.target;
      const value = chip.dataset.value;

      if (target === 'investment') {
        investmentInput.value = value;
        investmentSlider.value = value;
      } else if (target === 'rate') {
        rateInput.value = value;
        rateSlider.value = value;
      } else if (target === 'duration') {
        durationInput.value = value;
        durationSlider.value = value;
      }

      calculateLumpsum();
    });
  });

  // Initial Calculation on Page Load
  calculateLumpsum();
});
