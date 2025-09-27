import { useState } from 'react'

// OPTION: Add "submitted" status as a {prop} in this function, then pass it down to the return statement as a conditional render via if/else statement or ternary operator ( {submitted ? show innerHTML or whatever HTML : form elements} ). See code just under <h1> in the App component as an example of ternary operator rendering the HTML elements upon submission. See Steps 1 and 2 examples on Sharing State Between Components.

// TODO: May need to rename startDate, endDate and location due to same naming convention as Experience component? Or does React allow "duplicates"?

// TODO: Pass "onChange" as a prop, then add "onChange" as a prop to Personal when called above?
export default function Education() {
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [schoolStart, setSchoolStart] = useState("");
  const [schoolFinish, setSchoolFinish] = useState("");
  const [schoolLocation, setSchoolLocation] = useState("");

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

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {/* <h2>Education</h2> */}
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
        <label htmlFor="study-major">Title of Study/Major</label>
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