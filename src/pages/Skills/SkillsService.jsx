const Skills = ({ title , coreSkill }) => {
  return (
    <li className="service-item">
      
      <div className="service-content-box">
        <h4 className="h4 service-item-title skill-title">{title}</h4>
        <div className="Main-Skill-Box service-item-text">
            {coreSkill.map((skill, index) => (
                
                <div className="skill-Box"><img src={skill.image} className="skillImg" alt="" width={20} height={20} />{skill.name}</div>

                


            ))}
        </div>
      </div>
    </li>
  );
}

export default Skills;

