import React from "react";

const doctors = [
  {
    name: "Dr.Rachinder Kaur",
    specialization: "Dentist",
    address:
      "Shop No 136, First Floor, City Plaza, Gaur City 1, Landmark: Gaur Chowk, Greater Noida",
    phone: "01141168384",
    Ext: "",
    fees: "₹500",
  },
  {
    name: "Dr Vipul Verma",
    specialization: "General Physician",
    address:
      "Shop Number 25, Ground Floor, Central Plaza, Sector 4, Landmark: Near Madan Sweets, Greater Noida",
    phone: "01142213853",
    Ext: "",
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
  return (
    <div className="container mx-auto py-12 px-6 text-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Doctors</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
        Meet our highly experienced doctors who are here to provide the best
        medical care.
      </p>
      <p>Dial the extension after the call connects( Ext)</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-left"
          >
            <h3 className="text-2xl font-bold text-blue-800">{doctor.name}</h3>
            <p className="text-lg text-gray-600 font-semibold">
              {doctor.specialization}
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Address:</strong> {doctor.address}
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Phone:</strong> {doctor.phone}
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Ext:</strong> {doctor.Ext}
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Fees:</strong> {doctor.fees}
            </p>
          </div>
        ))}
        <p>
          We plan to add more doctors in the future to better serve our
          patients.
        </p>
      </div>
    </div>
  );
};

export default Doctors;
