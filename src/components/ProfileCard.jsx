function ProfileCard() {
  const name = "Chukwuemeka Obi";
  const course = "Frontend Engineering";
  const city = "Lagos";
  const tuitionPaid = 150000;

  return (
    <div className="border-2 px-8 py-10 flex justify-center items-center flex-col w-90 h-90 shadow-2xl rounded-lg border-blue-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:text-white hover:border-blue-800 mt-10 hover:bg-blue-900">
    <p className="text-2xl font-bold mb-2">Name: {name}</p>
    <p className="text-xl">Course: {course}</p>
    <p className="text-xl">City: {city}</p>
    <p className="text-xl font-semibold mt-2">Tuition Paid: {tuitionPaid.toLocaleString("en-NG", { style: "currency", currency: "NGN" })}</p>
    </div>
  );
}

export default ProfileCard;