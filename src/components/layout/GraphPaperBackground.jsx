import React from "react";

export default function GraphPaperBackground({ children }) {
    return (
        <div className="relative min-h-screen bg-white overflow-hidden">

            {/* Graph Paper Grid */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Optional subtle paper texture overlay */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#00000010_1px,transparent_1px)] [background-size:20px_20px]" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}