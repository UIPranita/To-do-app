
import React from 'react';

export default function Header(props) {
  return (
    <div id="header" className="container">
      <header>
        <h3 className="headertitle">{props.headerTitle}</h3>
        <form><input
        id="todoInput"
          type="text" className="inputarea"
          placeholder="Enter here To Do's......."
          value={props.input}
          onChange={props.onInputChange}
          
        />
      
        <button className="addbutton" onClick={props.onButtonClick}>Add</button>
        </form>
      </header>
    </div>
  );
}
