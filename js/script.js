const heading = "Be the Shape of Something Great.";
const titleWords = heading.split(" ");
const titleContainer = document.getElementById("title-container");
titleWords.forEach((word) => {
  const paragraph = document.createElement("p");
  const span = document.createElement("span");
  paragraph.classList.add("overflow-hidden");
  span.textContent = word;
  span.classList.add("bg-transparent", "inline-block", "2xl:px-4", "px-2");
  paragraph.appendChild(span);
  titleContainer.append(paragraph);
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

// intro animation
const cubeBox = document.querySelector(".cubeBoxPath");
const cubeBox2 =
  "M1245.5 2461H1872.5V1851L2492.5 1832V1231L3102.5 1225.5V603.503H2484.5L2490.5 0H1863V619.003H1245V5.5H620L621 619.003H0V1235H621V1851H1245.5V2461Z";
const cubeBox3 =
  "M0 1217.5V1830.5H621V2443.5H1234V1830.5H1855.5V2443.5H2468.5V1830.5H3098V1217.5H2468.5V596.5H1855.5V0H1234V596.5H621V1217.5H0Z";
const cubeBox4 =
  "M1860 0H1240L1241.5 610H622V1225.5H0V1844H622V2454.5H1241.5V3059H1860V2454.5H2494.5V1844L3102 1834.5V1214.5H2482V610H1860V0Z";

const cubeStep1 = polymorph.interpolate([cubeBox, cubeBox2], {
  addPoints: 0,
  origin: { x: 0, y: 0 },
  optimize: "fill",
});
const cubeStep2 = polymorph.interpolate([cubeBox2, cubeBox3], {
  addPoints: 0,
  origin: { x: 0, y: 0 },
  optimize: "fill",
});

const cubeStep3 = polymorph.interpolate([cubeBox3, cubeBox4], {
  addPoints: 0,
  origin: { x: 0, y: 0 },
  optimize: "fill",
});

let val = {
  prop: 0,
};
let val2 = {
  prop: 0,
};
let val3 = {
  prop: 0,
};

let cubeAnime = gsap.timeline({
  defaults: { duration: 10, ease: "power1.inOut" },
});
cubeAnime
  .to(val, {
    prop: 1,
    onUpdate: function () {
      cubeBox.setAttribute("d", cubeStep1(val.prop));
    },
  })
  .to(val2, {
    prop: 1,
    onUpdate: function () {
      cubeBox.setAttribute("d", cubeStep2(val2.prop));
    },
  })
  .to(val3, {
    prop: 1,
    onUpdate: function () {
      cubeBox.setAttribute("d", cubeStep3(val3.prop));
    },
  });

ScrollTrigger.create({
  trigger: "#intro",
  pin: true,
  animation: cubeAnime,
  scrub: 0.6,
});

// second morphing animation
const pattern = document.querySelector(".patternSecond");
const patternA =
  "M0 234V0H305V233.5H608.5V467H911.5V233H1216.5V472.5H911.5V708.5H607.5V937.5H912.5V1174.5H1216V1414H908.5V1180.5H605.5V943H301.5V703.5H605.5V471H301.5V234H0Z";
const patternB =
  "M0 235V9H304V226.5H608.5V0H908.5V240H608.5V454H908.5V702.5H1222V949H908.5V1186.5H600.5V953L908.5 949V736H600.5V949H300V702.5H600.5V469H300V235H0Z";

const patternStep1 = polymorph.interpolate([pattern, patternA], {
  addPoints: 0,
  origin: { x: 0, y: 0 },
  optimize: "fill",
});
const patternStep2 = polymorph.interpolate([patternA, patternB], {
  addPoints: 0,
  origin: { x: 0, y: 0 },
  optimize: "fill",
});

let patternVal = {
  prop: 0,
};
let patternVal2 = {
  prop: 0,
};

let patternAnime = gsap.timeline({
  defaults: { duration: 10, ease: "power1.inOut" },
});
patternAnime
  .to(patternVal, {
    prop: 1,
    onUpdate: function () {
      pattern.setAttribute("d", patternStep1(patternVal.prop));
    },
  })
  .to(patternVal2, {
    prop: 1,
    onUpdate: function () {
      pattern.setAttribute("d", patternStep2(patternVal2.prop));
    },
  });

ScrollTrigger.create({
  trigger: "#secondIntro",
  pin: true,
  animation: patternAnime,
  scrub: 0.6,
});
