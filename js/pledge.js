// EcoAware community pledge: saves a choice on this device only.

var pledgeForm = document.getElementById("pledge-form");
var customInput = document.getElementById("custom-pledge");
var statusText = document.getElementById("pledge-status");
var savedBox = document.getElementById("saved-pledge");
var clearButton = document.getElementById("clear-pledge");
var storageKey = "ecoaware-pledge-v1";

// Read the saved pledge from browser storage.
function showPledge() {
  var value = "";
  try {
    value = localStorage.getItem(storageKey) || "";
  } catch (error) {
    statusText.textContent = "Browser storage is unavailable.";
  }

  savedBox.hidden = !value;
  savedBox.innerHTML = "";

  if (value) {
    var heading = document.createElement("h3");
    heading.textContent = "Your saved pledge 🌿";

    var paragraph = document.createElement("p");
    paragraph.textContent = value;

    savedBox.appendChild(heading);
    savedBox.appendChild(paragraph);
  }
}

// Save the selected pledge.
pledgeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var selected = pledgeForm.querySelector('input[name="pledge"]:checked');
  if (!selected) {
    statusText.textContent = "Please select a pledge.";
    return;
  }

  var pledge = selected.value === "custom"
    ? customInput.value.trim() : selected.value;

  if (pledge.length < 5) {
    statusText.textContent = "Please enter a meaningful pledge (at least 5 characters).";
    return;
  }

  try {
    localStorage.setItem(storageKey, pledge);
    statusText.textContent = "Your pledge was saved on this device only.";
    showPledge();
  } catch (error) {
    statusText.textContent = "Unable to save the pledge in this browser.";
  }
});

// Remove the pledge when requested.
clearButton.addEventListener("click", function () {
  try {
    localStorage.removeItem(storageKey);
    statusText.textContent = "Saved pledge cleared from this device.";
    showPledge();
  } catch (error) {
    statusText.textContent = "Unable to access browser storage.";
  }
});

showPledge();
