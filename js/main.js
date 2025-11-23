import { initI18n } from "./i18n.js";
import { initTariffSwitch } from "./tariff.js";

document.addEventListener("DOMContentLoaded", () => {
  initI18n();
  initTariffSwitch();
});
