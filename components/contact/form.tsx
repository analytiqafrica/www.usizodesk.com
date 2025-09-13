import { useState } from "react";
import { useForm } from "react-hook-form";
import { IContactForm } from "@/app/types";
import { emailJsSettings } from "@/app/config";
import { contactFormSchema } from "@/app/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";

export default function Form() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>({
    resolver: yupResolver(contactFormSchema),
  });

  const [submitting, setSubmitting] = useState<boolean>(false);

  const sendMessage = async (data: any) => {
    // message params to support
    const messageData = {
      phone: data.phone,
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    };

    // message params to user
    const contactReceiptParams = {
      to_email: data.email,
      to_name: data.name,
    };

    // send email to support
    await emailjs
      .send(
        emailJsSettings.serviceId,
        emailJsSettings.contactTemplateId,
        messageData,
        {
          publicKey: emailJsSettings.publicKey,
        }
      )
      .then(
        async (response) => {
          console.log("SENT!", response.status, response.text);
          reset();
          setSubmitting(false);

          // send email to user
          await emailjs.send(
            emailJsSettings.serviceId,
            emailJsSettings.contactReceiptTemplateId,
            contactReceiptParams,
            emailJsSettings.publicKey
          );
        },
        (err) => {
          console.log("FAILED...", err);
          setSubmitting(false);
        }
      );
  };

  const handleFormSubmit = handleSubmit(async (data) => {
    setSubmitting(true);
    sendMessage(data);
  });

  return (
    <form
      method="post"
      id="ContactForm"
      acceptCharset="UTF-8"
      className="isolate"
      data-persist-bound="true"
      onSubmit={handleFormSubmit}
      noValidate
    >
      <div className="row">
        <div className="col-md-6 mb-2">
          <div className={`form-group ${errors?.email ? "has-error" : ""}`}>
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              {...register("email")}
            />
          </div>
        </div>
        <div className="col-md-6 mb-2">
          <div className={`form-group ${errors?.email ? "has-error" : ""}`}>
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              {...register("email")}
            />
          </div>
        </div>
        <div className="col-md-12 mb-2">
          <div className={`form-group ${errors?.message ? "has-error" : ""}`}>
            <label>Message</label>
            <textarea
              className="form-control"
              placeholder="Enter your message..."
              {...register("message")}
            ></textarea>
          </div>
        </div>
        {errors?.message && (
          <div className="col-lg-12 mt-3 error-message">
            {errors?.message?.message}
          </div>
        )}
        <div className="col-lg-12 mt-3">
          <button type="submit" className="btn btn-dark" disabled={submitting}>
            {submitting ? "Processing..." : "Submit Now +"}
          </button>
        </div>
      </div>
    </form>
  );
}
