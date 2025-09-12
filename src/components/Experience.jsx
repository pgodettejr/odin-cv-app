import { useState } from "react";

// OPTION: Add "submitted" status as a {prop} in this function, then pass it down to the return statement as a conditional render via if/else statement or ternary operator ( {submitted ? show innerHTML or whatever HTML : form elements} ). See code just under <h1> in the App component as an example of ternary operator rendering the HTML elements upon submission. See Steps 1 and 2 examples on Sharing State Between Components.

export default function Experience() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

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

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  if (company !== "" && position !== "" && startDate !== "" && location !== "" && description !== "") {
    return (
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
        <div className="date-range">
          <h3>Start Date</h3>
          <p>{startDate}</p>
        </div>
        <div className="date-range">
          <h3>End Date</h3>
          <p>{endDate}</p>
        </div>
        <div className="job-location">
          <h3>Location</h3>
          <p>{location}</p>
        </div>
        <div className="job-duties">
          <h3>Main Responsibilities</h3>
          <p>{description}</p>
        </div>
      </div>
    )
  } else {
    return (
      // Possibly move form over to App.jsx as one form so we don't have multiple forms to submit?
      <form onSubmit={(e) => e.preventDefault()}>
        {/* <h2>Work Experience</h2> */}
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
            type="date" // TODO: Check the docs and make sure this syntax is correct (and why curly braces around it was wrong)
            name="date-range"
            id="date-range"
            value={startDate}
            onChange={handleStartDateChange} // BRANCH: Change this to handleDateChange if first BRANCH above can be accomplished
          />
        </div>

        <div className="form-grid">
          <label htmlFor="date-range">End Date</label>
          <input
            type="date" // TODO: Check the docs and make sure this syntax is correct (and why curly braces around it was wrong)
            name="date-range"
            id="date-range"
            value={endDate}
            onChange={handleEndDateChange} // BRANCH: Change this to handleDateChange if first BRANCH above can be accomplished
          />
        </div>

        <div className="form-grid">
          <label htmlFor="job-location">Location</label>
          <input
            name="job-location"
            id="job-location"
            value={location}
            onChange={handleLocationChange}
          />
        </div>

        <div className="form-grid">
          <label htmlFor="job-duties">Main Responsibilities</label>
          <input
            type="textarea" // TODO: Check the docs and make sure this syntax is correct (and why curly braces around it was wrong)
            name="job-duties"
            id="job-duties"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
      </form>
    );
  }
}
