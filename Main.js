import { useState } from "react"

const Main= ()=>{

    //radio 버튼의 선택 값을 저장하는 state 변수.
    const [gender, setGender] = useState('male')

    //checkbox 버튼 중 선택된 요소들의 value를 저장하는 state 배열변수
    const [fruits, setFruits] = useState(['apple', 'orange'])

    const changeCheckbox= (event)=>{

        //체크상태 변경 이벤트 발생 요소(event.target)의 value 및 checked 상태값(true/false) 확인하기
        //alert( event.target.value + " : " +  event.target.checked )

        //체크상태가 true 면 fruits 배열에 value 추가 - 단, state 배열변수는 원본배열의 요소만 변경하면 UI변경이 안되기에..새로운 배열로 복제 [스프레드 연산자 이용]
        if( event.target.checked ) {
            const newFruits= [ ...fruits, event.target.value ]
            setFruits(newFruits)
        }else{
            // 체크상태가 false 면 fruits 배열에서 value 제거 - 단, state 배열변수는 원본배열의 요소만 제거하면 UI변경이 안되기에..filter()의 지정함수의 조건값을 해당요소와 같은 값을 갖지 않은 요소만 모아서 새로운 배열로 리턴..
            const newFruits= fruits.filter( value => value != event.target.value )
            setFruits(newFruits)
        }
    }


    //파일 선택 value
    const [image, setImage]= useState('')

    const changeFile= (event)=>{
        alert( event.target.value)
        setImage( event.target.value )

    }


    const submit= (event)=>{
        event.preventDefault()

        alert(gender)
        alert(fruits)
    }

    return ( 
        <>

            <form onSubmit={submit}>

                {/* radio button value 다루기 */}
                <div>
                    GENDER :                     
                    <label>
                        {/* checked 속성값이 true 면 체크상태임. 체크상태에 따라 gender state변수값을 변경(onChange)하기에 이 값이 value값과 같다면 true가 되도록 == 비교연산 결과값을 checked속성으로 지정 */}
                        <input type="radio" name="gender" value={'male'} onChange={()=>setGender('male')} checked={gender=='male'}></input>
                        male
                    </label>
                    <label>
                        <input type="radio" name="gender" value={'female'} onChange={()=>setGender('female')} checked={gender=='female'}></input>
                        female
                    </label>
                </div>

                <hr></hr>

                {/* checkbox button value 다루기 */}
                <div>
                    FRUITS : 
                    <label>
                        {/* checked 속성값이 true 면 체크상태임. 체크상태변경 onChange 콜백으로 체크상태에 따른 fruits배열값 변경. 체크된 요소의 value값을 저장하고 있는 배열에 현재 value가 포함되어 있는지 여부를 true/false 결과로 리턴하는 includes()메소드 활용*/}
                        <input type="checkbox" name="fruits" value={'apple'} onChange={changeCheckbox} checked={ fruits.includes('apple')}></input>
                        APPLE
                    </label>
                    <label>
                        <input type="checkbox" name="fruits" value={'banana'} onChange={changeCheckbox} checked={ fruits.includes('banana')}></input>
                        BANANA
                    </label>
                    <label>
                        <input type="checkbox" name="fruits" value={'orange'} onChange={changeCheckbox} checked={ fruits.includes('orange')}></input>
                        ORANGE
                    </label>
                </div>

                <hr></hr>

                <div>
                    FILES : 
                    <input type="file" name="image" onChange={changeFile}></input>
                    <br></br>
                    <img src={image}></img>

                </div>

                <hr></hr>

                <input type="submit"></input>
            </form>

        </>
    )
}

export default Main