import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Moon, Sun } from "lucide-react"
import { DarkModeContext, AuthContext } from "../App"
import { motion } from "framer-motion"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { darkMode, setDarkMode } = useContext(DarkModeContext)
  const { isAuthenticated, logout } = useContext(AuthContext)

  return (
    <header
      className={`${darkMode ? "bg-black" : "bg-white"} text-${darkMode ? "white" : "blue-900"} shadow-lg sticky top-0 z-50 transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            MediCare
          </Link>
          <motion.div className="hidden md:flex space-x-4 items-center">
            {["Home", "About", "Medicine Suggestion", "Consultation", "Articles", "News", "Feedback", "Contact"].map(
              (item) => (
                <motion.div key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className={`hover:text-blue-500 transition duration-300`}
                  >
                    {item}
                  </Link>
                </motion.div>
              ),
            )}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full hover:bg-${darkMode ? "gray-800" : "gray-200"} transition duration-300`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </motion.button>
            {isAuthenticated ? (
              <motion.button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Logout
              </motion.button>
            ) : (
              <>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/login"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
                  >
                    Login
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/register"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Register
                  </Link>
                </motion.div>
              </>
            )}
          </motion.div>
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full hover:bg-${darkMode ? "gray-800" : "gray-200"} transition duration-300 mr-2`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </motion.button>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={`md:hidden ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Home", "About", "Medicine Suggestion", "Consultation", "Articles", "News", "Feedback", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className={`block px-3 py-2 rounded-md text-base font-medium hover:text-blue-500 hover:bg-${darkMode ? "gray-800" : "gray-200"} transition duration-300`}
                >
                  {item}
                </Link>
              ),
            )}
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-red-600 text-white hover:bg-red-700 transition duration-300"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-green-600 text-white hover:bg-green-700 transition duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

