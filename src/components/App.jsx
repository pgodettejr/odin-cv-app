import { useState } from 'react'
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
// import Buttons from "./Buttons";
import Complete from './Complete'
// import Incomplete from './Incomplete'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'
// import { useFormState } from 'react-dom'

// Use console.log...a lot (confirm React batching state updates on re-renders)

// Might need to do CRUD functions? The app needs to be able to read the inputs in the form and either change them to HTML elements (Submit) or read the HTML elements and change them back to form inputs (Edit). We SHOULD try to write CONTROLLED components for the form elements instead...we might need both controlled components AND the CRUD functions

// An example of a controlled component:
// const [value, setValue] = useState("");

// For 'input' elements: value={value}, onChange={(e or event) => setValue(e or event.target.value)}

// DOCS
// State: A Component's Memory (Challenges) - reference to how we should use React to do our forms? there are states for every input though
// State as a Snapshot - entire doc has more examples of forms & form structure
// Choosing the State Structure - see the dev comments in the App function below for grouping, state contradictions form example
// Rendering Lists - Challenge #4 shows how to render HTML directly into an empty array to display it on the page

// TODO DOCS (if next iteration of app doesn't render HTML)
// Adding Interactivity - read up more on how to render things

// BEGIN
// WHEN the user goes to the website/browser app via web address
// DISPLAY the entire application
// SHOW the Heading & CV (Resume) form

// An example array that allows us to toggle the form state based on Edit/Submit buttons being interacted with. Default is "incomplete".
// const formState = ["incomplete", "complete"]; 

// Do we need to pass a callback to our "setResumeForm" function in our "handle" function for Edit/Submit buttons? (More on State lesson)
// setResumeForm((prevForm) => ({...prevForm, ???}));

// IMPORTANT: Rename the "startDate, endDate" variables "schoolStart, schoolFinish, jobStart, jobEnd" if needed

