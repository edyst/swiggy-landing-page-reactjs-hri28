import React, {useState, useEffect, useCallback} from 'react'
import TextTransition, {presets} from "react-text-transition"
import './Herotext.css'

const headings = ['Game night?','Hungry?','Movie marathon?','Unexpected guests?','Late night at office?','Cooking gone wrong?']
function Herotext(){
    const [newLine, setnewLine] = useState("Game night?");

    const changeText = useCallback(() => {
        const index = Math.floor(Math.random() * headings.length);
        setnewLine(headings[index]);
    }, []);

    useEffect(() => {
        const interval = setInterval(changeText, 2100);
        return () => clearInterval(interval);
    }, [changeText])

    return (
        <div className="hero-container">
           <h1 className="heading-transition"><TextTransition text={newLine} springConfig={presets.gentle} /></h1>
           <h4>Order food from favourite restaurants near you.</h4>
        </div>
    )
}

export default Herotext
