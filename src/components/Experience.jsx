export default function Experience({ 
  company,
  position,
  startDate,
  endDate,
  jobLocation,
  description,
  setCompany,
  setPosition,
  setStartDate,
  setEndDate,
  setJobLocation,
  setDescription
 }) {
  function handleCompanyChange(e) {
    setCompany(e.target.value);
  }

  function handlePositionChange(e) {
    setPosition(e.target.value);
  }

  // BRANCH: See if we can put both setStartDate and setEndDate calls under one handleDateChange function
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

  return (
    <>
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
          type="date" // BRANCH: Check the docs on why curly braces isn't correct
          name="date-range"
          id="date-range"
          value={startDate}
          onChange={handleStartDateChange} // BRANCH: Change this to handleDateChange if first TODO above can be accomplished
        />
      </div>

      <div className="form-grid">
        <label htmlFor="date-range">End Date</label>
        <input
          type="date" // BRANCH: Check the docs on why curly braces isn't correct
          name="date-range"
          id="date-range"
          value={endDate}
          onChange={handleEndDateChange} // BRANCH: Change this to handleDateChange if first TODO above can be accomplished
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
          rows={10}
          cols={60}
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
    </>
  );
}