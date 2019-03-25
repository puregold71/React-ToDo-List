import React from 'react'



function ListItem (props) {
  const completed = {
    textDecoration: 'line-through',
    color: '#ccc'
  }
  const incomplete = {
    textDecoration: 'none',
    color: 'purple'
  }

  return (
    <div>
       <input type="checkbox" id="checkbox" checked = {props.completed} onChange={() => props.handleCheck(props.id)}/>
       <span style={props.completed ? completed : incomplete} htmlFor="checkbox"> {props.input} </span>
       <hr />
    </div>
  )
}


export default ListItem
