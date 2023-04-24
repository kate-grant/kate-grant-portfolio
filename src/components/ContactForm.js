import React from "react"
import {useState} from "react"
import * as styles from "../components/ContactForm.module.css"

const ErrorMessage = ({ message, show }) => {
  if (show) {
    return <p>{message}</p>;
  }
  return <></>;
}

const ContactForm = () => {

  const functionURL = "https://mahogany-prawn-3933.twil.io/send-email"

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [message, setMessage] = useState({ fromEmail: "", subject: "", body: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [emailErrorVisibility, setEmailErrorVisibility] = useState(false);
  const [formErrorVisibility, setFormErrorVisibility] = useState(false);

  const onClick = async event => {
    event.preventDefault();
    setSubmitting(true);

    if (isValid) {

      const { fromEmail, subject, body } = message;

      const response = await fetch(functionURL, {
        method: "post",
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: new URLSearchParams({ fromEmail, subject, body }).toString(),
      })
      if (response.status === 200) {
        setError(null);
        setSubmitting(false);
        setMessage({
          fromEmail: "",
          subject: "",
          body: "",
        });
      } else {
        const json = await response.json();
        setError(json.error);
        setSubmitting(false);
      }
    } else {
      console.log('submit else')
      setFormErrorVisibility(true);
    }
}

 const onChange = (event) => {
   const name = event.target.getAttribute("name")
   setMessage({ ...message, [name]: event.target.value })
   if (name === "fromEmail") {
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-].+[[A-Za-z]$/, "gm");
    const isValidEmail = emailRegex.test(event.target.value);

    if (isValidEmail) {
      console.log('valid');
      setIsValid(true);
      setFormErrorVisibility(false);
      setEmailErrorVisibility(false);
      setButtonDisabled(false);
    } else {
      console.log('not valid');
      setIsValid(false);
      setEmailErrorVisibility(true);
      setButtonDisabled(true);
    }
    console.log(emailErrorVisibility);
   }
 }
   return (
     <>
       <div>{error}</div>
       <form
         style={{
           display: `flex`,
           flexDirection: `column`,
           maxWidth: `500px`,
         }}
         method="post"
       >
         <label htmlFor="fromEmail">Your email address:</label>
         <input
           type="email"
           name="fromEmail"
           id="fromEmail"
           value={message.fromEmail}
           onChange={onChange}
         ></input>
         <ErrorMessage show={emailErrorVisibility} message={'Email must be in the format youremail@email.com'} />
         <label htmlFor="subject">Subject:</label>
         <input
           type="text"
           name="subject"
           id="subject"
           value={message.subject}
           onChange={onChange}
         />
         <label htmlFor="body">Message:</label>
         <textarea
           style={{
             height: `150px`,
           }}
           name="body"
           id="body"
           value={message.body}
           onChange={onChange}
         />
         <ErrorMessage show={formErrorVisibility || error} message={error ? error : (formErrorVisibility ? 'Please fix errors before submitting.' : '')} />
         <button
           style={{
             marginTop: `7px`,
           }}
           type="submit"
           disabled={submitting || buttonDisabled}
           onClick={onClick}
         >
           Send message
         </button>
       </form>
     </>
   )
 }

export default ContactForm

