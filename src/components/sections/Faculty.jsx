import Container from "../common/Container";
import FacultyCard from "../common/FacultyCard";
import { faculty } from "../../data/content";

function Faculty() {
    return (
        <section
            id="faculties"
            className="bg-slate-50 py-2 md:py-8 lg:py-10 scroll-mt-12 md:scroll-mt-12">
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
                        Teachers / Faculties
                    </h2>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
            </div>
            <Container>

                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="flex justify-center">
                        <h2 className="mt-6 text-center text-xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-5xl md:whitespace-nowrap">
                            Learn from{" "}
                            <span className="text-blue-600">Experienced Educators</span>
                        </h2>
                    </div>

                </div>

                {/* Faculty Cards */}
                <div className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
                    {faculty.map((teacher) => (
                        <FacultyCard
                            key={teacher.name}
                            {...teacher}
                        />
                    ))}
                </div>

            </Container>
        </section>
    );
}

export default Faculty;