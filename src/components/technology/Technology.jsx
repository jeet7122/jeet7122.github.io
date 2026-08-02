import ContentSection from "../layout/ContentSection";
import TechnologyCategory from "./TechnologyCategory";
import { technologies } from "./technologies";

export default function Technologies() {
    return (
        <ContentSection
            id="technology"
            title="Core Technologies"
            className="py-24"
        >
            <div className="mx-auto max-w-7xl">

                <div
                    className="
                        grid
                        gap-8
                        lg:grid-cols-2
                    "
                >

                    {technologies.map((category) => (

                        <TechnologyCategory
                            key={category.title}
                            category={category}
                        />

                    ))}

                </div>

            </div>
        </ContentSection>
    );
}