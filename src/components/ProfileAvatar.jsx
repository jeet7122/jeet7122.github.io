import React from "react";
import { User } from "lucide-react";

export function ProfileAvatar({ src, alt, initials = "JT" }) {
    const [failed, setFailed] = React.useState(false);

    return (
        <div className="relative w-40 h-40 sm:w-80 sm:h-80">
            {/* Subtle glow */}
            <div className="absolute rounded-full bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.28),transparent_60%)] blur-xl" />

            {/* Premium frame */}
            <div className="relative w-full h-full rounded-full p-[3px] bg-[conic-gradient(from_180deg,rgba(99,102,241,0.85),rgba(236,72,153,0.45),rgba(99,102,241,0.85))]">
                {/* Inner */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-700 ring-1 ring-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
                    {/* Glass highlight */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_45%)]" />

                    {!failed ? (
                        <img
                            src={src}
                            alt={alt}
                            className="w-full h-full object-cover"
                            loading="eager"
                            onError={() => setFailed(true)}
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-gray-900 to-gray-950">
                            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 ring-1 ring-white/10">
                                <User className="w-7 h-7 text-white/70" />
                            </div>
                            <div className="text-white/90 font-semibold tracking-wide">
                                {initials}
                            </div>
                            <div className="text-xs text-white/50">Profile</div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}
