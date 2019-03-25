import React, { Component } from 'react';
import ListItem from './ListItem';
import './App.css';


class App extends Component {
constructor(){
  super()
  this.state = {
    input: "",
    item: {
          id: 0,
          input: "",
          completed: false
        },
    list: []

  }
  this.handleChange = this.handleChange.bind(this)
  this.handleClick = this.handleClick.bind(this)
  this.handleCheck = this.handleCheck.bind(this)
}

handleChange(e) {
  this.setState({
    input: e.target.value
  })
}

handleClick(e) {
  this.setState(prevState => {
    let item = {
      id: prevState.item.id + 1,
      input: prevState.input,
      completed: prevState.item.completed
    }
    return{
      input: "",
      item: {
        id: prevState.item.id + 1,
        input: prevState.input,
        completed: prevState.item.completed
      },
      list: [...prevState.list, item]
      }
    })
}


handleCheck(id) {
     this.setState(prevState => {
         const checklist = prevState.list.map(item => {
           if(item.id === id) {
             item.completed = !item.completed
           }

           return item

         })
       return  {
         list: checklist
       }
     })


}


  render() {
        const updatedList = this.state.list.map(item => <ListItem key={item.id}
          input={item.input} completed={item.completed} handleCheck = {this.handleCheck} id={item.id}/>)

// const myInput = document.querySelector('input')
// console.log(myInput)
// if(myInput){
//   myInput.addEventListener('keyup', (function(event) {
//     if(event.keyCode === 13) {
//       event.preventDefault();
//       document.getElementById('enter').click()
//     }
//
//   }))
// }




    return (
      <div className="App">
      <div className="inputStyle">
      <h2>ToDo List</h2>
      <input type="text"
             id="input"
             name="item"
             value={this.state.input}
             onChange = {this.handleChange}
             />
      <button onClick={this.handleClick} id="enter">Enter</button>
      </div>
      {updatedList}

      </div>
    );
  }
}

export default App;
