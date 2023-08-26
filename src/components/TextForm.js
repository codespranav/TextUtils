import React from 'react'
import { useState } from 'react'
function TextForm(props) {
    const [text, setText] = useState("")

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

    const timeTaken = Math.round( text.split(" ").length/200 );

    return (
        <>
            <div className="container my-4">
                <h1 className='text-center'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea onChange={handlechange} className="form-control" value={text} id="exampleFormControlTextarea1" rows="8" placeholder='Enter Text'></textarea>
                    <p className='text-end'>{text.split(" ").length} Words & {text.length} Characters</p>
                </div>
                <div className="d-flex gap-4 justify-content-center">
                    <button onClick={handleUpClick} className="btn btn-success" type="button">Convert to UPPERCASE</button>
                    <button onClick={handleLowClick} className="btn btn-success" type="button">Convert to lowercase</button>
                </div>
                <h4>Time Takes to Read: {timeTaken} minutes</h4>
            </div>
        </>
    )
}

export default TextForm
