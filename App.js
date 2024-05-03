import {Fragment, useState} from 'react'

const App = ()=>{

  const [ data, setData] = useState({
    title: '',
    msg:'',
  })

  const [ responseText, setResponseText ] = useState('')

  const changeText= (event)=>{

    //alert( event.target.name +":"+ event.target.value )
    //setData({ [event.target.name] : event.target.value }) // useState()를 통해 만든 useData()메소드는 설정한 값만을 저장함. 즉, 객체의 해당 프로퍼티를 제외한 나머지는 없어짐.
    setData({ ...data, [event.target.name] : event.target.value })

  }

  const aaa=(event)=>{
    event.preventDefault()  
    
    //alert( JSON.stringify(data) )
    //fetch('../web/aaa.php?title='+data.title+"&msg="+data.msg).then(res=>res.text()).then(text=>alert(text))
    fetch('../web/aaa.php?title='+data.title+"&msg="+data.msg).then(res=>res.text()).then(text=>setResponseText(text))

  }

  const clickBtn= ()=>{

    var url= 'https://swapi.dev/api/'; // OK
    var url= 'https://www.naver.com'; // error - CORS 
    var url= 'http://mrhi2024.dothome.co.kr/index.css'; // error - CORS >>> [ REACT WEBAPP을 Build하면 배포하는 서버에 보통 백엔드가 같이 있음. 그렇기에 보통은 CORS 문제 없음]
    var url= '../index.css'; //상대주소로 접근해보기

    // Dothome 서버 폴더 구조
    // react폴더
    //   > ex12
    //       > frontend : 리액트 프로젝트의 build폴더 파일들...
    //       > backend : php파알들 위치 

    
    const xhr= new XMLHttpRequest()
    xhr.onreadystatechange= ()=>{
      if( xhr.readyState == 4) console.log(xhr.responseText)
    }

    xhr.open('GET', url)
    xhr.send()


    fetch(url).then(response=>response.text()).then(text=>alert(text)).catch(error=> alert('에러 : ' + error)) 
  }


  const [data2, setData2] = useState({
    name:'',
    pw:'',
    rg:'male',
    msg:'',
    brand:'현대',
    fruits:['apple','orange'],
  })

  const changeText2= (event)=>{
    alert( event.target.name +":"+ event.target.value )
    
    
  }

  const bbb= (event)=>{
    event.preventDefault()

  }


  return (
    <Fragment>

      <h2>Network 작업</h2>
      <button onClick={clickBtn}>서버 데이터 읽어오기</button>

      <hr></hr>

      <h2>Form Test</h2>

      <form onSubmit={aaa}>
        <input type='text' name='title' onChange={changeText}></input>
        <input type='text' name= 'msg' onChange={changeText}></input>        

        <input type='submit' value='전송'></input>
      </form>

      <div style={{border:'1px solid black', padding:'8px', margin:'8px'}}>
        {responseText}
      </div>

      <hr></hr>

      <form onSubmit={bbb}>
        <input name='name' onChange={changeText2} placeholder='name'></input>
        <input name='pw' onChange={changeText2} placeholder='password'></input>
        <p>
          <input type='radio' name='rg' value='male' checked></input>남성
          <input type='radio' name='rg' value='female'></input>여성
        </p>

        <p>
          <input type='checkbox' name='fruits' value='apple'></input>사과
          <input type='checkbox' name='fruits' value='banana'></input>바나나
          <input type='checkbox' name='fruits' value='orange'></input>오렌지
        </p>

        <textarea name='msg' onChange={changeText2}></textarea>

        <p>
          <select name='brand' onChange={changeText2}>
            <option value='현대'>현대</option>
            <option value='기아'>기아</option>
            <option value='KGM'>KGM</option>
          </select>
        </p>

        <input type='submit'></input>

      </form>

    </Fragment>
  )
}

export default App