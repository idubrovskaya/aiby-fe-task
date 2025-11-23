export async function initI18n() {
  const supportedLangs = ["en", "de", "es", "fr", "pt", "ja"];

  const urlParams = new URLSearchParams(window.location.search);
  let lang = urlParams.get("lang");

  if (!lang || !supportedLangs.includes(lang)) {
    lang = navigator.language.slice(0, 2).toLowerCase();
    if (!supportedLangs.includes(lang)) {
      lang = "en";
    }
  }

  document.documentElement.lang = lang;

  let translations = {};
  try {
    const response = await fetch(`./i18n/${lang}.json`);
    if (!response.ok) throw new Error("Translation not found");
    translations = await response.json();
  } catch (error) {
    console.warn(
      `Failed to load ${lang} translations, falling back to English`
    );
    const response = await fetch(`./i18n/en.json`);
    translations = await response.json();
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[key]) {
      let text = translations[key];

      const price = element.dataset.price;
      if (price) text = text.replace("{{price}}", price);

      if (text.includes("<br>")) {
        element.innerHTML = text;
      } else {
        element.textContent = text;
      }
    }
  });
}
