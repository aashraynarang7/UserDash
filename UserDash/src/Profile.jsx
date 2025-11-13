import React, { useEffect, useState } from "react";
import "./profile.css";
const Profile = () => {
    const [isMobile, setIsMobile]= useState(false);
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    company: {
        name:""
    },
    address:{}
  });
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUser(json[0]);
        console.log(json);
      })
      .catch((err) => console.log(err));
  }, []);

    useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 645);
    }
    window.addEventListener("resize", handleResize);

    // Cleanup when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
},[])

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
        {isMobile?<div className="profile-container">
      <div className="outer">
        <div className="card">
             <div className="dp-parent">
            <div className="dp">
              <img src={"./profile.jpg" || user.picture.large} alt="" />
            </div>
            <p style={{ textAlign: "center", fontWeight: 600 }}>{user.name}</p>
          </div>
        </div>
        <div className="card">
            <div className="details">
            <h2 style={{ marginLeft: "20px", fontSize: "19px" }}>Contact</h2>
            <p style={{ marginLeft: "20px", fontSize: "16px" }}>
              <b>Phone&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</b>
              {user.phone}
            </p>
            <p style={{ marginLeft: "20px", fontSize: "16px" }}>
              <b>Email |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
              {user.email}
            </p>
          </div>
        </div>
        <div className="card">
             <div style={{width:"100%"}} className="details">
              <h2 style={{ marginLeft: "20px", fontSize: "19px" }}>Address</h2>
              <p style={{ marginLeft: "20px", fontSize: "16px" }}>
                <b>Suite |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                {user.address.suite}
              </p>
              <p style={{ marginLeft: "20px", fontSize: "16px" }}>
                <b>Street |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                {user.address.street}
              </p>
              <p style={{ marginLeft: "20px", fontSize: "16px" }}>
                <b>City |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                {user.address.city}
              </p>
              <p style={{ marginLeft: "20px", fontSize: "16px" }}>
                <b>Zip-code|&nbsp;&nbsp;</b>
                {user.address.zipcode}
              </p>
            </div>
        </div>
        <div className="card">
             <div style={{width:"100%"}}className="details">
              <h2 style={{ marginLeft: "20px", fontSize: "19px" }}>Company</h2>
            <p style={{ marginLeft: "20px", fontSize: "16px" }}>
              <b>Name |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
              {user.company.name}
            </p>
            <p style={{ marginLeft: "20px", fontSize: "16px" }}>
              <b>moto |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
              {user.company.bs}
            </p>
              </div>
        </div>
      </div>
    </div>:<div className="profile-container">
      <div className="outer">
        <div className="vertical">
          <div className="dp-parent">
            <div className="dp">
              <img src={"./profile.jpg" || user.picture.large} alt="" />
            </div>
            <p style={{ textAlign: "center", fontWeight: 600 }}>{user.name}</p>
          </div>
           <div className="horizontal">
            <div className="details">
            <h2 style={{ marginLeft: "20px", fontSize: "19px" }}>Contact</h2>
            <p style={{ marginLeft: "20px", fontSize: "16px" }}>
              <b>Phone&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</b>
              {user.phone}
            </p>
            <p style={{ marginLeft: "20px", fontSize: "16px" }}>
              <b>Email |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
              {user.email}
            </p>
          </div>
            </div>
          
        </div>
        <div className="hor-container">
          <div className="horizontal">
           
            <div style={{width:"100%"}} className="details">
              <h2 style={{ marginLeft: "20px", fontSize: "19px" }}>Address</h2>
              <p style={{ marginLeft: "20px", fontSize: "16px" }}>
                <b>Suite |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                {user.address.suite}
              </p>
              <p style={{ marginLeft: "20px", fontSize: "16px" }}>
                <b>Street |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                {user.address.street}
              </p>
              <p style={{ marginLeft: "20px", fontSize: "16px" }}>
                <b>City |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                {user.address.city}
              </p>
              <p style={{ marginLeft: "20px", fontSize: "16px" }}>
                <b>Zip-code|&nbsp;&nbsp;</b>
                {user.address.zipcode}
              </p>
            </div>
          </div>
          <div className="horizontal">
            <div style={{width:"100%"}}className="details">
              <h2 style={{ marginLeft: "20px", fontSize: "19px" }}>Company</h2>
            <p style={{ marginLeft: "20px", fontSize: "16px" }}>
              <b>Name |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
              {user.company.name}
            </p>
            <p style={{ marginLeft: "20px", fontSize: "16px" }}>
              <b>moto |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
              {user.company.bs}
            </p>
              </div>
            
          </div>
        </div>
      </div>
    </div>
        }
    </>
    
  );
};

export default Profile;
