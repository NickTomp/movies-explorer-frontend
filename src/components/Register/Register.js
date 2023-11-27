import React from 'react'
import './Register.css'
import logo from '../../images/logo.svg';
import { emailRegEx, nameRegEx } from '../../constants/regEx.js';
import { Link } from 'react-router-dom';

function Register(props) {
    const [isNameValid, setIsNameValid] = React.useState(false);
    const [isEmailValid, setIsEmailValid] = React.useState(false);
    const [isPasswordValid, setIsPasswordValid] = React.useState(false);
    const [isApiValid, setIsApiValid] = React.useState(props.apiError ? false : true);
    const [nameError, setNameError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    React.useEffect(() => {
        setIsApiValid(props.apiError ? false : true)
      }, [props.apiError])

    function handleSetName(e) {
        setName(e.target.value)
        if (!e.target.value) { setNameError('Поле не может быть пустым'); setIsNameValid(false) }
        else if (!nameRegEx.test(String(e.target.value).toLowerCase())) {
            setNameError('Введите корректное имя (Только буквы, пробел и дефис)')
            setIsNameValid(false) 
        }
        else if (e.target.value.length < 2) {
            setNameError('Имя должно быть длиной 2 символа и более')
            setIsNameValid(false) 
        } 
        else { setNameError(''); setIsNameValid(true) }
    }
    function handleSetEmail(e) {
        setEmail(e.target.value);
        if (!e.target.value) { setEmailError('Поле не может быть пустым'); setIsEmailValid(false) }
        else if (!emailRegEx.test(String(e.target.value).toLowerCase())) {
            setEmailError('Введите корректный адрес')
            setIsEmailValid(false) 
        } 
        else { setEmailError(''); setIsEmailValid(true) }
    }
    function handleSetPassword(e) {
        setPassword(e.target.value);
        if (!e.target.value) { setPasswordError('Поле не может быть пустым'); setIsEmailValid(false) }
        else if (e.target.value.length < 4) {
            setPasswordError('Пароль должен быть длиной 4 символа и более')
            setIsPasswordValid(false)
        } 
        else { setPasswordError(''); setIsPasswordValid(true) }
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(password, email, name)
    }
    function handleClearApiError() {
        props.clearApiError();
    }
    return (
        <main className='register'>
            <div className='register__top'>
                <Link to="/"><img className='register__logo' alt='логотип' src={logo} /></Link>
                <h1 className='register__header'>{props.header}</h1>
            </div>

            <form className='register__form' onSubmit={handleSubmit} name={props.name} noValidate>
                <label className='register__form-text'>Имя</label>
                <input
                    className='register__form-input'
                    type='text'
                    id="name-input"
                    name="name"
                    required="true"
                    minLength={2}
                    maxLength={40}
                    onChange={handleSetName}
                    placeholder='Введите имя'
                />
                <p className={isNameValid ? 'register__form-error' : 'register__form-error register__form-error_active'}>{nameError}</p>
                <label className='register__form-text'>E-mail</label>
                <input
                    className='register__form-input'
                    type='email'
                    id="register-email-input"
                    name="register-email"
                    required="true"
                    minLength={2}
                    maxLength={40}
                    onChange={handleSetEmail}
                    placeholder='Введите электронную почту'
                />
               <p className={isEmailValid ? 'register__form-error' : 'register__form-error register__form-error_active'}>{emailError}</p>
                <label className='register__form-text'>Пароль</label>
                <input
                    className='register__form-input'
                    type='password'
                    id="register-password-input"
                    name="register-password"
                    required="true"
                    minLength={2}
                    maxLength={40}
                    onChange={handleSetPassword}
                    placeholder='Введите пароль'
                />
                <p className={isPasswordValid ? 'register__form-error' : 'register__form-error register__form-error_active'}>{passwordError}</p>

                <div className='register__bottom'>
                    <p className={isApiValid ? 'register__api-error register__form-error' : 'register__api-error register__form-error register__form-error_active'}>{props.apiError}</p>
                    <button disabled={!isPasswordValid && !isEmailValid && !isNameValid} className={(isPasswordValid && isEmailValid && isNameValid) ? 'register__submit-button' : 'register__submit-button register__submit-button_disabled'} type='submit'>{props.submitButtonText}</button>
                    <p className='register__caption'>Уже зарегистрированы? <Link to="/signin" className='register__link' onClick={handleClearApiError}>Войти</Link></p>
                </div>
            </form>
        </main>
    )
}
export default Register;