
var typed = new Typed(".multiple-text", {
    strings: ["PORTFOLIO", "MD REFAT"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

var typed2 = new Typed(".multiple-text2", {
    strings: ["Frontend Developer", "YouTuber", "Blogger"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

var typed3 = new Typed(".multiple-text3", {
    strings: ["My Name Is Md Jawwad Bin Kaysar Refat. I am a student of Computer Science and Technology in Jashore Polytechnic Institute. I am very aware to my dreams. I want To be a Web apps developer and a Cyber Security Specialist. In this moment, I am preparing myself for my dreams. In Sha Allah, I will be try my best to success in my own life."],
    typeSpeed: 28,
    showCursor: false
});


document.addEventListener('DOMContentLoaded', function() {
    
    
    const animatedElements = document.querySelectorAll(
        '.animate-on-scroll, .animate-left, .animate-right, .animate-top, .animate-bottom, .animate-zoom'
    );
    

    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -10% 0px', 
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                const elements = entry.target.querySelectorAll(
                    '.animate-on-scroll, .animate-left, .animate-right, .animate-top, .animate-bottom, .animate-zoom'
                );
                
                elements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('visible');
                    }, index * 80); 
                });
                
               
            }
        });
    }, observerOptions);
    
   
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                
                const animatedElements = targetSection.querySelectorAll(
                    '.animate-on-scroll, .animate-left, .animate-right, .animate-top, .animate-bottom, .animate-zoom'
                );
                
               
                animatedElements.forEach(el => {
                    el.classList.remove('visible');
                    el.style.transition = 'none'; 
                });
                
                
                void targetSection.offsetHeight;
                
                
                animatedElements.forEach(el => {
                    el.style.transition = '';
                });
                
                
                setTimeout(() => {
                    animatedElements.forEach((el, index) => {
                        setTimeout(() => {
                            el.classList.add('visible');
                        }, index * 80);
                    });
                }, 400); 
            }
        });
    });
   
    
    setTimeout(() => {
        const homeSection = document.querySelector('#home');
        if (homeSection) {
            const elements = homeSection.querySelectorAll(
                '.animate-on-scroll, .animate-left, .animate-right, .animate-top, .animate-bottom, .animate-zoom'
            );
            
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('visible');
                }, index * 100);
            });
        }
    }, 100);
});

    function toggleMenu() {
      document.querySelector(".navbar").classList.toggle("show");
  }
    document.querySelectorAll(".navbar a").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".navbar").classList.remove("show");});
  }
);
