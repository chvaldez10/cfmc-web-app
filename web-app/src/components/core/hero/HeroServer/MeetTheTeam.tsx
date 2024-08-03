import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const teamMembers = [
  {
    name: "Holden Caulfield",
    role: "UI Developer",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    imageUrl: "https://dummyimage.com/200x200",
  },
];

const MeetTheTeam = () => {
  return (
    <section className="text-white body-font bg-purple-500">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={member.imageUrl}
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-white">
                    {member.name}
                  </h2>
                  <h3 className="text-gray-300 mb-3">{member.role}</h3>
                  <p className="mb-4 text-white">{member.description}</p>
                  <span className="inline-flex">
                    <Link href="#" className="text-white">
                      <FaFacebook />
                    </Link>
                    <Link href="#" className="text-white">
                      <CiMail />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
