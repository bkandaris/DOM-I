const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
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
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let navLinks = document.querySelectorAll("a");
navLinks[0].textContent = siteContent.nav["nav-item-1"];
navLinks[1].textContent = siteContent.nav["nav-item-2"];
navLinks[2].textContent = siteContent.nav["nav-item-3"];
navLinks[3].textContent = siteContent.nav["nav-item-4"];
navLinks[4].textContent = siteContent.nav["nav-item-5"];
navLinks[5].textContent = siteContent.nav["nav-item-6"];

let firstNav = document.createElement("a");
let lastNav = document.createElement("a");

firstNav.style.color = "green";
lastNav.style.color = "green";

firstNav.textContent = "Home";
lastNav.textContent = "Team";

let navBar = document.querySelector("nav");
navBar.appendChild(lastNav);
navBar.prepend(firstNav);

navLinks.forEach(element => {
  element.style.color = "green";
});

let headline = document.querySelector("h1");
headline.textContent = siteContent.cta.h1;

let btn = document.querySelector("button");
btn.textContent = siteContent.cta.button;

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", "img/header-img.png");

let midHeaders = document.getElementsByTagName("h4");
midHeaders[0].textContent = siteContent["main-content"]["features-h4"];
midHeaders[1].textContent = siteContent["main-content"]["about-h4"];
midHeaders[2].textContent = siteContent["main-content"]["services-h4"];
midHeaders[3].textContent = siteContent["main-content"]["product-h4"];
midHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
midHeaders[5].textContent = siteContent.contact["contact-h4"];

let midPs = document.getElementsByTagName("p");
midPs[0].textContent = siteContent["main-content"]["features-content"];
midPs[1].textContent = siteContent["main-content"]["about-content"];
midPs[2].textContent = siteContent["main-content"]["services-content"];
midPs[3].textContent = siteContent["main-content"]["product-content"];
midPs[4].textContent = siteContent["main-content"]["vision-content"];
midPs[5].textContent = siteContent.contact.address;



midPs[6].textContent = siteContent.contact.phone;

midPs[7].textContent = siteContent.contact.email;

midPs[8].textContent = siteContent.footer.copyright;

let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", "img/mid-page-accent.jpg");
