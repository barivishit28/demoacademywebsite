import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "../common/Container";
import heroStudent from "../../assets/hero-student.png";

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
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 shadow-lg ring-2 ring-red-300/40">
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute h-3 w-3 animate-ping rounded-full bg-white"></span>
              <span className="relative h-2.5 w-2.5 rounded-full bg-white"></span>
            </span>

            <span className="text-xs font-bold uppercase tracking-widest text-white">
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
            py-8
            md:py-10
            lg:py-12
          "
        >

          <div className="grid w-full items-center gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">

            {/* Left Content */}
            <div className="max-w-3xl">

              {/* Heading */}
              <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
                Shape Your
                <span className="block text-blue-600">
                  Academic Success
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-4 max-w-md text-center text-sm leading-6 text-slate-600 sm:max-w-xl sm:text-base sm:leading-7 md:mx-0 md:mt-5 md:max-w-2xl md:text-left md:text-lg md:leading-8">
                Empowering students with expert guidance, structured learning,
                and personalized mentorship to excel in JEE, NEET, MHT-CET,
                and Board examinations.
              </p>

              {/* Features */}
              <div className="mt-5 grid grid-cols-2 gap-3 md:flex md:flex-wrap md:gap-4">

                <div className="flex items-center justify-center gap-2 rounded-full bg-slate-50 px-4 py-2 shadow-sm">
                  <CheckCircle2 className="text-blue-600" size={18} />
                  <span className="text-sm font-semibold text-slate-700">
                    Expert Faculty
                  </span>
                </div>

                <div className="flex items-center justify-center gap-2 rounded-full bg-slate-50 px-4 py-2 shadow-sm">
                  <CheckCircle2 className="text-blue-600" size={18} />
                  <span className="text-sm font-semibold text-slate-700">
                    Personal Mentorship
                  </span>
                </div>

                <div className="col-span-2 mx-auto flex w-fit items-center justify-center gap-2 rounded-full bg-slate-50 px-4 py-2 shadow-sm md:col-span-1 md:mx-0 md:w-auto">
                  <CheckCircle2 className="text-blue-600" size={18} />
                  <span className="text-sm font-semibold text-slate-700">
                    Proven Results
                  </span>
                </div>

              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
                >
                  Get in Touch
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#courses"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-blue-600 px-7 py-3.5 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-50"
                >
                  Explore Courses
                </a>

              </div>
            </div>
            {/* Right Image */}
            <div className="mt-4 flex justify-center lg:mt-0 lg:justify-end">

              <img
                src={heroStudent}
                alt="Apex Academy Student"
                className="
                  w-40
                  sm:w-48
                  md:w-56
                  lg:w-72
                  xl:w-80
                  h-auto
                  object-contain
                  
                  transition-transform duration-300
                  hover:scale-105
                "
              />

            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}

export default Hero;