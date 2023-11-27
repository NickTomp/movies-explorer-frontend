import React from 'react'
import './Login.css'
import logo from '../../images/logo.svg';
import { emailRegEx } from '../../constants/regEx.js';
import { Link } from 'react-router-dom';

function Login(props) {
    const [isEmailValid, setIsEmailValid] = React.useState(false);
    const [isPasswordValid, setIsPasswordValid] = React.useState(false);
    const [isApiValid, setIsApiValid] = React.useState(props.apiError ? false : true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    

    React.useEffect(() => {
        setIsApiValid(props.apiError ? false : true)
      }, [props.apiError])

    function handleSetEmail(e) {
        setEmail(e.target.value)
        if (!e.target.value) { setEmailError('Поле не может быть пустым'); setIsEmailValid(false) }
        else if (!emailRegEx.test(String(e.target.value).toLowerCase())) {
            setEmailError('Введите корректный адрес')
            setIsEmailValid(false) 
        } 
        else { setEmailError(''); setIsEmailValid(true) }
    }
    function handleSetPassword(e) {
        setPassword(e.target.value)
        if (!e.target.value) { setPasswordError('Поле не может быть пустым'); setIsEmailValid(false) }
        else if (e.target.value.length < 4) {
            setPasswordError('Пароль должен быть длиной 4 символа и более')
            setIsPasswordValid(false)
        } 
        else { setPasswordError(''); setIsPasswordValid(true) }
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(password, email)
    }
    function handleClearApiError() {
        props.clearApiError();
    }


    return (
        <main className='login'>
            <div className='login__top'>
                <Link to="/"><img className='login__logo' alt='логотип' src={logo} /></Link>
                <h1 className='login__header'>{props.header}</h1>
            </div>
            <form className='login__form' onSubmit={handleSubmit} name={props.name} noValidate>
                <label className='login__form-text'>E-mail</label>
                <input
                    className='login__form-input'
                    type='email'
                    id="email-input"
                    name="email"
                    required
                    minLength={2}
                    maxLength={40}
                    value={email}
                    onChange={handleSetEmail}
                    placeholder='Введите электронную почту'
                />
                <p className={isEmailValid ? 'login__form-error' : 'login__form-error login__form-error_active'}>{emailError}</p>
                <label className='login__form-text'>Пароль</label>
                <input
                    className='login__form-input'
                    type='password'
                    id="password-input"
                    name="password"
                    required
                    minLength={4}
                    value={password}
                    onChange={handleSetPassword}
                    placeholder='Введите пароль'
                />
                <p className={isPasswordValid ? 'login__form-error' : 'login__form-error login__form-error_active'}>{passwordError}</p>
                <div className='login__bottom'>
                    <p className={isApiValid ? 'login__api-error login__form-error' : 'login__api-error login__form-error login__form-error_active'}>{props.apiError}</p>
                    <button disabled={!isPasswordValid && !isEmailValid} className={(isPasswordValid && isEmailValid) ? 'login__submit-button' : 'login__submit-button login__submit-button_disabled'} type='submit'>{props.submitButtonText}</button>
                    <p className='login__caption'>Ещё не зарегистрированы?  <Link onClick={handleClearApiError} to="/signup" className='login__link'> Регистрация</Link></p>
                </div>
            </form>
        </main>
    )
}
export default Login;