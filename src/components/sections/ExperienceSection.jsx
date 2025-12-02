import ContentSection from "../layout/ContentSection";
import ExperienceTimeline from "../ui/ExperienceTimeline";
import { experience } from "../../data/experience";

export default function ExperienceSection() {
  return (
    <ContentSection
      id="experience"
      title="Experience & Education"
      className="bg-gray-900"
    >
      <ExperienceTimeline items={experience} />
    </ContentSection>
  );
}
