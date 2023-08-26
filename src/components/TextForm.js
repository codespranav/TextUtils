import React from 'react'
import { useState } from 'react'
function TextForm(props) {
    const handleUpClick = () =>{
        console.log("done");
        let newtext = text.toUpperCase();
        setText(newtext)
    }

    const handleLowClick = () =>{
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const handlechange = (event) =>{
        setText(event.target.value)
    }

    const [text, setText] = useState()
    return (
        <>
            <div className="container my-4">
                <h1 className='text-center'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea onChange={handlechange} className="form-control" value={text} id="exampleFormControlTextarea1" rows="8" placeholder='Enter Text'></textarea>
                </div>
                <div className="d-flex gap-4 justify-content-center">
                    <button onClick={handleUpClick} className="btn btn-primary" type="button">Convert to UPPERCASE</button>
                    <button onClick={handleLowClick} className="btn btn-primary" type="button">Convert to lowercase</button>
                </div>
            </div>
        </>
    )
}

export default TextForm
