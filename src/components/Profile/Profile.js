import React from 'react'
import './Profile.css';
import { useNavigate } from "react-router-dom";

function Profile(props) {
    const navigate = useNavigate();
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    React.useEffect(() => {
        setName(props.userName);
        setEmail(props.userEmail)
    }, []);
    function handleSetEmail(e) {
        setEmail(e.target.value)
    }
    function handleSetName(e) {
        setName(e.target.value)
    }
    function logOut() {
        navigate('/', { replace: true })
    }
    function editProfile(e) {
        e.preventDefault();
        alert('in progress')
    }
    return (
        <main>
            {props.children}
            <section className="profile">
                <h1 className='profile__header'>Привет, {props.userName}!</h1>
                <form className='profile__content'>
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
                    <div className='profile__data'>
                        <label className='profile__text'>E-mail</label>
                        <input
                            className='profile__input'
                            type='text'
                            id="profile-name"
                            name="name"
                            required="true"
                            onChange={handleSetEmail}
                            defaultValue={email}
                            placeholder='Введите новую почту'
                        />
                    </div>
                </form>
                <div className='profile__buttons'>
                    <button type='button' className='profile__button profile__edit-button' onClick={editProfile}>Редактировать</button>
                    <button type='button' className='profile__button profile__logout-button' onClick={logOut}>Выйти из аккаунта</button>
                </div>
            </section>
        </main>
    );
}
export default Profile;