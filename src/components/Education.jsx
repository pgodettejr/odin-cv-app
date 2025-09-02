import { useState } from "react";

// TODO: Add "submitted" status as a {prop} in this function, then pass it down to the return statement as a conditional render via if/else statement or ternary operator ( {submitted ? show innerHTML or whatever HTML : form elements} ). See code just under <h1> in the App component as an example of ternary operator rendering the HTML elements upon submission.

// TODO: May need to rename startDate, endDate and location due to same naming convention as Experience component? Or does React allow "duplicates"?

export default function Education() {
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");

  function handleSchoolChange(e) {
    setSchool(e.target.value);
  }

  function handleMajorChange(e) {
    setMajor(e.target.value);
  }

  // TODO: See if we can put both setStartDate and setEndDate calls under one handleDateChange function
  function handleStartDateChange(e) {
    setStartDate(e.target.value);
  }

  function handleEndDateChange(e) {
    setEndDate(e.target.value);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  return (
    // Possibly move form over to App.jsx as one form so we don't have multiple forms to submit?
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
          type="date" // TODO: Check the docs and make sure this syntax is correct (and why curly braces around it was wrong)
          name="date-range"
          id="date-range"
          value={startDate}
          onChange={handleStartDateChange} // TODO: Change this to handleDateChange if first TODO above can be accomplished
        />
      </div>

      <div className="form-grid">
        <label htmlFor="date-range">End Date</label>
        <input
          type="date" // TODO: Check the docs and make sure this syntax is correct (and why curly braces around it was wrong)
          name="date-range"
          id="date-range"
          value={endDate}
          onChange={handleEndDateChange} // TODO: Change this to handleDateChange if first TODO above can be accomplished
        />
      </div>

      <div className="form-grid">
        <label htmlFor="school-location">Location</label>
        <input
          name="school-location"
          id="school-location"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
    </form>
  );
}
