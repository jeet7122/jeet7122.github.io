import ContactCard from "./ContactCard";
import { contacts } from "./contactData";

export default function ContactGrid() {
    return (
        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">

            {contacts.map((contact) => (

                <ContactCard
                    key={contact.title}
                    contact={contact}
                />

            ))}

        </div>
    );
}