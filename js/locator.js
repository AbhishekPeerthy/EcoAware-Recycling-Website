// Recycling centre locator: fictional results for a classroom demonstration.
// This does not search a real map, database or council service.

var locatorForm = document.getElementById("locator-form");
var postcodeInput = document.getElementById("postcode");
var errorText = document.getElementById("locator-error");
var resultsBox = document.getElementById("locator-results");

// A basic UK postcode format check (not a check that the postcode exists).
var postcodePattern = /^(GIR\s?0AA|[A-Z]{1,2}[0-9][A-Z0-9]?\s?[0-9][A-Z]{2})$/i;

locatorForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var postcode = postcodeInput.value.trim().toUpperCase().replace(/\s+/g, "");
  resultsBox.innerHTML = "";

  if (!postcodePattern.test(postcode)) {
    errorText.textContent = "Enter a UK postcode format, such as E15 1AA.";
    postcodeInput.setAttribute("aria-invalid", "true");
    return;
  }

  errorText.textContent = "";
  postcodeInput.removeAttribute("aria-invalid");

  var heading = document.createElement("h2");
  heading.textContent = "Demonstration results";
  resultsBox.appendChild(heading);

  var explanation = document.createElement("p");
  explanation.textContent = "Example results for "
    + postcode.slice(0, -3) + " " + postcode.slice(-3)
    + " — not based on real postcode geography.";
  resultsBox.appendChild(explanation);

  var centres = [
    ["Example Community Recycling Hub", "Illustrative drop-off point · Paper, glass, cans"],
    ["Example Household Reuse Centre", "Illustrative collection point · Electronics, batteries"],
    ["Example Bottle Bank", "Illustrative drop-off point · Glass bottles and jars"]
  ];

  for (var i = 0; i < centres.length; i++) {
    var card = document.createElement("article");
    card.className = "result-card";

    var tag = document.createElement("span");
    tag.className = "demo-tag";
    tag.textContent = "FICTIONAL DEMO LOCATION";

    var title = document.createElement("h3");
    title.textContent = centres[i][0];

    var description = document.createElement("p");
    description.textContent = centres[i][1];

    card.appendChild(tag);
    card.appendChild(title);
    card.appendChild(description);
    resultsBox.appendChild(card);
  }
});
