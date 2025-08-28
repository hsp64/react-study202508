import React, {useRef, useState} from 'react';

const Player = () => {

    const nameRef = useRef();

    const [enteredName, setEnteredName] = useState('anonymous');

    const nameChangeHandler = e => {
        // console.log(nameRef);
        setEnteredName(nameRef.current.value);
        nameRef.current.value = '';
    };

    return (
        <section id='player'>
            <h2>Welcome { enteredName }!</h2>
            <p>
                <input type='text' ref={nameRef} />
                <button onClick={nameChangeHandler}>Set Name</button>
            </p>
        </section>
    );
};

export default Player;
