document.addEventListener("DOMContentLoaded", function () {
  // Find the Excalidraw Data heading (h1)
  const excalidrawHeading = Array.from(document.querySelectorAll("h1, h2"))
    .find(h => h.textContent.trim() === "Excalidraw Data");
  if (excalidrawHeading) {
    let el = excalidrawHeading.nextElementSibling;
    excalidrawHeading.style.display = "none";
    while (
      el &&
      !(el.tagName === "H1" && el !== excalidrawHeading) &&
      !(el.tagName === "SECTION" && el.classList.contains("footnotes"))
    ) {
      el.style.display = "none";
      el = el.nextElementSibling;
    }
  }
});
