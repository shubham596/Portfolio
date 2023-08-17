import React from "react";
import jarvispic from "../assets/portfolio/jarvis image.jpeg";
import flipkartpic from "../assets/portfolio/flippkart image.jpeg";
import myntrapic from "../assets/portfolio/welcome-myntra-1-1.jpg";
import moviewebsitepic from "../assets/portfolio/movie image for github.png";
import quizpic from "../assets/portfolio/screenshot for quiz demo.png";
import chatpic from "../assets/portfolio/screenshot of chatapp demo.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: jarvispic,
    
      repo: 'https://github.com/shubham596/JarvisAI'
    },
    {
      id: 2,
      src: flipkartpic,
     
      repo: 'https://github.com/shubham596/Flikart-clone'
    },
    {
      id: 3,
      src: myntrapic,
     
      repo: 'https://github.com/shubham596/Myntra-Project'
    },
    {
      id: 4,
      src: chatpic,
    
      repo: 'https://github.com/shubham596/Random-Chat-App'
    },
    {
      id: 5,
      src: moviewebsitepic,
    
      repo: 'https://github.com/shubham596/movie-api'
    },
    {
      
      id: 6,
      src: quizpic,
 
      repo: 'https://github.com/shubham596/QuizApp'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
