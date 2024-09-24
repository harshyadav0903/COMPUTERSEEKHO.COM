


import React, { useEffect, useState } from "react";
import Footer from "./Footer";
export default function GetInTouch() {
  const [getdetails, setDetails] = useState();
  const [msgBody, setMsgBody] = useState();

  const handleOnchange = (event) => {
    setDetails((eml) => ({ ...eml, [event.target.name]: event.target.value }));
    setMsgBody((msg) => ({ ...msg, [event.target.name]: event.target.value }));
    console.log(getdetails);
  };

  const sendEmail = (event) => {
    event.preventDefault();

    console.log(JSON.stringify(getdetails));

    fetch("https://localhost:7020/api/SendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...getdetails, msgBody: msgBody.Body }),
    })
      .then((data) => {
        console.log(data);
        alert("Inserted");
        // navigate('/home');
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const sectionStyle = {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid #ddd", // Add border style
    padding: "20px", // Add padding for better visual appeal
    marginBottom: "20px", // Add margin at the bottom
  };

  return (
    <div>
      <div style={sectionStyle}>
        <div>
          <h3>Our Origin</h3>
          <p>We are a part of Upanagar Shikshan Mandal (USM), a pioneering educational trust in the western suburbs of Mumbai. Commencing in 1956, USM has blossomed into 14 educational institutes that impart quality education from primary school to Post-Graduate courses.</p>
        </div>
        <div>
          <h3>Reach us at</h3>
          <p>Authorised Training Centre
            5th Floor, Vidyanidhi Education Complex, Vidyanidhi Road, Juhu Scheme Andheri (W), Mumbai 400 049 India.
            Mobile : 9029435311 / 9324095272 / 9987062416
            Email : training@vidyanidhi.com</p>
        </div>
      </div>
      <h2>Get In Touch</h2>
      <form onSubmit={sendEmail}>
        <label htmlFor="name">Name</label>
        <input type="text" name="Name" placeholder="Enter your name" required onChange={handleOnchange} />
        <br />

        <label htmlFor="email">Email</label>
        <br />
        <input type="email" name="Email" placeholder="Enter your email" required onChange={handleOnchange} />
        <br />
        <br />

        <label htmlFor="query">Query</label>
        <br />

        <textarea id="msgBody" name="Body" placeholder="Enter your query" required onChange={handleOnchange}></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
      <Footer/>
    </div>
  );
}
