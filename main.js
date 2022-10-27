// Step 1: Get all animated elements using their Class Names
let firstParagraph = document.getElementsByClassName("para-one")[0];
let secondParagraph = document.getElementsByClassName("para-two")[0];
let thirdParagraph = document.getElementsByClassName("para-three")[0];
let firstImg = document.getElementsByClassName("animated-img-one")[0];
let secondImg = document.getElementsByClassName("animated-img-two")[0];
let thirdImg = document.getElementsByClassName("animated-img-three")[0];

// Step 2: check if an element has been scrolled into
const isScrolledInto = (firstParagraph) => {
    console.log("I am working fine, pls debug your codes")
    // .getBoundingClientRect() is an inbuilt function that act on an elemnent to get the boundary
    let boundary = firstParagraph.getBoundingClientRect();
    let topBoundary = boundary.top;
    let bottomBoundary = boundary.bottom;

    if (topBoundary >= 0 && bottomBoundary <= window.innerHeight) {
        firstParagraph.classList.add("animate");
        secondParagraph.classList.add("animate");
        thirdParagraph.classList.add("animate");
        firstImg.classList.add("animate");
        secondImg.classList.add("animate");
        thirdImg.classList.add("animate");
    }
} 
// function invocation
isScrolledInto(firstParagraph);