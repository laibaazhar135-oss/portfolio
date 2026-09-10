import Link from "next/link";
import ContactForm from "./_components/ContactForm";

import { Button } from "primereact/button";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="pt-12 lg:pt-32 bg-background" id="home">
        <div className="container mx-auto mb-32">
          <div className="flex flex-col lg:flex-row lg:gap-x-32">
            <div className="lg:w-3/5 grid content-between">
              <div className="lg:mb-32">
                <h1 className="text-text-on-bg font-heading font-bold text-5xl lg:text-7xl">
                  Hello, I&apos;m
                  <br />
                  Laiba Azhar
                </h1>
                <div className="text-lg text-text-on-bg my-6">
                  I build backend systems that handle data reliably.
                </div>
                <Link
                  href="#case-study"
                  className="p-button bg-primary-500 hover:bg-primary-600 text-text-on-card font-bold no-underline"
                >
                  See my work
                </Link>
              </div>
            </div>
            <div className="lg:w-2/5"></div>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div
          className="container mx-auto bg-card rounded-2xl shadow-[0_36px_105px_0_rgba(43,56,76,0.10)] relative -mb-16"
          id="about"
        >
          <div className="flex items-center flex-col lg:flex-row lg:gap-x-32 p-4 lg:p-28">
            <div className="lg:w-3/5">
              <h2 className="text-text-on-card font-heading font-bold text-3xl lg:text-4xl mb-6">
                About
              </h2>

              <div className="mb-8">
                <h3 className="text-text-on-card font-heading font-bold text-xl mb-2">
                  Why backend
                </h3>
                <p className="text-text-on-card opacity-90 leading-relaxed">
                  I like building systems people depend on. Reliability matters more than flashy features.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-text-on-card font-heading font-bold text-xl mb-2">
                  What I&apos;m looking for
                </h3>
                <p className="text-text-on-card opacity-90 leading-relaxed">
                  Backend engineering roles where I can integrate AI systems.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-text-on-card font-heading font-bold text-xl mb-3">
                  Stack I use
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-md font-medium text-sm bg-background text-text-on-bg">
                    JavaScript / Node.js
                  </span>
                  <span className="px-4 py-2 rounded-md font-medium text-sm bg-background text-text-on-bg">
                    Express
                  </span>
                  <span className="px-4 py-2 rounded-md font-medium text-sm bg-background text-text-on-bg">
                    PostgreSQL
                  </span>
                  <span className="px-4 py-2 rounded-md font-medium text-sm bg-background text-text-on-bg">
                    HTML / CSS / Tailwind
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-text-on-card font-heading font-bold text-xl mb-3">
                  Links
                </h3>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://github.com/laibaazhar135-oss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 font-medium text-text-on-card hover:opacity-70"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://github.com/laibaazhar135-oss/CRUD-task-api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 font-medium text-text-on-card hover:opacity-70"
                  >
                    CRUD API
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CASE STUDY SECTION */}
      <div className="pt-24 lg:pt-36 pb-10 lg:pb-24 bg-background" id="case-study">
        <div className="container mx-auto">
          <h2 className="text-text-on-bg font-heading font-bold text-3xl sm:text-4xl mb-16">
            Projects
          </h2>
          <div className="max-w-5xl mx-auto rounded-lg p-8 sm:p-12 bg-card text-text-on-card">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-3">
              CRUD Task API
            </h2>
            <p className="text-lg mb-10 opacity-90">
              A Node.js backend system I built to manage tasks with a database
            </p>

            <div className="mb-8">
              <h3 className="font-heading font-bold text-xl mb-2">What it does</h3>
              <p className="leading-relaxed opacity-90">
                A REST API that lets users create, read, update, and delete tasks. Built with Express and PostgreSQL.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-heading font-bold text-xl mb-2">Why I built it</h3>
              <p className="leading-relaxed opacity-90">
                I wanted to understand how real backend systems work — how to handle routing, database queries, and proper error handling.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-heading font-bold text-xl mb-2">How it works</h3>
              <ul className="leading-relaxed opacity-90 list-disc pl-5 space-y-1">
                <li>
                  <span className="font-medium">Technology:</span> Node.js, Express, PostgreSQL, Postman (for testing)
                </li>
                <li>
                  <span className="font-medium">Architecture:</span> Three-layer design — routes handle requests, controllers manage logic, database layer handles data
                </li>
                <li>
                  <span className="font-medium">Key features:</span> Full CRUD operations, database validation, proper HTTP status codes, Swagger documentation
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <a
                href="https://github.com/laibaazhar135-oss/CRUD-task-api"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-md font-heading font-bold text-sm bg-primary-500 text-text-on-card transition-opacity hover:opacity-90"
              >
                View on GitHub
              </a>
            </div>

            <div className="mb-8">
              <h3 className="font-heading font-bold text-xl mb-2">What I learned</h3>
              <p className="leading-relaxed opacity-90">
                How to design API endpoints that scale, why middleware matters, how databases store and retrieve data reliably.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-xl mb-2">What&apos;s next</h3>
              <p className="leading-relaxed opacity-90">
                I&apos;ll build an agent that uses this API to make decisions based on task data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="bg-background pb-10 lg:pb-24" id="contact">
        <div className="container mx-auto">
          <div className="p-8 lg:p-20 bg-card rounded-2xl shadow-[0_59px_124px_0_rgba(0,0,0,0.12)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-32 items-center">
              <div>
                <h3 className="text-text-on-card text-4xl font-heading font-bold">
                  Get in touch
                </h3>
                <div className="text-text-on-card text-lg mt-4 mb-8 opacity-90">
                  Open to backend engineering roles — feel free to reach out.
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 group hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] rounded-lg p-6 transition-shadow">
                    <div className="flex justify-center items-center p-3 rounded group-hover:bg-primary-500 bg-background">
                      <i className="pi pi-at group-hover:text-text-on-card text-primary-500 text-2xl leading-none"></i>
                    </div>
                    <div>
                      <div className="text-text-on-card text-sm opacity-70">Email:</div>
                      <div className="text-text-on-card font-medium mt-1">
                        laibaA@gmail.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 group hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] rounded-lg p-6 transition-shadow">
                    <div className="flex justify-center items-center p-3 rounded group-hover:bg-primary-500 bg-background">
                      <i className="pi pi-github group-hover:text-text-on-card text-primary-500 text-2xl leading-none"></i>
                    </div>
                    <div>
                      <div className="text-text-on-card text-sm opacity-70">GitHub:</div>
                      <a
                        href="https://github.com/laibaazhar135-oss"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-on-card font-medium mt-1 hover:underline"
                      >
                        laibaazhar135-oss
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-1 mt-8">
                  <a
                    href="#"
                    className="flex justify-center items-center p-3 rounded group hover:bg-primary-500"
                  >
                    <i className="pi pi-linkedin group-hover:text-white text-primary-500 text-2xl leading-none"></i>
                  </a>
                  <a
                    href="#"
                    className="flex justify-center items-center p-3 rounded group hover:bg-primary-500"
                  >
                    <i className="pi pi-twitter group-hover:text-white text-primary-500 text-2xl leading-none"></i>
                  </a>
                </div>
              </div>

              <div>
                <div className="text-text-on-card text-lg opacity-90 mb-8">
                  Send me a message or reach out via email — I&apos;ll get back to you as soon as possible.
                </div>
                <a
                  href="mailto:your.email@example.com"
                  className="inline-block px-8 py-4 rounded-md font-heading font-bold text-base bg-primary-500 text-text-on-card transition-opacity hover:opacity-90"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="py-8 px-6 text-center bg-background">
        <p className="text-sm opacity-70 text-text-on-bg">
          &copy; 2026 Laiba Azhar
        </p>
      </footer>
    </>
  );
}