import React from 'react';
class Time extends React.Component{
  state={
      time : new Date().toLocaleString()
  }
   changeHandler = () =>{
      this.setState({time:new Date().toLocaleString()})
  }
   
    render(){
    return(
        <div>
            <button type="Button" onClick={this.changeHandler}>Time</button>
            <div>{this.state.time}</div>
        </div>
    );
  }
}

export default Time;