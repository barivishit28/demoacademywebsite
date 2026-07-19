import Container from "../common/Container";
import FeatureCard from "../common/FeatureCard";
import { features } from "../../data/content";

function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-white py-2 md:py-8 lg:py-10 scroll-mt-12 md:scroll-mt-12" >
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
            Why Choose Apex Academy
          </h2>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
      </div>
      <Container>

        {/* Heading */}


        {/* Cards */}
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              highlight={feature.highlight}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}

export default WhyChooseUs;