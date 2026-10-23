// EcoAware: mobile navigation and demonstration contact form.

var menuButton = document.getElementById("menu-toggle");
var navigation = document.getElementById("primary-nav");

// Open or close the navigation menu on smaller screens.
if (menuButton && navigation) {
  menuButton.addEventListener("click", function () {
    var open = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.querySelector("span").textContent = open ? "Close" : "Menu";
  });

  // Close the menu after a visitor selects a page.
  navigation.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.querySelector("span").textContent = "Menu";
    }
  });
}

// Validate the contact form. There is no server to send messages.
var contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var status = document.getElementById("contact-status");

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      status.textContent = "Please correct the fields. No message has been sent.";
      return;
    }

    status.textContent =
      "Your entries passed validation. Demo only: no message was sent or stored.";
  });
}
