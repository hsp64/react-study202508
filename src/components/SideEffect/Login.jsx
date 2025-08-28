import React, {useEffect, useState} from 'react';

import Card from '../ui/Card';
import styles from './Login.module.css';
import Button from '../ui/Button';

const Login = ({ onLogin }) => {
    // 사용자가 입력한 이메일을 상태관리
    const [enteredEmail, setEnteredEmail] = useState('');

    // 사용자가 입력한 패스워드 상태관리
    const [enteredPassword, setEnteredPassword] = useState('');

    // 이메일을 잘 썻는지 여부
    const [emailIsValid, setEmailIsValid] = useState(null);

    // 패스워드를 잘 썻는지 여부
    const [passwordIsValid, setPasswordIsValid] = useState(null);

    // 로그인 버튼을 열어줄지에 대한 여부
    const [formIsValid, setFormIsValid] = useState(false);

    // 로그인 버튼 활성화 여부 검증을 위한 useEffect
    useEffect(() => {
        const timerId = setTimeout(() => {
            console.log('useEffect call in Login.js');
            setFormIsValid(
                enteredEmail.includes('@') && enteredPassword.trim().length > 6
            );
        }, 1000);

        // cleanup 함수 - useEffect가 실행 되고 다음 번 useEffect 실행 직전에
        // 실행되는 정리함수
        return () => {
            // console.log('cleanup 실행!');
            clearTimeout(timerId);
        };

    }, [enteredEmail, enteredPassword]);


    /*
      useEffect의 두번째 파라미터 배열은 의존성 배열이라고 부르며
      1. 생략할 경우 useEffect는 렌더링시마다 반복 실행됨 (쓰레기)
      2. 빈 배열일 경우 최초 한번만 실행됨 (토큰검사 최초1번, 서버데이터 페칭 최초1번)
      3. 배열안에 변수를 넣을 경우, 해당변수값이 변경될 때마다 재실행
     */

    // 이메일 값 저장 및 검증
    const handleEmail = (e) => {
        setEnteredEmail(e.target.value);

        // setFormIsValid(
        //   e.target.value.includes('@') && enteredPassword.trim().length > 6
        // );
    };

    // 패스워드 값 저장 및 검증
    const handlePassword = (e) => {
        setEnteredPassword(e.target.value);

        // setFormIsValid(
        //   enteredEmail.includes('@') && e.target.value.trim().length > 6
        // );
    };

    // 이메일 검증
    const validateEmail = (e) => {
        setEmailIsValid(enteredEmail.includes('@'));
    };

    // 패스워드 검증
    const validatePassword = (e) => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    // 로그인 수행 함수
    const handleSubmit = e => {
        e.preventDefault();
        onLogin(enteredEmail, enteredPassword);
    };

    return (
        <Card className={styles.login}>
            <form onSubmit={handleSubmit}>
                <div
                    className={`${styles.control} ${emailIsValid === false ? styles.invalid : ''}`}>
                    <label htmlFor='email'>E-Mail</label>
                    <input
                        type='email'
                        id='email'
                        value={enteredEmail}
                        onInput={handleEmail}
                        onBlur={validateEmail}
                    />
                </div>
                <div
                    className={`${styles.control} ${passwordIsValid === false ? styles.invalid : ''}`}>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        value={enteredPassword}
                        onInput={handlePassword}
                        onBlur={validatePassword}
                    />
                </div>
                <div className={styles.actions}>
                    <Button
                        type='submit'
                        className={styles.btn}
                        disabled={!formIsValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;