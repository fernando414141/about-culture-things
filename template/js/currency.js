(function () {
  'use strict';

  const supported = ['EUR', 'USD', 'GBP', 'CAD', 'AUD', 'BRL', 'CHF', 'ARS'];
  const regionCurrency = { US: 'USD', GB: 'GBP', CA: 'CAD', AU: 'AUD', BR: 'BRL', CH: 'CHF', AR: 'ARS' };
  const currencyLocale = { USD: 'en-US', GBP: 'en-GB', CAD: 'en-CA', AUD: 'en-AU', BRL: 'pt-BR', CHF: 'de-CH', ARS: 'es-AR' };
  const cacheKey = 'act_currency_rates_v2';
  const preferenceKey = 'act_preferred_currency';
  const cacheTtl = 12 * 60 * 60 * 1000;
  const apiUrl = 'https://api.frankfurter.dev/v2/rates?base=EUR&quotes=' + supported.filter(function (code) { return code !== 'EUR'; }).join(',');
  let rates = { EUR: 1 };
  let selected = 'EUR';

  function content() {
    const config = window.SITE_CONTENT || {};
    const lang = (window.SITE && window.SITE.currentLang) || document.documentElement.lang.slice(0, 2) || 'en';
    return (config.content && (config.content[lang] || config.content.en) && (config.content[lang] || config.content.en).offers) || {};
  }

  function detectCurrency() {
    try {
      const saved = localStorage.getItem(preferenceKey);
      if (supported.includes(saved)) return saved;
    } catch (error) { /* Storage can be unavailable. */ }

    const locale = (navigator.languages && navigator.languages[0]) || navigator.language || '';
    let region = '';
    try { region = new Intl.Locale(locale).maximize().region || ''; }
    catch (error) { region = String(locale).split('-')[1] || ''; }
    return regionCurrency[region.toUpperCase()] || 'EUR';
  }

  function readCache() {
    try {
      const cached = JSON.parse(localStorage.getItem(cacheKey) || 'null');
      if (cached && cached.savedAt && Date.now() - cached.savedAt < cacheTtl && cached.rates) return cached.rates;
    } catch (error) { /* Ignore malformed or unavailable storage. */ }
    return null;
  }

  function writeCache(nextRates) {
    try { localStorage.setItem(cacheKey, JSON.stringify({ savedAt: Date.now(), rates: nextRates })); }
    catch (error) { /* Storage can be unavailable. */ }
  }

  function setStatus(key) {
    const status = document.getElementById('currency-note');
    const copy = content();
    if (status) status.textContent = copy[key] || '';
  }

  function localeCode() {
    const language = document.documentElement.lang || 'en-GB';
    return language === 'en' ? 'en-GB' : language;
  }

  function render() {
    const select = document.getElementById('currency-select');
    if (select) select.value = selected;
    document.querySelectorAll('.pc-converted').forEach(function (element) {
      if (selected === 'EUR' || !rates[selected]) {
        element.textContent = '';
        element.hidden = true;
        return;
      }
      const amount = Number(element.getAttribute('data-eur-price'));
      const converted = amount * rates[selected];
      const formatted = new Intl.NumberFormat(currencyLocale[selected] || localeCode(), {
        style: 'currency', currency: selected, maximumFractionDigits: 0
      }).format(converted);
      element.textContent = '≈ ' + formatted + ' ' + selected;
      element.hidden = false;
    });
    setStatus(selected === 'EUR' ? '' : (rates[selected] ? 'currencyApprox' : 'currencyLoading'));
  }

  async function loadRates() {
    const cached = readCache();
    if (cached) {
      rates = Object.assign({ EUR: 1 }, cached);
      render();
      return;
    }
    if (selected === 'EUR') { render(); return; }
    setStatus('currencyLoading');
    try {
      const response = await fetch(apiUrl, { headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error('Currency service unavailable');
      const rows = await response.json();
      rates = { EUR: 1 };
      rows.forEach(function (row) {
        if (supported.includes(row.quote) && Number.isFinite(row.rate)) rates[row.quote] = row.rate;
      });
      writeCache(rates);
      render();
    } catch (error) {
      rates = { EUR: 1 };
      render();
      setStatus('currencyUnavailable');
    }
  }

  function initialize() {
    const select = document.getElementById('currency-select');
    if (!select) return;
    const tourRow = document.querySelector('.tours-row');
    if (tourRow && 'MutationObserver' in window) {
      new MutationObserver(function () { requestAnimationFrame(render); })
        .observe(tourRow, { childList: true });
    }
    selected = detectCurrency();
    select.value = selected;
    select.addEventListener('change', function () {
      selected = supported.includes(select.value) ? select.value : 'EUR';
      try { localStorage.setItem(preferenceKey, selected); } catch (error) { /* Storage can be unavailable. */ }
      if (selected !== 'EUR' && !rates[selected]) loadRates(); else render();
    });
    window.addEventListener('act:languagechange', function () {
      const label = document.getElementById('currency-label');
      if (label) label.textContent = content().currencyLabel || '';
      render();
    });
    loadRates();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize);
  else initialize();
})();
