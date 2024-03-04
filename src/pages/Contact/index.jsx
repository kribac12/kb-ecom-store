import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledForm, FormTitle, StyledInput, StyledLabel, StyledTextArea, ErrorMessage } from "./Contact.styles";
import StyledButton from "../../components/StyledButton";

const schema = yup.object().shape({
  fullName: yup.string().min(3, "Minimum number of characters is 3").required("Full name is required"),
  subject: yup.string().min(3, "Minimum number of characters is 3").required("Subject is required"),
  email: yup.string().email("Must be a valid email address").required("Email is required"),
  body: yup.string().min(3, "Minimum number of characters is 3").required("Body is required"),
});

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset(); // Reset the form after submission
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Contact Us</FormTitle>
      <div>
        <StyledLabel>Full Name</StyledLabel>
        <StyledInput {...register("fullName")} />
        <ErrorMessage>{errors.fullName?.message}</ErrorMessage>
      </div>
      <div>
        <StyledLabel>Subject</StyledLabel>
        <StyledInput {...register("subject")} />
        <ErrorMessage>{errors.subject?.message}</ErrorMessage>
      </div>
      <div>
        <StyledLabel>Email</StyledLabel>
        <StyledInput {...register("email")} />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </div>
      <div>
        <StyledLabel>Body</StyledLabel>
        <StyledTextArea {...register("body")} />
        <ErrorMessage>{errors.body?.message}</ErrorMessage>
      </div>
      <StyledButton type="submit" variant="primary" size="fullWidth">
        Submit
      </StyledButton>
    </StyledForm>
  );
};

export default ContactPage;
