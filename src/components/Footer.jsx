import { motion } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'How It Works', href: '#learn' },
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Newsroom', href: '#newsroom' },
      { name: 'Careers', href: '#careers' },
    ],
    resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Support', href: '#support' },
      { name: 'Community', href: '#community' },
    ],
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <motion.button
              onClick={() => navigate('/')}
              className="text-2xl font-bold text-white mb-4 inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
              whileHover={{ scale: 1.05 }}
              aria-label="PROMETHEO"
            >
              PROMETHEO
            </motion.button>
            <p className="text-gray-400 text-sm">
              We don't only analyse your impact, We make it stronger.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => { const el = document.querySelector(link.href); el ? el.scrollIntoView({ behavior: 'smooth' }) : navigate(link.href) }}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} PROMETHEO. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => { const el = document.querySelector('#privacy'); el ? el.scrollIntoView({ behavior: 'smooth' }) : null }} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
              Privacy
            </button>
            <button onClick={() => { const el = document.querySelector('#terms'); el ? el.scrollIntoView({ behavior: 'smooth' }) : null }} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
              Terms
            </button>
            <button onClick={() => { const el = document.querySelector('#cookies'); el ? el.scrollIntoView({ behavior: 'smooth' }) : null }} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

