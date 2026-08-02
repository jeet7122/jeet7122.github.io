import Connections from "./Connection";
import Node from "./Node";
import TrafficFlow from "./TrafficFlow.jsx";

export default function ArchitectureCanvas() {
    return (
        <div className="relative h-[600px] w-[620px]">
            <Connections />
            <TrafficFlow/>


            <Node
                title="API Gateway"
                subtitle="Ingress"
                borderColor="border-grey-200"
                className="left-1/2 top-4 -translate-x-1/2 w-52 bg-white text-slate-800"
            />

            <Node
                title="User Service"
                subtitle="REST API"
                borderColor="border-blue-200"
                className="left-2 top-44 bg-blue-100"
            />

            <Node
                title="AI Service"
                subtitle="Azure OpenAI"
                borderColor="border-violet-200"
                className="left-1/2 top-40 -translate-x-1/2 bg-purple-300"
            />

            <Node
                title="Order Service"
                subtitle="Business Logic"
                borderColor="border-cyan-200"
                className="right-2 top-44 cyan-200"
            />

            <Node
                title="Kafka"
                subtitle="Event Bus"
                text="light"
                className="left-14 top-[355px] w-36 bg-orange-500"
            />

            <Node
                title="PostgreSQL"
                subtitle="Primary DB"
                text="light"
                className="right-14 top-[355px] w-40 bg-sky-600"
            />

            <Node
                title="Background Worker"
                subtitle="Consumers"
                className="left-1/2 top-[470px] -translate-x-1/2 w-56 bg-green-300"
                borderColor='green-500'
            />

        </div>
    );
}