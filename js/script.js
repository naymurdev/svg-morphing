const heading = "Be the Shape of Something Great.";
const titleWords = heading.split(" ");
// console.log(Title);
const titleContainer = document.getElementById("title-container");

titleWords.forEach((word, index) => {
  const pElement = document.createElement("p");
  const spanElement = document.createElement("span");
  pElement.classList.add("overflow-hidden");
  spanElement.textContent = word;
  spanElement.classList.add(
    "bg-transparent",
    "inline-block",
    "2xl:px-4",
    "px-2"
  );
  titleContainer.append(pElement);
  pElement.appendChild(spanElement);
});

window.addEventListener("load", () => {
  const tl = gsap.timeline({ ease: "power1.inOut" });
  gsap.set(".cubeBoxSvg", {
    scale: 0.2,
    y: 900,
  });
  tl.from("header", {
    y: -100,
  });
  tl.from("#title-container span", {
    y: 200,
    stagger: 0.1,
  });
  tl.to(".cubeBoxSvg", {
    y: 0,
  });
  tl.to(".cubeBoxSvg", {
    rotation: 180,
    scale: 1,
  });
  tl.from(
    ".stagger-content",
    {
      opacity: 0,
      stagger: 0.2,
    },
    "-=0.4"
  );
});
