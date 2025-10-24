import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Aziza Karimova",
    role: "Student, InFast IT Academy",
    content: "Muhammadaziz is an exceptional mentor. His teaching methodology and real-world project approach helped me land my first developer job within 3 months of completing the course.",
    rating: 5,
  },
  {
    name: "Bobur Alimov",
    role: "CEO, Tech Solutions Uz",
    content: "Working with Muhammadaziz on our government project was outstanding. His expertise in cyber security and full-stack development exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Dilnoza Rashidova",
    role: "HR Manager, InFast Jobs",
    content: "The InFast Jobs platform has revolutionized how we connect talent with opportunities. The platform is intuitive, powerful, and perfectly tailored to the IT industry.",
    rating: 5,
  },
  {
    name: "Jamshid Yusupov",
    role: "Student, InFast IT Academy",
    content: "From zero to hero! The comprehensive curriculum and hands-on projects gave me the confidence to start my own freelance career. Best investment I've made.",
    rating: 5,
  },
  {
    name: "Nigora Sharipova",
    role: "Digital Marketing Lead",
    content: "His expertise in SMM and content strategy helped our brand grow 300% in just 6 months. A true professional who delivers results.",
    rating: 5,
  },
  {
    name: "Sardor Mirzayev",
    role: "Mobile Developer",
    content: "Learning mobile development under Muhammadaziz's guidance was transformative. His practical approach and industry insights are invaluable.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            What People Say
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Testimonials from students, clients, and partners
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glowing effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
              
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-cyan-500/30" />
                </div>

                {/* Content */}
                <p className="text-slate-300 leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-white mb-1">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="w-full h-full text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-12 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-3xl text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl text-slate-300 mb-8">
              Join 200+ students at InFast IT Academy and transform your career
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg shadow-lg shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
              Enroll Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
