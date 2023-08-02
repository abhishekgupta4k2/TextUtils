import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to upper case!", "success");
    }

    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lower case!", "success");
    }

    const handleClearClick = () => {
        setText("");
        props.showAlert("Text cleared!", "success");
    }

    const handleCopy = () => {
        let cpy = document.getElementById('myBox');      // We can use text as variable cpy
        cpy.select();
        navigator.clipboard.writeText(cpy.value);
        document.getSelection().removeAllRanges();             // It not select the text when we click on copy button
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState('');

    // text = "new text"; // Wrong way to change text

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='mb-4'>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" style={{
                        backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                        color: props.mode === 'dark' ? 'white' : '#042743'
                    }} value={text} onChange={handleOnChange} rows="6" autoFocus></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleLoClick}>Convert to lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleClearClick}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleCopy}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>My text summery</h2>
                <p><strong>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length}</strong> words and <strong>{text.length}</strong> characters</p>
                <p><strong>{0.008 * text.split(" ").filter((element)=> {return element.length!==0}).length}</strong> Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>
        </>
    )
}
