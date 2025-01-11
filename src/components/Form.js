"use client";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import HeadingTextField from "./CustomTextField/HeadingTextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import PrimaryButton from "./Button/PrimaryButton";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    address: Yup.string().required("Address is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    // review: Yup.string().required("Review is required"),
  });

  // Define initial values for your form fields
  const initialValues = {
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    // review: "",
    dateTime: new Date(),
  };

  const waitlistForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });

      fetch(
        "https://script.google.com/macros/s/AKfycbxg58n3IDg63RLRF0jnkg1wOlp2GDAcOtf9_iHX3s9jyQ_VWx4QHs7m8YjD-J9nxd0r/exec",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log("Response Data:", data);
          toast.success("Successfully added in our waitlist')");
          resetForm(); // Reset the form after successful submission
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          toast?.error("Somthing went wrong please try again");
          setLoading(false);
        });
    },
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append("name", name);

  //   fetch(
  //     "https://script.google.com/macros/s/AKfycbxOVWRrCPQfKu7g8xV8gwly4f7Sz3p7XJptqdfnCJAgd5LyBMSOYSjO6NTSoVfiBhaL/exec",
  //     {
  //       method: "POST",
  //       body: formData,
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Response Data:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  return (
    <form
      onSubmit={waitlistForm.handleSubmit}
      className="flex flex-col justify-between items-center gap-5 w-full"
    >
      <Toaster />
      <div className="flex flex-col gap-5 w-full">
        <HeadingTextField
          textFieldName="name"
          value={waitlistForm?.values?.name}
          placeholder="Enter Your Name *"
          heading="Name *"
          onChange={waitlistForm.handleChange}
          error={waitlistForm.touched.name && waitlistForm.errors.name}
        />
        <HeadingTextField
          textFieldName="email"
          value={waitlistForm?.values?.email}
          placeholder="Enter Your Email"
          heading="Email *"
          onChange={waitlistForm.handleChange}
          error={waitlistForm.touched.email && waitlistForm.errors.email}
        />
        <HeadingTextField
          textFieldName="address"
          value={waitlistForm?.values?.address}
          placeholder="Enter Your Address *"
          heading="Enter Your Address *"
          onChange={waitlistForm.handleChange}
          error={waitlistForm.touched.address && waitlistForm.errors.address}
        />
        <HeadingTextField
          textFieldName="phoneNumber"
          value={waitlistForm?.values?.phoneNumber}
          placeholder="Enter Your Phone Number *"
          heading="Phone Number *"
          onChange={waitlistForm.handleChange}
          error={
            waitlistForm.touched.phoneNumber && waitlistForm.errors.phoneNumber
          }
        />
        {/* <HeadingTextField
          textFieldName="review"
          value={waitlistForm?.values?.review}
          placeholder="Type your review *"
          heading="Tell us about your visit on Loanjet.*"
          onChange={waitlistForm.handleChange}
          error={waitlistForm.touched.review && waitlistForm.errors.review}
        /> */}
      </div>
      <PrimaryButton
        name="Contact Us"
        type="submit"
        loading={loading}
        height={"50px"}
      />
    </form>
  );
}
