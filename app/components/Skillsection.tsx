import React from "react";

const SkillsSection = () => {
  const skills = {
    "🎨 Design Skills": [
      "UI Design",
      "UX Design",
      "Wireframing",
      "Prototyping",
      "User Flows",
      "Social Media Graphics",
    ],
    "🛠 Tools & Software": [
      "Figma",
      "Adobe XD",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Sketch",
    ],
    "📈 Digital Marketing": [
      "ASO",
      "Social Media Marketing",
      "Brand Strategy",
      "Content Creation",
      "Analytics",
    ],
    "💼 Business Skills": [
      "Client Relations",
      "Project Management",
      "Entrepreneurship",
      "Customer Experience",
      "Team Collaboration",
    ],
  };

  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        {/* Skills by Category */}
        <div className="grid gap-12 md:grid-cols-2">
          {Object.entries(skills).map(([category, items], idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white shadow-sm text-pink-700 rounded-full text-sm font-medium border border-pink-200 hover:bg-pink-100 hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
