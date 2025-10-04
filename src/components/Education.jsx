// import { useState } from 'react'
// import Buttons from './Buttons';

// We may need to separate the Submit/Edit buttons into their own component, import it here and call the component at the bottom like how we have the other components set up (import "Complete" component in Buttons component if this is the case)

// TODO: Pass "onChange" as a prop, then add "onChange" as a prop to Personal when called above?
export default function Education({ 
  school,
  major,
  schoolStart,
  schoolFinish,
  schoolLocation,
  setSchool,
  setMajor,
  setSchoolStart,
  setSchoolFinish,
  setSchoolLocation
 }) {
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
    <>
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
    </>
  );
}