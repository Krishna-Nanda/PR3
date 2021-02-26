import React, { useState } from "react"
import './Video.css';

function Video() {
    const [index, setIndex] = useState(0)
    function showBigScreen(index) {
        setIndex(index);
        console.log('running', index);
    }

    const links = [
        'https://www.youtube.com/embed/YoHD9XEInc0',
        'https://www.youtube.com/embed/YoHD9XEInc0',
        'https://www.youtube.com/embed/YoHD9XEInc0',
        'https://www.youtube.com/embed/YoHD9XEInc0',
        'https://www.youtube.com/embed/YoHD9XEInc0',
        'https://www.youtube.com/embed/YoHD9XEInc0',
        'https://www.youtube.com/embed/YoHD9XEInc0',
        'https://www.youtube.com/embed/YoHD9XEInc0',
        'https://www.youtube.com/embed/YoHD9XEInc0',
        'https://www.youtube.com/embed/YoHD9XEInc0',
        'https://www.youtube.com/embed/YoHD9XEInc0',
        'https://www.youtube.com/embed/YoHD9XEInc0',
        'https://www.youtube.com/embed/YoHD9XEInc0',
        'https://www.youtube.com/embed/YoHD9XEInc0',
        'https://www.youtube.com/embed/YoHD9XEInc0',
        'https://www.youtube.com/embed/YoHD9XEInc0',
        'https://www.youtube.com/embed/YoHD9XEInc0',
        'https://www.youtube.com/embed/YoHD9XEInc0',
    ];


    return (
        <div>
            <div class="videos-container">
                {links.map((link, i) => (
                    <div class="video-container">
                        <iframe class="video" src={link}>
                        </iframe>
                        <div onClick={() => showBigScreen(i + 1)} class="video-overlay"></div>
                    </div>
                ))}
            </div>

            {index > 0 ? <div onClick={() => setIndex(0)} class="overlay"></div> : null}

            {index > 0 ? (
                <div id="overlay-video-container">
                    <iframe src={links[index]}></iframe>
                </div>
            )
                :
                null
            }
        </div>


    )
}

export default Video