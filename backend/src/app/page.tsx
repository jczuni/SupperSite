"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "200+", label: "businesses launched online" },
  { value: "94%", label: "of clients stay for growth support" },
  { value: "5★", label: "average client experience" },
];

const services = [
  {
    title: "Brand Websites",
    description: "Clean, modern sites that reflect your business and guide visitors toward action.",
    accent: "from-sky-500 to-cyan-400",
  },
  {
    title: "Conversion Strategy",
    description: "Messaging, layouts, and calls to action built to turn interest into qualified leads.",
    accent: "from-violet-500 to-fuchsia-400",
  },
  {
    title: "Growth Support",
    description: "Ongoing updates, analytics, and optimization as your business evolves.",
    accent: "from-amber-500 to-orange-400",
  },
];

const projects = [
  {
    title: "Studio North",
    category: "Retail & hospitality",
    text: "A polished, high-converting site that increased inquiries within the first month.",
  },
  {
    title: "Harbor Advisory",
    category: "Professional services",
    text: "A confident, premium experience that positioned the business as an authority online.",
  },
  {
    title: "Lumen Health",
    category: "Wellness & care",
    text: "A calm, credible brand website built to strengthen trust and bookings.",
  },
];

const steps = [
  { title: "Discover", text: "We map your goals, audience, and ideal customer journey." },
  { title: "Design", text: "We craft a refined visual direction and content structure that feels custom." },
  { title: "Launch", text: "We build, refine, and support the site so it performs from day one." },
];

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : prefersDark
        ? "dark"
        : "light";

    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_46%,_#fff9f2_100%)] text-slate-900 transition-colors duration-300 dark:bg-[linear-gradient(135deg,_#020617_0%,_#111827_50%,_#0f172a_100%)] dark:text-slate-100">
      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-6 sm:px-10 lg:px-8 lg:py-8">
        <nav className="sticky top-4 z-20 flex items-center justify-between rounded-full border border-slate-200/80 bg-white/80 px-5 py-3 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
          <div className="text-lg font-semibold tracking-tight">SupperSite</div>
          <div className="hidden items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-700"
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <a
              href="#contact"
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
            >
              Start your project
            </a>
          </div>
        </nav>

        <section
          id="about"
          className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_80px_-32px_rgba(15,23,42,0.35)] dark:border-slate-700 dark:bg-slate-900 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10"
        >
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:border-blue-400/40 dark:bg-blue-500/10 dark:text-blue-300">
              A polished website template for modern businesses
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Show your business like a premium brand.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              SupperSite creates refined, conversion-focused websites that help small and medium businesses look established, trustworthy, and ready for growth.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-slate-900 px-6 py-3 text-center font-medium text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
              >
                Book a demo call
              </a>
              <a
                href="#services"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                Explore the experience
              </a>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-inner dark:border-slate-700">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4">
              <div className="mb-4 h-11 rounded-2xl bg-white/10" />
              <div className="space-y-3">
                <div className="h-24 rounded-[1.1rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(255,255,255,0.2),_rgba(255,255,255,0.05))]" />
                <div className="grid gap-3 sm:grid-cols-3">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-3">
                      <p className="text-lg font-semibold">{item.value}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-300">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[1.5rem] border border-slate-200 bg-white/80 px-4 py-4 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-400 sm:gap-8">
            <span>Trusted by modern teams</span>
            <span>Northstar</span>
            <span>Harbor & Co.</span>
            <span>Bluepeak</span>
            <span>Northfield</span>
          </div>
        </section>

        <section id="services" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm dark:border-slate-700">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Services</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Everything your business needs to look credible and perform online.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              From first impressions to lead generation, we shape each detail so your website feels as capable as your team.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
              >
                <div className={`mb-4 h-12 rounded-2xl bg-gradient-to-br ${service.accent}`} />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Featured work</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">Templates designed to impress clients.</h2>
            </div>
            <a href="#contact" className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
              Request a custom version
            </a>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/80">
                <div className="h-36 rounded-[1.1rem] border border-dashed border-slate-300 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_45%),linear-gradient(135deg,_#ffffff_0%,_#eef4ff_100%)] dark:border-slate-600" />
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{project.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Our process</p>
            <div className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white dark:bg-slate-100 dark:text-slate-900">
                      0{index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm dark:border-slate-700">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Why it works</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Built to feel premium, simple to manage, and easy to scale.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              We balance strong visual design with practical structure so your site not only looks great, but also helps your business grow.
            </p>
            <div className="mt-8 rounded-[1.25rem] border border-white/10 bg-white/10 p-6">
              <p className="text-sm font-medium text-slate-300">Client-ready template example</p>
              <p className="mt-2 text-2xl font-semibold">Show clients exactly what their future website could feel like.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">
                Ready to show your clients what’s possible?
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Let’s create a custom site experience that feels premium, strategic, and unmistakably yours.
              </p>
            </div>
            <a
              href="mailto:hello@suppersite.com"
              className="rounded-full bg-slate-950 px-6 py-3 text-center font-medium text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
            >
              hello@suppersite.com
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
