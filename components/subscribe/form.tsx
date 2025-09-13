import { useState } from "react";
import { useForm } from "react-hook-form";
import { ISubscriptionForm } from "@/app/types";
import { emailJsSettings } from "@/app/config";
import { subscriptionFormSchema } from "@/app/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";

export default function Form() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubscriptionForm>({
    resolver: yupResolver(subscriptionFormSchema),
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
      accept-charset="UTF-8"
      className="isolate"
      data-persist-bound="true"
      onSubmit={handleFormSubmit}
      noValidate
    >
      <div className="contact__fields">
        <div className={`field ${errors?.name ? "has-error" : ""}`}>
          <input
            className="field__input"
            autoComplete="name"
            type="text"
            id="ContactForm-name"
            placeholder="Name"
            {...register("name")}
          />
          <label
            className="field__label visually-hidden"
            htmlFor="ContactForm-name"
          >
            Name
          </label>
        </div>
        {errors?.name && (
          <div className="error-message">{errors?.name?.message}</div>
        )}
        <div className={`field ${errors?.email ? "has-error" : ""}`}>
          <input
            autoComplete="email"
            type="email"
            id="ContactForm-email"
            className="field__input"
            spellCheck="false"
            autoCapitalize="off"
            aria-required="true"
            placeholder="Email"
            {...register("email")}
          />
          <label
            className="field__label visually-hidden"
            htmlFor="ContactForm-email"
          >
            Email <span aria-hidden="true">*</span>
          </label>
        </div>
        {errors?.email && (
          <div className="error-message">{errors?.email?.message}</div>
        )}
        <div className={`field ${errors?.phone ? "has-error" : ""}`}>
          <input
            type="tel"
            id="ContactForm-phone"
            className="field__input"
            autoComplete="tel"
            placeholder="Phone number"
            {...register("phone")}
          />
          <label
            className="field__label visually-hidden"
            htmlFor="ContactForm-phone"
          >
            Phone number
          </label>
        </div>
        {errors?.phone && (
          <div className="error-message">{errors?.phone?.message}</div>
        )}
      </div>
      <div className={`field ${errors?.message ? "has-error" : ""}`}>
        <textarea
          rows={10}
          id="ContactForm-body"
          className="text-area field__input"
          placeholder="Comment (optional)"
          {...register("message")}
        />
        <label
          className="form__label field__label visually-hidden"
          htmlFor="ContactForm-body"
        >
          Comment (optional)
        </label>
      </div>
      {errors?.message && (
        <div className="error-message">{errors?.message?.message}</div>
      )}
      {/* <div className="newsletter-checkbox">
        <label>
          <input type="checkbox" name="checkbox" value="check" />
          <span>Save my name, email, and website in this browser.</span>
        </label>
      </div> */}
      <div className="contact__button">
        <button type="submit" className="button" disabled={submitting}>
          {submitting ? "Processing..." : "Subscribe"}
        </button>
      </div>
    </form>
  );
}
