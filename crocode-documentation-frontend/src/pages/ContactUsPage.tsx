import Input from "@components/Input";
import { validateEmail, validateNickname } from "@helpers/validate";
import { useHttp } from "@hooks/useHttp";
import { _BASE_URL } from "@config/variables";
import { useCallback, useState, useEffect } from "react";
import ContactUsForm from "../components/contactUs/ContactUsForm";
import ContactUsTitle from "../components/contactUs/ContactUsTitle";
import ContactUsTop from "../components/contactUs/ContactUsTop";
import ContactUsWrapper from "../components/contactUs/ContactUsWrapper";
import DeleteIcon from "../components/contactUs/DeleteIcon";
import InputFile from "../components/contactUs/InputFile";
import LabelInputFile from "../components/contactUs/LabelInputFile";
import MessageArea from "../components/contactUs/MessageArea";
import UploadImage from "../components/contactUs/UploadImage";
import UploadImageWrapper from "../components/contactUs/UploadImageWrapper";
import Button from "@components/Button";
import useAuth from "@hooks/useAuth";

const ContactUsPage = (): JSX.Element => {
  const { request } = useHttp()
  const { user } = useAuth()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // theme: "",
    message: "",
    image: "",
  });

  const setUserData = useCallback(() => {
    setFormData(prev => ({
      ...prev,
      name: user?.nickname || "",
      email: user?.email || ""
    }))
  }, [setFormData, user])

  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    },
    [formData, setFormData],
  );

  const onImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          setFormData({ ...formData, image: e.target.result });
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    },
    [formData, setFormData],
  );

  const handleDeleteImage = useCallback(() => {
    setFormData({ ...formData, image: "" });
  }, [formData, setFormData]);

  const handleSubmit = useCallback((e: any) => {
    e.preventDefault()
    console.log('sent contact us', formData)
    request(`${_BASE_URL}/feedback`, 'POST', formData)
  }, [request, formData]);

  useEffect(() => {
    setUserData()
  }, [user, setUserData])

  return (
    <ContactUsWrapper>
      <ContactUsForm onSubmit={handleSubmit}>
        <ContactUsTitle>Contact Us</ContactUsTitle>
        <ContactUsTop>
          <Input
            variant=""
            validate={validateNickname}
            type="text"
            placeholder="Name...*"
            value={formData.name}
            name="name"
            handler={handleChangeInput}
            title=""
            id=""
          />
          <Input
            variant=""
            validate={validateEmail}
            type="email"
            value={formData.email}
            placeholder="Email...*"
            name="email"
            handler={handleChangeInput}
            title=""
            id=""
          />
        </ContactUsTop>
        {/* <SelectInput
          placeholder="Your theme..."
          value={formData.theme}
          name="theme"
          onChange={handleChangeInput}
        >
          <SelectOption value="" disabled selected>
            Select your reason...*
          </SelectOption>
          <SelectOption>Pooot</SelectOption>
          <SelectOption>Qwqw</SelectOption>
        </SelectInput> */}
        <MessageArea
          placeholder="Message..."
          value={formData.message}
          name="message"
          onChange={handleChangeInput}
        />
        <InputFile type="file" id="input-file" onChange={onImageChange} />
        <LabelInputFile htmlFor="input-file">Enter your file...</LabelInputFile>
        <UploadImageWrapper image={formData.image}>
          <UploadImage src={formData.image} />
          <DeleteIcon onClick={handleDeleteImage}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 18L6 6M18 6L6 18" stroke="black" />
            </svg>
          </DeleteIcon>
        </UploadImageWrapper>
        <Button
          disabled={formData.name === "" || formData.email === "" || formData.message === ""}
          type="submit"
        >
          Submit
        </Button>
      </ContactUsForm>
    </ContactUsWrapper>
  );
};

export default ContactUsPage;
