import React from 'react'
import Skills from './SkillsService';

const skillsData = [
  
  {
    title: "Frontend",
    coreSkill: [
        {
            name: "React Js",
            image : "images/react.svg",
        },
        {
            name: "Redux",
            image : "images/redux.png",
        },
        {
            name: "HTML",
            image : "images/html.png",
        },
        {
            name: "CSS",
            image : "images/css.png",
        },
        {
            name: "JavaScript",
            image : "images/js.png",
        },
        {
            name: "Tailwind",
            image : "images/tailwind.png",
        },
        {
            name: "Flutter",
            image : "images/flutter.png",
        },
    ],
},
{
    title: "Backend",
    coreSkill: [
        
        {
            name: "ExpressJS",
            image : "images/express.png",
        },
        {
            name: "MongoDB",
            image : "images/mongoDB.png",
        },{
            name: "NodeJS",
            image : "images/nodejs.png",
        },
        {
            name: "MySQL",
            image : "images/mySQL.png",
        },
    ],
  }, 
{
    title: "Languages",
    coreSkill: [
        {
            name: "JavaScript",
            image : "images/js.png",
        },
        {
            name: "C",
            image : "images/c.png",
        },
        {
            name: "C++",
            image : "images/cpp.png",
        },
        {
            name: "Dart",
            image : "images/dart.png",
        },
        {
            name: "Python",
            image : "images/python.png",
        },
    ],
  }, 
{
    title: "Others",
    coreSkill: [
        {
            name: "Git",
            image : "images/git.png",
        },
        {
            name: "GitHub",
            image : "images/github.png",
        },
        {
            name: "Postman",
            image : "images/postman.png",
        },
        {
            name: "Netlify",
            image : "images/netlify.png",
        },
        {
            name: "VS Code",
            image : "images/vsCode.png",
        },
        {
            name: "Android Studio",
            image : "images/androidStudio.png",
        },
    ],
  }, 
];

const SkillView = () => {
  return (
    <section className="service">

      <h3 className='h3 service-title'>Technologies... i know</h3>

      <ul className="service-list">

      {skillsData.map((skills, index) => (
            <Skills
              key={index}
              title={skills.title}
              coreSkill={skills.coreSkill}
            />
          ))}

      </ul>

    </section>
  )
}

export default SkillView
