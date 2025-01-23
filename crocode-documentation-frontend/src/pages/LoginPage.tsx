import { useState, useCallback, useContext } from "react";
import LoginPageWrapper from "@components/Login/LoginPageWrapper";
import LoginPageLogo from "@components/Login/LoginLogo/LoginLogoWrapper";
import LoginPageTitle from "@components/Login/LoginPageTitle";
import LoginPageText from "@components/Login/LoginPageText";
import LoginPageForm from "@components/Login/LoginPageForm";
import LoginPageButton from "@components/Login/LoginPageButton";
import Link from "@components/Link";
import UserContext from "context/UserContext";
import Input from "@components/Input";
import { validateEmail } from "@helpers/validate";
import { ILogin } from "@hooks/useAuth";
import { IAuth } from "./DocumentPage";
import ModalWrapperComponent from "@components/Modal/ModalWrapper/ModalWrapperComponent";
import LoginLogo from "@components/Login/LoginLogo/base/LoginLogo";
import { LogoIcon } from "@components/icons";

const LoginPage = ({ setOpenLoginModal, openLoginModal }: IAuth) => {
  const [form, setForm] = useState<ILogin>({
    email: "",
    password: "",
  });

  const { login, error, loading } = useContext(UserContext);

  const handleSubmit = useCallback(() => {
    return login ? login(form) : null;
  }, [login, form]);

  const handleInputChange = useCallback((e: { target: { value: string; name: string } }) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    },
    [form],
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement | HTMLDivElement>) => {
    console.log('press key Enter')
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <ModalWrapperComponent handler={setOpenLoginModal} state={openLoginModal} variant="">
      <LoginPageWrapper>
        <LoginLogo icon={LogoIcon} />
        <LoginPageTitle>Welcome to DMS</LoginPageTitle>
        <LoginPageText>Document Management System</LoginPageText>
        <LoginPageForm onSubmit={handleSubmit} >
          <Input
            variant="padding"
            validate={validateEmail}
            value={form.email}
            name="email"
            placeholder="Email"
            id="email"
            type="email"
            title="Email"
            handler={handleInputChange}
          />
          <Input
            variant="padding"
            value={form.password}
            name="password"
            placeholder="Password"
            id="password"
            type="password"
            title="Password"
            handler={handleInputChange}
          />
          <LoginPageButton disabled={loading} type="submit">
            Login
          </LoginPageButton>
        </LoginPageForm>
        <Link to={"/registration"}>I don`t have an account</Link>
      </LoginPageWrapper>
    </ModalWrapperComponent>
  );
};

export default LoginPage;
