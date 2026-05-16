const params = new URLSearchParams(window.location.search);
const highlightId = params.get("highlight");

if (highlightId) {
  const card = document.getElementById(highlightId);
  if (card) {
    card.classList.add("highlight");
    card.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
function gotoabout(){
    window.location.href = `about.html?from=product`;
}