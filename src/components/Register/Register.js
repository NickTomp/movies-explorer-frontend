import React from 'react'
import './Register.css'
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register(props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    function handleSetName(e) {
        setName(e.target.value)
    }
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
        <section className='register'>
            <div className='register__top'>
                <Link to="/"><img className='register__logo' alt='mesto' src={logo} /></Link>
                <h1 className='register__header'>{props.header}</h1>
            </div>

            <form className='register__form' onSubmit={handleSubmit} name={props.name} noValidate="">
                <p className='register__form-text'>Имя</p>
                <input
                    className='register__form-input'
                    type='text'
                    id="name-input"
                    name="name"
                    required=""
                    minLength={2}
                    maxLength={40}
                    onChange={handleSetName}
                />
                <p className='register__form-error'>Что-то пошло не так...</p>
                <p className='register__form-text'>E-mail</p>
                <input
                    className='register__form-input'
                    type='email'
                    id="email-input"
                    name="email"
                    required=""
                    minLength={2}
                    maxLength={40}
                    onChange={handleSetEmail}
                />
                <p className='register__form-error'>Что-то пошло не так...</p>
                <p className='register__form-text'>Пароль</p>
                <input
                    className='register__form-input'
                    type='password'
                    id="password-input"
                    name="password"
                    required=""
                    minLength={2}
                    maxLength={40}
                    onChange={handleSetPassword}
                />
                <p className='register__form-error'>Что-то пошло не так...</p>

                <div className='register__bottom'>
                    <button className='register__submit-button'>{props.submitButtonText}</button>
                    <p className='register__caption'>Уже зарегистрированы? <Link to="/signin" className='register__link'>Войти</Link></p>
                </div>
            </form>
        </section>
    )
}
export default Register;