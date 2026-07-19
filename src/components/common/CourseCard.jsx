import { ArrowRight } from "lucide-react";

function CourseCard({ title, subjects }) {
  const handleEnquire = () => {
  localStorage.setItem("selectedCourse", title);

  window.dispatchEvent(new Event("courseSelected"));

  document.getElementById("contact")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">

      <h3 className="text-base font-bold text-slate-900 md:text-xl">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-slate-600 md:mt-3 md:text-sm md:leading-6">
        <span className="font-semibold text-slate-800">Subjects:</span>{" "}
        {subjects}
      </p>

      <button
        onClick={handleEnquire}
        className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-600 transition-all group-hover:gap-2 md:mt-6 md:gap-2 md:text-sm"
      >
        Enquire
        <ArrowRight size={14} className="md:hidden" />
        <ArrowRight size={17} className="hidden md:block" />
      </button>

    </div>
  );
}

export default CourseCard;