import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.jsx';

const ExpenseItem = ({expense}) => {

    // 상태변수를 사용하는 useState 훅
    /*
      useState훅의 리턴값은 배열이며
      첫번째 요소는 관리할 상태값의 초기값
      두번째 요소는 해당 상태값을 변경할 때 사용하는 setter함수
    */
    const {title, date, price} = expense;

    // const [itemTitle, setItemTitle] = useState(title);
    // console.log(`변경 후: ${itemTitle}`);


    // 원화 표기법으로 변환
    const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

    // 이벤트 핸들러
    // const clickHandler = e => {
    //   console.log(`변경 전: ${itemTitle}`);
    //   // title = "짜장면";
    //   setItemTitle("짜장면");
    // };

    return (
        <div className="expense-item">

            <ExpenseDate expenseDate={date} />

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{formatPrice}원</div>
            </div>

            {/*<button id='btn1' onClick={clickHandler}>버튼1</button>*/}
        </div>
    );
};

export default ExpenseItem;
