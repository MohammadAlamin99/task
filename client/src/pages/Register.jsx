import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IsEmail, IsEmpty, IsMobile, errorTost, successTost } from "../Helper/FormHelper";
import { UserRegistrationRequiest } from "../apiRequiest/apiRequiest"; 

const Register = () => {
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const mobileRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const onRegistration = async () => {
    const email = emailRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const mobile = mobileRef.current.value;
    const password = passwordRef.current.value;
    let photo="data:image/jpeg;base64,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"

    if (IsEmail(email)) {
      errorTost("Valid Email Required !");
    } else if (IsEmpty(firstName)) {
      errorTost("First Name Required !");
    } else if (IsEmpty(lastName)) {
      errorTost("Last Name Required !");
    } else if (IsMobile(mobile)) {
      errorTost("Valid Mobile Number Required !");
    } else if (IsEmpty(password)) {
      errorTost("Password Required !");
    } else {
      try {
        const res = await UserRegistrationRequiest(email, firstName, lastName, mobile, password,photo);
        if (res.status === 200) {
          if (res.data.status === 'success') {
            successTost("Registration has been successful");
            navigate("/login");
          } else if (res.data.status === 'fail') {
            if (res.data.message.keyPattern.email === 1) {
              errorTost("Email Already Exists");
            } else {
              errorTost("Something Went Wrong");
            }
          }
        }
      } catch (error) {
        console.error("Error during registration:", error);
        errorTost("Something Went Wrong");
      }
    }
  };

  return (
    <div className="vh-100 vw-100 bg-body-secondary d-flex justify-content-center align-items-center">
      <div className="p-3">
        <div
          className="bg-body p-5 rounded shadow mx-auto "
          style={{ maxWidth: "35rem" }}
        >
          <h3 className="text-muted pb-3 Loginpage">Sign Up</h3>
          <form className="row g-3">
            <div className="col-12">
              <input
                type="email"
                className="form-control focus-ring custom"
                placeholder="Your Email"
                ref={emailRef}
              />
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control focus-ring custom"
                placeholder="Your First Name"
                ref={firstNameRef}
              />
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control focus-ring custom"
                placeholder="Your Last Name"
                ref={lastNameRef}
              />
            </div>
            <div className="col-12">
              <input
                type="number"
                className="form-control focus-ring custom"
                placeholder="Your Mobile"
                ref={mobileRef}
              />
            </div>
            <div className="col-12">
              <input
                type="password"
                className="form-control focus-ring custom"
                placeholder="Your Password"
                ref={passwordRef}
              />
            </div>

            <div className="col-12">
              <button
                type="button" 
                className="btn text-white"
             
                onClick={onRegistration}
                style={{fontFamily:"'Poppins', sans-serif;", fontWeight:"400", background:"#419CA6", color:"#fff"}} 
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="mt-3 profileInside">
            Already have an account?
            <span className="text-orange-500">
              <Link to="/login" style={{ color: "#419CA6" }}>
                {" "}
                Login
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
