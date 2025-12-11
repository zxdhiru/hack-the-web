import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="text-center m-auto bg-blue-400/50 px-5 py-7   space-y-5 hover:transition-all  ease-in duration-300 ">
        <div className="max-w-200 m-auto space-y-3">
          <h1 className="text-2xl md:text-4xl lg:text-4xl">Projects</h1>
          <p>
            Here are some awesome projects that are developed by our college
            student and also some of the mini projects that are engineered
          </p>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl m-auto px-5 py-7 text-black">
          <div className="mt-10">
            <h1 className="text-2xl md:text-4xl lg:text-4xl mb-5 text-center">
              Technical members
            </h1>
            <div className="grid md:grid-cols-4 grid-cols-1 lg:grid-cols-4 space-y-5 md:justify-between lg:justify-between justify-items-center">
              <div className="w-60 border rounded-2xl p-5 overflow-hidden shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                <Image
                  src={"/tech_member_1.avif"}
                  height={100}
                  width={100}
                  alt="team member"
                  className="w-full rounded mb-4"
                />
                <p className="font-bold text-lg">Member Name 1</p>
                <p>Frontend Developer</p>
              </div>
              <div className="w-60 border rounded-2xl p-5 overflow-hidden shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                <Image
                  src={"/tech_member_1.avif"}
                  height={100}
                  width={100}
                  alt="team member"
                  className="w-full rounded mb-4"
                />
                <p className="font-bold text-lg">Member Name 2</p>
                <p>full-satck Developer</p>
              </div>
              <div className="w-60 border rounded-2xl p-5 overflow-hidden shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                <Image
                  src={"/tech_member_1.avif"}
                  height={100}
                  width={100}
                  alt="team member"
                  className="w-full rounded mb-4"
                />
                <p className="font-bold text-lg">Member Name 3</p>
                <p>Backend Developer</p>
              </div>
              <div className="w-60 border rounded-2xl p-5 overflow-hidden shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                <Image
                  src={"/tech_member_1.avif"}
                  height={100}
                  width={100}
                  alt="team member"
                  className="w-full rounded mb-4"
                />
                <p className="font-bold text-lg">Member Name 4</p>
                <p>DevOps engineer</p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h1 className="text-2xl md:text-4xl lg:text-4xl mb-6 text-center">
              Projects by Club
            </h1>
            <div className="grid md:grid-cols-4 grid-cols-1 lg:grid-cols-4 space-y-5 md:justify-between lg:justify-between justify-items-center">
              <div className="w-60 border rounded-2xl p-5 overflow-hidden shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                <Image
                  src={"/AMS.avif"}
                  height={100}
                  width={100}
                  alt="tech-project"
                  className="w-full rounded mb-4"
                />
                <h2 className="font-bold text-lg">Smart-attendence-system</h2>
                <a href="">
                  githib:<span>http://Smart-attendence-system</span>
                </a>
              </div>
              <div className="w-60 border rounded-2xl p-5 overflow-hidden shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                <Image
                  src={"/AMS.avif"}
                  height={100}
                  width={100}
                  alt="tech-project"
                  className="w-full rounded mb-4"
                />
                <h2 className="font-bold text-lg">Smart-attendence-system</h2>
                <a href="">
                  githib:<span>http://Smart-attendence-system</span>
                </a>
              </div>{" "}
              <div className="w-60 border rounded-2xl p-5 overflow-hidden shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                <Image
                  src={"/AMS.avif"}
                  height={100}
                  width={100}
                  alt="tech-project"
                  className="w-full rounded mb-4"
                />
                <h2 className="font-bold text-lg">Smart-attendence-system</h2>
                <a href="">
                  githib:<span>http://Smart-attendence-system</span>
                </a>
              </div>{" "}
              <div className="w-60 border rounded-2xl p-5 overflow-hidden shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                <Image
                  src={"/AMS.avif"}
                  height={100}
                  width={100}
                  alt="tech-project"
                  className="w-full rounded mb-4"
                />
                <h2 className="font-bold text-lg">Smart-attendence-system</h2>
                <a href="">
                  githib:<span>http://Smart-attendence-system</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-2xl md:text-4xl lg:text-4xl mb-6 text-center">
              Projects by Students
            </h1>
            <div className="grid md:grid-cols-4 grid-cols-1 lg:grid-cols-4 space-y-5 md:justify-between lg:justify-between justify-items-center">
              <div className="w-60 border rounded-2xl p-5 overflow-hidden shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                <Image
                  src={"/HIMS.avif"}
                  height={100}
                  width={100}
                  alt="tech-project"
                  className="w-full rounded mb-4"
                />
                <h2 className="font-bold text-lg">Health Care+</h2>
                <a href="">
                  githib:<span>http://Smart-attendence-system</span>
                </a>
              </div>
              <div className="w-60 border rounded-2xl p-5 overflow-hidden shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                <Image
                  src={"/HIMS.avif"}
                  height={100}
                  width={100}
                  alt="tech-project"
                  className="w-full rounded mb-4"
                />
                <h2 className="font-bold text-lg">Health Care+</h2>
                <a href="">
                  githib:<span>http://Smart-attendence-system</span>
                </a>
              </div>{" "}
              <div className="w-60 border rounded-2xl p-5 overflow-hidden shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                <Image
                  src={"/HIMS.avif"}
                  height={100}
                  width={100}
                  alt="tech-project"
                  className="w-full rounded mb-4"
                />
                <h2 className="font-bold text-lg">Health Care +</h2>
                <a href="">
                  githib:<span>http://Smart-attendence-system</span>
                </a>
              </div>{" "}
              <div className="w-60 border rounded-2xl p-5 overflow-hidden shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                <Image
                  src={"/HIMS.avif"}
                  height={100}
                  width={100}
                  alt="tech-project"
                  className="w-full rounded mb-4"
                />
                <h2 className="font-bold text-lg">Health Care+</h2>
                <a href="">
                  githib:<span>http://Smart-attendence-system</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
