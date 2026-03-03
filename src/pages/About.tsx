import React from "react"
import { motion } from "framer-motion"
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaUniversity,
  FaUserGraduate,
  FaCode,
  FaLightbulb,
} from "react-icons/fa"
import {
  SiTailwindcss,
  SiDjango,
  SiJavascript,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobepremierepro,
} from "react-icons/si"
import { MdWork, MdVolunteerActivism } from "react-icons/md"

const About = () => {
  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto space-y-20 pb-20">

      {/* 1️⃣ ABOUT INTRO - Enhanced */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6"
        />
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-8">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed text-lg">
              I am an <span className="text-cyan-400 font-semibold">ICT undergraduate student</span> at the University of Kelaniya 
              with a strong passion for <span className="text-cyan-400 font-semibold">Full Stack Development</span>, and digital creativity.
            </p>
            
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-4 hover:border-cyan-400/50 transition"
            >
              <FaCode className="text-3xl text-cyan-400 mb-2" />
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-sm text-gray-400">Projects Built</div>
            </motion.div>
            
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4 hover:border-blue-400/50 transition"
            >
              <FaLightbulb className="text-3xl text-blue-400 mb-2" />
              <div className="text-2xl font-bold text-white">5+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </motion.div> */}
          </div>
        </div>
      </motion.section>

      {/* 2️⃣ EDUCATION TIMELINE - Compact */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "3rem" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6">
          Education
        </h2>

        <div className="relative border-l-2 border-cyan-500/30 space-y-6 pl-6 ml-6">

          {/* University */}
          <TimelineItem
            icon={<FaUniversity />}
            title="University of Kelaniya"
            subtitle="Bachelor of Information Communication Technology"
            period="2024 - Present"
            color="cyan"
            delay={0.1}
          />

          <br/>

          {/* School 1 */}
          <TimelineItem
            icon={<FaUserGraduate />}
            title="MR/Morawaka Keerthi Abeywickrama National School"
            subtitle="Secondary Education"
            period="2014 – 2023"
            color="blue"
            delay={0.2}
          />

          <br/>

          {/* School 2 */}
          <TimelineItem
            icon={<FaUserGraduate />}
            title="MR/Morawaka Primary School"
            subtitle="Primary Education"
            period="2009 – 2013"
            color="blue"
            delay={0.3}
          />

          <br/>

          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[1.8rem] w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center border-3 border-gray-900">
              <MdWork className="text-white text-xs" />
            </div>
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-lg p-3 hover:border-indigo-400/50 transition group">
              <h3 className="text-sm font-semibold text-white group-hover:text-indigo-400 transition mb-2">
                Certificates
              </h3>
              <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                <span className="bg-indigo-500/20 px-2 py-1 rounded">Web Development</span>
                <span className="bg-indigo-500/20 px-2 py-1 rounded">Digital Marketing</span>
              </div>
            </div>
          </motion.div>

          <br/>

        </div>
      </motion.section>

      {/* 3️⃣ SKILLS - Enhanced with Progress Bars */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6"
        /> */}
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-12">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-cyan-400">
              Technical Skills
            </h3>
            <div className="space-y-6">

              <SkillBar icon={<FaReact />} name="React" level={75} color="cyan" />
              <SkillBar icon={<SiJavascript />} name="JavaScript" level={75} color="yellow" />
              <SkillBar icon={<SiTailwindcss />} name="Tailwind CSS" level={75} color="blue" />
              <SkillBar icon={<SiDjango />} name="Django" level={30} color="green" />
              <SkillBar icon={<FaHtml5 />} name="HTML5" level={80} color="orange" />
              <SkillBar icon={<FaCss3Alt />} name="CSS3" level={80} color="blue" />
              <SkillBar icon={<FaGitAlt />} name="Git" level={75} color="red" />
              <SkillBar icon={<FaGithub />} name="GitHub" level={75} color="purple" />
              <SkillBar icon={<SiAdobephotoshop />} name="Photoshop" level={90} color="blue" />
              <SkillBar icon={<SiAdobeaftereffects />} name="After Effects" level={30} color="purple" />
              <SkillBar icon={<SiAdobepremierepro />} name="Premiere Pro" level={75} color="purple" />


            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-blue-400">
              Soft Skills
            </h3>
            <div className="space-y-5">
              <SoftSkill name="Leadership" level={90} delay={0.1} />
              <SoftSkill name="Communication" level={85} delay={0.2} />
              <SoftSkill name="Teamwork" level={95} delay={0.3} />
              <SoftSkill name="Problem Solving" level={88} delay={0.4} />
              <SoftSkill name="Adaptability" level={92} delay={0.5} />
            </div>
          </div>

        </div>
      </motion.section>

      {/* 4️⃣ EXTRACURRICULAR - Timeline Style */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "3rem" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6">
          Extracurricular Activities
        </h2>

        <div className="relative border-l-2 border-cyan-500/30 space-y-6 pl-6 ml-6">

          {/* Vice President */}
          <TimelineItem
            icon={<MdVolunteerActivism />}
            title="Vice President - Legion Society"
            subtitle="University of Kelaniya | Leading student initiatives and organizing events"
            period="2025 - Present"
            color="cyan"
            delay={0.1}
          />

          <br/>

          {/* Co-Editor */}
          <TimelineItem
            icon={<FaLightbulb />}
            title="Co-Editor - Legion Society"
            subtitle="University of Kelaniya | Content creation and editorial management"
            period="2024 - 2025"
            color="blue"
            delay={0.2}
          />

          <br/>

          {/* CodeFets Hackathon */}
          <TimelineItem
            icon={<FaCode />}
            title="CodeFets Hackathon - Top 10 Finalist"
            subtitle="Team CodeX | SLIIT | Innovative software development challenge"
            period="2025"
            color="cyan"
            delay={0.3}
          />

          <br/>

          {/* Devthon Hackathon */}
          <TimelineItem
            icon={<FaCode />}
            title="Devthon 3.0 - Semi Finalist"
            subtitle="Team Colors | University of Moratuwa | Technical innovation competition"
            period="2026"
            color="blue"
            delay={0.4}
          />

          <br/>

          {/* FCT Shield 2026 */}
          <TimelineItem
            icon={<FaLightbulb />}
            title="Media Team Member - FCT Shield 2026"
            subtitle="University of Kelaniya | Event photography and video coverage"
            period="2026"
            color="purple"
            delay={0.5}
          />

          <br/>

          {/* FCT Shield 2025 */}
          <TimelineItem
            icon={<FaLightbulb />}
            title="Media Team Member - FCT Shield 2025"
            subtitle="University of Kelaniya | Event documentation and content creation"
            period="2025"
            color="cyan"
            delay={0.6}
          />

          <br/>

          {/* FCT Research Symposium */}
          <TimelineItem
            icon={<FaLightbulb />}
            title="Design Team Member - FCT Research Symposium"
            subtitle="University of Kelaniya | Graphic design and visual communications"
            period="2025"
            color="blue"
            delay={0.7}
          />

          <br/>

          {/* President Media Unit */}
          <TimelineItem
            icon={<MdVolunteerActivism />}
            title="President - School Media Unit"
            subtitle="MR/Morawaka Keerthi Abeywickrama National School | Led media operations"
            period="2018 - 2019"
            color="purple"
            delay={0.8}
          />

          <br/>

          {/* Senior Prefect */}
          <TimelineItem
            icon={<MdVolunteerActivism />}
            title="Senior Prefect"
            subtitle="MR/Morawaka Keerthi Abeywickrama National School | Student leadership role"
            period="2018 - 2019"
            color="cyan"
            delay={0.9}
          />

          <br/>

        </div>
      </motion.section>

    </div>
  )
}

// ============================================
// COMPONENT INTERFACES
// ============================================

interface TimelineItemProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  period: string
  color: "cyan" | "blue" | "purple"
  delay: number
}

