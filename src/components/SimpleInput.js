import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredEmailIsValid = enteredEmail.includes('@');
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const enteredEmailIsInValid = !enteredEmailIsValid && enteredEmailTouched;
  

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
  
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }
    setEnteredName('');
    setEnteredEmailTouched(false);

    setEnteredEmail('');
    setEnteredNameTouched(false);
  }


  const nameInputClasses = nameInputIsInvalid
  ? 'form-control invalid' 
  : 'form-control';

  const emailInputClasses = enteredEmailIsInValid? 'form-control invalid' 
  : 'form-control';

  return (
  <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name' 
        onChange={nameInputChangeHandler}
        onBlur={nameInputBlurHandler}
        value={enteredName}
        />
        {nameInputIsInvalid && (
      <p className='error-text'>Name must not be empty</p>
      )}
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input 
        type='email' 
        id='email' 
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
        value={enteredEmail}/>
      {enteredEmailIsInValid && (
      <p className='error-text'>Enter a valid Email.</p>
      )}
      </div>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
