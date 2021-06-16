import React from 'react'
import Layout from '../layouts/Layout'

function Projects(props) {
  return (
    <div className='container w-full h-full mx-auto my-5'>
      <p className='text-lg sm:text-xl'>These include all the projects I made while learning some tech and projects that turned into reality because the idea behind them excited me to build them. </p>
      <br></br>
      <div className='flex flex-col h-full'>
        {/* //// */}
        <div className='flex flex-col-reverse items-center justify-center mb-2 sm:flex-row sm:justify-center'>
          <div className='z-50 grid h-full grid-cols-1 p-3 mb-3 transition-all duration-150 transform rounded shadow-lg cursor-default select-none bg-dark hover:scale-110'>
            <div className='mb-1 ml-2 text-xl font-semibold text-secondary dark:text-white'>HUMAP</div>
            <div className='mx-2 my-2 mr-5'>
              <p className='text-base text-fontColor'>Humap is a web app which aims to digitalize how societies interact within themselves by providing an easy interface to communicate which can result in creating better versions of themselves. This was made duing a 36 hour-long Hackathon event. It uses location to make people living nearby interact with each other.</p>
            </div>
            <div>
              <div className='ml-2 font-semibold text-gray-400 text-l'> Tech Stack:</div>
              <div>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>ReactJS</span>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>Bootstrap</span>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>MongoDB</span>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>NodeJS</span>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>ExpressJS</span>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>Mapbox</span>
              </div>
            </div>
            <div className='flex mt-2 '>
              <a href='https://humap-app.herokuapp.com/' className='px-2 py-1 mx-2 font-mono text-lg font-semibold text-blue-800 underline transform rounded mouse-pointer hover:bg-gray-700 focus:outline-none'>
                Live
              </a>
              <a href='https://github.com/geeqib23/humap' className='px-2 py-1 mx-2 font-mono text-lg font-semibold text-blue-800 underline transform rounded mouse-pointer hover:bg-gray-700 focus:outline-none'>
                Code
              </a>
            </div>
          </div>
          <div className='flex justify-center w-full sm:w-1/2 sm:justify-start'>
            <img className='z-0 w-11/12 transition-all duration-150 border border-gray-600 border-opacity-50 shadow-lg sm:w-auto sm:max-w-xs hover:bg-opacity-50 rounded-xl' src='/images/humap.png'></img>
          </div>
        </div>
        {/* //// */}

        <div className='flex flex-col-reverse items-center justify-center mb-2 sm:flex-row sm:justify-center'>
          <div className='z-50 grid h-full grid-cols-1 p-3 mb-3 transition-all duration-150 transform rounded shadow-lg cursor-default select-none bg-dark hover:scale-110'>
            <div className='mb-1 ml-2 text-xl font-semibold text-secondary dark:text-white'>SOCIAL MEDIA APP</div>
            <div className='mx-2 my-2 mr-5'>
              <p className='text-base text-fontColor'>This app is a kind of Facebook clone with users able to post, follow and chat(in real-time) with each other. All CRUD (Create, Read, Update, Delete) operations were implemented. </p>
            </div>
            <div>
              <div className='ml-2 font-semibold text-gray-400 text-l'> Tech Stack:</div>
              <div>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>ReactJS</span>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>Bootstrap</span>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>MongoDB</span>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>NodeJS</span>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>WebSockets</span>
              </div>
            </div>
            <div className='flex mt-2 '>
              <a href='https://suspicious-ptolemy-828858.netlify.app/' className='px-2 py-1 mx-2 font-mono text-lg font-semibold text-blue-800 underline transform rounded mouse-pointer hover:bg-gray-700 focus:outline-none'>
                Live
              </a>
              <a href='https://github.com/geeqib23/social-media-app-react' className='px-2 py-1 mx-2 font-mono text-lg font-semibold text-blue-800 underline transform rounded mouse-pointer hover:bg-gray-700 focus:outline-none'>
                Code
              </a>
            </div>
          </div>
          <div className='flex justify-center flex-auto w-full sm:w-1/2 sm:justify-start'>
            <img className='z-0 w-11/12 transition-all duration-150 border border-gray-600 border-opacity-50 shadow-lg sm:w-auto sm:max-w-xs hover:bg-opacity-50 rounded-xl' src='/images/fbclone.png'></img>
          </div>
        </div>
        {/* //// */}

        <div className='flex flex-col-reverse items-center justify-center mb-2 sm:flex-row sm:justify-center'>
          <div className='z-50 grid h-full grid-cols-1 p-3 mb-3 transition-all duration-150 transform rounded shadow-lg cursor-default select-none bg-dark hover:scale-110'>
            <div className='mb-1 ml-2 text-xl font-semibold text-secondary dark:text-white'>OurTube</div>
            <div className='mx-2 my-2 mr-5'>
              <p className='text-base text-fontColor'>Platform which allows users to create their rooms and stream media content in perfect sync and chat in real time. Still under development!</p>
            </div>
            <div>
              <div className='ml-2 font-semibold text-gray-400 text-l'> Tech Stack:</div>
              <div>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>ReactJS</span>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>TailwindCSS</span>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>Socket.IO</span>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>NodeJS</span>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>ExpressJS</span>
              </div>
            </div>
            <div className='flex mt-2 '>
              {/* <a href='https://suspicious-ptolemy-828858.netlify.app/' className='px-2 py-1 mx-2 font-mono text-lg font-semibold text-blue-800 underline transform rounded mouse-pointer hover:bg-gray-700 focus:outline-none'>
                Live
              </a> */}
              <a href='https://github.com/akash-kd/devjam' className='px-2 py-1 mx-2 font-mono text-lg font-semibold text-blue-800 underline transform rounded mouse-pointer hover:bg-gray-700 focus:outline-none'>
                Code
              </a>
            </div>
          </div>
          <div className='flex justify-center flex-auto w-full sm:w-1/2 sm:justify-start'>
            <img alt="ourtube.jpg" className='z-0 w-11/12 transition-all duration-150 border border-gray-600 border-opacity-50 shadow-lg sm:w-auto sm:max-w-xs hover:bg-opacity-50 rounded-xl' src='/images/ourtube.png'></img>
          </div>
        </div>


        {/* //// */}

        <div className='flex flex-col-reverse items-center mb-2 sm:flex-row '>
          <div className='z-50 grid h-full grid-cols-1 p-3 mb-3 transition-all duration-150 transform rounded shadow-lg cursor-default select-none bg-dark hover:scale-110'>
            <div className='mb-1 ml-2 text-xl font-semibold text-secondary dark:text-white'>A TASK MANAGER APP API</div>
            <div className='mx-2 my-2 mr-5'>
              <p className='text-base text-fontColor'>A full-fledged API for a task manager app that helps to create, read, update and delete Users and their tasks. It also includes user authentication and encryption using JSON Web Tokens. </p>
            </div>
            <div>
              <div className='ml-2 font-semibold text-gray-400 text-l'> Tech Stack:</div>
              <div>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>NodeJS</span>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>MongoDB</span>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>Mongoose</span>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>JWT</span>
                <span className='inline-block px-1 py-1 mx-1 my-1 text-sm font-thin transition-all duration-150 transform bg-opacity-75 rounded bg-primaryShade hover:shadow-sm hover:scale-105'>ExpressJS</span>
              </div>
            </div>
            <div className='flex mt-2 '>
              {/* <a href='https://suspicious-ptolemy-828858.netlify.app/' className='px-2 py-1 mx-2 font-mono text-lg font-semibold text-blue-800 underline transform rounded mouse-pointer hover:bg-gray-700 focus:outline-none'>
                Live
              </a> */}
              <a href='https://github.com/geeqib23/task-manager-api-node' className='px-2 py-1 mx-2 font-mono text-lg font-semibold text-blue-800 underline transform rounded mouse-pointer hover:bg-gray-700 focus:outline-none'>
                Code
              </a>
            </div>
          </div>
          {/* <div className='flex justify-center w-full sm:w-1/2 sm:justify-start'><img className='z-0 w-11/12 transition-all duration-150 border border-gray-600 border-opacity-50 shadow-lg sm:w-auto sm:max-w-xs hover:bg-opacity-50 rounded-xl' src='/images/fbclone.png'></img></div> */}
        </div>
      </div>
    </div>
  )
}

export default Projects
