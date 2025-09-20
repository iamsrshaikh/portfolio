"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { BackgroundAnimation } from "../components";

const experiences = [
  {
    title: "CFARER - A DNV Company",
    logo: "/images/cfarer_logo.jpg",
    roles: [
      {
        title: "Senior Frontend Engineer",
        company: "CFARER - A DNV Company",
        period: "September 2025 - Present",
        points: [
          "Currently building and maintaining micro-frontend applications in Svelte and React for maritime business solutions at DNV."
        ],
      },
    ],
  },
  {
    title: "BharatPe",
    logo: "/images/Bharatpe.png",
    roles: [
      {
        title: "Software Engineer",
        company: "BharatPe - Resilient Innovations Private Ltd",
        period: "June 2025 – September 2025",
        points: [
          "Revamped the BharatPe merchant app’s UI, resulting in a modernized user experience",
          "Implemented React-based frontend flows for configuring and launching ads on BharatPe speakers.",
          "Designed and developed a device migration flow in React with modal-driven updates, toast notifications, and pending state handling to streamline multi-device migrations",
          "Implemented Mixpanel event tracking on UI card scroll visibility in the BharatPe Speaker app, enabling the product team to monitor user journeys and optimize engagement strategies"
        ],
      },
    ],
  },
  {
    title: "Paytm",
    logo: "/images/paytm-logo.png",
    roles: [
      {
        title: "Software Engineer",
        company: "Paytm - One97 Communications Ltd",
        period: "July 2022 – May 2025",
        points: [
          "Part of the Frontend team to develop Micro Frontend applications—Paytm Monthly SIP, Daily SIP, and Mutual Fund Reports",
          "Worked on critical task for regular MF for KYC Flows",
          "Leading frontend efforts for the Mutual Funds H5 app across mobile platforms",
          "Building production-ready pages using AI-driven tooling",
          "Revamped Paytm Gold, growing user engagement significantly and Introduced Daily SIP, resulting in ₹9.5Cr revenue on Akshaya Tritiya",
        ],
      },
      {
        title: "Software Engineer Intern",
        company: "Paytm - One97 Communications Ltd",
        period: "Jan 2022 – June 2022",
        points: [
          "Migrated flows from React to Svelte, improving performance using Cursor AI",
          "Implemented unit testing (Jest.js) and end-to-end testing (Cypress)",
          "Contributed to Paytm Money’s internal library, developing 10+ reusable components using Storybook, ensuring customization, theming and accessibility.",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen p-8 mt-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <BackgroundAnimation />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Work Experience
        </h1>

        <div className="space-y-8">
          {experiences.map((company, companyIndex) => (
            <motion.div
              key={companyIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: companyIndex * 0.2 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12">
                  <Image
                    src={company.logo}
                    alt={`${company.title} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {company.title}
                </h2>
              </div>
              <div className="space-y-8">
                {company.roles.map((role, roleIndex) => (
                  <motion.div
                    key={roleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: companyIndex * 0.2 + roleIndex * 0.1 }}
                    className="border-l-4 border-blue-600 pl-6 ml-4"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {role.title}
                    </h3>
                    <h4 className="text-lg text-gray-700 dark:text-gray-300">
                      {role.company}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {role.period}
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      {role.points.map((point, i) => (
                        <li
                          key={i}
                          className="text-gray-700 dark:text-gray-300"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
