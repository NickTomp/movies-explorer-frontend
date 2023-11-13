import React from 'react'
import './Login.css'
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    function handleSetEmail(e) {
        setEmail(e.target.value)
    }
    function handleSetPassword(e) {
        setPassword(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        alert('в разработке!');
    }
    return (
        <main className='login'>
            <div className='login__top'>
                <Link to="/"><img className='login__logo' alt='mesto' src={logo} /></Link>
                <h1 className='login__header'>{props.header}</h1>
            </div>
            <form className='login__form' onSubmit={handleSubmit} name={props.name} noValidate="">
                <label className='login__form-text'>E-mail</label>
                <input
                    className='login__form-input'
                    type='email'
                    id="email-input"
                    name="email"
                    required="true"
                    minLength={2}
                    maxLength={40}
                    onChange={handleSetEmail}
                    placeholder='Введите электронную почту'
                />
                <p className='login__form-error'>Что-то пошло не так...</p>
                <label className='login__form-text'>Пароль</label>
                <input
                    className='login__form-input'
                    type='password'
                    id="password-input"
                    name="password"
                    required="true"
                    minLength={2}
                    maxLength={40}
                    onChange={handleSetPassword}
                    placeholder='Введите пароль'
                />
                <div className='login__bottom'>
                    <button className='login__submit-button' type='submit'>{props.submitButtonText}</button>
                    <p className='login__caption'>Ещё не зарегистрированы?  <Link to="/signup" className='login__link'> Регистрация</Link></p>
                </div>
            </form>
        </main>
    )
}
export default Login;