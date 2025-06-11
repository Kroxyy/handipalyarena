const carrousel = document.querySelector(".carrousel");
document.querySelector(".carrousel-btn.left").onclick = () => {
  carrousel.scrollBy({ left: -600, behavior: "smooth" });
};
document.querySelector(".carrousel-btn.right").onclick = () => {
  carrousel.scrollBy({ left: 600, behavior: "smooth" });
};
