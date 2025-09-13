import { useState } from 'react'
// import Personal from "./Personal";
// import Experience from "./Experience";
// import Education from "./Education";
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
  const [submitted, setSubmitted] = useState(false); // This is for setting the status and converting all the form data to HTML elements when "Submit" is clicked. We could try 'useState({})' if we go with the previous 'setSubmitted' call in the handleSubmit function.

  // TODO: Review "Sharing State Between Components" again and find out why these values are never read despite lifting the state up to App and passing them down as props to each function below
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

  function handleNameChange(e) {
    setFullName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhoneNum(e.target.value);
  }

  function handleCompanyChange(e) {
    setCompany(e.target.value);
  }

  function handlePositionChange(e) {
    setPosition(e.target.value);
  }

  // TODO: See if we can put both setStartDate and setEndDate calls under one handleDateChange function
  function handleStartDateChange(e) {
    setStartDate(e.target.value);
  }

  function handleEndDateChange(e) {
    setEndDate(e.target.value);
  }

  function handleJobLocationChange(e) {
    setJobLocation(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSchoolChange(e) {
    setSchool(e.target.value);
  }

  function handleMajorChange(e) {
    setMajor(e.target.value);
  }

  // TODO: See if we can put both setStartDate and setEndDate calls under one handleDateChange function
  function handleSchoolStartChange(e) {
    setSchoolStart(e.target.value);
  }

  function handleSchoolFinishChange(e) {
    setSchoolFinish(e.target.value);
  }

  function handleSchoolLocationChange(e) {
    setSchoolLocation(e.target.value);
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
          <Experience />
          <Experience />
          <Education />
          <Education />

          {/* <h2>Work Experience</h2>
          <div className="company-1">
            <div className="company-name-1">
              <h3>Company</h3>
              <p>{Experience.Company}</p> - Even when the "Company" propertyName is capitalized, it still doesn't render on Submit
            </div>
            <div className="job-position-1">
              <h3>Position</h3>
              <p>{Experience.Position}</p> - Even when the "Position" propertyName is capitalized, it still doesn't render on Submit
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
          </div> */}
          {/* TODO: Hard coding this for now. Test it out by filling out both Work Experience fields, then filling out only one. If it doesn't work, see TODO just below this section  */}
          {/* <div className="company-2">
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
          </div> */}

          <div className="form-buttons">
            <button
              type="button"
              id="editButton"
              onClick={handleEdit}
              disabled={isDisabled}
            >
              {/* {isDisabled ? "Disabled" : "Enabled"} */}
              Edit
            </button>
            <button
              type="submit" // Change this back to "button" if it doesn't work?
              id="submitButton"
              onClick={handleSubmit}
              disabled={!isDisabled}
            >
              Submit
            </button>
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
          <Personal title="Personal Info" fullName={""} email={""} phoneNum={""} />
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
              // disabled={!isDisabled}
            >
              {/* {isDisabled ? "Disabled" : "Enabled"} */}
              Edit
            </button>
            {/* <button
              type="submit" // Change this back to "button" if it doesn't work?
              id="submitButton"
              onClick={handleSubmit}
              disabled={isDisabled}
            >
              Submit
            </button> */}
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

  // Possibly combine these functions into one "Form (function)" so we don't have multiple forms to submit?

  // ATTEMPT #1: Simply importing App to use it as a value for declaring "submitted" as a variable doesn't render things correctly

  // OPTION: Try to pass down the "submitted" prop to the return statement as a ternary operator ( {submitted ? show innerHTML or whatever HTML : form elements} ). See code just under <h1> in the App component as an example of ternary operator rendering the HTML elements upon submission. See Steps 1 and 2 examples on Sharing State Between Components.

  // const submitted = App.Submitted; - See comment on App import above

  // TODO: Pass "onChange" as a prop, then add "onChange" as a prop to Personal when called above?
  function Personal({ fullName, email, phoneNum }) {
    // const [isDisabled, setIsDisabled] = useState(false); - See ATTEMPT #4

    // setTimeout apparently causes all text inputs to not function at all, even after 60000 ms.

    // TODO: This conditional is currently being completely ignored and the form elements still render when this component is called in App even after submitting the resume via the Submit button. 

    // DevTools shows that the values entered into the inputs are being updated but "submitted" is still showing 'undefined' despite passing it as a prop above. Likely because this function is in a different component from where "submitted" IS defined (in App component.)

    // ATTEMPT #2: When we create a separate function showing the completed Personal info section showing the values of the input fields and set it up similar to the Panel function in step 2 example of "Sharing State Between Components" React doc, all of the Personal info that's filled in disappears from the app once that section has all input values filled in and the function is run in the conditional "if/else" statement below. The HTML elements from this function aren't returning

    // ATTEMPT #4: Run it again via 'onSubmit' in the form since 'e.preventDefault' is called on handleSubmit in the App module anyway. Tried to add separate Edit and Submit buttons just for this section since onSubmit alone wouldn't get this section to show HTML elements, but it didn't work
    // function personalComplete() {
    //   return (
    //     <div className="completed-personal">
    //       <h2>Personal Info</h2>
    //         <div className="full-name">
    //           <h3>Name</h3>
    //           <p>{fullName}</p>
    //         </div>
    //         <div className="email-address">
    //           <h3>Email</h3>
    //           <p>{email}</p>
    //         </div>
    //         <div className="tel-phone-num">
    //           <h3>Phone Number</h3>
    //           <p>{phoneNum}</p>
    //         </div>
    //     </div>
    //   )
    // }

    // ATTEMPT #3: This works as long as we don't return the "PersonalComplete" function and just the raw HTML elements instead, but it auto returns them as soon as the last section is filled out (doesn't stay as form inputs until Submit button is clicked). "Ghetto" solution that we can repeat on the other components if needed (and only have an Edit button if that's the case)

    // Adding setTimeout to the returned JSX just returns "123" completed text instead of any form elements
    //   if (fullName !== "" && email !== "" && phoneNum !== "") {
    //     return (
    //       <div className="completed-personal">
    //         <h2>Personal Info</h2>
    //         <div className="full-name">
    //           <h3>Name</h3>
    //           <p>{fullName}</p>
    //         </div>
    //         <div className="email-address">
    //           <h3>Email</h3>
    //           <p>{email}</p>
    //         </div>
    //         <div className="tel-phone-num">
    //           <h3>Phone Number</h3>
    //           <p>{phoneNum}</p>
    //         </div>
    //       </div>
    //     )
    //   } else {
    //     return (
    //       <form onSubmit={(e) => e.preventDefault()}>
    //         <h2>Personal Info</h2>
    //         <div className="form-col">
    //           <label htmlFor="full-name">Full Name</label>
    //           <input
    //             name="full-name"
    //             id="full-name"
    //             value={fullName}
    //             onChange={handleNameChange}
    //             required
    //           />
    //         </div>

    //         <div className="form-col">
    //           <label htmlFor="email-address">Email</label>
    //           <input
    //             type={email}
    //             name="email-address"
    //             id="email-address"
    //             value={email}
    //             onChange={handleEmailChange}
    //             placeholder="yourname@example.com"
    //             required
    //           />
    //         </div>

    //         <div className="form-col">
    //           <label htmlFor="phone-number">Phone Number</label>
    //           <input
    //             type="tel"
    //             name="phone-number" // TODO: Check the docs and find out why curly braces around it was wrong
    //             id="phone-number"
    //             value={phoneNum}
    //             onChange={handlePhoneChange}
    //             required
    //           />
    //         </div>
    //       </form>
    //     );
    //   }
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-col">
          <label htmlFor="full-name">Full Name</label>
          <input
            name="full-name"
            id="full-name"
            value={fullName}
            onChange={handleNameChange}
            required
          />
        </div>

        <div className="form-col">
          <label htmlFor="email-address">Email</label>
          <input
            type={email} // TODO: Check the docs and make sure this syntax is correct
            name="email-address"
            id="email-address"
            value={email}
            onChange={handleEmailChange}
            placeholder="yourname@example.com"
            required
          />
        </div>

        <div className="form-col">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="tel" // TODO: Check the docs and make sure this syntax is correct (and why curly braces isn't correct)
            name="phone-number"
            id="phone-number"
            value={phoneNum}
            onChange={handlePhoneChange}
            required
          />
        </div>
      </form>
    );
  }

  // OPTION: Add "submitted" status as a {prop} in this function, then pass it down to the return statement as a conditional render via if/else statement or ternary operator ( {submitted ? show innerHTML or whatever HTML : form elements} ). See code just under <h1> in the App component as an example of ternary operator rendering the HTML elements upon submission. See Steps 1 and 2 examples on Sharing State Between Components.

  // TODO: Pass "onChange" as a prop, then add "onChange" as a prop to Personal when called above?
  function Experience({
    company,
    position,
    startDate,
    endDate,
    jobLocation,
    description,
  }) {
  //   if (company !== "" && position !== "" && startDate !== "" && location !== "" && description !== "") {
  //   return (
  //     <div className="completed-experience">
  //       <h2>Work Experience</h2>
  //       <div className="company-name">
  //         <h3>Company</h3>
  //         <p>{company}</p>
  //       </div>
  //       <div className="job-position">
  //         <h3>Position</h3>
  //         <p>{position}</p>
  //       </div>
  //       <div className="date-range">
  //         <h3>Start Date</h3>
  //         <p>{startDate}</p>
  //       </div>
  //       <div className="date-range">
  //         <h3>End Date</h3>
  //         <p>{endDate}</p>
  //       </div>
  //       <div className="job-location">
  //         <h3>Location</h3>
  //         <p>{location}</p>
  //       </div>
  //       <div className="job-duties">
  //         <h3>Main Responsibilities</h3>
  //         <p>{description}</p>
  //       </div>
  //     </div>
  //   )
  // } else {
  //   return (
  //     // Possibly move form over to App.jsx as one form so we don't have multiple forms to submit?
  //     <form onSubmit={(e) => e.preventDefault()}>
  //       {/* <h2>Work Experience</h2> */}
  //       <div className="form-grid">
  //         <label htmlFor="company-name">Company</label>
  //         <input
  //           name="company-name"
  //           id="company-name"
  //           value={company}
  //           onChange={handleCompanyChange}
  //         />
  //       </div>

  //       <div className="form-grid">
  //         <label htmlFor="job-position">Position</label>
  //         <input
  //           name="job-position"
  //           id="job-position"
  //           value={position}
  //           onChange={handlePositionChange}
  //         />
  //       </div>

  //       <div className="form-grid">
  //         <label htmlFor="date-range">Start Date</label>
  //         <input
  //           type="date" // TODO: Check the docs and make sure this syntax is correct (and why curly braces around it was wrong)
  //           name="date-range"
  //           id="date-range"
  //           value={startDate}
  //           onChange={handleStartDateChange} // BRANCH: Change this to handleDateChange if first BRANCH above can be accomplished
  //         />
  //       </div>

  //       <div className="form-grid">
  //         <label htmlFor="date-range">End Date</label>
  //         <input
  //           type="date" // TODO: Check the docs and make sure this syntax is correct (and why curly braces around it was wrong)
  //           name="date-range"
  //           id="date-range"
  //           value={endDate}
  //           onChange={handleEndDateChange} // BRANCH: Change this to handleDateChange if first BRANCH above can be accomplished
  //         />
  //       </div>

  //       <div className="form-grid">
  //         <label htmlFor="job-location">Location</label>
  //         <input
  //           name="job-location"
  //           id="job-location"
  //           value={location}
  //           onChange={handleLocationChange}
  //         />
  //       </div>

  //       <div className="form-grid">
  //         <label htmlFor="job-duties">Main Responsibilities</label>
  //         <input
  //           type="textarea" // TODO: Check the docs and make sure this syntax is correct (and why curly braces around it was wrong)
  //           name="job-duties"
  //           id="job-duties"
  //           value={description}
  //           onChange={handleDescriptionChange}
  //         />
  //       </div>
  //     </form>
  //   );
  // }
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Work Experience</h2>
        <div className="form-grid">
          <label htmlFor="company-name">Company</label>
          <input
            name="company-name"
            id="company-name"
            value={company}
            onChange={handleCompanyChange}
          />
        </div>

        <div className="form-grid">
          <label htmlFor="job-position">Position</label>
          <input
            name="job-position"
            id="job-position"
            value={position}
            onChange={handlePositionChange}
          />
        </div>

        <div className="form-grid">
          <label htmlFor="date-range">Start Date</label>
          <input
            type="date" // TODO: Check the docs and make sure this syntax is correct (and why curly braces is not correct)
            name="date-range"
            id="date-range"
            value={startDate}
            onChange={handleStartDateChange} // TODO: Change this to handleDateChange if first TODO above can be accomplished
          />
        </div>

        <div className="form-grid">
          <label htmlFor="date-range">End Date</label>
          <input
            type="date" // TODO: Check the docs and make sure this syntax is correct (and why curly braces is not correct)
            name="date-range"
            id="date-range"
            value={endDate}
            onChange={handleEndDateChange} // TODO: Change this to handleDateChange if first TODO above can be accomplished
          />
        </div>

        <div className="form-grid">
          <label htmlFor="job-location">Location</label>
          <input
            name="job-location"
            id="job-location"
            value={jobLocation}
            onChange={handleJobLocationChange}
          />
        </div>

        <div className="form-grid">
          <label htmlFor="job-duties">Main Responsibilities</label>
          <textarea
            name="job-duties"
            id="job-duties"
            rows={10} // TODO: See if the rows/cols show up when textarea is under curly braces
            cols={60}
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
      </form>
    );
  }

  // OPTION: Add "submitted" status as a {prop} in this function, then pass it down to the return statement as a conditional render via if/else statement or ternary operator ( {submitted ? show innerHTML or whatever HTML : form elements} ). See code just under <h1> in the App component as an example of ternary operator rendering the HTML elements upon submission. See Steps 1 and 2 examples on Sharing State Between Components.

  // TODO: May need to rename startDate, endDate and location due to same naming convention as Experience component? Or does React allow "duplicates"?

  // TODO: Pass "onChange" as a prop, then add "onChange" as a prop to Personal when called above?
  function Education({
    school,
    major,
    schoolStart,
    schoolFinish,
    schoolLocation,
  }) {
  //   if (school !== "" && major !== "" && startDate !== "" && location !== "") {
  //   return (
  //     <div className="completed-education">
  //       <h2>Education</h2>
  //       <div className="school-name">
  //         <h3>Institution</h3>
  //         <p>{school}</p>
  //       </div>
  //       <div className="study-major">
  //         <h3>Title of Study/Major</h3>
  //         <p>{major}</p>
  //       </div>
  //       <div className="date-range">
  //         <h3>Start Date</h3>
  //         <p>{startDate}</p>
  //       </div>
  //       <div className="date-range">
  //         <h3>End Date</h3>
  //         <p>{endDate}</p>
  //       </div>
  //       <div className="school-location">
  //         <h3>Location</h3>
  //         <p>{location}</p>
  //       </div>
  //     </div>
  //   )
  // } else {
  //   return (
  //     // Possibly move form over to App.jsx as one form so we don't have multiple forms to submit?
  //     <form onSubmit={(e) => e.preventDefault()}>
  //       {/* <h2>Education</h2> */}
  //       <div className="form-grid">
  //         <label htmlFor="school-name">Institution</label>
  //         <input
  //           name="school-name"
  //           id="school-name"
  //           value={school}
  //           onChange={handleSchoolChange}
  //         />
  //       </div>

  //       <div className="form-grid">
  //         <label htmlFor="study-major">Title of Study/Major</label>
  //         <input
  //           name="study-major"
  //           id="study-major"
  //           value={major}
  //           onChange={handleMajorChange}
  //         />
  //       </div>

  //       <div className="form-grid">
  //         <label htmlFor="date-range">Start Date</label>
  //         <input
  //           type="date" // TODO: Check the docs and make sure this syntax is correct (and why curly braces around it was wrong)
  //           name="date-range"
  //           id="date-range"
  //           value={startDate}
  //           onChange={handleStartDateChange} // TODO: Change this to handleDateChange if first TODO above can be accomplished
  //         />
  //       </div>

  //       <div className="form-grid">
  //         <label htmlFor="date-range">End Date</label>
  //         <input
  //           type="date" // TODO: Check the docs and make sure this syntax is correct (and why curly braces around it was wrong)
  //           name="date-range"
  //           id="date-range"
  //           value={endDate}
  //           onChange={handleEndDateChange} // TODO: Change this to handleDateChange if first TODO above can be accomplished
  //         />
  //       </div>

  //       <div className="form-grid">
  //         <label htmlFor="school-location">Location</label>
  //         <input
  //           name="school-location"
  //           id="school-location"
  //           value={location}
  //           onChange={handleLocationChange}
  //         />
  //       </div>
  //     </form>
  //   );
  // }
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Education</h2>
        <div className="form-grid">
          <label htmlFor="school-name">Institution</label>
          <input
            name="school-name"
            id="school-name"
            value={school}
            onChange={handleSchoolChange}
          />
        </div>

        <div className="form-grid">
          <label htmlFor="study-major">Position</label>
          <input
            name="study-major"
            id="study-major"
            value={major}
            onChange={handleMajorChange}
          />
        </div>

        <div className="form-grid">
          <label htmlFor="date-range">Start Date</label>
          <input
            type="date" // TODO: Check the docs and make sure this syntax is correct (and why curly braces is not correct)
            name="date-range"
            id="date-range"
            value={schoolStart}
            onChange={handleSchoolStartChange} // TODO: Change this to handleDateChange if first TODO above can be accomplished
          />
        </div>

        <div className="form-grid">
          <label htmlFor="date-range">End Date</label>
          <input
            type="date" // TODO: Check the docs and make sure this syntax is correct (and why curly braces is not correct)
            name="date-range"
            id="date-range"
            value={schoolFinish}
            onChange={handleSchoolFinishChange} // TODO: Change this to handleDateChange if first TODO above can be accomplished
          />
        </div>

        <div className="form-grid">
          <label htmlFor="school-location">Location</label>
          <input
            name="school-location"
            id="school-location"
            value={schoolLocation}
            onChange={handleSchoolLocationChange}
          />
        </div>
      </form>
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