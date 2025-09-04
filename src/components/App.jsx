import { useState } from 'react'
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
// import Complete from './Complete'
// import Incomplete from './Incomplete'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'
// import { useFormState } from 'react-dom'

// TODO: Refresh/review all React content in TOP from 'Getting Started With React' section up to this project if needed

// Use console.log...a lot (confirm React batching state updates on re-renders)

// Might need to do CRUD functions? The app needs to be able to read the inputs in the form and either change them to HTML elements (Submit) or read the HTML elements and change them back to form inputs (Edit). We SHOULD try to write CONTROLLED components for the form elements instead...we might need both controlled components AND the CRUD functions

// An example of a controlled component:
// const [value, setValue] = useState("");

// For 'input' elements below: value={value}, onChange={(e or event) => setValue(e or event.target.value)}

// DOCS
// State: A Component's Memory (Challenges) - reference to how we should use React to do our forms? there are states for every input though
// State as a Snapshot - entire doc has more examples of forms & form structure
// Choosing the State Structure - see the dev comments in the App function below for grouping, state contradictions form example

// BEGIN
// WHEN the user goes to the website/browser app via web address
// DISPLAY the entire application
// SHOW the Heading & CV (Resume) form

// An example array that allows us to toggle the form state based on Edit/Submit buttons being interacted with. Default is "incomplete".
// const formState = ["incomplete", "complete"]; 

// Do we need to pass a callback to our "setResumeForm" function in our "handle" function for Edit/Submit buttons? (More on State lesson)
// setResumeForm((prevForm) => ({...prevForm, ???}));

// IMPORTANT: Rename the "startDate, endDate" variables "schoolStart, schoolEnd, jobStart, jobEnd" if needed

// This is the "multiple states per section" version of the app, split up into 3 components for each respective section of the form
// BRANCH: Create "Add work experience" and "Add education" buttons that generate another Experience and Education component respectively (WITHOUT the heading titles)
export default function App() {
  const [count, setCount] = useState(0)

  const [isDisabled, setIsDisabled] = useState(false);
  const [submitted, setSubmitted] = useState(false); // This is for setting the status and converting all the form data to HTML elements when "Submit" is clicked

  // May need this to display submitted data on Submit?
  // const [formData, setFormData] = useState({});

  // STATES
  // FORM is being edited
  // FORM is complete
  // FORM is submitted
  // USER interacted with empty/not empty input in the form

  function toggleDisabled() {
    setIsDisabled(!isDisabled);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Test this function out when the form is submitted after adding HTML elements to display each piece of info. Might need to rename startDate and endDate if React doesn't accept "duplicates"
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

  function handleEdit(e) {
    e.preventDefault();
    setSubmitted(false); // Do we need this?
    console.log("The Edit button was clicked and is now disabled");
    toggleDisabled();
  }

  // DISPLAY all of these elements in the middle of the webpage
  if (submitted) {
    return (
      <>
        <h1>CV/Resumé App</h1>

        {/* TODO:
        HTML elements for Personal, Experience and Education components go here. InnerHTML under each component called? Or something else?
        We might need this under the OTHER return statement below instead of here. Or remove the form elements from the other components (see other modules) */}
        {/* Example for displaying form data */}

        {/* {submitted && (
           <div>
             <h2>Submitted Information:</h2>
             <p><strong>Name:</strong> {submitted.fullName}</p>
             <p><strong>Email:</strong> {submitted.email}</p>
           </div>
         )} */}
        {/* TODO: only the headings are showing, not the actual info entered on the form via the <p> elements. Dot notation is wrong. Fix */}
        {/* Still might need to change the classNames to just one name for styling instead of each div having its own separate classNames */}
        <div className="completed-form">
          {/* <h2>Personal Info</h2>
          <div className="full-name">
            <h3>Name</h3>
            <p>{Personal.fullName}</p>
          </div>
          <div className="email-address">
            <h3>Email</h3>
            <p>{Personal.email}</p>
          </div>
          <div className="tel-phone-num">
            <h3>Phone Number</h3>
            <p>{Personal.phoneNum}</p>
          </div> */}

          {/* Having this shows the info but still as "form" elements, not as HTML elements with headings and <p> tags. "Personal" component completely ignores the "if" statement I wrote on it */}
          <Personal /> 

          <h2>Work Experience</h2>
          <div className="company-1">
            <div className="company-name-1">
              <h3>Company</h3>
              <p>{Experience.Company}</p>
            </div>
            <div className="job-position-1">
              <h3>Position</h3>
              <p>{Experience.Position}</p>
            </div>
            <div className="date-range-1">
              <h3>Start Date</h3>
              <p>{Experience.startDate}</p>
            </div>
            <div className="date-range-1">
              <h3>End Date</h3>
              <p>{Experience.endDate}</p>
            </div>
            <div className="location-1">
              <h3>Location</h3>
              <p>{Experience.location}</p>
            </div>
            <div className="description-1">
              <h3>Main Responsibilities</h3>
              <p>{Experience.description}</p>
            </div>
          </div>
          {/* TODO: Hard coding this for now. Test it out by filling out both Work Experience fields, then filling out only one. If it doesn't work, see TODO just below this section  */}
          <div className="company-2">
            <div className="company-name-2">
              <h3>Company</h3>
              <p>{Experience.company}</p>
            </div>
            <div className="job-position-2">
              <h3>Position</h3>
              <p>{Experience.position}</p>
            </div>
            <div className="date-range-2">
              <h3>Start Date</h3>
              <p>{Experience.startDate}</p>
            </div>
            <div className="date-range-2">
              <h3>End Date</h3>
              <p>{Experience.endDate}</p>
            </div>
            <div className="location-2">
              <h3>Location</h3>
              <p>{Experience.location}</p>
            </div>
            <div className="description-2">
              <h3>Main Responsibilities</h3>
              <p>{Experience.description}</p>
            </div>
          </div>
        </div>
      </>

      // TODO: Implement a "forEach" method or, preferably, a "map" method for each Work Experience and Education section filled out by the user? Either way, we need to create an array (with objects?).
      // We COULD grab each "input" element ("label" elements too?) via DOM manipulation through querySelectorAll, take that NodeList and use forEach to show the filled out info on the submitted UI
      // Look at our To-Do List project for any other ideas

      // <form onSubmit={((e) => e.preventDefault(), setSubmitted(true))}>
      //   <Personal />
      //   <Experience />
      //   <Experience />
      //   <Education />
      //   <Education />
      // </form>
    );
  } else {
    return (
      <>
        <h1>CV/Resumé App</h1>
        <div className="App">
          <Personal />
          <h2>Work Experience</h2>
          <Experience />
          <Experience />
          <h2>Education</h2>
          <Education />
          <Education />
          <div className="form-buttons">
            <button
              type="button"
              id="editButton"
              onClick={handleEdit}
              disabled={!isDisabled}
            >
              {/* {isDisabled ? "Disabled" : "Enabled"} */}
              Edit
            </button>
            <button
              type="submit" // Change this back to "button" if it doesn't work?
              id="submitButton"
              onClick={handleSubmit}
              disabled={isDisabled}
            >
              {/* {isDisabled ? "Disabled" : "Enabled"} */}
              Submit
            </button>
          </div>
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
  }
}

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

// export default App