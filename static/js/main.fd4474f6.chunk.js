(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),r=n(3),s=n.n(r),c=n(4),l=n(5),d=n(7),o=n(6),p=n(0),u=function(e){var t=e.handleInput,n=e.state;return Object(p.jsx)(m,{handleInput:t,state:n,fields:[["text","input-fname","Full Name","fname"],["text","input-title","Job Title","job"],["text","input-number","Phone Number","phone"],["text","input-email","Email Address","email"],["text","input-linkedin","LinkedIn","linkedin"],["block","input-desc","Description","desc"]]})},j=function(e){var t=e.handleInput,n=e.state;return Object(p.jsx)(m,{handleInput:t,state:n,fields:[["text","input-uni-name","University Name","uni"],["text","input-deg-name","Title of Degree","degree"],["from-to","input-deg","",""]]})},h=function(e){var t=e.handleInput,n=e.state;return Object(p.jsx)(m,{handleInput:t,state:n,fields:[["text","input-company-name","Company Name","company"],["text","input-pos-title","Title of the Position","position"],["text","input-job-city","City","city"],["from-to","input-job","",""]]})},m=function(e){var t={width:"250px",margin:"5px 0"},n={width:"250px",height:"150px",margin:"5px 0",resize:"vertical",whiteSpace:"pre-wrap",fontSize:"0.8rem"},a=e.handleInput,r=e.state,s=e.fields,c=e.varName;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{children:"Input Block Title"}),s.map((function(e){switch(e[0]){case"text":return Object(p.jsxs)(i.Fragment,{children:[Object(p.jsx)("input",{type:"text",id:e[1],placeholder:e[2],value:r[c],style:t,onChange:a}),Object(p.jsx)("br",{})]},e[1]);case"from-to":return Object(p.jsx)(b,{from:r.from,to:r.to,baseId:e[1],handleInput:a},e[1]);case"block":return Object(p.jsxs)(i.Fragment,{children:[Object(p.jsx)("textarea",{type:"text",id:e[1],placeholder:e[2],value:r[c],style:n,onChange:a}),Object(p.jsx)("br",{})]},e[1]);default:return null}}))]})},b=function(e){var t=e.from,n=e.to,a=e.baseId,r=e.handleInput,s={width:"121px",margin:"5px 0"};return Object(p.jsxs)(i.Fragment,{children:[Object(p.jsxs)("span",{style:{width:"min-content",display:"inline-block"},children:[Object(p.jsx)("h5",{className:"date-header",children:"From:"}),Object(p.jsx)("input",{type:"date",id:a+"-from",placeholder:"Start Date",value:t,style:s,onChange:r})]},a+"from"),Object(p.jsxs)("span",{style:{width:"min-content",display:"inline-block"},children:[Object(p.jsx)("h5",{className:"date-header",children:"To:"}),Object(p.jsx)("input",{type:"date",id:a+"-to",placeholder:"End Date",value:n,style:s,onChange:r})]},a+"to"),Object(p.jsx)("br",{})]})},x=function(e){var t=e.handlePersonal,n=e.handleEducation,i=e.handleExperience,a=e.state;return Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"column",background:"#dfdfdf",padding:"10px"},children:[Object(p.jsx)(u,{handleInput:t,state:a.personalInfo}),Object(p.jsx)(j,{handleInput:n,state:a.education}),Object(p.jsx)(h,{handleInput:i,state:a.experience})]})},f=function(e){var t=e.title,n=e.from,i=e.to,a=e.items;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"divider",children:t}),Object(p.jsxs)("div",{style:{padding:"0 0 0 20px",display:"flex"},children:[Object(p.jsxs)("span",{style:{margin:"10px",alignSelf:"center"},children:[Object(p.jsx)("h5",{style:{margin:"0"},children:n}),Object(p.jsx)("h5",{style:{margin:"0"},children:i})]}),Object(p.jsx)("span",{style:{margin:"10px",fontSize:"1.3rem"},children:a.map((function(e){return Object(p.jsx)("h5",{style:{margin:"0"},children:e})}))})]})]})},g=function(e){var t=e.personalInfo,n=t.email?Object(p.jsxs)(i.Fragment,{children:[Object(p.jsx)("h4",{className:"padding-1",children:"E-mail"}),Object(p.jsx)("h5",{className:"padding-1 thin-font",children:t.email})]}):null,a=t.linkedin?Object(p.jsxs)(i.Fragment,{children:[Object(p.jsx)("h4",{className:"padding-1",children:"LinkedIn"}),Object(p.jsx)("h5",{className:"padding-1 thin-font",children:t.linkedin})]}):null,r=t.phone?Object(p.jsxs)(i.Fragment,{children:[Object(p.jsx)("h4",{className:"padding-1",children:"Cell-Number"}),Object(p.jsx)("h5",{className:"padding-1 thin-font",children:t.phone})]}):null;return Object(p.jsxs)("div",{id:"sidebar",style:{background:"#bfbfbf",gridColumn:"1/2",gridRow:"1/4"},children:[Object(p.jsx)("h1",{className:"padding-1",children:t.fname}),Object(p.jsx)("h3",{className:"padding-1",style:{fontWeight:"200",fontSize:"1rem"},children:t.job.toUpperCase()}),Object(p.jsx)("h3",{className:"padding-1",style:{background:"#9F9F9F",padding:"10px",fontWeight:"700",fontSize:"1rem"},children:"PERSONAL INFO"}),n,a,r]})},O=function(e){var t=e.state;return Object(p.jsxs)("div",{style:{display:"grid",gridTemplateRows:"repeat(3,1fr)",gridTemplateColumns:"1.1fr 1fr 1fr",border:"1px solid black",width:"210mm",minHeight:"200mm",color:"white"},children:[Object(p.jsx)(g,{personalInfo:t.personalInfo}),Object(p.jsxs)("div",{id:"main",children:[Object(p.jsx)("div",{id:"description",style:{fontSize:"0.9rem",textAlign:"justify"},children:t.personalInfo.desc}),Object(p.jsxs)("div",{id:"edu-exp",children:[(t.education.uni||t.education.degree)&&Object(p.jsx)(f,{title:"EDUCATION",from:t.education.from,to:t.education.to,items:[t.education.degree,t.education.uni]}),(t.experience.position||t.experience.company||t.experience.city)&&Object(p.jsx)(f,{title:"EXPERIENCE",from:t.experience.from,to:t.experience.to,items:[t.experience.position,t.experience.company+", "+t.experience.city]})]})]})]})},y=(n(13),function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).handlePersonal=function(e){var t=JSON.parse(JSON.stringify(i.state.personalInfo));switch(e.target.id){case"input-fname":t.fname=e.target.value;break;case"input-title":t.job=e.target.value;break;case"input-number":t.phone=e.target.value;break;case"input-email":t.email=e.target.value;break;case"input-linkedin":t.linkedin=e.target.value;break;case"input-desc":t.desc=e.target.value}i.setState({personalInfo:t})},i.handleEducation=function(e){var t=JSON.parse(JSON.stringify(i.state.education));switch(e.target.id){case"input-uni-name":t.uni=e.target.value;break;case"input-deg-name":t.degree=e.target.value;break;case"input-deg-from":t.from=e.target.value;break;case"input-deg-to":t.to=e.target.value}i.setState({education:t})},i.handleExperience=function(e){var t=JSON.parse(JSON.stringify(i.state.experience));switch(e.target.id){case"input-company-name":t.company=e.target.value;break;case"input-pos-title":t.position=e.target.value;break;case"input-job-city":t.city=e.target.value;break;case"input-job-from":t.from=e.target.value;break;case"input-job-to":t.to=e.target.value}i.setState({experience:t})},i.state={personalInfo:{fname:"",job:"",phone:"",email:"",linkedin:"",desc:""},education:{uni:"",degree:"",from:"",to:""},experience:{company:"",position:"",city:"",from:"",to:""}},i}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state;return Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"flex-start"},children:[Object(p.jsx)(x,{handlePersonal:this.handlePersonal,handleEducation:this.handleEducation,handleExperience:this.handleExperience,state:e}),Object(p.jsx)(O,{state:e})]})}}]),n}(i.Component));s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fd4474f6.chunk.js.map