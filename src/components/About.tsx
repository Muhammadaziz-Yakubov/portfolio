import { motion } from "framer-motion";
import { Award, Users, Briefcase, Building2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const milestones = [
  {
    icon: Award,
    title: "President Tech Award 2025",
    description: "Top 20 Technology Innovator",
    year: "2025",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Building2,
    title: "Founded InFast IT Academy",
    description: "200+ students trained in modern technologies",
    year: "2023",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Briefcase,
    title: "20+ Real Projects Delivered",
    description: "Government & enterprise level applications",
    year: "2020-2025",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "MIA & Andijan Police",
    description: "Cyber Security & Development Expert",
    year: "2024",
    color: "from-violet-500 to-indigo-500",
  },
];

export function About() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Building innovative solutions and empowering the next generation of developers
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative bg-slate-900 rounded-2xl p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjEyMjQwODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Muhammadaziz Yakubov"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>

            {/* Floating stat cards */}
            <motion.div
              className="absolute -top-6 -right-6 bg-gradient-to-br from-cyan-500/90 to-blue-600/90 backdrop-blur-sm p-4 rounded-xl shadow-lg shadow-cyan-500/50 border border-cyan-400/30"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-3xl text-white">200+</div>
              <div className="text-sm text-cyan-100">Students</div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500/90 to-pink-600/90 backdrop-blur-sm p-4 rounded-xl shadow-lg shadow-purple-500/50 border border-purple-400/30"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-3xl text-white">20+</div>
              <div className="text-sm text-purple-100">Projects</div>
            </motion.div>
          </motion.div>

          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-3xl mb-4 text-white">
                Founder of <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">InFast IT Ecosystem</span>
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                Leading a comprehensive IT ecosystem that includes InFast IT Academy, InFast IT Company, and InFast Jobs platform. My mission is to bridge the gap between education and industry while delivering cutting-edge technological solutions.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                With expertise spanning Full Stack Development, Mobile Applications, Cyber Security, and Digital Marketing, I bring a holistic approach to every project. My work with government institutions like MIA and Andijan Police demonstrates my commitment to building secure, scalable solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                <div className="text-4xl mb-2 text-cyan-400">3+</div>
                <div className="text-slate-300">Companies Founded</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <div className="text-4xl mb-2 text-purple-400">Top 20</div>
                <div className="text-slate-300">Tech Award 2025</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glowing border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${milestone.color} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500`} />
              
              <div className="relative bg-slate-900 rounded-2xl p-6 border border-white/10 h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${milestone.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <milestone.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="text-sm text-slate-500 mb-2">{milestone.year}</div>
                <h4 className="text-xl text-white mb-2">{milestone.title}</h4>
                <p className="text-slate-400">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
