import React from 'react';

const SignUpForm = ({
  error,
  validations,
  onChange,
  onSubmit,
  fields,
}) => (
  <form onSubmit={onSubmit}>
    {error && <div>{error}</div>}
    <div>
      <input
        name="name"
        type="text"
        value={fields.name}
        onChange={onChange}
      />
      {validations["name"] && <span>{validations["name"]}</span>}
    </div>
    <div>
      <input
        name="email"
        type="text"
        value={fields.email}
        onChange={onChange}
      />
      {validations["email"] && <span>{validations["email"]}</span>}
    </div>
    <div>
      <input
        name="password"
        type="password"
        value={fields.password}
        onChange={onChange}
      />
      {validations["password"] && <span>{validations["password"]}</span>}
    </div>
    <div>
      <input
        name="password_confirmation"
        type="password"
        value={fields.password_confirmation}
        onChange={onChange}
      />
      {validations["password_confirmation"] && <span>{validations["password_confirmation"]}</span>}
    </div>
    
    <input
      type="submit"
      value="Sign Up"
    />
  </form>
)

export default SignUpForm
