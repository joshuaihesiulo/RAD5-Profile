function ProfileCard() {
  const name = "Chukwuemeka Obi";
  const course = "Frontend Engineering";
  const city = "Lagos";
  const tuitionPaid = 150000;

  return (
    <div className="border-2 px-8 py-10 flex justify-center items-center flex-col w-90 h-90 shadow-2xl rounded-lg border-blue-600 hover:border-blue-950 mt-10">
    <p className="text-2xl font-bold mb-2">Name: {name}</p>
    <p className="text-gray-700 text-xl">Course: {course}</p>
    <p className="text-gray-700 text-xl">City: {city}</p>
    <p className="text-gray-700 text-xl font-semibold mt-2">Tuition Paid: {tuitionPaid.toLocaleString("en-NG", { style: "currency", currency: "NGN" })}</p>
    </div>
  );
}

export default ProfileCard;