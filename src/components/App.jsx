import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'

// TODO: Refresh/review all React content in TOP from 'Getting Started With React' section up to this project if needed

// Use console.log...a lot (confirm React batching state updates on re-renders)

// Might need to do CRUD functions? The app needs to be able to read the inputs in the form and either change them to HTML elements (Submit) or read the HTML elements and change them back to form inputs (Edit). We SHOULD try to write CONTROLLED components for the form elements instead...we might need both controlled components AND the CRUD functions

// An example of a controlled component:
// const [value, setValue] = useState("");
    // For 'input' elements below: value={value}, onChange={(e or event) => setValue(e or event.target.value)}

// DOCS
// State: A Component's Memory (Challenges) - reference to how we should use React to do our forms? there are states for every input though
// State as a Snapshot - entire doc has more examples of forms & form structure
// Choosing the State Structure - see the first TODO in the App function below for grouping, state contradictions form example

// BEGIN
// WHEN the user goes to the website/browser app via web address
// DISPLAY the entire application
// SHOW the Heading & CV (Resume) form

// An example array that allows us to toggle the form state based on Edit/Submit buttons being interacted with. Default is "incomplete".
// const formState = ["incomplete", "complete"]; 

// Do we need to pass a callback to our "setResumeForm" function in our "handle" function for Edit/Submit buttons? (More on State lesson)
// setResumeForm((prevForm) => ({...prevForm, ???}));

function App() {
  // We likely only need to declare one state for the entire form, not multiple states per section
  const [count, setCount] = useState(0)

  // STATES
  // FORM is being edited
  // FORM is complete
  // FORM is submitted
  // USER interacted with empty/not empty input in the form

  // Not sure what we would use this for, come back to it later
  // For the useState prop/argument, if I'm only using one single state, will I need to make an array with nested objects for the entire form with each object containing the property/value representing each input? .map thru it? [{title: name, id: 0}, {title: location, id: 1}, etc.]
  // Group into a single state if we don't know how many pieces of state we need (forms where user adds custom fields). If we only need to set one field alone, do "setResumeForm{...form, fieldName: userInput}"
  // const [resumeForm, setResumeForm] = useState(formState[0]);

  // DISPLAY all of these elements in the middle of the webpage
  return (
    <>
      <Incomplete />

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

// END