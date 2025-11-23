export function initTariffSwitch() {
  const tariffButtons = document.querySelectorAll(".tariff-btn");

  if (!tariffButtons.length) return;

  tariffButtons.forEach((btn) =>
    btn.addEventListener("click", () => {
      tariffButtons.forEach((b) => b.classList.remove("tariff-btn--active"));
      btn.classList.add("tariff-btn--active");
    })
  );
}
