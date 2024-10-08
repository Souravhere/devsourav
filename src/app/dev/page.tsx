'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiReact, SiVite, SiFigma, SiNextdotjs } from 'react-icons/si'
import { TbSeo } from 'react-icons/tb'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: 'bg-cyan-500' },
  { icon: <SiJavascript />, name: 'JavaScript', color: 'bg-yellow-400' },
  { icon: <SiReact />, name: 'React.js', color: 'bg-blue-400' },
  { icon: <SiVite />, name: 'Vite.js', color: 'bg-purple-500' },
  { icon: <TbSeo />, name: 'SEO', color: 'bg-green-500' },
  { icon: <SiFigma />, name: 'Figma', color: 'bg-pink-500' },
  { icon: <SiNextdotjs />, name: 'Next.js', color: 'bg-white text-black' },
]

export default function DevPage() {
  const [activeSkill, setActiveSkill] = useState(null)

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="container mx-auto max-w-4xl">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
          </motion.div>
          <h1 className="text-4xl font-bold mb-2 text-gray-100">Sourav Chhimpa</h1>
          <h2 className="text-2xl text-gray-300">Freelance Web Developer</h2>
          <p className="text-lg mt-2 text-gray-400">Rajasthan, India</p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-gray-800 text-gray-100 p-6 mb-8 border-gray-700">
            <CardContent>
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">About Me</h3>
              <p className="text-lg leading-relaxed text-gray-300">
                Passionate about crafting exceptional digital experiences, I bring your ideas to life with fully animated and interactive websites. My expertise extends beyond coding to include SEO optimization and intuitive design with Figma, ensuring your website not only looks amazing but also performs flawlessly.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-gray-800 text-gray-100 p-6 mb-8 border-gray-700">
            <CardContent>
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">Skills & Expertise</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
                  >
                    <Badge 
                      variant="secondary" 
                      className={`w-full h-full flex flex-col items-center justify-center p-3 cursor-pointer ${skill.color}`}
                    >
                      <span className="text-3xl mb-2">{skill.icon}</span>
                      <span className="text-xs text-center">{skill.name}</span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
              <AnimatePresence>
                {activeSkill && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 p-4 bg-gray-700 rounded-lg"
                  >
                    <p className="text-sm text-gray-200">
                      {`${activeSkill} is one of my core skills. I have extensive experience using it in various projects.`}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="bg-gray-800 text-gray-100 p-6 mb-8 border-gray-700">
            <CardContent>
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">Connect with Me</h3>
              <div className="flex justify-center space-x-6">
                <SocialLink href="https://www.linkedin.com/in/sourav-chhimpa/" icon={<FaLinkedin />} label="LinkedIn" />
                <SocialLink href="https://github.com/Souravhere" icon={<FaGithub />} label="GitHub" />
                <SocialLink href="mailto:souravchhimpa1@gmail.com" icon={<FaEnvelope />} label="Email" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12 text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Sourav Chhimpa. All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  )
}

function SocialLink({ href, icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="text-4xl text-gray-300 hover:text-gray-100 transition-colors duration-300"
    >
      {icon}
      <span className="sr-only">{label}</span>
    </motion.a>
  )
}