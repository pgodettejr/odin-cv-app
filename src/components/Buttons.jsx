import { useState } from "react";
import Complete from "./Complete";

export default function Buttons() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [submitted, setSubmitted] = useState(false); // This is for setting the status and converting all the form data to HTML elements when "Submit" is clicked. We could try 'useState({})' if we go with the previous 'setSubmitted' call in the handleSubmit function.

  function toggleDisabled() {
    setIsDisabled(!isDisabled);
  }

  // TODO: TRY to call the "Complete" component in this Submit button function if possible
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Test this function out when the form is submitted after adding HTML elements to display each piece of info. Might need to rename startDate and endDate if React doesn't accept "duplicates". Doesn't work with simply values by itself. Need "property: key"?
    // setSubmitted({
    //   fullName,
    //   email,
    //   phoneNum,
    //   company,
    //   position,
    //   startDate,
    //   endDate,
    //   location,
    //   description,
    //   school,
    //   major,
    // });
    setSubmitted(true);
    console.log("The Submit button was clicked and is now disabled");
    toggleDisabled();
    <Complete />
  }

  // TODO: The Edit button doesn't work. At all. Step through the code in DevTools after clicking on it and find out why.
  function handleEdit(e) {
    e.preventDefault();
    setSubmitted(false); // Do we need this?
    console.log("The Edit button was clicked and is now disabled");
    toggleDisabled();
  }

  return (
    <>
     <div className="form-buttons">
        <button
          type="button"
          id="editButton"
          onClick={handleEdit}
          // disabled={!isDisabled}
        >
          {/* {isDisabled ? "Disabled" : "Enabled"} */}
          Edit
        </button>
        <button
          type="submit" // Change this back to "button" if it doesn't work?
          id="submitButton"
          onClick={handleSubmit}
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    </>
  )
}