export const trafficFlows = [
    {
        type: "REQUEST",
        from: "api",
        to: "ai",
        startAt: 0,
    },

    {
        type: "EVENT",
        from: "ai",
        to: "kafka",
        startAt: 900,
    },

    {
        type: "DATABASE",
        from: "ai",
        to: "postgres",
        startAt: 900,
    },

    {
        type: "RESPONSE",
        from: "worker",
        to: "api",
        startAt: 1800,
    },
];