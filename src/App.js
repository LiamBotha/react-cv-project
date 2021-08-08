import { Component } from 'react';
import Main from './components/main';
import Preview from './components/preview';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        fname: '',
        job: '',
        phone: '',
        email: '',
        linkedin: '',
        desc: '',
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
    let pInfo = JSON.parse(JSON.stringify(this.state.personalInfo));
    switch(e.target.id){
      case 'input-fname':
        pInfo.fname = e.target.value;
        break;
      case 'input-title':
        pInfo.job = e.target.value;
        break;
      case 'input-number':
        pInfo.phone = e.target.value;
        break;
      case 'input-email':
        pInfo.email = e.target.value;
        break;
      case 'input-linkedin':
        pInfo.linkedin = e.target.value;
        break;
      case 'input-desc':
        pInfo.desc = e.target.value;
        break;
      default:
        break;
    }

    this.setState({ personalInfo: pInfo });
  };

  handleEducation = (e) => {
    let eduInfo = JSON.parse(JSON.stringify(this.state.education));
    switch(e.target.id) {
      case 'input-uni-name':
        eduInfo.uni = e.target.value;
        break;
      case 'input-deg-name':
        eduInfo.degree = e.target.value;
        break;
      case 'input-deg-from':
        eduInfo.from = e.target.value;
        break;
      case 'input-deg-to':
        eduInfo.to = e.target.value;
        break;
      default:
        break;
    }

    this.setState({education: eduInfo});
  };

  handleExperience = (e) => {
    let expInfo = JSON.parse(JSON.stringify(this.state.experience));
    switch(e.target.id) {
      case 'input-company-name':
        expInfo.company = e.target.value;
        break;
      case 'input-pos-title':
        expInfo.position = e.target.value;
        break;
      case 'input-job-city':
        expInfo.city = e.target.value;
        break;
      case 'input-job-from':
        expInfo.from = e.target.value;
        break;
      case 'input-job-to':
        expInfo.to = e.target.value;
        break;
      default:
        break;
    }

    this.setState({experience: expInfo});
  };

  render() {
    let state = this.state;
    let containerStyle = {display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-start'}
    return (
      <div style={containerStyle}>
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