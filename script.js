var typed = new Typed(".multiple-text", {
    strings: ["PORTFOLIO", "MD REFAT"],
    typeSpeed: 100,
    backSpeed: 100,
    BackDelay: 1000,
    loop: true
  }
    )

var typed = new Typed(".multiple-text2", {
    strings: ["Frontend Developer", "YouTuber", " Blogger"],
    typeSpeed: 100,
    backSpeed: 100,
    BackDelay: 1000,
    loop: true
  }
    )

var typed = new Typed(".multiple-text3", {
    strings: ["My Name Is Md Jawwad Bin Kaysar Refat. I am a student of Computer Science and Technology in Jashore Polytechnic Institute. I am very aware to my dreams. I want To be a Web apps developer and a Cyber Security Specialist. In this moment, I am preparing myself for my dreams.  In Sha Allah, I will be try my best to success in my own life."],
    typeSpeed: 50,
  }
    )

    function toggleMenu() {
      document.querySelector(".navbar").classList.toggle("show");
  }
    document.querySelectorAll(".navbar a").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".navbar").classList.remove("show");});
  }
);

