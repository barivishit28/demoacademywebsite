import Container from "../common/Container";
import CourseCard from "../common/CourseCard";
import { courses } from "../../data/content";

function Courses() {
  return (
    <section
      id="courses"
      className="bg-white py-2 md:py-8 lg:py-10 scroll-mt-12 md:scroll-mt-12"
    >
      {/* Full Width Section Divider */}
      <div className="my-10 md:my-12">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

        <div className="py-4 md:py-5 text-center">
          <h2
            className="
        font-serif
        text-lg
        font-black
        uppercase
        tracking-[0.15em]
        whitespace-nowrap
        text-blue-700
        sm:text-2xl
        sm:tracking-[0.2em]
        md:text-4xl
        md:tracking-[0.3em]
      "
          >
            Our Courses
          </h2>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
      </div>
      <Container>

        {/* Course Cards */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              subjects={course.subjects}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}

export default Courses;