// OPTIONAL: Smooth Scrolling for internal anchor links
// This script listens for clicks on any anchor <a href="#sectionId">
// and smoothly scrolls to that section.

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetID = this.getAttribute('href');
        if (targetID.length > 1) {
          e.preventDefault();
          const targetElement = document.querySelector(targetID);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 70, // Adjust offset for sticky header
              behavior: 'smooth'
            });
          }
        }
      });
    });
  });
  