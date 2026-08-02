import Packet from "./Packet";
import { trafficFlows } from "./trafficConfig";

export default function TrafficFlow() {
    return (
        <svg
            className="absolute inset-0 h-full w-full pointer-events-none"
            viewBox="0 0 620 600"
            fill="none"
        >
            {trafficFlows.map((flow, index) => (
                <Packet
                    key={index}
                    type={flow.type}
                    from={flow.from}
                    to={flow.to}
                    delay={flow.delay}
                />
            ))}

            <defs>
                <filter
                    id="packetGlow"
                    x="-100%"
                    y="-100%"
                    width="300%"
                    height="300%"
                >
                    <feGaussianBlur
                        stdDeviation="4"
                        result="blur"
                    />

                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
        </svg>
    );
}