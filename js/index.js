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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
//  navigation
const navTags = document.getElementsByTagName("a");
console.log(navTags);

const services = navTags[0];
services.textContent = "Services";

const product = navTags[1];
product.textContent = "Product";

const vision = navTags[2];
vision.textContent = "Vision";

const features = navTags[3];
features.textContent = "Features";

const about = navTags[4];
about.textContent = "About";

const contact = navTags[5];
contact.textContent = "Contact";

//header
const hOneHeader = document.getElementsByTagName("hi");
hOneHeader.textContent = "Dom Is Awesome";
console.log(hOneHeader);

const button = document.getElementsByTagName("button");
button.textContent = "Get Started";
console.log(button);

const ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute("src", "img/header-img.png");

const mainContentFeatures = document.getElementsByTagName("h4");
mainContentFeatures.textContent = "Features";
console.log(mainContentFeatures);

const mainContentAbout = document.getElementsByTagName("h4");
mainContentAbout.textContent = "About";
console.log(mainContentAbout);

//middle image
const middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", "img/mid-page-accent.jpg");
console.log(middleImage);

const mainContentServices = document.getElementsByTagName("h4");
mainContentAbout.textContent = "Services";
console.log(mainContentServices);

const mainContentProduct = document.getElementsByTagName("h4");
mainContentProduct.textContent = "Product";
console.log(mainContentProduct);

const mainContentVision = document.getElementsByTagName("h4");
mainContentVision.textContent = "Vision";
console.log(mainContentVision);
