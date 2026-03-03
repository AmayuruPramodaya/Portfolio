import { motion } from "framer-motion"
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa"
import { SiFiverr } from "react-icons/si"

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 pb-20">
      <div className="max-w-6xl w-full">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 mx-auto"
          />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Email Box */}
            <div className="p-6 border border-gray-800 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 hover:border-cyan-500/50 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <FaEnvelope className="text-2xl text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Email Me</h3>
                  <p className="text-gray-400 text-sm">I'll respond within 24 hours</p>
                </div>
              </div>
              <a 
                href="mailto:pramodayaamayuru@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 transition font-medium break-all"
              >
                pramodayaamayuru@gmail.com
              </a>
            </div>

            {/* Social Media Links */}
            <div className="p-6 border border-gray-800 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
              <p className="text-gray-400 mb-6">Follow me on social media platforms</p>
              
              <div className="grid grid-cols-2 gap-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/amayuru-pramodaya-50703a298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800 transition-all"
                >
                  <FaLinkedin className="text-2xl text-blue-500 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition">LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/AmayuruPramodaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500/50 hover:bg-gray-800 transition-all"
                >
                  <FaGithub className="text-2xl text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition">GitHub</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-400/50 hover:bg-gray-800 transition-all"
                >
                  <FaFacebook className="text-2xl text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition">Facebook</span>
                </a>

                {/* Fiverr */}
                <a
                  href="https://fiverr.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-500/50 hover:bg-gray-800 transition-all"
                >
                  <SiFiverr className="text-2xl text-green-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition">Fiverr</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 border border-gray-800 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-300 font-medium">Name</label>
                <input 
                  type="text" 
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none text-white placeholder-gray-500 transition"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300 font-medium">Email</label>
                <input 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none text-white placeholder-gray-500 transition"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300 font-medium">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none text-white placeholder-gray-500 resize-none transition"
                />
              </div>
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact