import { useState } from "react";

// OPTION: Try to pass down the "submitted" prop to the return statement as a ternary operator ( {submitted ? show innerHTML or whatever HTML : form elements} ). See code just under <h1> in the App component as an example of ternary operator rendering the HTML elements upon submission. See Steps 1 and 2 examples on Sharing State Between Components.

export default function Personal({ submitted }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  function handleNameChange(e) {
    setFullName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhoneNum(e.target.value);
  }

  // TODO: This conditional is currently being completely ignored and the form elements still render when this component is called in App even after submitting the resume via the Submit button 
  if (submitted) {
    return (
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
    )
  } else {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Personal Info</h2>
        <div className="form-col">
          <label htmlFor="full-name">Full Name</label>
          <input
            name="full-name"
            id="full-name"
            value={fullName}
            onChange={handleNameChange}
            required
          />
        </div>

        <div className="form-col">
          <label htmlFor="email-address">Email</label>
          <input
            type={email} // TODO: Check the docs and make sure this syntax is correct
            name="email-address"
            id="email-address"
            value={email}
            onChange={handleEmailChange}
            placeholder="yourname@example.com"
            required
          />
        </div>

        <div className="form-col">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="tel"
            name="phone-number" // TODO: Check the docs and make sure this syntax is correct (and why curly braces around it was wrong)
            id="phone-number"
            value={phoneNum}
            onChange={handlePhoneChange}
            required
          />
        </div>
      </form>
    );
  }
}
