import { useState, useCallback, useContext, useMemo } from "react";
import LoginPageWrapper from "@components/Login/LoginPageWrapper";
import LoginPageLogo from "@components/Login/LoginLogo/LoginLogoWrapper";
import LoginPageTitle from "@components/Login/LoginPageTitle";
import LoginPageText from "@components/Login/LoginPageText";
import LoginPageForm from "@components/Login/LoginPageForm";
import LoginPageButton from "@components/Login/LoginPageButton";
import Input from "@components/Input";
import { validateEmail, validatePassword, validateNickname } from "@helpers/validate";
import { IRegister } from "@hooks/useAuth";
import UserContext from "context/UserContext";
import { IAuth } from "./DocumentPage";
import ModalWrapperComponent from "@components/Modal/ModalWrapper/ModalWrapperComponent";
import ChangeAuthTitle from "@components/Login/ChangeAuthTitle";
import ModalCloseComponent from "@components/Modal/ModalWrapper/ModalCloseComponent";
import LoginLogo from "@components/Login/LoginLogo/base/LoginLogo";
import { LogoIcon } from "@components/icons";
import Button from "@components/Button";

const AuthPage = ({ setOpenLoginModal, openLoginModal }: IAuth) => {
  const DEFAULT_FORM_DATA = useMemo<IRegister>(() => ({
    nickname: "",
    email: "",
    password: "",
  }), []);

  const [form, setForm] = useState<IRegister>(DEFAULT_FORM_DATA);
  const [switchAuth, setSwitchAuth] = useState<string>("login");
  const { register, login } = useContext(UserContext);

  const handleClearForm = useCallback(() => {
    setForm(DEFAULT_FORM_DATA);
  }, [setForm, DEFAULT_FORM_DATA]);

  const handleSwitchAuth = useCallback(() => {
    switchAuth === "login" ? setSwitchAuth("register") : setSwitchAuth("login");
    handleClearForm();
  }, [switchAuth, setSwitchAuth, handleClearForm]);

  const handleSubmitRegister = useCallback(() => {
    register ? register(form) : null;
    setOpenLoginModal(false);
  }, [form, register, setOpenLoginModal]);

  const handleSubmitLogin = useCallback(() => {
    login
      ? login({
          email: form.email,
          password: form.password,
        })
      : null;
    setOpenLoginModal(false);
  }, [form, login, setOpenLoginModal,]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    },
    [form],
  );

  const submitForm = useCallback((e: any) => {
    e.preventDefault()
    if(switchAuth === 'login') handleSubmitLogin()
    else handleSubmitRegister()
    
  }, [switchAuth, handleSubmitLogin, handleSubmitRegister])

  const disabledButton = useCallback(() => {
    if(switchAuth === 'login') return !!validateEmail(form.email) || !!validatePassword(form.password)
    return !!validateEmail(form.email) || !!validatePassword(form.password) || !!validateNickname(form.nickname)
  }, [form.email, form.password, form.nickname, switchAuth])

  return (
    <ModalWrapperComponent handler={setOpenLoginModal} state={openLoginModal} variant="">
      <LoginPageWrapper>
        <ModalCloseComponent handler={setOpenLoginModal} state={openLoginModal} />
        <LoginLogo icon={LogoIcon} />
        <LoginPageTitle>Elemento</LoginPageTitle>
        <LoginPageText>Theme documentation</LoginPageText>
        <LoginPageForm onSubmit={submitForm}>
          {switchAuth === "login" ? null : (
            <Input
              variant="padding"
              validate={validateNickname}
              value={form.nickname}
              name="nickname"
              placeholder="Nickname"
              id="nickname"
              type="nickname"
              title="Nickname"
              handler={handleInputChange}
            />
          )}

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
            validate={validatePassword}
            value={form.password}
            name="password"
            placeholder="Password"
            id="password"
            type="password"
            title="Password"
            handler={handleInputChange}
          />
          <Button disabled={disabledButton()} type="submit">
            {switchAuth === 'login' ? 'Login' : 'Register'}
          </Button>
        </LoginPageForm>
        <ChangeAuthTitle onClick={handleSwitchAuth}>
          {switchAuth === "login" ? "I don`t have an account" : "I already have an account"}
        </ChangeAuthTitle>
      </LoginPageWrapper>
    </ModalWrapperComponent>
  );
};

export default AuthPage;
