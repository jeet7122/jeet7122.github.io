import { AnimatePresence, motion } from "framer-motion";

import ResumeFlow from "./ResumeFlow";
import StreamingFlow from "./StreamingFlow";
import ClaimFlow from "./ClaimFlow";

export default function ProjectArchitecture({ project }) {

    const renderArchitecture = () => {

        switch (project.architecture) {

            case "resume":
                return <ResumeFlow />;

            case "streaming":
                return <StreamingFlow />;

            case "claim":
                return <ClaimFlow />;

            default:
                return null;
        }
    };

    return (
        <div
            className="
                flex
                items-center
                justify-center
                rounded-[28px]
                border
                bg-[var(--bg-primary)]
                p-10
                min-h-[520px]
            "
        >
            <AnimatePresence mode="wait">

                <motion.div
                    key={project.architecture}
                    initial={{
                        opacity: 0,
                        scale: .95,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    exit={{
                        opacity: 0,
                        scale: .95,
                    }}
                    transition={{
                        duration: .45,
                    }}
                >
                    {renderArchitecture()}
                </motion.div>

            </AnimatePresence>

        </div>
    );
}