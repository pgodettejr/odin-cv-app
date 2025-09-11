import { useState } from "react";

// ATTEMPT #1: Simply importing App to use it as a value for declaring "submitted" as a variable doesn't render things correctly
import App from "./App";

// OPTION: Try to pass down the "submitted" prop to the return statement as a ternary operator ( {submitted ? show innerHTML or whatever HTML : form elements} ). See code just under <h1> in the App component as an example of ternary operator rendering the HTML elements upon submission. See Steps 1 and 2 examples on Sharing State Between Components.

// const submitted = App.Submitted; - See comment on App import above

export default function Personal() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  // const [isDisabled, setIsDisabled] = useState(false); - See ATTEMPT #4

  // TODO: First, commit what we did today (Tuesday 9/9/25) before doing anything else on Thursday 9/11/25
  
  // TODO: Need some type of delay to give the user time to type in the text fields of the form elements. Could do setTimeout for each "handle" function, but try to come up with a "helper function" that does the setTimeout for any element that is a text input in any form

  // Example of separate setTimeout code

  // function handleCompanyChange(e) {
  //   setTimeout(() => {
  //     setCompany(e.target.value);
  //   }, 10000);
  // }

  // TODO: Also, the Edit button doesn't work. At all. Step through the code in DevTools after clicking on it and find out why.
  
  function handleNameChange(e) {
    setFullName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhoneNum(e.target.value);
  }

  // TODO: This conditional is currently being completely ignored and the form elements still render when this component is called in App even after submitting the resume via the Submit button. 

  // DevTools shows that the values entered into the inputs are being updated but "submitted" is still showing 'undefined' despite passing it as a prop above. Likely because this function is in a different component from where "submitted" IS defined (in App component.)

  // ATTEMPT #2: When we create a separate function showing the completed Personal info section showing the values of the input fields and set it up similar to the Panel function in step 2 example of "Sharing State Between Components" React doc, all of the Personal info that's filled in disappears from the app once that section has all input values filled in and the function is run in the conditional "if/else" statement below. The HTML elements from this function aren't returning

  // ATTEMPT #4: Run it again via 'onSubmit' in the form since 'e.preventDefault' is called on handleSubmit in the App module anyway. Tried to add separate Edit and Submit buttons just for this section since onSubmit alone wouldn't get this section to show HTML elements, but it didn't work
  // function personalComplete() {
  //   return (
  //     <div className="completed-personal">
  //       <h2>Personal Info</h2>
  //         <div className="full-name">
  //           <h3>Name</h3>
  //           <p>{fullName}</p>
  //         </div>
  //         <div className="email-address">
  //           <h3>Email</h3>
  //           <p>{email}</p>
  //         </div>
  //         <div className="tel-phone-num">
  //           <h3>Phone Number</h3>
  //           <p>{phoneNum}</p>
  //         </div>
  //     </div>
  //   )
  // }

  // ATTEMPT #3: This works as long as we don't return the "PersonalComplete" function and just the raw HTML elements instead, but it auto returns them as soon as the last section is filled out (doesn't stay as form inputs until Submit button is clicked). "Ghetto" solution that we can repeat on the other components if needed (and only have an Edit button if that's the case)
  if (fullName !== "" && email !== "" && phoneNum !== "") {
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
            type={email}
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
            name="phone-number" // TODO: Check the docs and find out why curly braces around it was wrong
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
