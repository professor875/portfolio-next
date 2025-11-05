'use client';
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import me from "../public/me.png"
const projects = [
  {
    title: "Tabootv",
    description:
        "Taboo.TV is a private, content-driven platform created by a YouTuber to entertain their community while offering greater control and flexibility compared to YouTube.",
    image:me,
    link: "https://tabootv.com",
  },
  {
    title: "Capitalclub",
    description:
        "Capital Club is a private ecosystem and academy. It offers members access to exclusive courses, networking events, and a VIP marketplace with discounted products and services.",
    image:me,
    link: "https://capitalclub.com",
  },
  {
    title: "Andalus",
    description:
        "Andalus Institute is an online platform dedicated to teaching Arabic, offering structured learning with real-time support, live speaking sessions, and a supportive community.",
    image:me,
    link: "https://andalusinstitute.com",
  },
];

export default function ProjectsSection() {
  return (
      <section className="text-white py-20">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-2">All Creative Works.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my favorite projects — blending performance, aesthetics, and seamless user experience.
          </p>
          <a
              href="#"
              className="text-green-400 mt-4 inline-block hover:underline"
          >
            Explore more →
          </a>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
              <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Image */}
                <div className="relative w-full lg:w-1/2 h-72 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-2xl"
                  />
                </div>

                {/* Info */}
                <div className="lg:w-1/2 space-y-4">
                  <h3 className="text-2xl font-semibold flex items-center gap-2">
                    {project.title}
                    <a
                        href={project.link}
                        target="_blank"
                        className="text-gray-400 hover:text-green-400"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
          ))}
        </div>
      </section>
  );
}
