export default function Connections() {
    return (
        <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 520 560"
            fill="none"
        >
            {/* API -> Services */}

            <line
                x1="260"
                y1="95"
                x2="150"
                y2="205"
                stroke="#CBD5E1"
                strokeWidth="2"
                opacity="0.5"
            />

            <line
                x1="260"
                y1="95"
                x2="260"
                y2="195"
                stroke="#CBD5E1"
                strokeWidth="2"
                opacity="0.5"
            />

            <line
                x1="260"
                y1="95"
                x2="370"
                y2="205"
                stroke="#CBD5E1"
                strokeWidth="2"
                opacity="0.5"
            />

            {/* Services -> Kafka */}

            <line
                x1="150"
                y1="255"
                x2="190"
                y2="360"
                stroke="#CBD5E1"
                strokeWidth="2"
                opacity="0.5"
            />

            <line
                x1="260"
                y1="245"
                x2="190"
                y2="360"
                stroke="#CBD5E1"
                strokeWidth="2"
                opacity="0.5"
            />

            {/* Services -> PostgreSQL */}

            <line
                x1="260"
                y1="245"
                x2="330"
                y2="360"
                stroke="#CBD5E1"
                strokeWidth="2"
                opacity="0.5"
            />

            <line
                x1="370"
                y1="255"
                x2="330"
                y2="360"
                stroke="#CBD5E1"
                strokeWidth="2"
                opacity="0.5"
            />

            {/* Kafka -> Worker */}

            <line
                x1="190"
                y1="410"
                x2="260"
                y2="480"
                stroke="#CBD5E1"
                strokeWidth="2"
                opacity="0.5"
            />

            {/* Postgres -> Worker */}

            <line
                x1="330"
                y1="410"
                x2="260"
                y2="480"
                stroke="#CBD5E1"
                strokeWidth="2"
                opacity="0.5"
            />
        </svg>
    );
}