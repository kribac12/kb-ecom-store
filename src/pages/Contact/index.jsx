import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as S from "./Contact.styles";
import * as SH from "../../styles/sharedStyles";
import StyledButton from "../../components/StyledButton";

const schema = yup.object().shape({
  fullName: yup.string().min(3, "Minimum number of characters is 3").required("Full name is required"),
  subject: yup.string().min(3, "Minimum number of characters is 3").required("Subject is required"),
  email: yup.string().email("Must be a valid email address").required("Email is required"),
  body: yup.string().min(3, "Minimum number of characters is 3").required("Body is required"),
});

function ContactPage() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    if (Object.keys(errors).length === 0) {
      console.log(data);
      reset();
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 10000);
    }
  }

  return (
    <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
      <S.FormTitle>Contact Us</S.FormTitle>
      <div>
        <S.StyledLabel>Full Name</S.StyledLabel>
        <S.StyledInput {...register("fullName")} />
        <S.ErrorMessage>{errors.fullName?.message}</S.ErrorMessage>
      </div>
      <div>
        <S.StyledLabel>Subject</S.StyledLabel>
        <S.StyledInput {...register("subject")} />
        <S.ErrorMessage>{errors.subject?.message}</S.ErrorMessage>
      </div>
      <div>
        <S.StyledLabel>Email</S.StyledLabel>
        <S.StyledInput {...register("email")} />
        <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
      </div>
      <div>
        <S.StyledLabel>Body</S.StyledLabel>
        <S.StyledTextArea {...register("body")} />
        <S.ErrorMessage>{errors.body?.message}</S.ErrorMessage>
      </div>
      <StyledButton type="submit" variant="secondary" size="fullWidth">
        Submit
      </StyledButton>
      {showSuccessMessage && <SH.SuccessMessage>Thank you for your message, we will get back to you as soon as we can!</SH.SuccessMessage>}
    </S.StyledForm>
  );
}

export default ContactPage;
