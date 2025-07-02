
function showSurprise() {
  document.getElementById("message").style.display = "block";
  document.querySelector("img").style.display = "block";

  for (let i = 0; i < 30; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}
