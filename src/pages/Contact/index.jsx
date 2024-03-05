import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as S from "./Contact.styles";
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
    if (Object.keys(errors).length === 0) {
      console.log(data);
      reset();
    }
  };

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
    </S.StyledForm>
  );
};

export default ContactPage;
