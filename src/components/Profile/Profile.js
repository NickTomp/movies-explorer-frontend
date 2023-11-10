import './Profile.css';

function Profile(props) {
    function editProfile() {
        alert('В разработке!');
    }
    return (
        <>
        {props.children}
        <section className="profile">
            <h1 className='profile__header'>Привет, {props.userName}!</h1>
            <div className='profile__content'>
                <div className='profile__data'>
                    <p className='profile__text'>Имя</p>
                    <p className='profile__text'>{props.userName}</p>
                </div>
                <div className='profile__line'></div>
                <div className='profile__data'>
                    <p className='profile__text'>E-mail</p>
                    <p className='profile__text'>{props.userEmail}</p>
                </div>
            </div>
            <div className='profile__buttons'>
                <button type='button' className='profile__button profile__edit-button' onClick={editProfile}>Редактировать</button>
                <button type='button' className='profile__button profile__logout-button' onClick={editProfile}>Выйти из аккаунта</button>
            </div>
        </section>
        </>
    );
}
export default Profile;