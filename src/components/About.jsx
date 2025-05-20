import React from "react";
import girls from "../img/girls.jpg";
function About() {
  return (
    <div
      id="About"
      className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">
            Hi, I'm Akshitha Krishna
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"></p>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-full blur-lg opacity-20"></div>
          <img
            src={girls}
            alt="Profile"
            className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48 object-cover"
          />
        </div>

        {/* Professional Background */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            My Journey ....
          </h2>
          <div className="space-y-6 text-left max-w-4xl mx-auto">
            <p className="text-lg text-gray-600">
              "My journey , began wondering how efficiently a system works . It
              ignited my mind to know more about websites, browsers, programming
              languages and mobile apps.
            </p>
            <p className="text-lg text-gray-600">
              Currently, I'm focused on learning web development using different
              tools and platforms.I'm on my way to put my creativity to build
              solutions to real word problems."
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-blue-600 font-semibold mb-4">
              Front-end Basics
            </h3>
            <p className="text-lg text-gray-600">
              Learning to build responsive, user-friendly interfaces with HTML,
              CSS and JavaScript.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-green-600 font-semibold mb-4">
              Back-end Basics
            </h3>
            <p className="text-lg text-gray-600">
              Understanding the server-side, database handling with python and
              python-based web framework Django.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-yellow-600 font-semibold mb-4">
              UI/UX Design
            </h3>
            <p className="text-lg text-gray-600">
              Designing intuitive and engaging user experiences with a focus on
              accessibility and performance.
            </p>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-indigo-900 mb-8 text-center">
            Beyond Coding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto ">
            <div className="space-y-3 border-rounded shadow-lg px-4 py-3 ">
              <h3 className="text-2xl text-blue-800 font-semibold ">
                Cultural Activities
              </h3>
              <p className="text-lg text-gray-600">
                Passionate about singing and dancing ,have been actively studing
                music for past 1 year.
              </p>
            </div>
            <div className="space-y-3  border-rounded shadow-lg px-4 py-3">
              <h3 className="text-2xl text-teal-600 font-semibold">
                Creative Pursuits
              </h3>
              <p className="text-lg text-gray-600">
                Enjoys crafts, bottle art and wall arts.
              </p>
            </div>
            <div className="space-y-3  border-rounded shadow-lg px-4 py-3">
              <h3 className="text-2xl text-green-500 font-semibold">
                Literary Imagination
              </h3>
              <p className="text-lg text-gray-600">
                Hobbyist writer making creative, imaginative and expressive
                stories.
              </p>
            </div>
            <div className="space-y-3 border-rounded shadow-lg px-4 py-3">
              <h3 className="text-2xl text-yellow-500 font-semibold">
                Continuous Learning
              </h3>
              <p className="text-lg text-gray-600">
                Always exploring new technologies and methodologies to keep up
                with the latest technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 p-12 rounded-xl text-white text-center">
          <h2 className="text-4xl font-semibold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