// This is the "multiple states per section" version of the app, split up into 3 components for each respective section of the form
// BRANCH: Create "Add work experience" and "Add education" buttons that generate another Experience and Education component respectively (WITHOUT the heading titles)
export default function App() {
  const [count, setCount] = useState(0)

  // const [isDisabled, setIsDisabled] = useState(false);
  // const [submitted, setSubmitted] = useState(false); - This is for setting the status and converting all the form data to HTML elements when "Submit" is clicked. We could try 'useState({})' if we go with the previous 'setSubmitted' call in the handleSubmit function.

  // Currently, we can either lift everything up but then the handle functions don't get read in the child functions (e.g.: Personal) or we can keep the useState code in their respective child functions and figure out a different way to render the HTML (without it auto generating to HTML if we do !== conditionals related to empty strings like we had before)

  // If we lift everything up, it would be for the purpose of writing a "formComplete" function that has all the form elements from the other functions rendered as HTML. We would possibly just have two functions with this version: "Form" for the entire form, not split up into sections, and "Resume" for the completed HTML displayed resume based on what was filled out in the form. We could possibly even just have one "Form" function with a ternary operator inside that displays either the form or the HTML depending on the "submitted" state. See example in "submittedResume" function below for a way to accomplish this. We would need to add "submitted" as a prop to the "Form" component (or pass it to each of the three current components while leaving the respective useStates in each component). On the component(s), when called, should we set up an "onClick" with "setSubmitted(true)"?
  
  // If we keep the states in their respective functions, the handle functions work but we would need to...pass the word "props" to each function representing the sections of the form?

  // May need this to display submitted data on Submit?
  // const [formData, setFormData] = useState({});

  // STATES
  // FORM is being edited
  // FORM is complete
  // FORM is submitted
  // USER interacted with empty/not empty input in the form

  // Just have the completed info render as separate HTML instead of "changing" the form elements to HTML elements on submit? (our Weather App was the same way and this is the first React project - it doesn't have to be fancy!)

  // function toggleDisabled() {
  //   setIsDisabled(!isDisabled);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   // TODO: Test this function out when the form is submitted after adding HTML elements to display each piece of info. Might need to rename startDate and endDate if React doesn't accept "duplicates". Doesn't work with simply values by itself. Need "property: key"?
  //   // setSubmitted({
  //   //   fullName,
  //   //   email,
  //   //   phoneNum,
  //   //   company,
  //   //   position,
  //   //   startDate,
  //   //   endDate,
  //   //   location,
  //   //   description,
  //   //   school,
  //   //   major,
  //   // });
  //   setSubmitted(true);
  //   console.log("The Submit button was clicked and is now disabled");
  //   toggleDisabled();
  //   // <Form />
  // }

  // TODO: The Edit button doesn't work. At all. Step through the code in DevTools after clicking on it and find out why.
  // function handleEdit(e) {
  //   e.preventDefault();
  //   setSubmitted(false); // Do we need this?
  //   console.log("The Edit button was clicked and is now disabled");
  //   toggleDisabled();
  // }

  // DISPLAY all of these elements in the middle of the webpage
  
  // function submittedResume() {
  //   if (submitted) {
  //     return (
  //       <>
  //         <h1>CV/Resumé App</h1>

  //         {/* TODO:
  //         HTML elements for Personal, Experience and Education components go here. InnerHTML under each component called? Or something else?
  //         We might need this under the OTHER return statement below instead of here. Or remove the form elements from the other components (see other modules) */}
  //         {/* Example for displaying form data */}

  //         {/* {submitted ? (
  //           <div>
  //             <h2>Submitted Information:</h2>
  //             <p><strong>Name:</strong> {submitted.fullName}</p>
  //             <p><strong>Email:</strong> {submitted.email}</p>
  //           </div>
  //         ) : (
  //          form elements go here
  //          )} */}

  //         {/* TODO: only the headings are showing, not the actual info entered on the form via the <p> elements. Dot notation is wrong. Fix */}
  //         {/* Still might need to change the classNames to just one name for styling instead of each div having its own separate classNames */}
  //         <div className="completed-form">
  //           <h2>Personal Info</h2>
  //           <div className="full-name">
  //             <h3>Name</h3>
  //             <p>{fullName}</p>
  //           </div>
  //           <div className="email-address">
  //             <h3>Email</h3>
  //             <p>{email}</p>
  //           </div>
  //           <div className="tel-phone-num">
  //             <h3>Phone Number</h3>
  //             <p>{phoneNum}</p>
  //           </div>

  //           <h2>Work Experience</h2>
  //           <div className="company">
  //             <div className="company-name">
  //               <h3>Company</h3>
  //               <p>{Experience.Company}</p> - Even when the "Company" propertyName is capitalized, it still doesn't render on Submit
  //             </div>
  //             <div className="job-position">
  //               <h3>Position</h3>
  //               <p>{Experience.Position}</p> - Even when the "Position" propertyName is capitalized, it still doesn't render on Submit
  //             </div>
  //             <div className="date-range">
  //               <h3>Start Date</h3>
  //               <p>{Experience.startDate}</p>
  //             </div>
  //             <div className="date-range">
  //               <h3>End Date</h3>
  //               <p>{Experience.endDate}</p>
  //             </div>
  //             <div className="location">
  //               <h3>Location</h3>
  //               <p>{Experience.location}</p>
  //             </div>
  //             <div className="description">
  //               <h3>Main Responsibilities</h3>
  //               <p>{Experience.description}</p>
  //             </div>
  //           </div>

  //           <div className="form-buttons">
  //             <button
  //               type="button"
  //               id="editButton"
  //               onClick={handleEdit}
  //               disabled={isDisabled}
  //             >
  //               {/* {isDisabled ? "Disabled" : "Enabled"} */}
  //               Edit
  //             </button>
  //             <button
  //               type="submit" // Change this back to "button" if it doesn't work?
  //               id="submitButton"
  //               onClick={handleSubmit}
  //               disabled={!isDisabled}
  //             >
  //               Submit
  //             </button>
  //           </div>
  //         </div>
  //       </>

  //       // TODO: Implement a "forEach" method or, preferably, a "map" method for each Work Experience and Education section filled out by the user? Either way, we need to create an array (with objects?).
  //       // We COULD grab each "input" element ("label" elements too?) via DOM manipulation through querySelectorAll, take that NodeList and use forEach to show the filled out info on the submitted UI
  //       // Look at our To-Do List project for any other ideas

  //       // <form onSubmit={((e) => e.preventDefault(), setSubmitted(true))}>
  //       //   <Personal />
  //       //   <Experience />
  //       //   <Experience />
  //       //   <Education />
  //       //   <Education />
  //       // </form>
  //     );
  //   }
  // }

  return (
    <>
      <h1>CV/Resumé App</h1>
      <div className="App">
        <Form />
        {/* <h2>Personal Info</h2>
        <Personal />
        <h2>Work Experience</h2>
        <Experience />
        <Experience />
        <h2>Education</h2>
        <Education />
        <Education /> */}
        {/* <Complete /> Calling this with no other props just makes the page render blank  */}
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );

  // TODO: Pass "props" to this function, then use spread syntax {...props} on every child component (e.g. <Personal {...props} />, etc.) instead of listing each state/prop individually
  function Form() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");

    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [jobLocation, setJobLocation] = useState("");
    const [description, setDescription] = useState("");

    const [school, setSchool] = useState("");
    const [major, setMajor] = useState("");
    const [schoolStart, setSchoolStart] = useState("");
    const [schoolFinish, setSchoolFinish] = useState("");
    const [schoolLocation, setSchoolLocation] = useState("");

    const [isDisabled, setIsDisabled] = useState(false);
    const [submitted, setSubmitted] = useState(false); // This is for setting the status and converting all the form data to HTML elements when "Submit" is clicked. We could try 'useState({})' if we go with the previous 'setSubmitted' call in the handleSubmit function.

    function toggleDisabled() {
      setIsDisabled(!isDisabled);
    }
    
    function handleSubmit(e) {
      e.preventDefault();
      // TODO: Test this function out when the form is submitted after adding HTML elements to display each piece of info. Might need to rename startDate and endDate if React doesn't accept "duplicates". Doesn't work with simply values by itself. Need "property: key"?
      // setSubmitted({
      //   fullName,
      //   email,
      //   phoneNum,
      //   company,
      //   position,
      //   startDate,
      //   endDate,
      //   location,
      //   description,
      //   school,
      //   major,
      // });
      setSubmitted(true);
      console.log("The Submit button was clicked and is now disabled");
      toggleDisabled();
    }

    // TODO: The Edit button doesn't work. At all. Step through the code in DevTools after clicking on it and find out why.
    function handleEdit(e) {
      e.preventDefault();
      setSubmitted(false); // Do we need this?
      console.log("The Edit button was clicked and is now disabled");
      toggleDisabled();

      return (
        <>
          <Form onSubmit={(e) => e.target.reset()} />
        </>
      )
    }

    return (
      <>
        { submitted ? (
          <div>
            <Complete
              submitted={submitted}
              fullName={fullName}
              email={email}
              phoneNum={phoneNum}
              company={company}
              position={position}
              startDate={startDate}
              endDate={endDate}
              jobLocation={jobLocation}
              description={description}
              school={school}
              major={major}
              schoolStart={schoolStart}
              schoolFinish={schoolFinish}
              schoolLocation={schoolLocation} />

            <div className="form-buttons">
              <button
                type="button"
                id="editButton"
                onClick={handleEdit}
                // disabled={!isDisabled}
              >
                Edit
              </button>
              <button
                type="submit" // Change this back to "button" if it doesn't work?
                id="submitButton"
                onClick={handleSubmit}
                disabled={isDisabled}
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}> 
            <Personal 
              fullName={fullName}
              email={email}
              phoneNum={phoneNum}
              setFullName={setFullName}
              setEmail={setEmail}
              setPhoneNum={setPhoneNum} />
            <Experience
              company={company}
              position={position}
              startDate={startDate}
              endDate={endDate}
              jobLocation={jobLocation}
              description={description}
              setCompany={setCompany}
              setPosition={setPosition}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              setJobLocation={setJobLocation}
              setDescription={setDescription} />
            <Education
              school={school}
              major={major}
              schoolStart={schoolStart}
              schoolFinish={schoolFinish}
              schoolLocation={schoolLocation}
              setSchool={setSchool}
              setMajor={setMajor}
              setSchoolStart={setSchoolStart}
              setSchoolFinish={setSchoolFinish}
              setSchoolLocation={setSchoolLocation} />
            
            <div className="form-buttons">
              <button
                type="button"
                id="editButton"
                onClick={handleEdit}
                // disabled={!isDisabled}
              >
                Edit
              </button>
              <button
                type="submit" // Change this back to "button" if it doesn't work?
                id="submitButton"
                onClick={handleSubmit}
                disabled={isDisabled}
              >
                Submit
              </button>
            </div>

            {/* <Buttons
              fullName={fullName}
              email={email}
              phoneNum={phoneNum}
              // setFullName={setFullName}
              // setEmail={setEmail}
              // setPhoneNum={setPhoneNum}
              company={company}
              position={position}
              startDate={startDate}
              endDate={endDate}
              jobLocation={jobLocation}
              description={description}
              // setCompany={setCompany}
              // setPosition={setPosition}
              // setStartDate={setStartDate}
              // setEndDate={setEndDate}
              // setJobLocation={setJobLocation}
              // setDescription={setDescription}
              school={school}
              major={major}
              schoolStart={schoolStart}
              schoolFinish={schoolFinish}
              schoolLocation={schoolLocation}
              // setSchool={setSchool}
              // setMajor={setMajor}
              // setSchoolStart={setSchoolStart}
              // setSchoolFinish={setSchoolFinish}
              // setSchoolLocation={setSchoolLocation} 
              /> */}
          </form>
        )}
      </>
    );
  } 
}

