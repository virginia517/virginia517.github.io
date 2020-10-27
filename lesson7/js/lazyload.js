let imagesToLoad = document.querySelectorAll("img[data-src]");//contains the reference to all the images
const imgOption = {
    threshold:1,
    rootMargin: "0px 0px 50px 0px"

};
const loadImages = (image) => {//moves the image path from data-src to src
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {//loop through image and load it
        image.removeAttribute("data-src");//remove the data-src attribute because it is not needed anymore
    };
};

//this if statement checks if the intersection observer is supported
if('IntersectionObserver' in window) {//intersection observer causes the image to load in the vieport only when the user scrolls down
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {//if not supported, load anyway
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }