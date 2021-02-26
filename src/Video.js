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
        "https://www.youtube.com/embed/IaTcy1Vvbi0",
        "https://www.youtube.com/embed/2LqzF5WauAw",
        "https://www.youtube.com/embed/AZGcmvrTX9M",
        "https://www.youtube.com/embed/vw2FOYjCz38",
        "https://www.youtube.com/embed/qo5jJpHtI1Y",
        "https://www.youtube.com/embed/PaZVjZEFkRs",
        "https://www.youtube.com/embed/-4QPVo0UIzc",
        "https://www.youtube.com/embed/vgqG3ITMv1Q",
        "https://www.youtube.com/embed/imm6OR605UI",
        "https://www.youtube.com/embed/bkYCR677_OQ",
        "https://www.youtube.com/embed/FSH-dbbiroI"
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