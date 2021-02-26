import React, { useState } from "react"
import './Images.css'
import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'
import image4 from './images/4.jpg'
import image5 from './images/5.jpg'
import image6 from './images/6.jpg'
import image7 from './images/7.jpg'
import image8 from './images/8.jpg'
import image9 from './images/9.jpg'
import image10 from './images/10.jpg'
import image11 from './images/11.jpg'
import image12 from './images/12.jpg'
import image13 from './images/13.jpg'
import image14 from './images/14.jpg'
import image15 from './images/15.jpg'
import image16 from './images/16.jpg'

function Image() {
    const [index, setIndex] = useState(0)
    function showBigPicture(index) {
        setIndex(index)
    }
    return (
        <div>
            <div class="images">
                <img onClick={() => showBigPicture(1)} src={image1} alt="" class={"gallery-image" + (index == 1 ? " overlay-picture" : "")} />
                <img onClick={() => showBigPicture(2)} src={image2} alt="" class={"gallery-image" + (index == 2 ? " overlay-picture" : "")} />
                <img onClick={() => showBigPicture(3)} src={image3} alt="" class={"gallery-image" + (index == 3 ? " overlay-picture" : "")} />
                <img onClick={() => showBigPicture(4)} src={image4} alt="" class={"gallery-image" + (index == 4 ? " overlay-picture" : "")} />
                <img onClick={() => showBigPicture(5)} src={image5} alt="" class={"gallery-image" + (index == 5 ? " overlay-picture" : "")} />
                <img onClick={() => showBigPicture(6)} src={image6} alt="" class={"gallery-image" + (index == 6 ? " overlay-picture" : "")} />
                <img onClick={() => showBigPicture(7)} src={image7} alt="" class={"gallery-image" + (index == 7 ? " overlay-picture" : "")} />
                <img onClick={() => showBigPicture(8)} src={image8} alt="" class={"gallery-image" + (index == 8 ? " overlay-picture" : "")} />
                <img onClick={() => showBigPicture(9)} src={image9} alt="" class={"gallery-image" + (index == 9 ? " overlay-picture" : "")} />
                <img onClick={() => showBigPicture(10)} src={image10} alt="" class={"gallery-image" + (index == 10 ? " overlay-picture" : "")} />
                <img onClick={() => showBigPicture(11)} src={image11} alt="" class={"gallery-image" + (index == 11 ? " overlay-picture" : "")} />
                <img onClick={() => showBigPicture(12)} src={image12} alt="" class={"gallery-image" + (index == 12 ? " overlay-picture" : "")} />
                <img onClick={() => showBigPicture(13)} src={image13} alt="" class={"gallery-image" + (index == 13 ? " overlay-picture" : "")} />
                <img onClick={() => showBigPicture(14)} src={image14} alt="" class={"gallery-image" + (index == 14 ? " overlay-picture" : "")} />
                <img onClick={() => showBigPicture(15)} src={image15} alt="" class={"gallery-image" + (index == 15 ? " overlay-picture" : "")} />
                <img onClick={() => showBigPicture(16)} src={image16} alt="" class={"gallery-image" + (index == 16 ? " overlay-picture" : "")} />
            </div>
            {index > 0 ? <div onClick={() => setIndex(0)} class="overlay"></div> : null}
        </div>
    )
}

export default Image