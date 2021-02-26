import React, { useState } from "react"

function Text() {
    return (
        <div>
            <div class="container">
                <form class="form">
                    <br /><br /><br />
                    <label for="fname">First name:</label><br />
                    <input type="text" id="fname" name="fname" /><br /><br />
                    <label for="lname">Last name:</label><br />
                    <input type="text" id="lname" name="lname" />
                    <label>Favorite Movie</label>
                    <div class="radioContainer">
                        <label class="radio-label" for="Inception">Inception</label>
                        <input class="radio-input" type="radio" id="Inception" name="movie" value="Inception" />
                        <label class="radio-label" for="Interstellar">Interstellar</label>
                        <input class="radio-input" type="radio" id="Interstellar" name="movie" value="Interstellar" />
                        <label class="radio-label" for="Tenet">Tenet</label>
                        <input class="radio-input" type="radio" id="Tenet" name="movie" value="Tenet" />
                    </div>
                    <input type="submit" value="Done" />
                </form>
            </div>
        </div>
    )
}

export default Text