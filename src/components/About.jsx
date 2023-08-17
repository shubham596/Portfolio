import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>


        <br />

        <p className="text-xl">
        Hey, My name is Shubham Sharan. I am from Dhanbad Jharkhand.Currently persuing Btech CSE from Lovely Professional University. <br /> <br />
I am Competitive programmer, Android Developer and expertise in HTML,CSS,JAVASCRIPT and ReactJS. I have a strong foundation in Data Structure and Algorithm also and have able to apply my knowledge by solving more than 1200 question on various platform like leetcode,Codechef,Codeforces.<br /> <br />
        Overall, I am passionate about programming and technology and I am excited to use my skill to create innovative solution that solve real world problem.
        </p>
      </div>
    </div>
  );
};

export default About;
