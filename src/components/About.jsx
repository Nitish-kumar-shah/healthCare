import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import pdf from "../assets/details.pdf";

const About = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  const githubUsernames = [
    "Namanpratapp",
    "Nitish-kumar-shah",
    "DeveshChaudhary29",
  ];

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const responses = await Promise.all(
          githubUsernames.map((username) =>
            fetch(`https://api.github.com/users/${username}`).then((res) =>
              res.json()
            )
          )
        );

        const formatted = responses.map((user, i) => ({
          name: user.name || user.login,
          role: i === 0 ? "Leader" : "Member",
          bio: user.bio,
          image: user.avatar_url,
        }));

        setTeamMembers(formatted);
      } catch (error) {
        console.error("Failed to fetch GitHub data", error);
      }
    };

    fetchMembers();
  }, []);
  return (
    <div className="container mx-auto py-12 px-6 text-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">About MediGuide</h1>
      <p className="text-2xl text-black max-w-4xl mx-auto mb-8 font-bold">
        MediGuide is an AI-powered healthcare assistant designed to provide
        reliable medical guidance, symptom analysis, and health insights to
        patients and professionals.
      </p>

      <a
        href={pdf}
        download
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 ease-out hover:shadow-blue-400 hover:scale-105"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></span>
        <span className="relative z-10 flex items-center gap-2">
          Download PDF
          <svg
            className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </a>

      <br />
      <br />
      <h2 className="text-3xl font-semibold text-blue-700 mb-6">
        Meet Our Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-white shadow-lg rounded-lg p-6">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold text-blue-800">{member.name}</h3>
            <p className="text-sm text-gray-500 font-semibold">{member.role}</p>
            <p className="text-gray-600 mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
      <Contact />
    </div>
  );
};

export default About;
