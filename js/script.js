class Lott {
    deepQs(selector, parent = document) { return parent.querySelector(selector) }
    qsa(selector) { return document.querySelectorAll(selector) }
    qs(selector) { return document.querySelector(selector) }

    id(id) { return document.getElementById(id) }
    listen(element, event, cb) { return element.addEventListener(event, cb) };

    initFade() {
        const fadeElements = this.qsa('.fade-in, .slide-in, .scale-in, .slide-out');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(element => {
            observer.observe(element);
        });
    }

    initSmoothScroll() {
        const links = this.qsa('a[data-scroll]');

        links.forEach(link => {
            this.listen(link, 'click', (event) => {
                const targetId = link.getAttribute('data-scroll');
                const targetElement = this.id(targetId);

                if (!targetElement) {
                    event.preventDefault();
                    window.location.href = `index.html#${targetId}`;
                    return;
                }

                event.preventDefault();

                this.smoothScrollTo(targetElement);

                history.pushState(null, null, `#${targetId}`);
            });
        });
    }

    handlePageLoadScroll() {
        const hash = window.location.hash.substring(1);

        if (hash) {
            const targetElement = document.getElementById(hash);

            if (targetElement) {

                window.scrollTo(0, 0);

                setTimeout(() => {
                    this.smoothScrollTo(targetElement);
                }, 500);
            }
        }
    }

    smoothScrollTo(element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 20;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    initLoginForm() {
        const form = this.id('login-form');
        const toast = this.id('login-toast');

        if (form && toast) {
            this.listen(form, 'submit', (e) => {
                e.preventDefault();
                form.reset();
                toast.classList.remove('hidden');
                setTimeout(() => toast.classList.add('hidden'), 3000);
            });
        }
    }

    initRegisterForm() {
        const form = this.id('register-form');
        const toast = this.id('register-toast');

        if (form && toast) {
            this.listen(form, 'submit', (e) => {
                e.preventDefault();
                form.reset();
                toast.classList.remove('hidden');
                setTimeout(() => toast.classList.add('hidden'), 3000);
            });
        }
    }

    initContactForm() {
        const form = this.id('contact-form');
        const toast = this.id('contact-toast');

        if (form && toast) {
            this.listen(form, 'submit', (e) => {
                e.preventDefault();
                form.reset();
                toast.classList.remove('hidden');
                setTimeout(() => toast.classList.add('hidden'), 3000);
            });
        }
    }

    init() {
        this.listen(document, 'DOMContentLoaded', () => {
            this.initFade();
            this.initSmoothScroll();
            this.handlePageLoadScroll();
            this.initLoginForm();
            this.initRegisterForm();
            this.initContactForm();
        });
    }
}

const lott = new Lott();
lott.init();
