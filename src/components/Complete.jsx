// import Buttons from "./Buttons"

export default function Complete({ 
  fullName,
  email,
  phoneNum,
  company,
  position,
  startDate,
  endDate,
  jobLocation,
  description,
  school,
  major,
  schoolStart,
  schoolFinish,
  schoolLocation,
  submitted
 }) {
  // WHEN the user inputs all elements in the form, submits it, THEN clicks the Edit button
  // CALL the editButton event listener that will:
  // function handleEditButton(e) {
  //   // DISPLAY all the form elements with the previously entered info in each one
  //   // setResumeForm((editForm) => editForm);
  //   // setResumeForm(toggleForm OR resumeForm);

  //   e.preventDefault();
  //   // May need to employ rendering techniques here (if certain form elements are complete, then... ternary/conditional/&& statement)
  //   // <Incomplete />
  // }

  if (submitted) {
    return (
      <>
        {/* DISPLAY each section of the form: Personal Info, Work Experience, Education */}
        <div className="cv-app">

          {/* May need to change single quotation tags to double quotations if error shows up for them */}
          {/* Put each section of the form in their own div wrappers/containers if needed  */}
          {/* camelCase the names of our HTML attributes (that are in quotations) if we need to  */}
          {/* May need an 'onSubmit' event for this form element tag: onSubmit={handleSubmit[Button?]}. Should also add preventDefault. */}

          {/* DISPLAY the Name, Email & Phone # form inputs in the Personal Info section */}
          <div className="completed-personal">
            <h2>Personal Info</h2>
            <div className="full-name">
              <h3>Name</h3>
              <p>{fullName}</p>
            </div>
            <div className="email-address">
              <h3>Email</h3>
              <p>{email}</p>
            </div>
            <div className="tel-phone-num">
              <h3>Phone Number</h3>
              <p>{phoneNum}</p>
            </div>
          </div>

          {/* DISPLAY the Company, Position, Start & End Dates, Location and Main Responsibilities in the Work Experience section */}
          <div className="completed-experience">
            <h2>Work Experience</h2>
            <div className="company-name">
              <h3>Company</h3>
              <p>{company}</p>
            </div>
            <div className="job-position">
              <h3>Position</h3>
              <p>{position}</p>
            </div>
            {/* Rename 'date-range' to 'start-date' if needed */}
            <div className="date-range">
              <h3>Start Date</h3>
              <p>{startDate}</p>
            </div>
            {/* Rename 'date-range' to 'end-date' if needed  */}
            <div className="date-range">
              <h3>End Date</h3>
              <p>{endDate}</p>
            </div>
            <div className="job-location">
              <h3>Location</h3>
              <p>{jobLocation}</p>
            </div>
            <div className="job-duties">
              <h3>Main Responsibilities</h3>
              <p>{description}</p>
            </div>
          </div>

          {/* DISPLAY the Institution, Title of Study/Major, Date Range & Location in the Education section */}
          <div className="completed-education">
            <h2>Education</h2>
            <div className="school-name">
              <h3>Institution</h3>
              <p>{school}</p>
            </div>
            <div className="study-major">
              <h3>Study/Major</h3>
              <p>{major}</p>
            </div>
            {/* Rename 'date-range' to 'start-date' if needed */}
            <div className="date-range">
              <h3>Start Date</h3>
              <p>{schoolStart}</p>
            </div>
            {/* Rename 'date-range' to 'end-date' if needed  */}
            <div className="date-range">
              <h3>End Date</h3>
              <p>{schoolFinish}</p>
            </div>
            <div className="school-location">
              <h3>Location</h3>
              <p>{schoolLocation}</p>
            </div>
          </div>

          {/* DISPLAY the Edit and Submit buttons at the bottom of the form */}
          {/* Set disabled to "false" on the Edit button and to "true" on the Submit button when the Submit button is clicked. Edit is only available after submitting */}
          {/* <div className="form-buttons">
            <button type='button' id='editButton' onClick={handleEditButton} disabled='false' >Edit</button>
            <button type='button'id='submitButton' disabled='true' autoFocus >Submit</button>
          </div> */}
        </div>
      </>
    )
  }
}