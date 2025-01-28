import Input from "@components/Input";
import { validateEmail, validateNickname } from "@helpers/validate";
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
import { CrossIcon } from "@components/icons";
import SendPage from "@components/contactUs/send/base/SendPage";

interface IFormData {
  name: string
  email: string
  message: string
  image: string
}

const ContactUsPage = (): JSX.Element => {
  const GOOGLE_FORM_KEY = process.env.REACT_APP_GOOGLE_FORM_KEY
  const IMGBB_API_KEY = process.env.REACT_APP_IMGBB_API_KEY 
  const { user } = useAuth()

  const defaultFormData: IFormData = {
    name: "",
    email: "",
    message: "",
    image: "",
  }

  const [formData, setFormData] = useState<IFormData>(defaultFormData);
  const [isSentForm, setIsSentForm] = useState<boolean>(false)
  const [formDisablid, setFormDisabled] = useState<boolean>(false)

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

  const handleSubmit = useCallback(async (e: any) => {
    e.preventDefault()
    setFormDisabled(true)
    // console.log('sent contact us', formData)
    const GOOGLE_FORM_URL = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_KEY}/formResponse`
    const IMGBB_URL = `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`

    let urlImage = 'null'

    if(formData?.image) {
      await uploadToImgBB(formData.image, IMGBB_URL)
        .then(link => urlImage = link || 'error')
    }

    const formBody = getformData(formData, urlImage)
    await sendForm(GOOGLE_FORM_URL, formBody)
  }, [ formData, GOOGLE_FORM_KEY, IMGBB_API_KEY ]);

  const getformData = (formData: IFormData, urlImage: string) => {
    const formBody = new URLSearchParams();
    formBody.append(`entry.1054863092`, formData.name); // ID поля "Имя"
    formBody.append("entry.579635356", formData.email); // ID поля "Email"
    formBody.append("entry.650757441", formData.message); // ID поля "Сообщение"
    formBody.append("entry.655906301", urlImage); // ID поля "Image"
    return formBody
  }

  const uploadToImgBB = async (file: any, url: string) => {
    try {
      const cleanedBase64 = file.replace(/^data:image\/[a-z]+;base64,/, "");
      const formData = new FormData();
      formData.append("image", cleanedBase64);

      const config = {
        method: 'POST',
        headers: {
          Accept: "application/json",
        },
        body: formData
    }
  
      const response = await fetch(url, config);
  
      if (!response.ok) {
        throw new Error(`Ошибка загрузки: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Uploaded Image Data:", data);
  
      // Возвращаем ссылку на изображение
      return data.data.url;
    } catch (error) {
      console.error("Ошибка при загрузке на ImgBB:", error);
      return error;
    }
  };

  const sendForm = async (url: string, body: any) => {
    const config: any = {
      method: "POST",
      body: body,
      mode: "no-cors"
    }
    
    try {
      await fetch(url, config)
      setIsSentForm(true)
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      alert("Не удалось отправить форму.");
    } finally {
      setFormDisabled(false)
    }
  }

  useEffect(() => {
    setUserData()
  }, [user, setUserData, isSentForm])

  const backForm = useCallback(() => {
    setIsSentForm(false)
  }, [setIsSentForm])

  return (
    <ContactUsWrapper>
      {!isSentForm ? (
        <ContactUsForm disabled={formDisablid} onSubmit={handleSubmit}>
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
              <CrossIcon size={20} color="black"/>
            </DeleteIcon>
          </UploadImageWrapper>
          <Button
            disabled={formData.name === "" || formData.email === "" || formData.message === ""}
            type="submit"
          >
            Submit
          </Button>
        </ContactUsForm>
      ) : (
        <SendPage handlerClick={backForm}/>
      )}
    </ContactUsWrapper>
  );
};

export default ContactUsPage;
