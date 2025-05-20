document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Header scroll effect
  const header = document.getElementById("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.remove("py-5")
      header.classList.add("bg-white/90", "backdrop-blur-md", "shadow-sm", "py-3")
    } else {
      header.classList.remove("bg-white/90", "backdrop-blur-md", "shadow-sm", "py-3")
      header.classList.add("py-5")
    }
  })

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")
  const menuIcon = document.getElementById("menu-icon")
  const closeIcon = document.getElementById("close-icon")

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
    menuIcon.classList.toggle("hidden")
    closeIcon.classList.toggle("hidden")
  })

  // Close mobile menu when clicking on a link
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link")
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden")
      menuIcon.classList.remove("hidden")
      closeIcon.classList.add("hidden")
    })
  })

  // Modal functionality
  const loginModal = document.getElementById("login-modal")
  const registerModal = document.getElementById("register-modal")

  window.openLoginModal = () => {
    loginModal.classList.remove("hidden")
    registerModal.classList.add("hidden")
  }

  window.closeLoginModal = () => {
    loginModal.classList.add("hidden")
  }

  window.openRegisterModal = () => {
    registerModal.classList.remove("hidden")
    loginModal.classList.add("hidden")
  }

  window.closeRegisterModal = () => {
    registerModal.classList.add("hidden")
  }

  // Password toggle functionality
  const togglePassword = document.getElementById("toggle-password")
  const passwordField = document.getElementById("password")
  const eyeIcon = document.getElementById("eye-icon")
  const eyeOffIcon = document.getElementById("eye-off-icon")

  if (togglePassword) {
    togglePassword.addEventListener("click", () => {
      const type = passwordField.getAttribute("type") === "password" ? "text" : "password"
      passwordField.setAttribute("type", type)
      eyeIcon.classList.toggle("hidden")
      eyeOffIcon.classList.toggle("hidden")
    })
  }

  const toggleRegPassword = document.getElementById("toggle-reg-password")
  const regPasswordField = document.getElementById("reg-password")
  const regEyeIcon = document.getElementById("reg-eye-icon")
  const regEyeOffIcon = document.getElementById("reg-eye-off-icon")

  if (toggleRegPassword) {
    toggleRegPassword.addEventListener("click", () => {
      const type = regPasswordField.getAttribute("type") === "password" ? "text" : "password"
      regPasswordField.setAttribute("type", type)
      regEyeIcon.classList.toggle("hidden")
      regEyeOffIcon.classList.toggle("hidden")
    })
  }

  // Form submission handling
  const loginForm = document.getElementById("login-form")
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // Handle login logic here
      console.log("Login submitted")
      closeLoginModal()
    })
  }

  const registerForm = document.getElementById("register-form")
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // Handle registration logic here
      console.log("Registration submitted")
      closeRegisterModal()
    })
  }

  // Animated background elements
  function animateBackgroundElements() {
    // Hero section background elements
    const bgElement1 = document.getElementById("bg-element-1")
    const bgElement2 = document.getElementById("bg-element-2")

    if (bgElement1 && bgElement2) {
      animateElement(bgElement1, 0, 50, 0, 30, 15000)
      animateElement(bgElement2, 0, -50, 0, -30, 18000)
    }

    // Countdown section background elements
    const countdownBg1 = document.getElementById("countdown-bg-1")
    const countdownBg2 = document.getElementById("countdown-bg-2")

    if (countdownBg1 && countdownBg2) {
      animateElement(countdownBg1, 0, 50, 0, 30, 15000)
      animateElement(countdownBg2, 0, -50, 0, -30, 18000)
    }
  }

  function animateElement(element, startX, endX, startY, endY, duration) {
    let startTime = null

    function animate(timestamp) {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Simple easing function
      const easeInOut = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
      const easedProgress = easeInOut(progress)

      // Calculate current position
      const currentX = startX + (endX - startX) * easedProgress
      const currentY = startY + (endY - startY) * easedProgress

      // Apply transform
      element.style.transform = `translate(${currentX}px, ${currentY}px)`

      // Continue animation loop or restart
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        // Reverse the animation
        startTime = null
        requestAnimationFrame((timestamp) => {
          animate2(timestamp, endX, startX, endY, startY)
        })
      }
    }

    function animate2(timestamp, startX, endX, startY, endY) {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Simple easing function
      const easeInOut = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
      const easedProgress = easeInOut(progress)

      // Calculate current position
      const currentX = startX + (endX - startX) * easedProgress
      const currentY = startY + (endY - startY) * easedProgress

      // Apply transform
      element.style.transform = `translate(${currentX}px, ${currentY}px)`

      // Continue animation loop or restart
      if (progress < 1) {
        requestAnimationFrame((timestamp) => {
          animate2(timestamp, startX, endX, startY, endY)
        })
      } else {
        // Restart the original animation
        startTime = null
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  // Initialize animations
  animateBackgroundElements()

  // Services carousel
  function initWinnersCarousel() {
const winners = [
  { 
    id: 1, 
    name: "Expert AU Lotto Predictions", 
    location: "Leverage our advanced analysis to get the most accurate and reliable AU Lotto predictions. Increase your chances of winning with data-driven insights tailored for the Australian lottery.", 
    image: "./assets/winner_1.jpg" 
  },
  { 
    id: 2, 
    name: "Daily AU Lotto Results", 
    location: "Stay updated with the latest AU Lotto results delivered promptly. Never miss a draw and check winning numbers instantly after each draw.", 
    image: "./assets/winner_4.jpg" 
  },
  { 
    id: 3, 
    name: "AU Lotto Jackpot Alerts", 
    location: "Receive real-time alerts for the biggest jackpots and prize updates in AU Lotto. Be the first to know about massive jackpots and special draw events.", 
    image: "./assets/winner_2.jpg" 
  },
  { 
    id: 4, 
    name: "Step-by-Step AU Lotto Guide", 
    location: "New to AU Lotto? Our comprehensive guide covers how to play, ticket purchasing options, and claiming prizes. Perfect for beginners and seasoned players alike.", 
    image: "./assets/winner_3.jpg" 
  },
  { 
    id: 5, 
    name: "Secure AU Lotto Ticket Purchasing", 
    location: "Buy your AU Lotto tickets safely and conveniently through our trusted platform. Enjoy seamless transactions with guaranteed ticket authenticity for every draw.", 
    image: "./assets/winner_5.jpg" 
  },
]


    // Generate winner slides
    const swiperWrapper = document.querySelector(".winners-swiper .swiper-wrapper")
    if (swiperWrapper) {
      winners.forEach((winner) => {
        const slide = document.createElement("div")
        slide.className = "swiper-slide"
        slide.innerHTML = `
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 h-full">
                        <div class="relative w-full h-48">
                            <div class="absolute inset-0 flex items-center justify-center">
                                <img src="${winner.image}" alt="Winner ${winner.name}" class="object-cover h-full w-full object-top">
                            </div>
                        </div>
                        <div class="p-6 text-center">
                            <h3 class="text-xl max-md:text-2xl font-bold text-[#F95700FF] mb-1">${winner.name}</h3>
                            <p class="text-gray-600 text-sm max-md:text-base mb-3">${winner.location}</p>
                        </div>
                    </div>
                `
        swiperWrapper.appendChild(slide)
      })
    }

    // Initialize Swiper
    const swiper = new Swiper(".winners-swiper", {
      spaceBetween: 20,
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: ".winners-prev",
        nextEl: ".winners-next",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    })
  }

  // Initialize winners carousel
  initWinnersCarousel()

  // FAQ Accordion
  function initFaqAccordion() {
    const faqs = [
      {
        question: "How do I play the lottery on pokielvictoriatatts.com?",
        answer:
          "Playing is easy! Simply create an account, select your preferred lottery game, choose your numbers or opt for a quick pick, and complete your purchase. Your tickets will be stored in your account, and you'll be notified if you win.",
      },
      {
        question: "Is pokielvictoriatatts.com a legitimate and secure platform?",
        answer:
          "Yes, pokielvictoriatatts.com is fully licensed and regulated by the appropriate Australian gambling authorities. We use industry-standard encryption to protect your personal and financial information, and all transactions are secure.",
      },
      {
        question: "How will I receive my winnings?",
        answer:
          "Winnings are automatically credited to your account. For smaller amounts, you can withdraw directly to your registered payment method. For larger jackpots, our team will contact you to arrange the payment process according to your preferences and local regulations.",
      },
      {
        question: "Can I play from outside Australia?",
        answer:
          "Our services are primarily designed for Australian residents. International players should check their local laws regarding online lottery participation before playing, as regulations vary by country and region.",
      },
    ]

    const accordionContainer = document.querySelector(".accordion")
    if (accordionContainer) {
      faqs.forEach((faq, index) => {
        const item = document.createElement("div")
        item.className = "accordion-item"
        item.innerHTML = `
                    <button class="accordion-button text-lg max-md:text-xl" aria-expanded="false" aria-controls="content-${index}">
                        ${faq.question}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="accordion-icon w-6 h-6 max-md:h-7 max-md:w-7">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                    <div id="content-${index}" class="accordion-content" aria-hidden="true">
                        <div class="accordion-content-inner max-md:text-lg">
                            ${faq.answer}
                        </div>
                    </div>
                `
        accordionContainer.appendChild(item)
      })

      // Add event listeners to accordion buttons
      const accordionButtons = document.querySelectorAll(".accordion-button")
      accordionButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const expanded = this.getAttribute("aria-expanded") === "true"
          const content = this.nextElementSibling

          // Toggle current item
          this.setAttribute("aria-expanded", !expanded)
          content.setAttribute("aria-hidden", expanded)

          if (!expanded) {
            content.style.maxHeight = content.scrollHeight + "px"
          } else {
            content.style.maxHeight = "0"
          }
        })
      })
    }
  }

  // Initialize FAQ accordion
  initFaqAccordion()

  // Scroll animations
  function initScrollAnimations() {
    // Hero section animations
    animateOnScroll("hero-text", "opacity-0 translate-y-5", "opacity-100 translate-y-0", 0)
    animateOnScroll("hero-image", "opacity-0 translate-y-10", "opacity-100 translate-y-0", 300)

    // How it works section animations
    animateOnScroll("how-it-works-title", "opacity-0 translate-y-5", "opacity-100 translate-y-0", 0)
    animateOnScroll("how-it-works-steps", "opacity-0", "opacity-100", 200)
    animateOnScroll("how-it-works-cta", "opacity-0", "opacity-100", 600)

    // Countdown section animations
    animateOnScroll("countdown-title", "opacity-0 translate-y-5", "opacity-100 translate-y-0", 0)
    animateOnScroll("countdown-timer", "opacity-0 scale-95", "opacity-100 scale-100", 200)

    // Services section animations
    animateOnScroll("winners-title", "opacity-0 translate-y-5", "opacity-100 translate-y-0", 0)
    animateOnScroll("winners-link", "opacity-0", "opacity-100", 600)

    // FAQ section animations
    animateOnScroll("faq-title", "opacity-0 translate-y-5", "opacity-100 translate-y-0", 0)
    animateOnScroll("faq-accordion", "opacity-0 translate-y-5", "opacity-100 translate-y-0", 200)
    animateOnScroll("faq-cta", "opacity-0", "opacity-100", 600)

    // About section animations
    animateOnScroll("about-text", "opacity-0 translate-x-[-20px]", "opacity-100 translate-x-0", 0)
    animateOnScroll("about-image", "opacity-0 translate-x-[20px]", "opacity-100 translate-x-0", 200)

    // Responsible gambling section animations
    animateOnScroll("responsible-gambling", "opacity-0 translate-y-5", "opacity-100 translate-y-0", 0)

    // Awareness logos section animations
    animateOnScroll("awareness-logos", "opacity-0", "opacity-100", 0)
    const logos = document.querySelectorAll(".awareness-logo")
    logos.forEach((logo, index) => {
      animateOnScroll(logo, "opacity-0 translate-y-5", "opacity-100 translate-y-0", index * 100)
    })
  }

  function animateOnScroll(element, fromClasses, toClasses, delay) {
    const el = typeof element === "string" ? document.getElementById(element) : element
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              fromClasses.split(" ").forEach((cls) => el.classList.remove(cls))
              toClasses.split(" ").forEach((cls) => el.classList.add(cls))
            }, delay)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(el)
  }

  // Initialize scroll animations
  initScrollAnimations()

  // Declare closeLoginModal and closeRegisterModal functions
  function closeLoginModal() {
    const loginModal = document.getElementById("login-modal")
    if (loginModal) {
      loginModal.classList.add("hidden")
    }
  }

  function closeRegisterModal() {
    const registerModal = document.getElementById("register-modal")
    if (registerModal) {
      registerModal.classList.add("hidden")
    }
  }

  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("contact-name").value
      const email = document.getElementById("contact-email").value
      const subject = document.getElementById("contact-subject").value
      const message = document.getElementById("contact-message").value

      // Simple validation
      if (!name || !email || !subject || !message) {
        alert("Please fill in all required fields")
        return
      }

      // Reset form
      contactForm.reset()
    })
  }

  const scrollPath = document.querySelector(".scroll-up path");
  const pathLength = scrollPath.getTotalLength();

  function updateScroll() {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = pathLength - (scrollTop * pathLength) / height;
    scrollPath.style.strokeDashoffset = progress;
  }

  window.addEventListener("scroll", updateScroll);
  updateScroll();

 

  // scrollUp.addEventListener('click', (event) => {
  //   event.preventDefault();

  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // });
})

