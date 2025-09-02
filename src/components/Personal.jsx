import { useState } from "react";

// TODO: Add "submitted" status as a {prop} in this function, then pass it down to the return statement as a conditional render via if/else statement or ternary operator ( {submitted ? show innerHTML or whatever HTML : form elements} ). See code just under <h1> in the App component as an example of ternary operator rendering the HTML elements upon submission.

export default function Personal() {
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
