import { motion } from "framer-motion";

export const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.75 },
    },
  };

  const cards = [
    {
      title: "First Contact",
      content:
        "Our AI providers never store your information. This sentence needs to be longer for the card to look good.",
      isDark: true,
    },
    {
      title: "UX/UI Design",
      content:
        "Your data is encrypted at rest and in transit, processed on our servers in your region of choice. Some more words here.",
      isDark: false,
    },
    {
      title: "Development & Engineering",
      content:
        "Your data is never used to train general AI models. A few more words at the end here rounds it off.",
      isDark: true,
    },
    {
      title: "Quality Assurance",
      content:
        "Your data is encrypted at rest and in transit, processed on our servers in your region of choice. Some more words here.",
      isDark: false,
    },
    {
      title: "Launch & Deployment",
      content:
        "Your data is encrypted at rest and in transit, processed on our servers in your region of choice. Some more words here.",
      isDark: true,
    },
    {
      title: "Post-Launch & Support",
      content:
        "Your data is encrypted at rest and in transit, processed on our servers in your region of choice. Some more words here.",
      isDark: false,
    },
  ];

  return (
    <div>
      <section className="bg-[#1C1C1E] py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-gray-800/50">
              <span className="text-white">Services</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              We have the best services possible
            </h2>
            <p className="text-gray-400 text-xl">
              Our services will be your top priority.
            </p>
          </div>

          {/* Motion Container */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className={`${
                  card.isDark ? "bg-gray-600/30" : "bg-neutral-50"
                } rounded-3xl p-8 backdrop-blur-sm overflow-hidden group`}
                variants={itemVariants}
              >
                <h3
                  className={`${
                    card.isDark ? "text-white" : "text-dark"
                  } text-2xl font-semibold mb-4`}
                >
                  {card.title}
                </h3>
                <p className="text-gray-400">{card.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
