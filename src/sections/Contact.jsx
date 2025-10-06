import React from "react";
import "../styles/Contact.css";
import Button from "../components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      type: "",
      comment: "",
    },

    validationSchema: Yup.object({
      username: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      comment: Yup.string()
        .max(300, "Must be less than 300 characters") // corrected message
        .required("Message is required"),
    }),

    onSubmit: (values) => {
      console.log("Form data:", values);
      alert("Form submitted successfully!");
    },
  });

  return (
    <section className="section-contact">
      <div className="contact">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <input
              type="text"
              name="username"
              placeholder="Enter your Name"
              id="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username && (
              <p style={{ color: "red" }}>{formik.errors.username}</p>
            )}
          </div>

          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p style={{ color: "red" }}>{formik.errors.email}</p>
            )}
          </div>

          <div className="form-control">
            <textarea
              rows={5}
              name="comment"
              placeholder="Enter your Message"
              id="comment"
              value={formik.values.comment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.comment && formik.errors.comment && (
              <p style={{ color: "red" }}>{formik.errors.comment}</p>
            )}
          </div>

          <Button type="submit" variant="filled">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
