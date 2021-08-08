import {PersonalInput, EducationInput, ExperienceInput} from './input';

const Main = (props) => {
    let {handlePersonal, handleEducation, handleExperience, state} = props;
    let containerStyle = {display: "flex", flexDirection: "column", background: "#dfdfdf", padding: '10px'}
    return <div style={containerStyle}>
      <PersonalInput handleInput={handlePersonal} state={state.personalInfo}/>
      <EducationInput handleInput={handleEducation} state={state.education}/>
      <ExperienceInput handleInput={handleExperience} state={state.experience}/>
    </div>
  };

export default Main;