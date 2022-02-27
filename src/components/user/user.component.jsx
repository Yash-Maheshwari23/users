import React from "react";
import './user.styles.css';

const User = (props) => {
    const {name,username,phone,email,website,id}=props.user;
    return(
        <main>
            <div className="user-column">
                <div className="user-details">
                    <div className="user-name">
                        <h1>{name}</h1>
                        <p>{`@${username}`}</p>
                    </div>
                    <div className="user-contact">
                        <p>{`Phone: ${phone}`}</p>
                        <p>{`Email: ${email}`}</p>
                        <p>{`Website: ${website}`}</p>
                    </div>
                </div>
                <button onClick={()=>props.detailsBtnHandler(id)} className="user-details-btn">User Details</button>
            </div>

        </main>
    )
}

export default User;