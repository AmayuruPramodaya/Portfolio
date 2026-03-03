import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FiMenu, FiX } from "react-icons/fi"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-[#0a0e1a]/95 via-[#0f172a]/95 to-[#0a0e1a]/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="group flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-300">
            <span className="text-lg font-black text-white">AP</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            AMAYURU PRAMODAYA
          </h1>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/projects", label: "Projects" },
            { path: "/contact", label: "Contact" }
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                isActive(path)
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              {label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-300 ${
                  isActive(path) ? "w-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" : "w-0 group-hover:w-full"
                }`}
              />
              {isActive(path) && (
                <span className="absolute inset-0 bg-cyan-400/5 rounded-lg -z-10" />
              )}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors relative p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="absolute inset-0 bg-cyan-400/10 rounded-lg blur-sm" />
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a0e1a]/98 backdrop-blur-xl border-t border-cyan-500/20">
          <div className="px-6 py-4 space-y-3">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Me" },
              { path: "/projects", label: "Projects" },
              { path: "/contact", label: "Contact Me" }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(path)
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    : "text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar