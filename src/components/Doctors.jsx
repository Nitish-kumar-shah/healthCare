import React, { useState } from "react";

const doctors = [
  {
    name: "Dr Vipul Verma",
    specialization: "General Physician",
    address:
      "Shop Number 25, Ground Floor, Central Plaza, Sector 4, Landmark: Near Madan Sweets, Greater Noida",
    phone: "01142213853",
    Ext: "214",
    fees: "₹800",
  },
  {
    name: "Dr. Vikas Goswami",
    specialization: "Oncologist",
    address:
      "Plot Number 4 A, Sector Institutional Green, Landmark: Opposite NTPC & Near Crown Plaza, Greater Noida",
    phone: "01141168384",
    Ext: "225",
    fees: "₹500",
  },
  {
    name: "Dr. Vikas Goswami",
    specialization: "Oncologist",
    address:
      "Plot Number 4 A, Sector Institutional Green, Landmark: Opposite NTPC & Near Crown Plaza, Greater Noida",
    phone: "01141168384",
    Ext: "225",
    fees: "₹500",
  },
  {
    name: "Dr. Anju Roy",
    specialization: "Aayurveda",
    address: "C-398, Beta-1 , Landmark: Near Rampur Market, Greater Noida",
    phone: "01140849602",
    Ext: "234",
    fees: "₹600",
  },
  {
    name: "Dr. Priya Singh",
    specialization: "Homoeopath",
    address:
      "Unit Number 12, First Floor, Kasana Tower-1, Landmark: Near Axis Bank, Greater Noida",
    phone: "01141168530",
    Ext: "133",
    fees: "₹499",
  },
  {
    name: "Dr. Nitin Chaudhary",
    specialization: "ENT/ Otorhinolaryngologist",
    address: "SF 212, Gaur City Plaza, Gaur City 1, Sector 4, Greater Noida",
    phone: "1140787361",
    Ext: "275",
    fees: "₹700",
  },
  {
    name: "Dr. Abhisar Katiyar",
    specialization: "Orthopedic surgeon,Joint Replacement Surgeon",
    address:
      "D-401, Sector P-3, Landmark: Near P-3 Water Tank & AWHO Society, Greater Noida",
    phone: "01140036724",
    Ext: "639",
    fees: "₹1000",
  },
  {
    name: "Dr. Vikas Bhardwaj",
    specialization: "Neurologist,Neurosurgeon,Spine Surgeon (Neuro)",
    address:
      "Plot Number - NH22A, Block D, Sector 31, Landmark: Near Krishna Life Line Hospital, Greater Noida",
    phone: "01140844819",
    Ext: "104",
    fees: "₹1200",
  },
  {
    name: "Dr. Dr. Ankur Lal",
    specialization: "Dermatologist,Hair Transplant Surgeon",
    address: "Sector 122, Landmark: Opposite DPS School, Greater Noida",
    phone: "01141168498",
    Ext: "517",
    fees: "₹700",
  },
  {
    name: "Dr. Michael Brown",
    specialization: "Orthopedic Surgeon",
    address: "321 Therapy Rd, Houston, TX",
    phone: "(789) 123-4567",
    Ext: "234",
    fees: "₹",
  },
  {
    name: "Dr. Jane Smith",
    specialization: "Dermatologist",
    address: "456 Wellness Ave, Los Angeles, CA",
    phone: "(987) 654-3210",
    Ext: "234",
    fees: "₹",
  },
  {
    name: "Dr. Emily Johnson",
    specialization: "Pediatrician",
    address: "789 Care Blvd, Chicago, IL",
    phone: "(456) 789-1234",
    Ext: "234",
    fees: "₹",
  },
];
const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleBookNow = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseModal = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="container mx-auto py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-md">
          Meet Our Doctors
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Our expert medical professionals are here to provide top-quality care
          and compassion.
        </p>
        <p className="text-sm text-gray-500 mt-2 italic">
          *Dial the extension after the call connects
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="relative bg-white rounded-3xl shadow-xl p-6 hover:shadow-blue-200 transition-all duration-300 group overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 opacity-10 text-9xl font-bold text-blue-200 pointer-events-none">
              +
            </div>

            <div className="mb-4">
              <h3 className="text-2xl font-bold text-blue-800 group-hover:text-purple-700 transition duration-300">
                {doctor.name}
              </h3>
              <p className="text-md text-gray-500 font-medium italic">
                {doctor.specialization}
              </p>
            </div>

            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Address:</span> {doctor.address}
              </p>
              <p>
                <span className="font-semibold">Phone:</span> {doctor.phone}
              </p>
              <p>
                <span className="font-semibold">Ext:</span> {doctor.Ext}
              </p>
              <p>
                <span className="font-semibold">Fees:</span>{" "}
                {doctor.fees === "₹" ? (
                  <span className="text-red-500">Not Available</span>
                ) : (
                  doctor.fees
                )}
              </p>
            </div>

            <div className="mt-4">
              <button
                onClick={() => handleBookNow(doctor)}
                className="mt-2 inline-flex items-center px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-105 transition-transform duration-300 shadow-md"
              >
                Book Now
                <svg
                  className="ml-2 w-4 h-4"
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
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-14">
        <p className="text-lg text-gray-600">
          We're expanding our expert team.{" "}
          <span className="font-semibold text-blue-600">
            More doctors coming soon!
          </span>
        </p>
      </div>

      {/* Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md mx-auto text-center relative">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Booking Confirmed!
            </h2>
            <p className="text-gray-700 mb-2">
              You’ve booked an appointment with:
            </p>
            <p className="font-semibold text-xl text-purple-600 mb-1">
              {selectedDoctor.name}
            </p>
            <p className="text-gray-600 italic">
              ({selectedDoctor.specialization})
            </p>
            <p className="text-sm text-gray-500 mt-3">
              Call: <span className="font-bold">{selectedDoctor.phone}</span>{" "}
              and dial extension{" "}
              <span className="font-bold">{selectedDoctor.Ext}</span>
            </p>
            <button
              className="mt-6 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:scale-105 transition"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors;
