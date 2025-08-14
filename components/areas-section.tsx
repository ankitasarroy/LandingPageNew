"use client"

import { Shield, GraduationCap, Heart, Truck, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import { useState } from "react"

const areas = [
  {
    icon: Shield,
    title: "Cyber Resilience with AI",
    description: "Advanced threat detection and response systems powered by machine learning algorithms.",
    color: "from-blue-400 to-cyan-400",
    detailedContent: {
      overview:
        "Our AI-powered cybersecurity solutions provide real-time threat detection, automated response systems, and predictive security analytics to protect organizations from evolving cyber threats.",
      keyFeatures: [
        "Real-time threat detection using machine learning algorithms",
        "Automated incident response and remediation",
        "Behavioral analysis for insider threat detection",
        "Predictive vulnerability assessment",
        "AI-driven security orchestration and automation",
      ],
      benefits: [
        "99.7% threat detection accuracy",
        "Reduced response time from hours to minutes",
        "Proactive threat hunting capabilities",
        "Continuous learning and adaptation to new threats",
      ],
      useCases: [
        "Enterprise network security monitoring",
        "Financial services fraud prevention",
        "Healthcare data protection",
        "Government infrastructure security",
      ],
    },
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Personalized learning platforms and intelligent tutoring systems for enhanced education.",
    color: "from-purple-400 to-pink-400",
    detailedContent: {
      overview:
        "Revolutionary AI-powered educational platforms that adapt to individual learning styles, providing personalized content delivery and intelligent assessment systems.",
      keyFeatures: [
        "Adaptive learning algorithms that adjust to student pace",
        "Voice and text integration for multimodal learning",
        "Intelligent content recommendation engine",
        "Real-time progress tracking and analytics",
        "AI-powered virtual tutoring assistants",
      ],
      benefits: [
        "40% improvement in learning retention rates",
        "Personalized learning paths for each student",
        "Reduced teacher workload through automation",
        "Enhanced accessibility for diverse learning needs",
      ],
      useCases: [
        "K-12 personalized learning platforms",
        "Corporate training and development",
        "Language learning applications",
        "Professional certification programs",
      ],
    },
  },
  {
    icon: Heart,
    title: "Medical",
    description: "AI-driven diagnostic tools and treatment optimization for improved healthcare outcomes.",
    color: "from-red-400 to-rose-400",
    detailedContent: {
      overview:
        "Cutting-edge medical AI solutions that enhance diagnostic accuracy, optimize treatment plans, and improve patient outcomes through intelligent healthcare analytics.",
      keyFeatures: [
        "Medical image analysis and diagnosis",
        "Predictive health analytics",
        "Drug discovery and development acceleration",
        "Treatment recommendation systems",
        "Patient monitoring and early warning systems",
      ],
      benefits: [
        "95% diagnostic accuracy improvement",
        "Reduced diagnosis time by 70%",
        "Personalized treatment recommendations",
        "Early disease detection capabilities",
      ],
      useCases: [
        "Radiology image analysis",
        "Pathology diagnosis assistance",
        "Clinical decision support systems",
        "Pharmaceutical research and development",
      ],
    },
  },
  {
    icon: Truck,
    title: "Supply Chain",
    description: "Intelligent logistics optimization and predictive analytics for supply chain management.",
    color: "from-orange-400 to-yellow-400",
    detailedContent: {
      overview:
        "AI-powered supply chain solutions that optimize logistics, predict demand, and enhance operational efficiency through intelligent automation and analytics.",
      keyFeatures: [
        "Demand forecasting and inventory optimization",
        "Route optimization and logistics planning",
        "Supplier risk assessment and monitoring",
        "Predictive maintenance for equipment",
        "Real-time supply chain visibility",
      ],
      benefits: [
        "30% reduction in operational costs",
        "Improved delivery time accuracy by 85%",
        "Reduced inventory waste and stockouts",
        "Enhanced supplier relationship management",
      ],
      useCases: [
        "E-commerce fulfillment optimization",
        "Manufacturing supply chain management",
        "Retail inventory management",
        "Global logistics coordination",
      ],
    },
  },
]

export function AreasSection() {
  const [expandedArea, setExpandedArea] = useState<number | null>(null)

  const toggleExpanded = (index: number) => {
    setExpandedArea(expandedArea === index ? null : index)
  }

  const openInNewTab = (area: (typeof areas)[0]) => {
    // Create a new window/tab with detailed content
    const newWindow = window.open("", "_blank")
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${area.title} - InnovIA Technologies</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            body { 
              background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
          </style>
        </head>
        <body class="min-h-screen text-white">
          <div class="container mx-auto px-4 py-12 max-w-6xl">
            <!-- Header -->
            <div class="text-center mb-12">
              <div class="w-20 h-20 mx-auto mb-6 rounded-xl bg-gradient-to-r ${area.color} p-4">
                <svg class="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                  <!-- Icon placeholder - would need actual SVG paths -->
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <h1 class="text-4xl md:text-5xl font-bold mb-4">
                <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ${area.title}
                </span>
              </h1>
              <p class="text-xl text-gray-300 max-w-3xl mx-auto">${area.description}</p>
            </div>

            <!-- Overview -->
            <div class="mb-12">
              <h2 class="text-2xl font-semibold text-blue-400 mb-4">Overview</h2>
              <p class="text-gray-300 text-lg leading-relaxed">${area.detailedContent.overview}</p>
            </div>

            <!-- Content Grid -->
            <div class="grid md:grid-cols-3 gap-8 mb-12">
              <!-- Key Features -->
              <div class="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                <h3 class="text-xl font-semibold text-purple-400 mb-4">Key Features</h3>
                <ul class="space-y-3">
                  ${area.detailedContent.keyFeatures
                    .map(
                      (feature) => `
                    <li class="text-gray-300 flex items-start">
                      <span class="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      ${feature}
                    </li>
                  `,
                    )
                    .join("")}
                </ul>
              </div>

              <!-- Benefits -->
              <div class="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                <h3 class="text-xl font-semibold text-green-400 mb-4">Benefits</h3>
                <ul class="space-y-3">
                  ${area.detailedContent.benefits
                    .map(
                      (benefit) => `
                    <li class="text-gray-300 flex items-start">
                      <span class="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      ${benefit}
                    </li>
                  `,
                    )
                    .join("")}
                </ul>
              </div>

              <!-- Use Cases -->
              <div class="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                <h3 class="text-xl font-semibold text-orange-400 mb-4">Use Cases</h3>
                <ul class="space-y-3">
                  ${area.detailedContent.useCases
                    .map(
                      (useCase) => `
                    <li class="text-gray-300 flex items-start">
                      <span class="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      ${useCase}
                    </li>
                  `,
                    )
                    .join("")}
                </ul>
              </div>
            </div>

            <!-- Call to Action -->
            <div class="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-400/20">
              <h3 class="text-2xl font-semibold mb-4">Ready to Transform Your Business?</h3>
              <p class="text-gray-400 mb-6 max-w-2xl mx-auto">
                Contact us to learn more about how our ${area.title.toLowerCase()} solutions can revolutionize your operations.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button onclick="window.opener.focus(); window.close();" 
                        class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Contact Us
                </button>
                <button onclick="window.opener.focus(); window.close();" 
                        class="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 bg-transparent">
                  Back to Main Site
                </button>
              </div>
            </div>

            <!-- Footer -->
            <div class="text-center mt-12 pt-8 border-t border-gray-700">
              <p class="text-gray-400">© 2024 InnovIA Technologies. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `)
      newWindow.document.close()
    }
  }

  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Areas of{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Development
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Exploring the frontiers of artificial intelligence across four critical industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div key={index} className="xl:col-span-1 md:col-span-1">
              <div
                className={`group relative bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 cursor-pointer card-3d depth-shadow ${
                  expandedArea === index ? "xl:col-span-4 md:col-span-2" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${area.color} p-4 group-hover:scale-110 transition-transform duration-300 pulse-3d`}
                    >
                      <area.icon className="w-full h-full text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          openInNewTab(area)
                        }}
                        className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                        title="Open in new tab"
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </button>
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-200"
                      >
                        {expandedArea === index ? (
                          <ChevronUp className="w-4 h-4 text-blue-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                        )}
                      </button>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {area.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {area.description}
                  </p>

                  {expandedArea === index && (
                    <div className="mt-8 space-y-8 border-t border-gray-700 pt-8">
                      {/* Overview */}
                      <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-3">Overview</h4>
                        <p className="text-gray-300 leading-relaxed">{area.detailedContent.overview}</p>
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Key Features */}
                        <div>
                          <h4 className="text-lg font-semibold text-purple-400 mb-4">Key Features</h4>
                          <ul className="space-y-2">
                            {area.detailedContent.keyFeatures.map((feature, idx) => (
                              <li key={idx} className="text-gray-300 text-sm flex items-start">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className="text-lg font-semibold text-green-400 mb-4">Benefits</h4>
                          <ul className="space-y-2">
                            {area.detailedContent.benefits.map((benefit, idx) => (
                              <li key={idx} className="text-gray-300 text-sm flex items-start">
                                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Use Cases */}
                        <div>
                          <h4 className="text-lg font-semibold text-orange-400 mb-4">Use Cases</h4>
                          <ul className="space-y-2">
                            {area.detailedContent.useCases.map((useCase, idx) => (
                              <li key={idx} className="text-gray-300 text-sm flex items-start">
                                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {useCase}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="text-center pt-4">
                        <button
                          onClick={() => openInNewTab(area)}
                          className="text-blue-400 hover:text-white text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                          <span>Learn More About {area.title} Solutions</span>
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
