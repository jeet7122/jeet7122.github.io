// src/components/sections/ExperienceSection.jsx
import ContentSection from "../layout/ContentSection";
import ExperienceTimeline from "../ui/ExperienceTimeline";
import { experience } from "../../data/experience";

export default function ExperienceSection() {
    return (
        <ContentSection
            id="experience"
            title="Experience & Education"
            className="py-24"
        >
            <div className="mt-12">
                <ExperienceTimeline items={experience} />
            </div>
        </ContentSection>
    );
}