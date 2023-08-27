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

    const copyTextToClipboard = () => {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Text copied to clipboard');
      };

      const clearText = () => {
            setText("")
            
      }
      const [mystyle, setMyStyle] = useState({

      })
    return (
        <>
            <div className="container my-4" style={{color : props.mode === "light" ?"black":"white"} }>
                <h1 className='text-center'>{props.heading}</h1>
                <div className="mb-3 my-4">
                    <textarea style={{backgroundColor : props.mode === "light" ?"white":"#212529", color : props.mode === "light" ?"black":"white"}} onChange={handlechange} className="form-control" value={text} id="exampleFormControlTextarea1" rows="8" placeholder='Enter Text'></textarea>
                    <p className='text-end'>{text.split(" ").length - 1} Words & {text.length} Characters</p>
                </div>
                <div className="d-flex gap-4 flex-wrap justify-content-center my-4" style={mystyle}>
                    <button onClick={handleUpClick} className="btn btn-success" type="button">Convert to UPPERCASE</button>
                    <button onClick={handleLowClick} className="btn btn-success" type="button">Convert to lowercase</button>
                    <button onClick={copyTextToClipboard} className="btn btn-success" type="button">Copy to Clipboard</button>
                    <button onClick={clearText} className="btn btn-success" type="button">Clear Text</button>

                   
                </div>
                <h4>Time Takes to Read: {timeTaken} minutes</h4>
            </div>
        </>
    )
}

export default TextForm
