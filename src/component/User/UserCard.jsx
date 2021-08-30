import profile from "../../assets/profile.svg"

const UserCard = (userName , userPassword) => {
    return (
        <div className = "userCard">
            <div className = "userAvatar">
                <img src={profile}/>
            </div>
            <div className = "Connexion">
                <h1>Welcome back {userName} !</h1>
                <p>email : email</p>
                <p>username : {userName}</p>
                <p>password : {userPassword}</p>
            </div>
        </div>

    );
}

export default UserCard;
