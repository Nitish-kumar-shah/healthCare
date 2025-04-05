import React from "react";
export default function AboutPage() {
  const teamMembers = [
    {
      name: "Naman Pratap ",
      role: "Leader",
      bio: "Expert in AI-driven healthcare solutions.",
      image:
        "https://th.bing.com/th?q=Man+Jpg+Image+Profile&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247",
    },
    {
      name: "Nitish Kumar",
      role: "Member",
      bio: "Specialist in medical AI development.",
      image:
        "https://th.bing.com/th?q=Man+Jpg+Image+Profile&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247",
    },
    {
      name: "Devesh Kumar",
      role: "Member",
      bio: "Building intelligent health diagnostics.",
      image:
        "https://th.bing.com/th?q=Man+Jpg+Image+Profile&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247",
    },
    {
      name: "Piyush ",
      role: "Member",
      bio: "Designing intuitive healthcare experiences.",
      image:
        "https://th.bing.com/th?q=Man+Jpg+Image+Profile&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-6 text-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">About MediGuide</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
        MediGuide is an AI-powered healthcare assistant designed to provide
        reliable medical guidance, symptom analysis, and health insights to
        patients and professionals.
      </p>

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
    </div>
  );
}
