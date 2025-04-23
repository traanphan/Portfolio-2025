document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");
  
    function setActiveLink() {
      let scrollPos = window.scrollY + 150;
  
      sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === section.id) {
              link.classList.add("active");
            }
          });
        }
      });
    }
  
    window.addEventListener("scroll", setActiveLink);
  });
  

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".slide-up");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.2
    });
  
    elements.forEach(el => observer.observe(el));
  });
  