// function Buttons({ props }) {
//   const [isDisabled, setIsDisabled] = useState(false);
//   const [submitted, setSubmitted] = useState(false); // This is for setting the status and converting all the form data to HTML elements when "Submit" is clicked. We could try 'useState({})' if we go with the previous 'setSubmitted' call in the handleSubmit function.

//   function toggleDisabled() {
//     setIsDisabled(!isDisabled);
//   }

//   // TODO: TRY to call the "Complete" component in this Submit button function if possible
//   function handleSubmit(e) {
//     e.preventDefault();
//     // TODO: Test this function out when the form is submitted after adding HTML elements to display each piece of info. Might need to rename startDate and endDate if React doesn't accept "duplicates". Doesn't work with simply values by itself. Need "property: key"?
//     // setSubmitted({
//     //   fullName,
//     //   email,
//     //   phoneNum,
//     //   company,
//     //   position,
//     //   startDate,
//     //   endDate,
//     //   location,
//     //   description,
//     //   school,
//     //   major,
//     // });
//     setSubmitted(true);
//     console.log("The Submit button was clicked and is now disabled");
//     toggleDisabled();
//     <Complete
//       submitted={submitted}
//       fullName={props.fullName}
//       email={props.email}
//       phoneNum={props.phoneNum}
//       company={props.company}
//       position={props.position}
//       startDate={props.startDate}
//       endDate={props.endDate}
//       jobLocation={props.jobLocation}
//       description={props.description}
//       school={props.school}
//       major={props.major}
//       schoolStart={props.schoolStart}
//       schoolFinish={props.schoolFinish}
//       schoolLocation={props.schoolLocation} />
//   }

