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

    // 데이터 끌어올리기용 함수
    const onAddGoal = (text) => {
        const newGoal = {
            id: Math.random().toString(),
            text: text
        };
        setGoals(prev => [...prev, newGoal]);
    };

    const onDeleteGoal = (targetId) => {

        setGoals(goals.filter(g => g.id !== targetId));

        // targetId에 해당하는 객체를 배열안에서 탐색한 후 제거
        // const copyGoals = [...goals];
        // let index = -1;
        // for (let i = 0; i < copyGoals.length; i++) {
        //   if (copyGoals[i].id === targetId) {
        //     index = i;
        //     break;
        //   }
        // }
        //
        // if (index !== -1) {
        //   copyGoals.splice(index, 1);
        //   setGoals(copyGoals);
        // }
    };

    return (
        <div>
            <section id='goal-form'>
                <CourseInput onAdd={onAddGoal} />
            </section>
            <section id='goals'>
                <CourseList items={goals} onDelete={onDeleteGoal} />
            </section>
        </div>
    );
};

export default App;