interface SkillBarProps {
  icon: React.ReactNode
  name: string
  level: number
  color: string
}

interface SoftSkillProps {
  name: string
  level: number
  delay: number
}

// ============================================
// TIMELINE ITEM COMPONENT
// ============================================

const TimelineItem = ({ icon, title, subtitle, period, color, delay }: TimelineItemProps) => {
  const colorMap = {
    cyan: "from-cyan-500 to-blue-500 border-cyan-500/30 hover:border-cyan-400/50 text-cyan-400",
    blue: "from-blue-500 to-purple-500 border-blue-500/30 hover:border-blue-400/50 text-blue-400",
    purple: "from-purple-500 to-pink-500 border-purple-500/30 hover:border-purple-400/50 text-purple-400",
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className={`absolute -left-[1.8rem] w-6 h-6 bg-gradient-to-br ${colorMap[color].split(" ")[0]} ${colorMap[color].split(" ")[1]} rounded-full flex items-center justify-center border-3 border-gray-900`}>
        <span className="text-white text-xs">{icon}</span>
      </div>
      <div className={`bg-gradient-to-br ${colorMap[color].split(" ")[0]}/10 ${colorMap[color].split(" ")[1]}/10 border ${colorMap[color].split(" ")[2]} rounded-lg p-3 ${colorMap[color].split(" ")[3]} transition group`}>
        <h3 className={`text-base font-semibold text-white group-hover:${colorMap[color].split(" ")[4]} transition mb-1`}>
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-0.5">{subtitle}</p>
        <p className="text-xs text-gray-500">{period}</p>
      </div>
    </motion.div>
  )
}

// ============================================
// SKILL BAR COMPONENT
// ============================================

const SkillBar = ({ icon, name, level, color }: SkillBarProps) => {
  const colorClasses: Record<string, string> = {
    cyan: "bg-cyan-400",
    yellow: "bg-yellow-400",
    blue: "bg-blue-400",
    green: "bg-green-400",
    orange: "bg-orange-400",
    red: "bg-red-400",
    purple: "bg-purple-400",
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className={`text-xl ${colorClasses[color]} transition`}>{icon}</span>
          <span className="text-white group-hover:text-cyan-400 transition">{name}</span>
        </div>
        <span className="text-gray-400 text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`h-full ${colorClasses[color]} rounded-full`}
        />
      </div>
    </motion.div>
  )
}

// ============================================
// SOFT SKILL COMPONENT
// ============================================

const SoftSkill = ({ name, level, delay }: SoftSkillProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-white">{name}</span>
        <span className="text-gray-400 text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
        />
      </div>
    </motion.div>
  )
}

export default About