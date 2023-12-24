import React, {useState} from 'react';
import './input.css'

const Input = () => {

    const [user, setUser] = useState('')
    const [text, setText] = useState('')

    const handleUser = e => {
        setUser(e.target.value)
    }
    const handleText = e => {
        setText(e.target.value)
    }
    const handleLog = () => {
        console.log(user + ' : ' + text)
        setUser('')
        setText('')
    }

    return (
        <>
            <div className={'userInput'}>
                <input value={user} onChange={handleUser} placeholder={'User'} type="text"/>
                <input value={text} onChange={handleText} placeholder={'Type some text'} type="text"/>
                <button onClick={handleLog}>SendInfo</button>
            </div>
        </>
    );
};

export default Input;