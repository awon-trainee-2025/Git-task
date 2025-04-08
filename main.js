document.addEventListener('DOMContentLoaded', () => {
    initThemeSwitch();
    initScrollEffects();
    initSkillCards();
    initTyping();
    initNavMenu();
    // حذف تهيئة تبديل اللغة
});

function initThemeSwitch() {
    const toggleSwitch = document.querySelector('#checkbox');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    toggleSwitch.checked = currentTheme === 'dark';
    
    toggleSwitch.addEventListener('change', (e) => {
        const theme = e.target.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });
}

function initScrollEffects() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -20% 0px',
        threshold: [0.2, 0.5, 0.8]
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                // إزالة الحالة النشطة من جميع الأقسام والروابط
                sections.forEach(section => section.classList.remove('active'));
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    link.style.transform = '';
                });
                
                // تفعيل القسم الحالي
                entry.target.classList.add('active');
                
                // تفعيل الرابط المقابل
                const activeLink = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );
                
                if (activeLink) {
                    activeLink.classList.add('active');
                    activeLink.style.transform = 'translateY(-2px)';
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

function initSkillCards() {
    // تأثير دوران البطاقات عند التحويم
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const rotateX = (y - rect.height / 2) / 10;
            const rotateY = (x - rect.width / 2) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

function initTyping() {
    const options = {
        strings: [
            'مطور واجهات المستخدم',
            'مصمم تجارب المستخدم',
            'مطور ويب متكامل',
            'طالب علوم حاسب'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    };
    
    new Typed('.typed', options);
}

// حذف وظائف تبديل اللغة

function sendEmail(e) {
    e.preventDefault();
    
    const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    const submitBtn = e.target.querySelector('.submit-btn');
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
    submitBtn.disabled = true;

    Email.send({
        SecureToken: "YOUR_SMTP_SECURE_TOKEN", // احصل على الرمز من https://smtpjs.com/
        To: 'fahadbanders@gmail.com', // ضع بريدك الإلكتروني هنا
        From: params.email,
        Subject: `رسالة جديدة من ${params.name}: ${params.subject}`,
        Body: `
            <h3>معلومات المرسل:</h3>
            <p><strong>الاسم:</strong> ${params.name}</p>
            <p><strong>البريد الإلكتروني:</strong> ${params.email}</p>
            <p><strong>العنوان:</strong> ${params.subject}</p>
            <h3>الرسالة:</h3>
            <p>${params.message}</p>
        `
    }).then(message => {
        if(message === "OK") {
            alert("تم إرسال رسالتك بنجاح!");
            document.getElementById('contactForm').reset();
        } else {
            alert("حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى.");
        }
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> إرسال الرسالة';
        submitBtn.disabled = false;
    });
}

// تتبع التمرير وتحديث القائمة النشطة
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // إزالة الحالة النشطة من جميع الروابط
                navLinks.forEach(link => link.classList.remove('active'));
                
                // إضافة الحالة النشطة للرابط المقابل للقسم المرئي
                const activeLink = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // مراقبة جميع الأقسام
    sections.forEach(section => observer.observe(section));

    // التمرير السلس عند النقر على روابط القائمة
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function initNavMenu() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // إضافة التأثيرات الحركية للروابط
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            const icon = e.currentTarget.querySelector('i');
            icon.style.transform = 'rotate(10deg) scale(1.2)';
        });
        
        link.addEventListener('mouseleave', (e) => {
            const icon = e.currentTarget.querySelector('i');
            if (!e.currentTarget.classList.contains('active')) {
                icon.style.transform = 'rotate(0) scale(1)';
            }
        });
    });
}
