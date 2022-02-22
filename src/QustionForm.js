import React,{useState} from 'react';
import dummy from './db/question.json'
// import Question from './QuestionList';

export default function QuestionForm (){


const [aVal,setAval]=useState([]);
const what =(e)=>{
        // setAval({
        //     aVal: e.target.value,
        //     aName :e.target.name
        // })  
        const checkName = e.target.name;
        const cc = aVal.find( a=>
            a.name == checkName 
        )

    // cc 체크해서 있으면 값만 오버라이드 없으면 추가 

    setAval([
        ...aVal,
        {
            value: e.target.value,
            name :e.target.name
        }
        
    ])
}
console.log(aVal);
const [count,setcount]=useState(0);
const submit = () =>{
    let sum = 0;
    for (const element of aVal){
        sum += parseInt(element.value);
    };
    setcount(sum);
    console.log(sum)

}
return(
<>
    {/* <form > */}
        {dummy.question.map(q =>(
                <div id={q.id}>
                <label>Q. {q.qa}</label>
                <div>
                    <input type="radio" name={q.key} value={1} onClick={what}/>
                    <input type="radio" name={q.key} value={2} onClick={what}/>
                    <input type="radio" name={q.key} value={3} onClick={what}/>
                    <input type="radio" name={q.key} value={4} onClick={what}/>
                    <input type="radio" name={q.key} value={5} onClick={what}/>
                </div>
            </div>
            // <Question id={q.id} q={q.qa} name={q.key} key={q.id} setAval={setAval} />
            ))}
            <span> 총점{count} </span>
        <button onClick={submit}>답변제출하기</button>
    {/* </form> */}
</>
);

};