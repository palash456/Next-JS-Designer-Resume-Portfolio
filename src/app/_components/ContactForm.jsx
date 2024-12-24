"use client";

import { Formik } from 'formik';

const ContactForm = () => {
  return (
    <>
      {/* Contact Form */}
      <Formik
        initialValues={{ email: '', name: '', message: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const form = document.getElementById("contactForm");
          const status = document.getElementById("contactFormStatus");
          const data = new FormData();

          data.append('name', values.name);
          data.append('email', values.email);
          data.append('message', values.message);

          fetch('send_email.php', {
            method: 'POST',
            body: data
          })
            .then(response => response.json())
            .then(data => {
              if (data.success) {
                status.innerHTML = "<h5>Thanks, your message is sent successfully.</h5>";
                form.reset();
              } else {
                status.innerHTML = "<h5>Oops! There was a problem submitting your form</h5>";
              }
            })
            .catch(error => {
              status.innerHTML = "<h5>Oops! There was a problem submitting your form</h5>";
            });

          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} id="contactForm" className="art-contact-form">
            {/* Name Input */}
            <div className="art-form-field">
              <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                className="art-input"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <label htmlFor="name"><i className="fas fa-user"></i></label>
            </div>

            {/* Email Input */}
            <div className="art-form-field">
              <input
                type="email"
                id="email"
                className="art-input"
                placeholder="Email"
                name="email"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <label htmlFor="email"><i className="fas fa-at"></i></label>
            </div>

            {/* Message Input */}
            <div className="art-form-field">
              <textarea
                placeholder="Message"
                name="message"
                id="message"
                className="art-input"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              <label htmlFor="message"><i className="far fa-envelope"></i></label>
            </div>

            {/* Submit Button */}
            <div className="art-submit-frame">
              <button className="art-btn art-btn-md art-submit" type="submit" disabled={isSubmitting}>
                <span>Send message</span>
              </button>
              <div className="art-success">Success <i className="fas fa-check"></i></div>
            </div>

            {/* Status message */}
            <div className="form-status alert-success mil-mb-90" id="contactFormStatus" style={{ display: "none" }} />
          </form>
        )}
      </Formik>
      {/* End Contact Form */}
    </>
  );
};

export default ContactForm;
