// Toggle navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 300) {
    navbar.classList.remove("bg-[#0071f8]/20");
    navbar.classList.add("bg-[#0071f8]");
  } else {
    navbar.classList.remove("bg-[#0071f8");
    navbar.classList.add("bg-[#0071f8]");
  }
});
