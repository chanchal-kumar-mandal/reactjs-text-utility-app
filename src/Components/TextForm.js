import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleOnchange = (event) => {
        setText(event.target.value);
    }

    const handleUpperCaseClick = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    const handleLowerCaseClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const handleCharCodeConversionClick = () => {
        let convertedText = text.split('').map((val) => val.charCodeAt(0) );
        setText(convertedText.join(''));
    }

    const handleClearClick = () => {
        setText('');
    }

    return (
        <>
            <div className="container my-3">
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="5" value={text} onChange={handleOnchange}></textarea>
                </div>
                <button type="button" className="btn btn-sm btn-primary mx-1 my-1" onClick={handleUpperCaseClick}>Conver To Uppercase</button>
                <button type="button" className="btn btn-sm btn-warning mx-1 my-1" onClick={handleLowerCaseClick}>Conver To Lowercase</button>
                <button type="button" className="btn btn-sm btn-info mx-1 my-1" onClick={handleCharCodeConversionClick}>Char Code Conversion</button>
                <button type="button" className="btn btn-sm btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} minutes need to read.</p>

                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
