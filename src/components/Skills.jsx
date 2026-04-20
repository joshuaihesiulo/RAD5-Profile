function Skills() {
  const skill1 = "HTML & CSS";
  const skill2 = "JavaScript";
  const skill3 = "React";

  return (
    <div className="border-2 px-8 py-5 flex justify-center items-center flex-col w-90 h-90 shadow-2xl rounded-lg border-blue-600 hover:border-blue-800 mt-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-blue-900 hover:text-white">
        <h2 className="text-4xl font-bold mb-2">Skills</h2>
        <ul className="list-disc list-inside">
            <li className=" text-xl">{skill1}</li>
            <li className=" text-xl">{skill2}</li>
            <li className=" text-xl">{skill3}</li>
        </ul>
    </div>
  );
}

export default Skills;