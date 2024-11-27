import React, { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import { div } from "motion/react-client";

interface BannerItem {
  text: string;
  color: string;
}

const bannerItems: BannerItem[] = [
  { text: "Bang", color: "bg-neutral-200" },
  { text: "Pop", color: "bg-neutral-200" },
  { text: "Smack", color: "bg-neutral-200" },
  { text: "Woof", color: "bg-neutral-200" },
  { text: "Bark", color: "bg-neutral-200" },
  { text: "Meow", color: "bg-neutral-200" },
  { text: "Yap", color: "bg-neutral-200" },
  { text: "Roar", color: "bg-neutral-200" },
  { text: "Hiss", color: "bg-neutral-200" },
  { text: "Chirp", color: "bg-neutral-200" },
  { text: "Neigh", color: "bg-neutral-200" },
  { text: "Quack", color: "bg-neutral-200" },
];

const RotatingBanner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);

  useAnimationFrame(() => {
    if (bannerRef.current) {
      xRef.current -= 0.1;
      if (xRef.current <= -100) {
        xRef.current = 0;
      }
      bannerRef.current.style.transform = `translateX(${xRef.current}%)`;
    }
  });

  return (
    <div>
      <div className="p-6 mb-4 flex justify-center items-center max-w-2xl mx-auto">
        <div className="relative h-9 w-full overflow-hidden bg-white">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-full w-full overflow-hidden mx-auto">
              <div
                ref={bannerRef}
                className="absolute inset-0 flex items-center space-x-8"
              >
                {[...bannerItems, ...bannerItems].map((item, index) => (
                  <div
                    key={index}
                    className={`flex h-7 items-center justify-center ${item.color} text-neutral-800 font-bold text-sm px-4 rounded-full shadow-sm whitespace-nowrap`}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Fade overlay */}
          <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default RotatingBanner;