//   // TODO: The Edit button doesn't work. At all. Step through the code in DevTools after clicking on it and find out why.
//   function handleEdit(e) {
//     e.preventDefault();
//     setSubmitted(false); // Do we need this?
//     console.log("The Edit button was clicked and is now disabled");
//     toggleDisabled();
//   }

//   return (
//     <>
//      <div className="form-buttons">
//         <button
//           type="button"
//           id="editButton"
//           onClick={handleEdit}
//           // disabled={!isDisabled}
//         >
//           {/* {isDisabled ? "Disabled" : "Enabled"} */}
//           Edit
//         </button>
//         <button
//           type="submit" // Change this back to "button" if it doesn't work?
//           id="submitButton"
//           onClick={handleSubmit}
//           disabled={isDisabled}
//         >
//           Submit
//         </button>
//       </div>
//     </>
//   )
// }

// END


// My initial attempt at the "One state for the whole form" version of the app

// function App() {
  // const [count, setCount] = useState(0)

  // STATES
  // FORM is being edited
  // FORM is complete
  // FORM is submitted
  // USER interacted with empty/not empty input in the form

  // Not sure what we would use this for, come back to it later
  // For the useState prop/argument, if I'm only using one single state, will I need to make an array with nested objects for the entire form with each object containing the property/value representing each input? .map thru it? [{title: name, id: 0}, {title: location, id: 1}, etc.]
  // Group into a single state if we don't know how many pieces of state we need (forms where user adds custom fields). If we only need to set one field alone, do "setResumeForm{...form, fieldName: userInput}"
  // const [resumeForm, setResumeForm] = useState(formState[0]);

  // DISPLAY all of these elements in the middle of the webpage
