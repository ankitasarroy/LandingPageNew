import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-[url('/futuristic-ai-neural-network-animation.png')] bg-cover bg-center opacity-20"></div>
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-8 perspective-container">
          <img
            src="/innovia-logo.png"
            alt="InnovIA Technologies Logo"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 float-3d hover:scale-110 transition-transform duration-300 depth-shadow"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tilt-hover">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            InnovIA Technologies
          </span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-8">
          Shaping the Future with Artificial Intelligence
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Innovative AI solutions in Cyber Resilience, Education, Payments, Medical, and Supply Chain
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="btn-3d bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform"
          >
            Learn More
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="btn-3d border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
          >
            Read Our Articles
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-blue-400" />
      </div>
    </section>
  )
}
