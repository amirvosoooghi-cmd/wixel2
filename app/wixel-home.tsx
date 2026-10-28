"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    number: "01",
    name: "Wikitori",
    type: "wiki · Article",
    description: "A clearer digital home for a service brand ready to grow.",
    image: "/images/business-platform.png",
    className: "project-one",
    url : "https://wikitori.ir/"
  },
  {
    number: "02",
    name: "Plan Digital Agency",
    type: "DIGITAL PRODUCT · UI/UX",
    description: "A more immersive way to bring a complex idea to life.",
    image: "/images/digital-experience.png",
    className: "project-two",
    url : "https://planagency.ir/"
  },
  {
    number: "03",
    name: "Rockman",
    type: "E-COMMERCE · ART DIRECTION",
    description: "A distinctive visual world for a premium fragrance brand.",
    image: "/images/ecommerce-reference.png",
    className: "project-three",
    url : "/"
  },
];

const services = [
  ["01", "Digital strategy", "A clear direction before a single pixel."],
  ["02", "Web design", "Distinctive interfaces with a reason to exist."],
  ["03", "Development", "Fast, responsive experiences built to last."],
  ["04", "Brand experience", "A consistent feeling across every touchpoint."],
];

export default function WixelHome() {
  const root = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1150);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading || !root.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".text-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: 115, rotate: 2 },
          {
            yPercent: 0,
            rotate: 0,
            duration: 1.05,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      gsap.fromTo(
        ".hero-copy .eyebrow, .hero-subtitle, .hero-actions, .hero-bottom",
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.1,
        }
      );

      gsap.fromTo(
        ".hero-layer",
        { y: 75, opacity: 0, scale: 1.07 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.13,
          ease: "power3.out",
          delay: 0.12,
        }
      );

      const heroMotion = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=760",
          scrub: 0.8,
        },
      });

      heroMotion
        .to(
          ".hero-layer-portrait",
          { yPercent: 15, xPercent: -2, scale: 1.1, ease: "none" },
          0
        )
        .to(
          ".hero-layer-chair",
          { yPercent: -22, xPercent: 3, rotate: -2, ease: "none" },
          0
        )
        .to(
          ".hero-layer-architecture",
          { yPercent: 28, xPercent: -5, ease: "none" },
          0
        )
        .to(".hero-copy h1", { yPercent: -18, ease: "none" }, 0);

      gsap.fromTo(
        ".service-row",
        { x: 32, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-list",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".project-card",
        { y: 58, opacity: 0, rotateX: 3 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.85,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".work-grid",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".team-editorial-image",
        { clipPath: "inset(12% 0 12% 0)", scale: 1.04 },
        {
          clipPath: "inset(0% 0 0% 0)",
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".team-section",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".contact-heading h2 .text-reveal",
        { yPercent: 110 },
        {
          yPercent: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".contact-main",
            start: "top 82%",
            once: true,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, [loading]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div ref={root} className="site-shell">
      {loading && (
        <div className="preloader" aria-label="Loading WIXEL">
          <div className="preloader-top">
            <span>INDEPENDENT DIGITAL STUDIO</span>
            <span>EST. FOR WHAT&apos;S NEXT</span>
          </div>

          <div className="preloader-center">
            <div className="wixel-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="preloader-word">
              WIXEL<span>®</span>
            </div>
            <div className="load-track">
              <div className="load-fill" />
            </div>
          </div>
        </div>
      )}

      <header className="site-header">
        <a href="#top" className="wordmark" onClick={closeMenu}>
          WIXEL<span>®</span>
        </a>

        <nav
          className={`desktop-nav ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#approach" onClick={closeMenu}>
            Approach <span>01</span>
          </a>
          <a href="#work" onClick={closeMenu}>
            Work <span>02</span>
          </a>
          <a href="#studio" onClick={closeMenu}>
            Studio <span>03</span>
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact <span>04</span>
          </a>
        </nav>

        <div className="header-right">
          <span className="availability-dot" />
          Available for select projects
          <ArrowUpRight size={14} />
        </div>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        {/* 01 — HERO */}
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span>01</span>
              <p>
                INDEPENDENT DIGITAL STUDIO
                <br />
                DESIGN <b>×</b> DEVELOPMENT
              </p>
            </div>

            <h1 className="hero-title">
              <span className="title-mask">
                <span className="text-reveal">WE MAKE</span>
              </span>
              <span className="title-mask">
                <span className="text-reveal">DIGITAL FEEL</span>
              </span>
              <span className="title-mask">
                <span className="text-reveal">
                  DIFFERENT<span className="blue-period">.</span>
                </span>
              </span>
            </h1>

            <p className="hero-subtitle">
              Digital experiences built to make
              <br className="desktop-break" /> ambitious brands impossible to
              ignore.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#work">
                Explore our work <ArrowRight size={17} />
              </a>
              <a className="text-link" href="#contact">
                <span className="play-icon">↗</span>
                Start a project
              </a>
            </div>

            <div className="hero-bottom">
              <div className="hero-stats">
                <div>
                  <strong>01—03</strong>
                  <span>Selected projects</span>
                </div>
                <div>
                  <strong>01 / 01</strong>
                  <span>Independent by design</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Made with intent</span>
                </div>
              </div>

              <a className="scroll-cue" href="#approach">
                <span>SCROLL TO EXPLORE</span>
                <ArrowDown size={15} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-layer hero-layer-portrait">
              <Image
                className="hero-portrait-image"
                src="/images/hero-portrait-clean.jpg"
                alt="Editorial portrait against a vivid blue backdrop"
                fill
                priority
                sizes="(max-width: 760px) 66vw, (max-width: 1100px) 34vw, 39vw"
              />
            </div>

            <div className="hero-layer hero-layer-chair">
              <Image
                src="/images/orange-chair-clean.jpg"
                alt="Sculptural translucent orange-red chair"
                fill
                priority
                sizes="(max-width: 760px) 46vw, (max-width: 1100px) 25vw, 28vw"
              />
            </div>

            <div className="hero-layer hero-layer-architecture">
              <Image
                src="/images/hero-architecture.jpg"
                alt="Minimal concrete architecture in hard sunlight"
                fill
                sizes="(max-width: 760px) 42vw, (max-width: 1100px) 23vw, 25vw"
              />
            </div>
          </div>
        </section>

        {/* 02 — SERVICES / APPROACH */}
        <section className="studio-section section-wrap" id="studio">
          <div className="studio-title">
            <span className="section-kicker">02 / WHAT WE DO</span>

            <h2>
              <span className="title-mask">
                <span className="text-reveal">LESS NOISE.</span>
              </span>
              <span className="title-mask">
                <span className="text-reveal">
                  MORE IMPACT<span className="blue-period">.</span>
                </span>
              </span>
            </h2>

            <p>
              Good design gets attention.
              <br />
              Great digital experiences earn it.
            </p>
          </div>

          <div className="services-list" id="approach">
            {services.map(([num, title, description]) => (
              <button
                className={`service-row ${
                  activeService === num ? "service-active" : ""
                }`}
                key={num}
                onClick={() =>
                  setActiveService(activeService === num ? null : num)
                }
                aria-expanded={activeService === num}
              >
                <span className="service-number">{num}</span>
                <span className="service-title">{title}</span>
                <span className="service-description">{description}</span>
                <span className="service-plus">
                  {activeService === num ? "−" : "+"}
                </span>
              </button>
            ))}

            <div className="services-note">
              SMALL BY CHOICE. PRECISE BY NATURE.
            </div>
          </div>
        </section>

        {/* 03 — SELECTED WORK */}
        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div className="section-id">
              <span>03</span>
              <h2>SELECTED WORK</h2>
              <i />
            </div>
            <span className="section-note">A FEW THINGS WE&apos;VE MADE</span>
          </div>

          <div className="work-grid">
            {projects.map((project) => (
              <a
                className={`project-card ${project.className}`}
                href={project.url}
                key={project.number}
                target="_blank"
              >
                <div className="project-image">
                  <Image
                    src={project.image}
                    alt={`${project.name} website project presentation`}
                    fill
                    sizes="(max-width: 760px) 90vw, 31vw"
                  />
                  <span className="project-number">
                    {project.number} / 03
                  </span>
                  <span className="project-arrow">
                    <ArrowUpRight size={22} />
                  </span>
                </div>

                <div className="project-meta">
                  <div>
                    <h3>{project.name}</h3>
                    <span>{project.type}</span>
                  </div>
                  <ArrowUpRight className="project-meta-arrow" size={18} />
                </div>

                <p>{project.description}</p>
              </a>
            ))}
          </div>

          <div className="work-footnote">
            <span>MORE GOOD WORK IN THE MAKING.</span>
            <a href="#contact">
              YOUR PROJECT COULD BE NEXT <ArrowRight size={14} />
            </a>
          </div>
        </section>

        {/* 04 — TEAM */}
        <section className="team-section section-wrap">
          <div className="team-editorial-image">
            <Image
              src="/images/orange-bg.jpg"
              alt="Team silhouettes in warm orange architectural light"
              fill
              sizes="(max-width: 760px) 90vw, 34vw"
            />
            <span className="team-image-label">
              A PERSONAL APPROACH.
              <br />
              A COLLABORATIVE PROCESS.
            </span>
            <span className="team-mark">(W)®</span>
          </div>

          <div className="team-copy">
            <span className="section-kicker">04 / THE PEOPLE BEHIND IT</span>
            <h2>
              GOOD WORK
              <br />
              IS A TEAM SPORT<span className="blue-period">.</span>
            </h2>

            <p>
              WIXEL is an independent digital studio bringing strategy, design
              and development closer together. Small team, thoughtful process,
              no unnecessary layers.
            </p>

            <div className="team-people">
              <div className="person-card">
                <div className="person-image">
                  <Image
                    src="/images/founder-photo.jpg"
                    alt="Founder portrait"
                    fill
                    sizes="58px"
                  />
                </div>
                <div>
                  <strong>Amir Vosoughi</strong>
                  <span>FOUNDER / DIGITAL STRATEGY</span>
                </div>
              </div>

              <div className="person-card">
                <div className="person-image person-image-bw">
                  <Image
                    src="/images/designer-photo.png"
                    alt="Creative designer portrait"
                    fill
                    sizes="58px"
                    className=""
                  />
                </div>
                <div>
                  <strong>Design &amp; Creative</strong>
                  <span>VISUAL DIRECTION</span>
                </div>
              </div>
            </div>

            <a className="underlined-link" href="#contact">
              A LITTLE MORE ABOUT US <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* 05 — CONTACT */}
        <section className="contact-section section-wrap" id="contact">
          <div className="contact-top">
            <span>05 / LET&apos;S WORK TOGETHER</span>
            <span>HAVE A GOOD IDEA?</span>
          </div>

          <div className="contact-main">
            <div className="contact-heading">
              <h2>
                LET&apos;S MAKE
                <br />
                IT REAL<span className="blue-period">.</span>
              </h2>
              <p className="contact-intro">
                Have a project in mind? Let&apos;s make something people
                remember.
              </p>
            </div>

            <div className="contact-copy">
              <span className="contact-person-label">CONTACT / CONTACT DETAILS</span>

              <a
                className="contact-phone"
                href="tel:+989926667069"
                dir="ltr"
                aria-label="Call 09926667069"
              >
                09926667069
              </a>

              <a className="contact-person-name" href="tel:+989926667069">
                VOSOOGHI <ArrowUpRight size={16} />
              </a>

              <div className="contact-socials">
                <a
                  href="https://t.me/vosooghi_amir"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  Telegram <ArrowUpRight size={15} />
                </a>
                <a
                  href="https://instagram.com/studio."
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram <ArrowUpRight size={15} />
                </a>
              </div>

              <a
                className="button-primary contact-email-button"
                href="mailto:hello@wixel.studio?subject=Let%27s%20build%20something"
              >
                Start a project <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <footer className="site-footer">
            <a href="#top" className="wordmark">
              WIXEL<span>®</span>
            </a>
            <span>INDEPENDENT BY DESIGN.</span>

            <div>
              <a
                href="https://t.me/vosooghi_amir"
                target="_blank"
                rel="noreferrer"
              >
                Telegram <ArrowUpRight size={13} />
              </a>
              <a
                href="https://instagram.com/studio.wixel"
                target="_blank"
                rel="noreferrer"
              >
                Instagram <ArrowUpRight size={13} />
              </a>
              <a href="mailto:hello@wixel.studio">
                Email <ArrowUpRight size={13} />
              </a>
            </div>

            <span>© WIXEL STUDIO 2026</span>
          </footer>
        </section>
      </main>
    </div>
  );
}