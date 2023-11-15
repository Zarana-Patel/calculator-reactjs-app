import react,{useState} from 'react';
import Screen from './screen';
import Calbutton from './calbutton';
import Card from 'react-bootstrap/Card';


const Frame =()=>{
   const [input,setInput] = useState('');
   const [result,setResult]=useState('');
   const handleClick=(event)=>{
      const value = event.target.value; 
      switch (value) {
        case '=': { 
          const result = eval(input).toString();
          setResult( result );
          break;
        }
        case 'Clear': {
          setResult('');
          setInput('');
          break;
        }
        default: {
          setInput(input+value);
          break;
        }
      }
    }
  return(
    <div className="cal-frame">
      <h3 className="calculator-title">React Calculator App</h3>
      <div className="frame">
        <div className="display-screen">
          <Screen input ={input} result={result}/>
          </div>
          <div className="button-row">
            <Calbutton value={'1'} handleClick={handleClick} />
            <Calbutton value={'2'} handleClick={handleClick}  />
            <Calbutton value={'3'} handleClick={handleClick}  />
            <Calbutton value={'4'} handleClick={handleClick}  />
            <Calbutton value={'-'} handleClick={handleClick}  />
            <Calbutton value={'+'} handleClick={handleClick}  />
          </div>
          <div className="button-row">
            <Calbutton value={'5'} handleClick={handleClick}  />
            <Calbutton value={'6'} handleClick={handleClick}  />
            <Calbutton value={'7'} handleClick={handleClick}  />
            <Calbutton value={'8'} handleClick={handleClick}  />
            <Calbutton value={'*'} handleClick={handleClick}  />
            <Calbutton value={'/'} handleClick={handleClick}  />
        </div>
        <div className="button-row">
            <Calbutton value={'9'} handleClick={handleClick}  />
            <Calbutton value={'.'} handleClick={handleClick} />
            <Calbutton value={'0'} handleClick={handleClick}  />
            <Calbutton value={'Clear'} handleClick={handleClick} />
            <Calbutton value={'='} handleClick={handleClick}  />
        </div>
      </div>
    </div>
  )
}
export default Frame;