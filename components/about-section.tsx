export function AboutSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-[url('/futuristic-ai-background.png')] bg-cover bg-center opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">InnovIA</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-400">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              At InnovIA Technologies, we are pioneering the next generation of artificial intelligence solutions. Our
              mission is to harness the transformative power of AI to solve complex challenges across critical
              industries, creating a more secure, efficient, and intelligent future.
            </p>

            <h3 className="text-2xl font-semibold text-purple-400">Our Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              We envision a world where AI seamlessly integrates into every aspect of human endeavor, enhancing
              capabilities while maintaining ethical standards and human-centered design principles. Through
              cutting-edge research and development, we're building the foundation for tomorrow's intelligent systems.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-400/20 card-3d depth-shadow">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 hover:scale-110 transition-transform duration-300 float-3d pulse-3d">
                    <img
                      src="/innovia-logo.png"
                      alt="InnovIA Technologies Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-2xl font-semibold text-white mb-4">Innovation at Core</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Driving breakthrough innovations in artificial intelligence across multiple industries, focusing on
                    practical solutions that make a real-world impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
