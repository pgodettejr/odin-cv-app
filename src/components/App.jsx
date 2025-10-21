import { useState } from 'react'
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import Complete from './Complete'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'

// BRANCH: Rename the "startDate, endDate" variables "schoolStart, schoolFinish, jobStart, jobEnd" if needed

// BRANCH: Create "Add work experience" and "Add education" buttons that generate another Experience and Education component respectively (WITHOUT the heading titles)

// BEGIN

// WHEN the user goes to the website/browser app via web address
// DISPLAY the entire application
export default function App() {
  // DISPLAY all of these elements in the middle of the webpage
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* SHOW the Heading & CV (Resume) form */}
      <h1>CV/Resumé App</h1>
      <div className="App">
        <Form />
      </div>
    </>
  );

  // BRANCH: Pass "props" to this function, then use spread syntax {...props} on every child component (e.g. <Personal {...props} />, etc.) instead of listing each state/prop individually
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

    // This is for setting the status and converting all the form data to HTML elements when "Submit" is clicked. We could try 'useState({})' if we go with the previous 'setSubmitted' call in the handleSubmit function.
    const [submitted, setSubmitted] = useState(false); 

    function toggleDisabled() {
      setIsDisabled(!isDisabled);
    }
    
    // FORM is submitted
    function handleSubmit(e) {
      e.preventDefault();
      setSubmitted(true);
      toggleDisabled();
    }

    // WHEN the user inputs all elements in the form, submits it, THEN clicks the Edit button
    // CALL the editButton event listener that will:
    function handleEdit(e) {
      e.preventDefault();
      setSubmitted(false); // BRANCH: Do we need this?
      toggleDisabled();

      // DISPLAY all the form elements with the previously entered info in each one
      return (
        // FORM is being edited
        <>
          <Form onSubmit={(e) => e.target.reset()} />
        </>
      )
    }

    return (
      <>
        { submitted ? (
          <div>
            {/* FORM is complete */}
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
                type="submit"
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
                type="submit"
                id="submitButton"
                onClick={handleSubmit}
                disabled={isDisabled}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </>
    );
  } 
}

// END