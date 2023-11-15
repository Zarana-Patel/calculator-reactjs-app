import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const Calbutton =(props)=>{  
  let variant = "info";
  switch (props.value) {
    case '=': { 
      variant = "success"
      break;
    }
    case 'Clear': {
      variant = "warning"
      break;
    }
    default: {
        variant = "info"
      break;
    }
  }
  return(
    <div>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2" aria-label="First group">
          <Button variant={variant} onClick={props.handleClick} value={props.value}>{props.value}</Button> 
        </ButtonGroup>
      </ButtonToolbar>  
    </div>
  )
}
export default Calbutton;