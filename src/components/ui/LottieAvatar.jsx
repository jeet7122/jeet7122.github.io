import React from "react";
import Lottie from "lottie-react";
import animationData from "../../data/extra/ppfLottie.json"; // your lottie file

export default function LottieAvatar() {
    return (
        <div className="w-54 h-54 md:w-128 md:h-70 overflow-hidden">
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                className="w-full h-full"
            />
        </div>
    );
}