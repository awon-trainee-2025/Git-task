function hamburg() {
  document.getElementById("mobileNav").classList.add("active");
}

function closeNav() {
  document.getElementById("mobileNav").classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const words = [
      "Computer Science Student",
      "Developer",
      "Web Designer",
      "Web Developer"
    ];
  
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    const speed = 100; 
    const delayBetweenWords = 1500; 
    const typewriterElement = document.querySelector('.typewriter-text');
  
    function type() {
      const currentWord = words[currentWordIndex];
  
      if (isDeleting) {
        currentCharIndex--;
      } else {
        currentCharIndex++;
      }
  
      typewriterElement.textContent = currentWord.substring(0, currentCharIndex);
  
      let timeout = isDeleting ? 50 : speed;
  
      if (!isDeleting && currentCharIndex === currentWord.length) {
        timeout = delayBetweenWords;
        isDeleting = true;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        timeout = 300;
      }
  
      setTimeout(type, timeout);
    }
  
    type(); 
  });
 
const form = document.getElementById("contact-form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  const response = await fetch("https://formspree.io/f/xoveyebr", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  });

  if (response.ok) {
    alert("Message sent successfully!");
    form.reset();
  } else {
    alert("Something went wrong. Please try again.");
  }
});