import ContactHeader from "./ContactHeader";
import ContactGrid from "./ContactGrid";
import Terminal from "./Terminal";

export default function Contact() {
    return (
        <section id="contact">

            <div className="mx-auto max-w-7xl">

                <ContactHeader />

                <ContactGrid />

                <Terminal />

            </div>

        </section>
    );
}