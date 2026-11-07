/* Stage 2 behavior: mobile navigation and gentle scroll reveals. */
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");
const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

revealItems.forEach((item) => {
  if (revealObserver) {
    revealObserver.observe(item);
  } else {
    item.classList.add("is-visible");
  }
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = document.getElementById(button.getAttribute("aria-controls"));
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    answer.hidden = isOpen;
    button.querySelector("span").textContent = isOpen ? "+" : "−";
  });
});

const form = document.querySelector(".partner-form");
const formStatus = document.querySelector(".form-status");
const formSubmit = document.querySelector(".form-submit");

if (form && formStatus && formSubmit) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "";
    let isValid = true;
    form.querySelectorAll("[required]").forEach((field) => {
      const error = document.getElementById(`${field.id}-error`);
      const empty = field.type === "checkbox" ? !field.checked : !field.value.trim();
      const invalid = empty || (field.type === "email" && !field.validity.valid);
      field.setAttribute("aria-invalid", String(invalid));
      if (error) error.textContent = invalid ? (field.type === "email" ? "Enter a valid email address." : "This field is required.") : "";
      if (invalid) isValid = false;
    });
    if (!isValid) {
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }
    if (form.action.includes("REPLACE_WITH_FORM_SERVICE_URL")) {
      formStatus.textContent = "This form is not connected yet. Please contact us by email or phone below.";
      return;
    }
    if (form.website.value) return;
    formSubmit.disabled = true;
    formSubmit.textContent = "Sending…";
    form.submit();
  });
}

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