//   return (
//     <>
//       <Incomplete
//         isComplete={resumeForm}
//         handleSubmitButton={() => setResumeForm(1)}
//       />

//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// Previous ternary operator code in the "Form" function when we tried to put everything under one component ({ submitted } was a prop)

// {submitted ? (
//             <div>
//               <div className="completed-personal">
//                 <h2>Personal Info</h2>
//                 <div className="full-name">
//                   <h3>Name</h3>
//                   <p>{fullName}</p>
//                 </div>
//                 <div className="email-address">
//                   <h3>Email</h3>
//                   <p>{email}</p>
//                 </div>
//                 <div className="tel-phone-num">
//                   <h3>Phone Number</h3>
//                   <p>{phoneNum}</p>
//                 </div>
//               </div>

//               <div className="completed-experience">
//                 <h2>Work Experience</h2>
//                 <div className="company-name">
//                   <h3>Company</h3>
//                   <p>{company}</p>
//                 </div>
//                 <div className="job-position">
//                   <h3>Position</h3>
//                   <p>{position}</p>
//                 </div>
//                 <div className="date-range">
//                   <h3>Start Date</h3>
//                   <p>{startDate}</p>
//                 </div>
//                 <div className="date-range">
//                   <h3>End Date</h3>
//                   <p>{endDate}</p>
//                 </div>
//                 <div className="job-location">
//                   <h3>Location</h3>
//                   <p>{location}</p>
//                 </div>
//                 <div className="job-duties">
//                   <h3>Main Responsibilities</h3>
//                   <p>{description}</p>
//                 </div>
//               </div>

//               <div className="completed-education">
//                 <h2>Education</h2>
//                 <div className="school-name">
//                   <h3>Institution</h3>
//                   <p>{school}</p>
//                 </div>
//                 <div className="study-major">
//                   <h3>Study/Major</h3>
//                   <p>{major}</p>
//                 </div>
//                 <div className="date-range">
//                   <h3>Start Date</h3>
//                   <p>{schoolStart}</p>
//                 </div>
//                 <div className="date-range">
//                   <h3>End Date</h3>
//                   <p>{schoolFinish}</p>
//                 </div>
//                 <div className="school-location">
//                   <h3>Location</h3>
//                   <p>{schoolLocation}</p>
//                 </div>
//               </div>

