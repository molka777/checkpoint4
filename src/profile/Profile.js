import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
    const name = { color: '#093219', }
    const bold = { fontWeight: "bold" }
    const morphus_image = { width: "41%", margin: "1%" }
    const border = { border: "3px solid grey" }
    const alignement = { display: "flex", justifyContent: "spaceBetween", marginRight: "39%" }
    const style_info = { margin: "3%" }
    const style_link = { textDecoration: "none" }
    const handleClick = e => {
        e.preventDefault();
        alert(`le nom de l'utilisateur est ${props.name}`)
    };


    return (
        <>
            <div style={{ ...border, ...alignement }}>
                <img style={{ ...morphus_image, ...border }} src={props.children} alt="photo" />
                < div style={style_info}>

                    <h5 style={name}> {props.name}</h5>
                    <span style={bold}>Bio:</span> <p>{props.bio}</p>
                    <span style={bold}>Formation:</span><p>{props.profession}</p>
                </div>
            </div>
            <a style={style_link} href="/" onClick={handleClick}>
                Afficher le nom de l'utilisateur
        </a>


        </>
    );
};

Profile.defaultProps = {
    profession: "ceo et Fondateur",
    bio: "maintenance en informatique",
    name: "Mohamed"
};
Profile.propTypes = {
    profession: PropTypes.string,
    bio: PropTypes.string,
    name: PropTypes.string
};
export default Profile;