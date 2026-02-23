const body = document.body;
const loader = document.querySelector(".loader");
const scrollProgressBar = document.querySelector(".scroll-progress-bar");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const navLinksContainer = document.querySelector(".nav-links");
const navToggle = document.querySelector(".nav-toggle");
const backToTop = document.querySelector(".back-to-top");
const sections = document.querySelectorAll("section.section");
const counters = document.querySelectorAll(".counter");
const skillProgressBars = document.querySelectorAll(".skill-progress");
const revealBlocks = document.querySelectorAll(".reveal");
const galleryFilters = document.querySelectorAll(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxBackdrop = document.querySelector(".lightbox-backdrop");
const lightboxClose = document.querySelector(".lightbox-close");
const contactForm = document.querySelector(".contact-form");
const hireForm = document.querySelector(".hire-form");
const yearSpan = document.getElementById("year");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

window.addEventListener("load", () => {
  window.setTimeout(() => {
    if (loader) {
      loader.classList.add("hidden");
      window.setTimeout(() => {
        loader.style.display = "none";
      }, 350);
    }
  }, 350);
});

document.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgressBar.style.width = `${progress}%`;

  if (scrollTop > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  if (scrollTop > window.innerHeight * 0.8) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").replace("#", "");
    const target = document.getElementById(targetId);

    if (target) {
      const offsetTop = target.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    if (window.innerWidth <= 768 && navLinksContainer.classList.contains("open")) {
      navLinksContainer.classList.remove("open");
      navToggle.classList.remove("open");
    }
  });
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    navLinksContainer.classList.toggle("open");
  });
}

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (!id) return;

      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (!link) return;

      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => navObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.25,
  }
);

revealBlocks.forEach((el) => revealObserver.observe(el));

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const targetValue = parseInt(el.getAttribute("data-target"), 10) || 0;
      let current = 0;
      const duration = 1400;
      const startTime = performance.now();

      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        current = Math.floor(targetValue * eased);
        el.textContent = `${current}${targetValue >= 50 ? "+" : ""}`;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = `${targetValue}${targetValue >= 50 ? "+" : ""}`;
        }
      };

      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  },
  {
    threshold: 0.6,
  }
);

counters.forEach((counter) => counterObserver.observe(counter));

const skillsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const container = entry.target;
      const bar = container.querySelector(".skill-progress-bar");
      const level = parseInt(container.getAttribute("data-level"), 10) || 0;
      bar.style.transition = "width 1200ms cubic-bezier(0.19, 1, 0.22, 1)";
      requestAnimationFrame(() => {
        bar.style.width = `${level}%`;
      });
      observer.unobserve(container);
    });
  },
  {
    threshold: 0.6,
  }
);

skillProgressBars.forEach((el) => skillsObserver.observe(el));

galleryFilters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    galleryFilters.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");

    galleryItems.forEach((item) => {
      const category = item.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const imageEl = item.querySelector(".gallery-image img");
    if (!imageEl || !imageEl.src) return;

    lightboxImage.src = imageEl.src;
    lightboxImage.alt = imageEl.alt || "Dish";
    lightbox.classList.add("open");
  });
});

const closeLightbox = () => {
  lightbox.classList.remove("open");
  window.setTimeout(() => {
    lightboxImage.src = "";
  }, 250);
};

lightboxBackdrop.addEventListener("click", closeLightbox);
lightboxClose.addEventListener("click", closeLightbox);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("open")) {
    closeLightbox();
  }
});

const targetEmail = "rajuraja88922@gmail.com";

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const message = formData.get("message") || "";

    const subject = encodeURIComponent("Contact Inquiry - Chef Bijay Ghimire Portfolio");
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));

    const mailtoUrl = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  });
}

if (hireForm) {
  hireForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(hireForm);
    const serviceType = formData.get("service_type") || "";
    const organization = formData.get("organization") || "";
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const phone = formData.get("phone") || "";
    const location = formData.get("location") || "";
    const message = formData.get("message") || "";

    const subject = encodeURIComponent(`Professional Inquiry - ${serviceType} - Chef Bijay Ghimire`);
    const bodyLines = [
      `SERVICE TYPE: ${serviceType}`,
      `Organization: ${organization}`,
      `Contact Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Location: ${location}`,
      "",
      "PROJECT DETAILS:",
      message,
      "",
      "---",
      "Sent from Chef Bijay Ghimire Professional Portfolio"
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));

    const mailtoUrl = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  });
}

const typingElement = document.querySelector(".typing-text");
const cursor = document.querySelector(".typing-cursor");

if (typingElement && cursor) {
  const raw = typingElement.getAttribute("data-phrases");
  let phrases = [];

  try {
    phrases = JSON.parse(raw);
  } catch (error) {
    phrases = ["bespoke tasting menus."];
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const currentPhrase = phrases[phraseIndex] || "";

    if (isDeleting) {
      charIndex -= 1;
    } else {
      charIndex += 1;
    }

    const nextText = currentPhrase.substring(0, charIndex);
    typingElement.textContent = nextText;

    let delay = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentPhrase.length) {
      delay = 1300;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 260;
    }

    window.setTimeout(type, delay);
  };

  type();
}