//               <div className="form-buttons">
//                 <button
//                   type="button"
//                   id="editButton"
//                   onClick={handleEdit}
//                   disabled={!isDisabled}
//                 >
//                   {/* {isDisabled ? "Disabled" : "Enabled"} */}
//                   Edit
//                 </button>
//                 <button
//                   type="submit" // Change this back to "button" if it doesn't work?
//                   id="submitButton"
//                   onClick={handleSubmit}
//                   disabled={isDisabled}
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           ) : (
//           <form onSubmit={(e) => e.preventDefault()}>
//             <h2>Personal Info</h2>
//             <div className="form-col">
//               <label htmlFor="full-name">Full Name</label>
//               <input
//                 name="full-name"
//                 id="full-name"
//                 value={fullName}
//                 onChange={handleNameChange}
//                 required
//               />
//             </div>

//             <div className="form-col">
//               <label htmlFor="email-address">Email</label>
//               <input
//                 type={email} // TODO: Check the docs and make sure this syntax is correct
//                 name="email-address"
//                 id="email-address"
//                 value={email}
//                 onChange={handleEmailChange}
//                 placeholder="yourname@example.com"
//                 required
//               />
//             </div>

//             <div className="form-col">
//               <label htmlFor="phone-number">Phone Number</label>
//               <input
//                 type="tel" // TODO: Check the docs and make sure this syntax is correct (and why curly braces isn't correct)
//                 name="phone-number"
//                 id="phone-number"
//                 value={phoneNum}
//                 onChange={handlePhoneChange}
//                 required
//               />
//             </div>

//             <h2>Work Experience</h2>
//             <div className="form-grid">
//               <label htmlFor="company-name">Company</label>
//               <input
//                 name="company-name"
//                 id="company-name"
//                 value={company}
//                 onChange={handleCompanyChange}
//               />
//             </div>

//             <div className="form-grid">
//               <label htmlFor="job-position">Position</label>
//               <input
//                 name="job-position"
//                 id="job-position"
//                 value={position}
//                 onChange={handlePositionChange}
//               />
//             </div>

//             <div className="form-grid">
//               <label htmlFor="date-range">Start Date</label>
//               <input
//                 type="date" // TODO: Check the docs and make sure this syntax is correct (and why curly braces is not correct)
//                 name="date-range"
//                 id="date-range"
//                 value={startDate}
//                 onChange={handleStartDateChange} // TODO: Change this to handleDateChange if first TODO above can be accomplished
//               />
//             </div>

//             <div className="form-grid">
//               <label htmlFor="date-range">End Date</label>
//               <input
//                 type="date" // TODO: Check the docs and make sure this syntax is correct (and why curly braces is not correct)
//                 name="date-range"
//                 id="date-range"
//                 value={endDate}
//                 onChange={handleEndDateChange} // TODO: Change this to handleDateChange if first TODO above can be accomplished
//               />
//             </div>

//             <div className="form-grid">
//               <label htmlFor="job-location">Location</label>
//               <input
//                 name="job-location"
//                 id="job-location"
//                 value={jobLocation}
//                 onChange={handleJobLocationChange}
//               />
//             </div>

//             <div className="form-grid">
//               <label htmlFor="job-duties">Main Responsibilities</label>
//               <textarea
//                 name="job-duties"
//                 id="job-duties"
//                 rows={10}
//                 cols={60}
//                 value={description}
//                 onChange={handleDescriptionChange}
//               />
//             </div>

//             <h2>Education</h2>
//             <div className="form-grid">
//               <label htmlFor="school-name">Institution</label>
//               <input
//                 name="school-name"
//                 id="school-name"
//                 value={school}
//                 onChange={handleSchoolChange}
//               />
//             </div>

//             <div className="form-grid">
//               <label htmlFor="study-major">Title of Study/Major</label>
//               <input
//                 name="study-major"
//                 id="study-major"
//                 value={major}
//                 onChange={handleMajorChange}
//               />
//             </div>

//             <div className="form-grid">
//               <label htmlFor="date-range">Start Date</label>
//               <input
//                 type="date" // TODO: Check the docs and make sure this syntax is correct (and why curly braces is not correct)
//                 name="date-range"
//                 id="date-range"
//                 value={schoolStart}
//                 onChange={handleSchoolStartChange} // TODO: Change this to handleDateChange if first TODO above can be accomplished
//               />
//             </div>

//             <div className="form-grid">
//               <label htmlFor="date-range">End Date</label>
//               <input
//                 type="date" // TODO: Check the docs and make sure this syntax is correct (and why curly braces is not correct)
//                 name="date-range"
//                 id="date-range"
//                 value={schoolFinish}
//                 onChange={handleSchoolFinishChange} // TODO: Change this to handleDateChange if first TODO above can be accomplished
//               />
//             </div>

//             <div className="form-grid">
//               <label htmlFor="school-location">Location</label>
//               <input
//                 name="school-location"
//                 id="school-location"
//                 value={schoolLocation}
//                 onChange={handleSchoolLocationChange}
//               />
//             </div>

//             <div className="form-buttons">
//               <button
//                 type="button"
//                 id="editButton"
//                 onClick={handleEdit}
//                 disabled={isDisabled}
//               >
//                 {/* {isDisabled ? "Disabled" : "Enabled"} */}
//                 Edit
//               </button>
//               <button
//                 type="submit" // Change this back to "button" if it doesn't work?
//                 id="submitButton"
//                 onClick={handleSubmit}
//                 disabled={!isDisabled}
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         )}
// export default App