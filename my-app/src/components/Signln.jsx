import React,{useState} from "react";
function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const[isErrorEmail,setIsErrorEmail]=useState("");
  const[isErrorPassword,setIsErrorPassword]=useState("");
  const[isExists,setIsExists]=useState(false);
  const users=[{email:"ra@hhh",password:"1234"},{email:"fgg@hjk",password:"3456"},{email:"ddd@hhh",password:"8854"}];
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { email, password } = state;
    //בדיקה האם קיים מייל בשרת
    
    users.forEach(element => {
     if(element.email==email)
     {
      setIsExists(true)
      if(element.password==password)
      {
        setIsErrorEmail(" ")
        setIsErrorPassword(" ")
        alert(`You are login with email: ${email} and password: ${password}`);
      }
      else
      {
        setIsErrorEmail(" ")
        setIsErrorPassword("Incorrect password")
      }
     }
     else if(!isExists)
     { 
        setIsErrorPassword(" ")
        setIsErrorEmail("User does not exist")
     }
      
   });

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <p>{isErrorEmail}</p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
         <p>{isErrorPassword}</p>
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;