// sidebar-mobile

const mobile = document.querySelector(".mobile");
const x = mobile.querySelector(".bx-x");
const icon = document.querySelector(".icon");
const menu = icon.querySelector('.bx-menu');


menu.addEventListener('click' , () => {
    mobile.classList.toggle('muncul');
});


x.addEventListener("click" , () => {
    mobile.classList.remove('muncul');
});

// slider

function createCarousel(slidesElement) {
    
    const totalSlides = slidesElement.children.length;
    let currentSlide = 0;
  
    return {
      nextSlide: function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        slidesElement.style.transform = `translateX(-${currentSlide * 100}%)`;
      },
      prevSlide: function () {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        slidesElement.style.transform = `translateX(-${currentSlide * 100}%)`;
      }
    };
  }

  // backtop
  
  const slides = document.getElementById('slides');
  const carousel = createCarousel(slides);
  
  document.getElementById('next').addEventListener('click', carousel.nextSlide);
  document.getElementById('prev').addEventListener('click', carousel.prevSlide);
  


window.onscroll = () => {
  let backTop = document.querySelector("a[href='#top']");
  if ( document.body.scrollTop > 30 || document.documentElement.scrollTop > 30 ) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
}