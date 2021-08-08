import { Fragment } from "react";

const PersonalInput = (props) => {
    let {handleInput, state} = props;
    return <InputBlock 
        handleInput={handleInput} state={state}
        fields={[
            ['text', 'input-fname', 'Full Name', 'fname'],
            ['text', 'input-title', 'Job Title', 'job'],
            ['text', 'input-number', 'Phone Number', 'phone'],
            ['text', 'input-email', 'Email Address', 'email'],
            ['text', 'input-linkedin', 'LinkedIn', 'linkedin'],
            ['block','input-desc', 'Description', 'desc']
        ]}
    />
}

const EducationInput = (props) => {
    let {handleInput, state} = props;
    return <InputBlock 
        handleInput={handleInput} state={state}
        fields={[
            ['text', 'input-uni-name', 'University Name', 'uni'],
            ['text', 'input-deg-name', 'Title of Degree', 'degree'],
            ['from-to', 'input-deg', '', ''],  
        ]}
    />
}

const ExperienceInput = (props) => {
    let {handleInput, state} = props;
    return <InputBlock 
        handleInput={handleInput} state={state}
        fields={[
            ['text', 'input-company-name', 'Company Name', 'company'],
            ['text', 'input-pos-title', 'Title of the Position', 'position'],
            ['text', 'input-job-city', 'City', 'city'],
            ['from-to', 'input-job', '', ''],  
        ]}
    />
}

const InputBlock = (props) => {
    let singleLineStyle = {width: "250px", margin: '5px 0'};
    let multiLineStyle = {width: "250px", height: '150px', margin: '5px 0', resize: 'vertical', whiteSpace: 'pre-wrap', fontSize: '0.8rem'};
    let { handleInput, state, fields, varName} = props;
    return <div>
        <h4>Input Block Title</h4>
        {
            fields.map((field) => {
                switch(field[0]) {
                    case 'text': {
                        return <Fragment key={field[1]}>
                            <input type="text" id={field[1]} placeholder={field[2]} value={state[varName]} style={singleLineStyle} onChange={handleInput}/><br/>
                        </Fragment>
                    }
                    case 'from-to': {
                        return <DatePeriodInput key={field[1]} from={state.from} to={state.to} baseId={field[1]} handleInput={handleInput}/>
                    }
                    case 'block': {
                        return <Fragment key={field[1]}>
                            <textarea type="text" id={field[1]} placeholder={field[2]} value={state[varName]} style={multiLineStyle} onChange={handleInput}/><br/>
                        </Fragment>
                    }
                    default:
                        return null
                } 
            })
        }
    </div>
}

const DatePeriodInput = (props) => {
    const {from, to, baseId, handleInput} = props;
    let dateStyle = {width: "121px", margin: '5px 0'};
    return <Fragment >
        <span key={baseId + 'from'} style={{width:'min-content', display: 'inline-block'}}>
            <h5 className='date-header'>From:</h5>
            <input type="date" id={baseId +'-from'} placeholder="Start Date" value={from} style={dateStyle} onChange={handleInput}/>
        </span>
        <span key={baseId + 'to'} style={{width:'min-content', display: 'inline-block'}}>
            <h5 className='date-header'>To:</h5>
            <input type="date" id={baseId +'-to'} placeholder="End Date" value={to} style={dateStyle} onChange={handleInput}/>
        </span>
        <br/>
    </Fragment>
}

export {PersonalInput, EducationInput, ExperienceInput};