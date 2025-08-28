import React from 'react';
import './App.css';
import Player from './components/TimerGame/Player.jsx';
import TimerChallenge from "./components/TimerGame/TimerChallenge.jsx";

const App = () => {



    return (
        <>
            <Player />
            <div id="Challenges">
                <TimerChallenge title='Easy' targetTime={1} />
                <TimerChallenge title='Not Easy' targetTime={5}/>
                <TimerChallenge title='Getting tough' targetTime={10}/>
                <TimerChallenge title='Pros only' targetTime={15}/>
            </div>
        </>
    );
};

export default App;