import { Component } from 'react';
import './styles/App.css';

const Main = (props) => {

  let {handlePersonal, handleEducation, handleExperience, state} = props;
  let containerStyle = {display: "flex", flexDirection: "column", background: "#dfdfdf", padding: '10px'}
  return <div style={containerStyle}>
    <PersonalInput handleInput={handlePersonal} state={state.personalInfo}/>
    <EducationInput handleInput={handleEducation} state={state.education}/>
    <ExperienceInput handleInput={handleExperience} state={state.experience}/>
  </div>
};

const PersonalInput = (props) => {
  let {handleInput, state} = props;
  let inputStyle = {width: "250px", margin: '5px 0'}
  return <div>
    <h4>Personal Information</h4>
    <input type="text" id="input-fname" placeholder="First Name" value={state.fname} style={inputStyle} onChange={handleInput}/><br/>
    <input type="text" id="input-lname" placeholder="Last Name" value={state.lname} style={inputStyle} onChange={handleInput}/><br/>
    <input type="text" id="input-title" placeholder="Job Title" style={inputStyle}/><br/>
    <input type="text" id="input-number" placeholder="Phone Number" style={inputStyle}/><br/>
    <input type="text" id="input-email" placeholder="Email Address" style={inputStyle}/><br/>
    <input type="text" id="input-linkedIn" placeholder="LinkedIn" style={inputStyle}/>
  </div>
};

const EducationInput = (props) => {
  let inputStyle = {width: "250px", margin: '5px 0'}
  let dateStyle = {width: "121px", margin: '5px 0'};
  return <div>
    <h4>Education</h4>
    <input type="text" id="input-uni-name" placeholder="University Name" style={inputStyle}/><br/>
    <input type="text" id="input-deg-name" placeholder="Title of Degree" style={inputStyle}/><br/>
    <span style={{width:'min-content', display: 'inline-block'}}>
      <h5 className='date-header'>From:</h5>
      <input type="date" id="input-deg-from" placeholder="Start Date" style={dateStyle}/>
    </span>
    <span style={{width:'min-content', display: 'inline-block'}}>
      <h5 className='date-header'>To:</h5>
      <input type="date" id="input-deg-to" placeholder="End Date" style={dateStyle}/>
    </span>
  </div>
};

const ExperienceInput = (props) => {
  let inputStyle = {width: "250px", margin: '5px 0'};
  let dateStyle = {width: "121px", margin: '5px 0'};
  return <div>
    <h4>Experience</h4>
    <input type="text" id="input-company-name" placeholder="Company Name" style={inputStyle}/><br/>
    <input type="text" id="input-pos-title" placeholder="Title of the Position" style={inputStyle}/><br/>
    <input type="text" id="input-job-city" placeholder="City" style={inputStyle}/><br/>
    <span style={{width:'min-content', display: 'inline-block'}}>
      <h5 className='date-header'>From:</h5>
      <input type="date" id="input-job-from" placeholder="Start Date" style={dateStyle}/>
    </span>
    <span style={{width:'min-content', display: 'inline-block'}}>
      <h5 className='date-header'>To:</h5>
      <input type="date" id="input-job-to" placeholder="End Date" style={dateStyle}/>
    </span>
  </div>
}

const Preview = (props) => {
  return <div>
    <h3>{props.state.personalInfo.fname}</h3>
    <h3>{props.state.personalInfo.lname}</h3>
  </div>
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        fname: '',
        lname: '',
        job: '',
        phone: '',
        email: '',
        linkedin: '',
      },
      education: {
        uni: '',
        degree: '',
        from: '',
        to: '',
      },
      experience: {
        company: '',
        position: '',
        city: '',
        from: '',
        to: '',
      },
    };
  }

  handlePersonal = (e) => {
    console.log('Handle Personal: ' + e.target.id);
    let pInfo = this.state.personalInfo;

    if(e.target.id === 'input-fname')
      pInfo.fname = e.target.value;
    else if(e.target.id === 'input-lname')
      pInfo.lname = e.target.value;

    this.setState({ personalInfo: pInfo });
  };

  handleEducation = (e) => {
    this.setState({});
  };

  handleExperience = (e) => {
    this.setState({});
  };

  render() {
    let state = this.state;
    return (
      <div>
        <Main 
          handlePersonal={this.handlePersonal}
          handleEducation={this.handleEducation}
          handleExperience={this.handleExperience}
          state={state}
        />
        <Preview state={state}/>
      </div>
    );
  }
}

export default App;