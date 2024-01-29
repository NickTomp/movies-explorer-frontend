import React from 'react'
import './Profile.css';
import { emailRegEx, nameRegEx } from '../../constants/regEx.js';
import { currentUserContext } from '../../contexts/CurrentUserContext.js'

function Profile(props) {
    const currentUser = React.useContext(currentUserContext);
    const [isApiValid, setIsApiValid] = React.useState(props.apiError ? false : true);
    const [isNameValid, setIsNameValid] = React.useState(false);
    const [isEmailValid, setIsEmailValid] = React.useState(false);
    const [isDisabled, setIsDisabled] = React.useState(true);
    const [nameError, setNameError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);

    }, []);
    React.useEffect(() => {
        if   (( isEmailValid && email !== currentUser.email && name === currentUser.name && nameError === '' ) || ( isNameValid && name !== currentUser.name && email === currentUser.email && emailError === '' )) {
            setIsDisabled(false)
        }
        else if ((isEmailValid && isNameValid)) {
            setIsDisabled(false)
        } else {setIsDisabled(true)}
    }, [name, email])

    
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
        else if (e.target.value === currentUser.email) {
            setEmailError('Новый адрес должен отличаться от старого')
            setIsEmailValid(false)
        }
        else { setEmailError(''); setIsEmailValid(true) }
    }
    function handleSetName(e) {
        setName(e.target.value)
        if (!e.target.value) { setNameError('Поле не может быть пустым'); setIsNameValid(false) }
        else if (!nameRegEx.test(String(e.target.value).toLowerCase())) {
            setNameError('Введите корректное имя (Только буквы, пробел и дефис)')
            setIsNameValid(false)
        }
        else if (e.target.value.length < 2) {
            setNameError('Имя должно быть длиннее 2х символов')
            setIsNameValid(false)
        }
        else if (e.target.value === currentUser.name) {
            setNameError('Новое имя должно отличаться от старого')
            setIsNameValid(false)
        }
        else { setNameError(''); setIsNameValid(true) }
    }
    function logOut() {
        props.onLogOut();
        props.clearApiError();
    }
    function editProfile(e) {
        e.preventDefault();
        handleDisableButton();

        if (!isDisabled) {
            props.onChangeUser(name, email);
            props.clearApiError();
        } else { return false }

    }
    function handleDisableButton() {
        setIsDisabled(true);
    }
    return (
        <main>
            {props.children}
            <section className="profile">
                <h1 className='profile__header'>Привет, {currentUser.name}!</h1>
                <form className='profile__content' noValidate>
                    <div className='profile__data'>
                        <label className='profile__text'>Имя</label>
                        <input
                            className='profile__input'
                            type='text'
                            id="profile-name"
                            name="name"
                            required="true"
                            minLength={2}
                            maxLength={40}
                            onChange={handleSetName}
                            defaultValue={name}
                            placeholder='Введите новое имя'
                        />
                    </div>
                    <p className={isNameValid ? 'register__form-error' : 'register__form-error register__form-error_active'}>{nameError}</p>
                    <div className='profile__data'>
                        <label className='profile__text'>E-mail</label>
                        <input
                            className='profile__input'
                            type='text'
                            id="profile-email"
                            name="name"
                            required="true"
                            onChange={handleSetEmail}
                            defaultValue={email}
                            placeholder='Введите новую почту'
                        />
                    </div>
                    <p className={isEmailValid ? 'register__form-error' : 'register__form-error register__form-error_active'}>{emailError}</p>
                </form>
                <div className='profile__buttons'>
                    <p className={isApiValid ? 'profile__api-error register__form-error' : 'profile__api-error register__form-error register__form-error_active'}>{props.apiError}</p>
                    <button disabled={isDisabled} type='button' className={!isDisabled ? 'profile__button profile__edit-button' : 'profile__button profile__edit-button profile__edit-button_disabled'} onClick={editProfile}>Редактировать</button>
                    <button type='button' className='profile__button profile__logout-button' onClick={logOut}>Выйти из аккаунта</button>
                </div>
            </section>
        </main>
    );
}
export default Profile;