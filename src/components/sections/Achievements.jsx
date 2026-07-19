import Container from "../common/Container";
import AchievementCard from "../common/AchievementCard";
import { achievements } from "../../data/content";

function Achievements() {
  return (
    <section
    id="results" className="bg-slate-50 py-2 md:py-8 lg:py-10 scroll-mt-12 md:scroll-mt-12">
      {/* Full Width Section Divider */}
      <div className="my-10 md:my-12">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

        <div className="py-4 md:py-5 text-center">
          <h2
            className="
        whitespace-nowrap
        font-serif
        text-sm
        font-black
        uppercase
        tracking-[0.12em]
        text-blue-700
        sm:text-xl
        sm:tracking-[0.18em]
        md:text-4xl
        md:tracking-[0.3em]
      "
          >
            Student Achievements
          </h2>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
      </div>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <h2 className="mt-6 text-center text-xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-5xl md:whitespace-nowrap">
              Celebrating Student{" "}
              <span className="text-blue-600">Excellence</span>
            </h2>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {achievements.map((student) => (
            <div
              key={student.id}
              className="
        w-[calc(50%-8px)]
        sm:w-[calc(50%-8px)]
        lg:w-[calc(25%-12px)]
        xl:w-[calc(20%-13px)]
      "
            >
              <AchievementCard {...student} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Achievements;