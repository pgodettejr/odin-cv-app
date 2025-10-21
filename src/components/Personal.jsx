export default function Personal({ 
  fullName,
  email,
  phoneNum,
  setFullName,
  setEmail,
  setPhoneNum
 }) {
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
    <>
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
          type={email} // BRANCH: Check the docs on why curly braces isn't correct
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
          type="tel" // BRANCH: Check the docs on why curly braces isn't correct
          name="phone-number"
          id="phone-number"
          value={phoneNum}
          onChange={handlePhoneChange}
          pattern="^\d{3}-\d{3}-\d{4}$"
          placeholder="999-000-1234"
          required
        />
      </div>
    </>
  )
};