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
        <section className='login'>
            <div className='login__top'>
                <Link to="/"><img className='login__logo' alt='mesto' src={logo} /></Link>
                <h1 className='login__header'>{props.header}</h1>
            </div>
            <form className='login__form' onSubmit={handleSubmit} name={props.name} noValidate="">
                <p className='login__form-text'>E-mail</p>
                <input
                    className='login__form-input'
                    type='email'
                    id="email-input"
                    name="email"
                    required=""
                    minLength={2}
                    maxLength={40}
                    onChange={handleSetEmail}
                />
                <p className='login__form-error'>Что-то пошло не так...</p>
                <p className='login__form-text'>Пароль</p>
                <input
                    className='login__form-input'
                    type='password'
                    id="password-input"
                    name="password"
                    required=""
                    minLength={2}
                    maxLength={40}
                    onChange={handleSetPassword}
                />
                <div className='login__bottom'>
                    <button className='login__submit-button'>{props.submitButtonText}</button>
                    <p className='login__caption'>Ещё не зарегистрированы? <Link to="/signup" className='login__link'>Войти</Link></p>
                </div>
            </form>
        </section>
    )
}
export default Login;