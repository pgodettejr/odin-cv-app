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

  // BRANCH: See if we can put both setStartDate and setEndDate calls under one handleDateChange function
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
          type="date" // BRANCH: Check the docs on why curly braces isn't correct
          name="date-range"
          id="date-range"
          value={schoolStart}
          onChange={handleSchoolStartChange} // BRANCH: Change this to handleDateChange if first TODO above can be accomplished
        />
      </div>

      <div className="form-grid">
        <label htmlFor="date-range">End Date</label>
        <input
          type="date" // BRANCH: Check the docs on why curly braces isn't correct
          name="date-range"
          id="date-range"
          value={schoolFinish}
          onChange={handleSchoolFinishChange} // BRANCH: Change this to handleDateChange if first TODO above can be accomplished
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