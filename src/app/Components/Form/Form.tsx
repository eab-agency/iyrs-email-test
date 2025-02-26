"use client";
/* eslint-disable react/no-danger */
/* eslint-disable no-unused-vars */
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import type { FormData as FormDataType, FormField } from "@/types/Form";
import GenerateField from "@/utils/generateField";

export interface PersonProps {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  gradYear?: string;
  permission?: boolean;
}

/**
 * @param {{ redirectTo: string, id: string }} props
 */
const AcquiaFormHandle = ({
  redirectTo,
  id,
}: {
  redirectTo: string;
  id: string;
}) => {
  // keep track of whether the form has been submitted
  const [isSent, setIsSent] = useState(false);

  const [formValues, setFormValues] = useState({});

  const [theForm, setTheForm] = useState<FormDataType | undefined>(undefined);
  const [theFields, setTheFields] = useState<FormDataType["fields"]>([]);

  const [formData, setFormData] = useState({});

  const router = useRouter();

  useEffect(() => {
    const fetchForm = async (id: string) => {
      try {
        const response = await fetch(`/api/acs/forms/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        // Destructure the form object from result
        const { form } = result;
        if (form) {
          setTheForm(form.form);
          setTheFields(form.form.fields); // now form.fields will be defined
        }
      } catch (error) {
        console.error("Error fetching form:", error);
      }
    };

    if (id) {
      fetchForm(id);
    }
  }, [id]);

  const onSubmit = async (values: any, { setSubmitting }: any) => {
    console.log("🚀 ~ onSubmit ~ values:", values);

    // submit form data
    try {
      const theFormData: FormDataType = {
        ...values,
        // moved these to
        formId: theForm?.id,
        formName: theForm?.name,
        messenger: 1,
      };

      // Make the first API request to ACS
      const response = await fetch(`/api/submit?formId=${theForm?.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mauticform: theFormData }),
      });

      if (!response.ok) {
        // Check if the first API request was successful
        throw new Error("Network response was not ok");
      } else {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "formSubmitSuccess",
          formId: theForm?.id,
          formName: theForm?.name,
        });
      }

      setSubmitting(false);
      if (redirectTo) {
        router.push(redirectTo);
      }
      // Redirect to the specified path on successful form submission
    } catch (error) {
      console.error(error);
      setSubmitting(false);
    }

    try {
      const person: PersonProps = {
        firstName: values.first_name,
        lastName: values.last_name,
        email: values.email,
        phone: "",
        gradYear: "",
      };

      // Send email to user
      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      });

      console.log("Email sent successfully!");

      // Perform any additional actions after successful email sending
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error case
    }
  };

  const initialValues = { ...formData };

  // Assume `fields` is the array of form fields received from the API
  const validationSchema = Yup.object().shape(
    (theForm?.fields || []).reduce((schema, field) => {
      // For each field, create a Yup validation object based on its validation rules
      let fieldValidation:
        | Yup.StringSchema
        | Yup.NumberSchema
        | Yup.MixedSchema;

      if (field.type === "text" || field.type === "email") {
        fieldValidation = Yup.string();
      } else if (field.type === "number") {
        fieldValidation = Yup.number();
      } else {
        fieldValidation = Yup.mixed(); // Initialize with a generic Yup type
      }

      if (field.isRequired) {
        fieldValidation = fieldValidation.required(
          field.validationMessage || `${field.label} is required`
        );
      }

      if (field.type === "email") {
        fieldValidation = (fieldValidation as Yup.StringSchema).email(
          "Invalid email"
        );
      }

      return { ...schema, [field.alias]: fieldValidation };
    }, {} as Yup.ObjectShape)
  );

  return (
    <Formik
      enableReinitialize
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors }: { errors: { [key: string]: string } }) => (
        <Form id={theForm?.name}>
          {(theFields || []).map((field: FormField) => (
            <GenerateField
              field={field}
              error={errors[field.alias]}
              formData={theFields} // or pass the full fields list as needed
              key={field.id}
            />
          ))}

          {/* <DisplayFormikState {...values} /> */}
        </Form>
      )}
    </Formik>
  );
};

export default AcquiaFormHandle;
