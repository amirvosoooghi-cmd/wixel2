
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Send, Check } from "lucide-react";
import styles from "./page.module.css";

type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  images: string[];
  color: string;
};

const projects: Project[] = [
  {
    id: "vakileh",
    number: "01",
    title: "اسماعیل فتاحی",
    category: "وب‌سایت حقوقی",
    description: "طراحی وب‌سایتی حرفه‌ای برای معرفی خدمات حقوقی، ایجاد اعتماد و ارتباط آسان با مراجعان.",
    features: ["طراحی اختصاصی", "ریسپانسیو", "رابط کاربری مدرن"],
    images: [
      "/showcases/vakileh-cover.webp",
      "/showcases/vakileh-section-01.webp",
      "/showcases/vakileh-section-02.webp",
      "/showcases/vakileh-section-03.webp",
    ],
    color: "#d6a75e",
  },
  {
    id: "plan",
    number: "02",
    title: "پلن",
    category: "آژانس دیجیتال مارکتینگ",
    description: "طراحی تجربه‌ای متفاوت با هویت بصری فضایی برای معرفی خدمات و نمونه‌کارهای آژانس.",
    features: ["طراحی اختصاصی", "ریسپانسیو", "انیمیشن تعاملی"],
    images: [
      "/showcases/plan-cover.webp",
      "/showcases/plan-section-01.webp",
      "/showcases/plan-section-02.webp",
      "/showcases/plan-section-03.webp",
    ],
    color: "#27e6b1",
  },
  {
    id: "wikitori",
    number: "03",
    title: "ویکیتوری",
    category: "وب‌سایت محتوایی",
    description: "طراحی ساختاری منظم برای نمایش محتوا، خدمات و بخش‌های مختلف یک پلتفرم دیجیتال.",
    features: ["طراحی رابط کاربری", "ساختار محتوایی", "ریسپانسیو"],
    images: [
      "/showcases/wikitori-cover.webp",
      "/showcases/wikitori-section-01.webp",
      "/showcases/wikitori-section-02.webp",
      "/showcases/wikitori-section-03.webp",
    ],
    color: "#5579ed",
  },
  {
    id: "rockman",
    number: "04",
    title: "راکمن",
    category: "برند عطر و ادکلن",
    description: "طراحی تجربه‌ای تیره، مینیمال و لوکس برای نمایش محصولات و هویت بصری برند.",
    features: ["طراحی لوکس", "معرفی محصولات", "ریسپانسیو"],
    images: [
      "/showcases/rockman-cover.webp",
      "/showcases/rockman-section-01.webp",
      "/showcases/rockman-section-02.webp",
      "/showcases/rockman-section-03.webp",
    ],
    color: "#19c783",
  },
  {
    id: "next",
    number: "05",
    title: "نکست",
    category: "آژانس دیجیتال و خلاقیت",
    description: "طراحی تجربه‌ای دیجیتال با هویت بصری فضایی، رنگ‌های درخشان و ساختار یکپارچه.",
    features: ["طراحی خلاقانه", "ریسپانسیو", "هویت بصری"],
    images: [
      "/showcases/next-cover.webp",
      "/showcases/next-section-01.webp",
      "/showcases/next-section-02.webp",
      "/showcases/next-section-03.webp",
    ],
    color: "#20d8c4",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [activeImages, setActiveImages] = useState(project.images);

  function selectImage(index: number) {
    if (index === 0) return;

    setActiveImages((current) => {
      const updated = [...current];
      [updated[0], updated[index]] = [updated[index], updated[0]];
      return updated;
    });
  }

  return (
    <article className={`${styles.projectCard} ${styles.reveal} `}>
      <div className={styles.projectTop}>
        <div className={styles.projectHeading}>
          <span className={styles.projectNumber}>{project.number}</span>
          <div>
            <h2>{project.title}</h2>
            <span className={styles.projectCategory}>{project.category}</span>
          </div>
        </div>

        <span
          className={styles.projectAccent}
          style={{ backgroundColor: project.color }}
        />
      </div>

      <div className={styles.gallery} >
        <div className={styles.mainImage}>
          <Image
            src={activeImages[0]}
            alt={`نمای پروژه ${project.title}`}
            fill
            priority={project.id === "vakileh"}
            fetchPriority={project.id === "vakileh" ? "high" : "auto"}
            sizes="(max-width: 760px) 100vw, 50vw"
            className={styles.mainImageElement}
          />
        </div>

        <div className={styles.thumbnails}>
          {activeImages.slice(1).map((image, index) => (
            <button
              key={image}
              type="button"
              className={styles.thumbnail}
              onClick={() => selectImage(index + 1)}
              aria-label={`نمایش تصویر ${index + 2} پروژه ${project.title}`}
            >
              <Image
                src={image}
                alt={`بخش ${index + 2} پروژه ${project.title}`}
                fill
                sizes="(max-width: 760px) 30vw, 16vw"
                className={styles.thumbnailImage}
              />
            </button>
          ))}
        </div>
      </div>

      <div className={styles.projectDetails}>
        <p>{project.description}</p>

        <div className={styles.features}>
          {project.features.map((feature) => (
            <span key={feature}>
              <Check size={13} strokeWidth={2.5} />
              {feature}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function PersianPortfolioPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1150);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    const elements = document.querySelectorAll(`.${styles.reveal}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [loading]);

  return (
    <main className={styles.page} dir="rtl">
      {loading && (
        <div className={styles.preloader}>
          <div className={styles.preloaderCenter}>
            <div className={styles.wixelMark}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.preloaderWord}>
              WIXEL<span>®</span>
            </div>
            <div className={styles.loadTrack}>
              <div className={styles.loadFill} />
            </div>
          </div>
        </div>
      )}

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="/" className={styles.wordmark} dir="ltr">
            WIXEL<span>®</span>
          </a>

          <a href="tel:09926667069" className={styles.phone} dir="ltr">
            <Phone size={16} />
            <b>09926667069</b>
          </a>
        </div>
      </header>

      <section className={styles.projectsSection}>
        <div className={styles.sectionHeading}>
          <h1>نمونه‌کارها</h1>
          <span>۵ پروژه منتخب</span>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <a href="/" className={styles.footerLogo} dir="ltr">
          WIXEL<span>®</span>
        </a>

        <div className={styles.footerLinks}>
          <a href="tel:09926667069" className={styles.footerContact} dir="ltr">
            <Phone size={17} />
            09926667069
          </a>

          <a
            href="https://t.me/vosooghi_amir"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.telegramLink}
            aria-label="تلگرام"
          >
            <Send size={17} />
            تلگرام
          </a>
        </div>

        <span className={styles.footerCopyright}>
          تمامی حقوق محفوظ است.
        </span>
      </footer>
    </main>
  );
}
