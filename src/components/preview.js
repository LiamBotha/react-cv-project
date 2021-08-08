import { Fragment } from "react";

const Preview = (props) => {
    const containerStyle = { display: 'grid', gridTemplateRows: 'repeat(3,1fr)', gridTemplateColumns: '1.1fr 1fr 1fr', border: '1px solid black', width: '210mm', minHeight: '200mm', color:'white'};
    const state = props.state;
    return <div style={containerStyle}>
      <Sidebar personalInfo={state.personalInfo}/>
      <div id='main'>
        <div id='description' style={{fontSize: '0.9rem', textAlign: 'justify'}}>{ state.personalInfo.desc }</div>
        <div id='edu-exp'>
          {
            (state.education.uni || state.education.degree) &&
            <DateTitleBlock
              title='EDUCATION'
              from={state.education.from} to={state.education.to}
              items={[state.education.degree, state.education.uni]}
            />
          }
          {
            (state.experience.position || state.experience.company || state.experience.city) &&
            <DateTitleBlock
              title='EXPERIENCE'
              from={state.experience.from} to={state.experience.to}
              items={[state.experience.position, state.experience.company + ', ' + state.experience.city]}
            />
          }
        </div>
      </div>
    </div>
};

const DateTitleBlock = (props) => {
  const {title, from, to, items} = props;
  return (
    <div>
        <h3 className="divider">{title}</h3>
        <div style={{ padding: "0 0 0 20px", display: 'flex' }}>
          <span style={{ margin: '10px', alignSelf: 'center' }}>
            <h5 style={{ margin: '0'}}>{ from }</h5>
            <h5 style={{ margin: '0'}}>{ to }</h5>
          </span>
          <span style={{ margin: '10px', fontSize: '1.3rem' }}>
            {
              items.map((item) => <h5 style={{ margin: '0'}}>{ item }</h5> )
            }
          </span>
        </div>
    </div>
  );
}

const Sidebar = (props) => {
  const { personalInfo } = props
  const sidebarStyle = {background: '#bfbfbf', gridColumn: '1/2', gridRow: '1/4'};

  const email = personalInfo.email
    ? <Fragment><h4 className="padding-1" >E-mail</h4><h5 className="padding-1 thin-font">{ personalInfo.email }</h5></Fragment> 
    : null;

  const linkedin = personalInfo.linkedin
    ? <Fragment><h4 className="padding-1">LinkedIn</h4><h5 className="padding-1 thin-font">{ personalInfo.linkedin }</h5></Fragment>
    : null;

  const phone = personalInfo.phone
    ? <Fragment><h4 className="padding-1">Cell-Number</h4><h5 className="padding-1 thin-font">{ personalInfo.phone }</h5></Fragment>
    : null;
    
  return (
    <div id="sidebar" style={sidebarStyle}>
      <h1 className="padding-1">{ personalInfo.fname }</h1>
      <h3 className="padding-1" style={{fontWeight: '200', fontSize: '1rem'}}>{ personalInfo.job.toUpperCase() }</h3>
      <h3 className="padding-1" style={{background: '#9F9F9F', padding: '10px', fontWeight: '700', fontSize: '1rem'}}>PERSONAL INFO</h3>
      {email}
      {linkedin}
      {phone}
    </div>
  );
}

export default Preview;