import React from 'react';

const SignUpForm = ({
  error,
  validations,
  onChange,
  onSubmit
}) => (
  <form onSubmit={onSubmit}>
    {error && <div>{error}</div>}
    <div>
      <input
        name="name"
        type="text"
        onChange={onChange}
      />
      {validations["name"] && <span>{validations["name"]}</span>}
    </div>
    <div>
      <input
        name="email"
        type="text"
        onChange={onChange}
      />
      {validations["email"] && <span>{validations["email"]}</span>}
    </div>
    <div>
      <input
        name="password"
        type="password"
        onChange={onChange}
      />
      {validations["password"] && <span>{validations["password"]}</span>}
    </div>
    <div>
      <input
        name="password_confirmation"
        type="password"
        onChange={onChange}
      />
      {validations["password_confirmation"] && <span>{validations["password_confirmation"]}</span>}
    </div>
    
    <input
      type="submit"
      value="Sign In"
    />
  </form>
)

export default SignUpForm
