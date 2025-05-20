import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Akshitha Krishna</h3>
            <p className="text-white/90">
              Building the future of web development
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#About"
                  className="text-white/90 hover:text-indigo-700 transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className="text-white/80 hover:text-indigo-700 transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  className="text-white/80 hover:text-indigo-700 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="#"
                className="text-white/80 hover:text-indigo-400 transition-colors duration-100"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-indigo-400 transition-colors duration-100"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-indigo-400 transition-colors duration-100"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/80">
            © 2025 Akshitha Krishna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
