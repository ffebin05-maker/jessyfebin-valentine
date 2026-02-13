function nextSection(id) {
  document.querySelectorAll("section").forEach(section => {
    section.style.display = "none";
  });
  document.getElementById(id).style.display = "flex";
}

function showLove() {
  document.getElementById("foreverMessage").classList.remove("hidden");
}
