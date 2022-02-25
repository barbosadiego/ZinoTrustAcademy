const links = document.querySelectorAll("a");

links.forEach((link) => link.addEventListener("click", smoothScroll));

function smoothScroll(event) {
  event.preventDefault();
  const href = event.target.getAttribute("href");

  document
    .querySelector(href)
    .scrollIntoView({ block: "start", behavior: "smooth" });
  // console.log(href)
}
