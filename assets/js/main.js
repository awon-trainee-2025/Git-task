document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, {
      threshold: 0.2
    });
  
    cards.forEach(card => {
      card.classList.add("fade-init");
      observer.observe(card);
    });
  });
  
  // التمرير السلس عند الضغط على روابط التنقل
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  // إظهار زر الرجوع لأعلى عند التمرير
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// تمرير ناعم لأعلى الصفحة
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// حركة للعناصر عند الظهور
const animatedElements = document.querySelectorAll('.project-card, .section1, .hero-name, .custom-header, .animated-nav, .btn');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeInUp');
    }
  });
}, {
  threshold: 0.2
});

animatedElements.forEach(el => {
  observer.observe(el);
});