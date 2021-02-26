import React, { useState } from "react"

function Email() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function validateEmail(e) {
        e.preventDefault();
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = regex.test(email.toLowerCase());
        if (isValid) {
            setMessage('Email is valid');
        } else {
            setMessage('Email is invalid');
        }
    }

    return (
        <div class="container">
            <h2 class="message">{message}</h2>
            <form class="form" onSubmit={validateEmail}>
                <label for="email">Email:</label><br />
                <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input class="submit" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Email