const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// navigation
let logo = document.getElementById("logo-img");
const navTags = document.querySelectorAll("a");
const services = navTags[0];
const product = navTags[1];
const vision = navTags[2];
const features = navTags[3];
const about = navTags[4];
const contact = navTags[5];

// Header
const hOneHeader = document.querySelector(".cta-text h1");
const button = document.querySelector(".cta-text button");
const ctaImage = document.getElementById("cta-img");
const mainContent = document.querySelectorAll(".top-content .text-content h4");
const mainFeatureContent = document.querySelectorAll(
  ".top-content .text-content p"
);
const mainAbout = document.querySelectorAll(".top-content .text-content h4");
const aboutContent = document.querySelectorAll(".top-content .text-content p");

// // //middle image
const middleImage = document.getElementById("middle-img");
const mainServices = document.querySelectorAll(
  ".bottom-content .text-content h4"
);
const servicesContent = document.querySelectorAll(
  ".bottom-content .text-content p"
);
const mainProduct = document.querySelectorAll(
  ".bottom-content .text-content h4"
);
const productContent = document.querySelectorAll(
  ".bottom-content .text-content p"
);
const mainVision = document.querySelectorAll(
  ".bottom-content .text-content h4"
);
const visionContent = document.querySelectorAll(
  ".bottom-content .text-content p"
);

// contact
const contactContent = document.querySelector(".contact h4");
contactContent.textContent = siteContent.contact["contact-h4"];
const contactAddress = document.querySelectorAll(".contact p");
contactAddress[0].textContent = siteContent.contact.address;
const contactPhone = document.querySelectorAll(".contact p");
contactPhone[1].textContent = siteContent.contact.phone;
const contactEmail = document.querySelectorAll(".contact p");

// footer
const footerContent = document.querySelector("footer p");

logo.setAttribute("src", siteContent["nav"]["img-src"]);
//  navigation

navTags.textContent = siteContent.nav;

console.log(navTags);

services.textContent = siteContent.nav["nav-item-1"];

product.textContent = siteContent.nav["nav-item-2"];

vision.textContent = siteContent.nav["nav-item-3"];

features.textContent = siteContent.nav["nav-item-4"];

about.textContent = siteContent.nav["nav-item-5"];

contact.textContent = siteContent.nav["nav-item-6"];

//header

hOneHeader.textContent = siteContent.cta.h1;
// console.log(hOneHeader);

button.textContent = siteContent.cta.button;
// console.log(button);

ctaImage.setAttribute("src", "img/header-img.png");

mainContent[0].textContent = siteContent["main-content"]["features-h4"];

mainFeatureContent[0].textContent =
  siteContent["main-content"]["features-content"];

mainAbout[1].textContent = siteContent["main-content"]["about-h4"];

aboutContent[1].textContent = siteContent["main-content"]["about-content"];

// //middle image

middleImage.setAttribute("src", "img/mid-page-accent.jpg");
// console.log(middleImage);

mainServices[0].textContent = siteContent["main-content"]["services-h4"];

servicesContent[0].textContent =
  siteContent["main-content"]["services-content"];

mainProduct[1].textContent = siteContent["main-content"]["product-h4"];

productContent[1].textContent = siteContent["main-content"]["product-content"];

mainVision[2].textContent = siteContent["main-content"]["vision-h4"];

visionContent[2].textContent = siteContent["main-content"]["vision-content"];

contactContent.textContent = siteContent.contact["contact-h4"];

contactAddress[0].textContent = siteContent.contact.address;

contactPhone[1].textContent = siteContent.contact.phone;

contactEmail[2].textContent = siteContent.contact.email;

footerContent.textContent = siteContent.footer.copyright;

// navTags.style.color = "green";

const nav = document.querySelector("nav");
const a = document.createElement("a");
a.textContent = "extra tag";
nav.appendChild(a);

document.querySelectorAll("a").forEach((a) => {
  a.style.color = "green";
});

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute("src", siteContent["nav"]["img-src"]);
// //  navigation
// const navTags = document.querySelectorAll("a");
// navTags.textContent = siteContent.nav;

// console.log(navTags);

// const services = navTags[0];
// services.textContent = siteContent.nav["nav-item-1"];

// const product = navTags[1];
// product.textContent = siteContent.nav["nav-item-2"];

// const vision = navTags[2];
// vision.textContent = siteContent.nav["nav-item-3"];

// const features = navTags[3];
// features.textContent = siteContent.nav["nav-item-4"];

// const about = navTags[4];
// about.textContent = siteContent.nav["nav-item-5"];

// const contact = navTags[5];
// contact.textContent = siteContent.nav["nav-item-6"];

// //header
// const hOneHeader = document.querySelector(".cta-text h1");
// hOneHeader.textContent = siteContent.cta.h1;
// // console.log(hOneHeader);

// const button = document.querySelector(".cta-text button");
// button.textContent = siteContent.cta.button;
// // console.log(button);

// const ctaImage = document.getElementById("cta-img");
// ctaImage.setAttribute("src", "img/header-img.png");

// const mainContent = document.querySelectorAll(".top-content .text-content h4");
// mainContent[0].textContent = siteContent["main-content"]["features-h4"];

// const mainFeatureContent = document.querySelectorAll(
//   ".top-content .text-content p"
// );
// mainFeatureContent[0].textContent =
//   siteContent["main-content"]["features-content"];

// const mainAbout = document.querySelectorAll(".top-content .text-content h4");
// mainAbout[1].textContent = siteContent["main-content"]["about-h4"];

// const aboutContent = document.querySelectorAll(".top-content .text-content p");
// aboutContent[1].textContent = siteContent["main-content"]["about-content"];

// // //middle image
// const middleImage = document.getElementById("middle-img");
// middleImage.setAttribute("src", "img/mid-page-accent.jpg");
// // console.log(middleImage);

// const mainServices = document.querySelectorAll(
//   ".bottom-content .text-content h4"
// );
// mainServices[0].textContent = siteContent["main-content"]["services-h4"];

// const servicesContent = document.querySelectorAll(
//   ".bottom-content .text-content p"
// );
// servicesContent[0].textContent =
//   siteContent["main-content"]["services-content"];

// const mainProduct = document.querySelectorAll(
//   ".bottom-content .text-content h4"
// );
// mainProduct[1].textContent = siteContent["main-content"]["product-h4"];

// const productContent = document.querySelectorAll(
//   ".bottom-content .text-content p"
// );
// productContent[1].textContent = siteContent["main-content"]["product-content"];

// const mainVision = document.querySelectorAll(
//   ".bottom-content .text-content h4"
// );
// mainVision[2].textContent = siteContent["main-content"]["vision-h4"];

// const visionContent = document.querySelectorAll(
//   ".bottom-content .text-content p"
// );
// visionContent[2].textContent = siteContent["main-content"]["vision-content"];

// const contactContent = document.querySelector(".contact h4");
// contactContent.textContent = siteContent.contact["contact-h4"];

// const contactAddress = document.querySelectorAll(".contact p");
// contactAddress[0].textContent = siteContent.contact.address;

// const contactPhone = document.querySelectorAll(".contact p");
// contactPhone[1].textContent = siteContent.contact.phone;

// const contactEmail = document.querySelectorAll(".contact p");
// contactEmail[2].textContent = siteContent.contact.email;

// const footerContent = document.querySelector("footer p");
// footerContent.textContent = siteContent.footer.copyright;
