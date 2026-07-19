import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "../common/Container";
import heroPattern from "../../assets/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white scroll-mt-12 md:scroll-mt-12"
    >
      {/* Announcement Header */}
      <div className="relative z-10 overflow-hidden bg-blue-600">

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.35)_25%,rgba(255,255,255,0.35)_27%,transparent_27%,transparent_50%,rgba(255,255,255,0.35)_50%,rgba(255,255,255,0.35)_52%,transparent_52%)] bg-[length:42px_42px]" />
        </div>

        <div className="relative flex flex-col items-center justify-center gap-2 px-4 py-3 text-center sm:flex-row sm:gap-4 sm:px-6 sm:py-6">

          {/* Latest Update Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-red-500/90 px-2.5 py-1 shadow-md sm:gap-2 sm:px-3.5 sm:py-1.5">

            <span className="relative flex h-1.5 w-1.5 sm:h-2.5 sm:w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white sm:h-2.5 sm:w-2.5"></span>
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-white sm:text-xs sm:tracking-[0.18em]">
              Latest Update
            </span>

          </div>

          {/* Announcement */}
          <h2 className="text-[15px] font-bold leading-tight text-white sm:text-xl md:text-2xl">
            Admissions Open for Academic Year
            <span className="ml-1 text-yellow-300 sm:ml-2">
              2026–27
            </span>
          </h2>

          {/* CTA */}
          <a
            href="#courses"
            className="rounded-full bg-white px-3.5 py-1 text-[11px] font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:bg-blue-50 sm:px-5 sm:py-2 sm:text-sm"
          >
            Enroll Now →
          </a>

        </div>

      </div>

      <Container>
        <div
          className="
            relative z-10
            flex items-center
            min-h-[620px]
            md:min-h-[700px]
            lg:min-h-[calc(100vh-170px)]
            pt-8
            pb-4
          "
        >
          <div className="max-w-3xl">

            {/* Heading */}
            <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-left md:text-5xl lg:text-7xl">
              Shape Your
              <span className="block text-blue-600">
                Academic Success
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-md text-center text-sm leading-6 text-slate-600 sm:max-w-xl sm:text-base sm:leading-7 md:mx-0 md:mt-6 md:max-w-2xl md:text-left md:text-lg md:leading-8">
              Empowering students with expert guidance, structured learning,
              and personalized mentorship to excel in JEE, NEET, MHT-CET,
              and Board examinations.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-3 md:flex md:flex-wrap md:gap-5">

              <div className="flex items-center justify-center gap-2 rounded-full bg-slate-50 px-4 py-2">
                <CheckCircle2 className="text-blue-600" size={18} />
                <span className="text-sm font-semibold text-slate-700">
                  Expert Faculty
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 rounded-full bg-slate-50 px-4 py-2">
                <CheckCircle2 className="text-blue-600" size={18} />
                <span className="text-sm font-semibold text-slate-700">
                  Personal Mentorship
                </span>
              </div>

              <div className="col-span-2 mx-auto flex w-fit items-center justify-center gap-2 rounded-full bg-slate-50 px-4 py-2 md:col-span-1 md:mx-0 md:w-auto">
                <CheckCircle2 className="text-blue-600" size={18} />
                <span className="text-sm font-semibold text-slate-700">
                  Proven Results
                </span>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
              >
                Get in Touch
                <ArrowRight size={18} />
              </a>

              <a
                href="#courses"
                className="inline-flex items-center justify-center rounded-xl border-2 border-blue-600 px-7 py-4 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-50"
              >
                Explore Courses
              </a>

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;