import Incomplete from "./Incomplete"

// TODO: Write a function or component for the Edit button that returns an event listener that runs the code. Utilize 'useState' (in App component since we have to "lift the state up"?) to change the state of the app when the button is interacted with

export default function Complete() {
  // WHEN the user inputs all elements in the form, submits it, THEN clicks the Edit button
  // CALL the editButton event listener that will:
  function handleEditButton(e) {
    // DISPLAY all the form elements with the previously entered info in each one
    // setResumeForm((editForm) => editForm);
    // setResumeForm(toggleForm OR resumeForm);

    e.preventDefault();
    // May need to employ rendering techniques here (if certain form elements are complete, then... ternary/conditional/&& statement)
    <Incomplete />
  }

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
        {/* May need an 'onSubmit' event for this form element tag: onSubmit={handleSubmit[Button?]}. Should also add preventDefault. */}
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
          {/* Set disabled to "false" on the Edit button and to "true" on the Submit button when the Submit button is clicked. Edit is only available after submitting */}
          <div className="form-buttons">
            <button type='button' id='editButton' onClick={handleEditButton} disabled='false' >Edit</button>
            <button type='button'id='submitButton' disabled='true' autoFocus >Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}