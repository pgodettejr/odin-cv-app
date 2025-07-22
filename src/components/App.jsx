import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'

// TODO: Refresh/review all React content in TOP from 'Getting Started With React' section up to this project if needed

// TODO: Look at Rendering Techniques lesson and focus on 'conditional rendering' docs for rendering the form inputs as HTML elements when the form is submitted via the Submit button. Put the logic in a separate JSX/components file or directory

// BEGIN
// WHEN the user goes to the website/browser app via web address
// DISPLAY the entire application
// SHOW the Heading & CV (Resume) form

// An example array that allows us to toggle the form state based on Edit/Submit buttons being interacted with. Default is "incomplete".
// const toggleResumeForm = ["incomplete", "complete"]; 
// const initialFormState = "";

function App() {
  const [count, setCount] = useState(0)

  // STATES
  // FORM is being edited
  // FORM is complete
  // FORM is submitted
  // USER interacted with empty/not empty input in the form

  // Not sure what we would use this for, come back to it later
  // TODO: Rename the 'useState' argument (formInput, formState, false, etc.)
  // const [resumeForm, setResumeForm] = useState(toggleResumeForm[0] OR initialFormState);

  // TODO: Write a function or component both for the Edit and for the Submit button that returns an event listener that runs the code for each button respectively. Utilize 'useState' to change the state of the app when each button is interacted with/clicked

  // WHEN the user inputs all elements in the form, submits it, THEN clicks the Edit button
  // CALL the editButton event listener that will:
  function handleEditButton() {
    // DISPLAY all the form elements with the previously entered info in each one
    // setResumeForm((editForm) => editForm);
    // setResumeForm(toggleForm OR resumeForm);
  }

  // WHEN the user inputs all elements in the form & clicks the Submit button
  // CALL the submitButton event listener that will:
  function handleSubmitButton() {
    // 	REMOVE (GRAY OUT/FADE) the Heading element - add CSS styling as JS here
    // 	REMOVE (GRAY OUT/FADE) the form and all elements within the form - add CSS styling as JS here
    // 	SHOW a Heading element at the bottom: "Thank You! Your info has been submitted"
    // 	SHOW all the info inputted by the user in an HTML format
  }

  // DISPLAY all of these elements in the middle of the webpage
  return (
    <>
      {/* {toggleResumeForm.map((form) => )} - wraps around the form below? */}
      {/* DISPLAY the Heading element above the form */}
      <h1>CV/Resumé App</h1>

      {/* DISPLAY each section of the form: Personal Info, Work Experience, Education */}
      <div className="cv-app">

        {/* May need to change single quotation tags to double quotations if error shows up for them */}
        {/* Put each section of the form in their own div wrappers/containers if needed  */}
        {/* camelCase the names of our HTML attributes (that are in quotations) if we need to  */}
        <form action="" method="get" id='cv-form'>

          {/* DISPLAY the Name, Email & Phone # form inputs in the Personal Info section */}
          <h2>Personal Info</h2>
          <div className="form-col">
            <label htmlFor="full-name">Full Name</label>
            <input type="text" name="full-name" id='full-name' required/>
          </div>
          <div className="form-col">
            <label htmlFor="email-address">Email</label>
            <input type="email" name="email-address" id='email-address' required/>
          </div>
          <div className="form-col">
            <label htmlFor="phone-number">Email</label>
            <input type="tel" name="phone-number" id='phone-number' required/>
          </div>

          {/* DISPLAY two subsections in the Work Experience section */}
          <h2>Work Experience</h2>

          {/* DISPLAY the Company, Position, Date Range, Location & Main Responsibilities form inputs in each subsection */}
          <div className="form-grid">
            <label htmlFor="company-name">Company</label>
            <input type="text" name='company-name' id='company-name'/>
          </div>
          <div className="form-grid">
            <label htmlFor="position">Position</label>
            <input type="text" name='position' id='position'/>
          </div>
          <div className="form-grid">
            {/* Rename 'date-range' to 'start-date' if needed */}
            <label htmlFor="date-range">Start Date</label>
            <input type="date" name='date-range' id='date-range'/>
          </div>
          <div className="form-grid">
            {/* Rename 'date-range' to 'end-date' if needed  */}
            <label htmlFor="date-range">End Date</label>
            <input type="date" name='date-range' id='date-range'/>
          </div>
          <div className="form-grid">
            <label htmlFor="location">Location</label>
            <input type="text" name='location' id='location'/>
          </div>
          <div className="form-grid">
            <label htmlFor="description">Main Responsibilities</label>
            <input type="textarea" name='description' id='description' />
          </div>

          <div className="form-grid">
            <label htmlFor="company-name">Company</label>
            <input type="text" name='company-name' id='company-name'/>
          </div>
          <div className="form-grid">
            <label htmlFor="position">Position</label>
            <input type="text" name='position' id='position'/>
          </div>
          <div className="form-grid">
            {/* Rename 'date-range' to 'start-date' if needed */}
            <label htmlFor="date-range">Start Date</label>
            <input type="date" name='date-range' id='date-range'/>
          </div>
          <div className="form-grid">
            {/* Rename 'date-range' to 'end-date' if needed  */}
            <label htmlFor="date-range">End Date</label>
            <input type="date" name='date-range' id='date-range'/>
          </div>
          <div className="form-grid">
            <label htmlFor="location">Location</label>
            <input type="text" name='location' id='location'/>
          </div>
          <div className="form-grid">
            <label htmlFor="description">Main Responsibilities</label>
            <input type="textarea" name='description' id='description' />
          </div>

          {/* DISPLAY two subsections in the Education section */}
          <h2>Education</h2>

          {/* DISPLAY the Institution, Title of Study/Major, Date Range & Location form inputs in each subsection */}
          <div className="form-grid">
            <label htmlFor="school-name">Institution</label>
            <input type="text" name='school-name' id='school-name'/>
          </div>
          <div className="form-grid">
            <label htmlFor="study-major">Title of Study/Major</label>
            <input type="text" name='study-major' id='study-major'/>
          </div>
          <div className="form-grid">
            {/* Rename 'date-range' to 'start-date' if needed */}
            <label htmlFor="date-range">Start Date</label>
            <input type="date" name='date-range' id='date-range'/>
          </div>
          <div className="form-grid">
            {/* Rename 'date-range' to 'end-date' if needed  */}
            <label htmlFor="date-range">End Date</label>
            <input type="date" name='date-range' id='date-range'/>
          </div>
          <div className="form-grid">
            <label htmlFor="location">Location</label>
            <input type="text" name='location' id='location'/>
          </div>

          <div className="form-grid">
            <label htmlFor="school-name">Institution</label>
            <input type="text" name='school-name' id='school-name'/>
          </div>
          <div className="form-grid">
            <label htmlFor="study-major">Title of Study/Major</label>
            <input type="text" name='study-major' id='study-major'/>
          </div>
          <div className="form-grid">
            {/* Rename 'date-range' to 'start-date' if needed */}
            <label htmlFor="date-range">Start Date</label>
            <input type="date" name='date-range' id='date-range'/>
          </div>
          <div className="form-grid">
            {/* Rename 'date-range' to 'end-date' if needed  */}
            <label htmlFor="date-range">End Date</label>
            <input type="date" name='date-range' id='date-range'/>
          </div>
          <div className="form-grid">
            <label htmlFor="location">Location</label>
            <input type="text" name='location' id='location'/>
          </div>

          {/* DISPLAY the Edit and Submit buttons at the bottom of the form */}
          <div className="form-buttons">
            <button type='button' id='editButton' onClick={handleEditButton} autoFocus>Edit</button>
            <button type='button'id='submitButton' onClick={handleSubmitButton}>Submit</button>
          </div>
        </form>
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
  )
}

export default App

// END