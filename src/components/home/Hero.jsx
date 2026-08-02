import BackgroundGlow from "./BackgroundGlow";
import HeroIntro from "./HeroIntro";
import ArchitectureCanvas from "./HeroArchitecture/ArchitectureCanvas";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            <BackgroundGlow />

            <div className="container grid lg:grid-cols-[1.05fr_.95fr] items-center gap-16">

                {/* Left */}
                <HeroIntro />

                {/* Right */}
                <div className="hidden lg:flex justify-center">
                    <ArchitectureCanvas />
                </div>

            </div>
        </section>
    );
}