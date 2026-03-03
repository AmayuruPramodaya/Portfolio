import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-cyan-400">Amayuru Pramodaya</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Full Stack Developer | UI/UX Designer | Digital Creator
        </p>

        <p className="text-gray-500 mb-10">
          Passionate about building modern web applications and 
          creating impactful digital experiences.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link 
            to="/projects"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition"
          >
            View Projects
          </Link>

          <Link 
            to="/contact"
            className="px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg transition"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default Home