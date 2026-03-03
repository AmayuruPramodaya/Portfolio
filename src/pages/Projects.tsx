import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaYoutube } from "react-icons/fa"
import { useState } from "react"

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "web" | "design" | "video">("all")

  // Your actual design files
  const flyerImages = [
    "flyer1.jpg",
    "flyer2.jpg",
    "flyer3.jpg",
    "flyer4.jpg",
    "flyer5.jpg",
    "flyer6.jpg",
    "flyer7.jpg",
    "common.jpeg",
    "countdown1.png",
    "elu4.png",
    "fct-srs.png",
    "fiver new.png",
    "fiverr4.1..png",
    "fiverr4.png",
    "getabaru_morawaka_page.png",
    "gig 4.1.png",
    "gig 4.2.png",
    "graphics post 1.png",
    "graphics post.png",
    "hair oil.png",
    "kaanchna sir.png",
    "kolamba kade english.png",
    "kolamba kade.png",
    "kottu.jpg",
    "ks ET 2.png",
    "manjusawa3.png",
    "morawaka-colombo.png",
    "morawak_page_poya2.png",
    "nikini_poya_morawaka_page.png",
    "peduru_sajje.png",
    "Purple 3d Illustrated Social Media Marketing Instagram Post11.png",
    "tamarind rets.jpg",
    "tasty burger.jpg",
    "uiux.png"
  ]

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto space-y-20 pb-20">

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "5rem" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 mx-auto"
        />
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
          My Projects
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A showcase of my work in web development, graphic design, and video editing
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {[
          { id: "all", label: "All Projects" },
          { id: "web", label: "Web Development" },
          { id: "design", label: "Graphic Design" },
          { id: "video", label: "Video Editing" }
        ].map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id as typeof activeCategory)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === category.id
                ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
            }`}
          >
            {category.label}
          </button>
        ))}
      </motion.div>

      <br/>
      <br/>
      

      {/* ===================== */}
      {/* 💻 WEB DEVELOPMENT */}
      {/* ===================== */}
      {(activeCategory === "all" || activeCategory === "web") && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
                Web Development Projects
              </h2>
            </div>
            <span className="text-gray-400 text-sm">
              4 Projects
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">

            <WebProjectCard
              title="CiviResolve"
              description="A civic issue resolution platform with AI-powered chatbot integration for efficient community problem-solving and government communication."
              role="Team Lead | Frontend Developer"
              tech={["React", "Tailwind", "Django", "AI Integration"]}
              github="#"
              demo="#"
              delay={0.1}
            />

            <WebProjectCard
              title="NTC Website Redesign"
              description="Modern redesign of Sri Lanka National Transport Commission website with improved UX/UI and responsive design."
              role="Fullstack Developer"
              tech={["React", "Tailwind", "Django", "REST API"]}
              github="#"
              demo="#"
              delay={0.2}
            />

            <WebProjectCard
              title="Vehicle Customization App"
              description="Interactive web app allowing users to upload vehicle images and preview custom modifications in real-time."
              role="Frontend Developer"
              tech={["React", "Tailwind", "Canvas API"]}
              github="#"
              demo="#"
              delay={0.3}
            />

            <WebProjectCard
              title="Discover Sri Lanka"
              description="Tourism-focused frontend website showcasing Sri Lankan destinations with beautiful imagery and interactive features."
              role="Frontend Developer"
              tech={["HTML", "CSS", "JavaScript", "Bootstrap"]}
              github="#"
              demo="#"
              delay={0.4}
            />

          </div>
        </motion.section>
      )}

      <br/>
      <br/>

      {/* ===================== */}
      {/* 🎬 VIDEO EDITING */}
      {/* ===================== */}
      {(activeCategory === "all" || activeCategory === "video") && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
              Video Editing Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <VideoCard
              title="FRESHER'S DANCE |සැළලිහිණි '25 | FCT | UOK"
              description="Video Editor"
              videoId="cm5Wdo9gMSQ"
              delay={0.1}
            />

            <VideoCard
              title="Baisikalaya (බයිසිකලය) | සැළලිහිණි '25 | FCT | UOK"
              description="Video Editor"
              videoId="5kK9NX_U0r8"
              delay={0.2}
            />

            <VideoCard
              title="පූජා නර්තනය | සැළලිහිණි '25 | FCT | UOK"
              description="Video Editor"
              videoId="GUmw9ZS2u4c"
              delay={0.3}
            />

            <VideoCard
              title="ආකාසයේ දුර ගිම්හාන | සැළලිහිණි '25 | FCT | UOK"
              description="Video Editor"
              videoId="0npLOmJZOWA"
              delay={0.4}
            />

          </div>
        </motion.section>
      )}

      <br/>
      <br/>

      {/* ===================== */}
      {/* 🎨 GRAPHIC DESIGN - Gallery View */}
      {/* ===================== */}
      {(activeCategory === "all" || activeCategory === "design") && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
                Graphic Design Gallery
              </h2>
            </div>
            <span className="text-gray-400 text-sm">
              {flyerImages.length} Designs
            </span>
          </div>

          {/* Gallery Grid - Masonry Style */}
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
            {flyerImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.02, 0.5) }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="group relative overflow-hidden rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-all cursor-pointer break-inside-avoid mb-4"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/designs/${encodeURIComponent(img)}`}
                  alt={`Design ${index + 1}`}
                  className="w-full h-auto block group-hover:scale-110 transition-transform duration-300"
                />
                {/* Simple overlay on hover - no text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </div>
  )
}

/* ===================== */
/* 🎬 VIDEO CARD */
/* ===================== */

interface VideoCardProps {
  title: string
  description: string
  videoId: string
  delay?: number
}

const VideoCard = ({ title, description, videoId, delay = 0 }: VideoCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="group relative border border-gray-800 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 hover:border-cyan-500/50 transition-all overflow-hidden"
  >
    {/* Background gradient on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="relative">
      {/* YouTube Video Embed */}
      <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <FaYoutube className="text-2xl text-red-500" />
          <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition">{title}</h3>
        </div>
        <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>

        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group/link"
        >
          <FaExternalLinkAlt className="text-sm group-hover/link:translate-x-1 transition-transform" />
          Watch on YouTube
        </a>
      </div>
    </div>
  </motion.div>
)

/* ===================== */
/* 💻 WEB PROJECT CARD */
/* ===================== */

interface WebProjectCardProps {
  title: string
  description: string
  role: string
  tech: string[]
  github: string
  demo: string
  delay?: number
}

const WebProjectCard = ({
  title,
  description,
  role,
  tech,
  github,
  demo,
  delay = 0
}: WebProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="group relative p-6 border border-gray-800 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 hover:border-blue-500/50 transition-all overflow-hidden"
  >
    {/* Background gradient on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="relative">
      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-400 mb-3 leading-relaxed">
        {description}
      </p>
      
      {/* Role */}
      <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-500/30">
        {role}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1.5 text-xs font-medium bg-gray-800/80 rounded-lg text-gray-300 border border-gray-700 hover:border-blue-500/50 hover:text-blue-400 transition"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-white font-medium group/link transition"
        >
          <FaGithub className="text-lg group-hover/link:scale-110 transition-transform" /> 
          GitHub
        </a>

        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group/link transition"
        >
          <FaExternalLinkAlt className="text-sm group-hover/link:translate-x-1 transition-transform" /> 
          Live Demo
        </a>
      </div>
    </div>
  </motion.div>
)

export default Projects