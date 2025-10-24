import { motion } from "framer-motion";
import { Code2, Smartphone, Shield, Share2, Video } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "React, Node.js, Next.js, TypeScript, PostgreSQL, MongoDB",
    level: 95,
    color: "from-cyan-500 to-blue-600",
    glowColor: "shadow-cyan-500/50",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Flutter, iOS & Android native development",
    level: 90,
    color: "from-purple-500 to-pink-600",
    glowColor: "shadow-purple-500/50",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Penetration Testing, Network Security, Vulnerability Assessment",
    level: 88,
    color: "from-red-500 to-orange-600",
    glowColor: "shadow-red-500/50",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Content Strategy, Brand Building, Digital Campaigns",
    level: 85,
    color: "from-green-500 to-emerald-600",
    glowColor: "shadow-green-500/50",
  },
  {
    icon: Video,
    title: "Videography & Editing",
    description: "Adobe Premiere, After Effects, Motion Graphics",
    level: 82,
    color: "from-violet-500 to-indigo-600",
    glowColor: "shadow-violet-500/50",
  },
];

export function Skills() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Mastering cutting-edge technologies to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glowing border effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`} />
              
              {/* Card */}
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-6 shadow-lg ${skill.glowColor} group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl text-white mb-3">{skill.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{skill.description}</p>

                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">Proficiency</span>
                    <span className="text-sm text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    />
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
                  <skill.icon className="w-full h-full text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-5xl mx-auto"
        >
          <h3 className="text-2xl text-white mb-6 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", 
              "MongoDB", "Docker", "AWS", "React Native", "Flutter", "TailwindCSS",
              "GraphQL", "Redis", "Kubernetes", "Firebase"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg text-slate-300 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 border border-white/10 hover:border-cyan-500/50"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
