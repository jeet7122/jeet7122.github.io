import AboutIntro from "./AboutIntro";
import TerminalCard from "./TerminalCard";
// import HighlightCards from "./HighlightCards";

export default function About() {
    return (
        <section id="about">
            <div className="container">

                <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-20 items-center">

                    <AboutIntro />

                    <TerminalCard />

                </div>

                {/*<HighlightCards />*/}

            </div>
        </section>
    );
}