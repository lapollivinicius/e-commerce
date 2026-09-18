import { motion } from "motion/react";

export default function TextSlide() {
  const messages = [
    "New drops coming soon",
    "Made for everyday wear",
    "Elevate your everyday",
    "Designed by a worm",
  ];

  return (
    <section className="w-full flex justify-center mb-3">
      <div className="w-full overflow-hidden text-foreground">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="flex shrink-0 items-center gap-12 px-6 py-3 font-bold uppercase">
            {messages.map((message, index) => (
              <span key={index} className="whitespace-nowrap">
                {message}
              </span>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-12 px-6 py-3 font-bold uppercase">
            {messages.map((message, index) => (
              <span key={`duplicate-${index}`} className="whitespace-nowrap">
                {message}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
