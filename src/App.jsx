import React, {useState} from 'react';
import CourseList from './components/CourseGoals/CourseList.jsx';
import CourseInput from './components/CourseGoals/CourseInput.jsx';
import './App.css';

const App = () => {

    // 목표데이터들의 묶음배열
    const [goals, setGoals] = useState([
        {
            id: 'g1',
            text: '테스트 데이터1',
        },
        {
            id: 'g2',
            text: '테스트 데이터2',
        },
    ]);

    return (
        <div>
            <section id='goal-form'>
                <CourseInput />
            </section>
            <section id='goals'>
                <CourseList />
            </section>
        </div>
    );
};

export default App;