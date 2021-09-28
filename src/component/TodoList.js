import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

const TodoList = () => {
    const  [list, setList] = useState ([
        {title:'Cleanliness', content:'Clean the house', status:false},
        {title:'Lunch', content:'Make lunch for four', status:true},
        {title:'Visit', content:'Visit mom', status:false}
    ]);
    const pending = (e) => {
        let changes = [...list];
        changes[e.target.value].status = false;
        setList(changes);
    }
    const finished = (e) => {
        let changes = [...list];
        changes[e.target.value].status = true;
        setList(changes);
    }
    const deelete = (e) => {
        let dlt = [...list];
        dlt.splice(e.target.value, 1)
        setList(dlt);
    }
    const [todoList, setTodoList] = useState ({
        title:'',
        content:''
    })
    const onHandlerChange = (e) => {
        setTodoList ({...todoList, [e.target.name]: e.target.value})
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        let title = todoList.title;
        let content = todoList.content;
        let status = false;
        let newList = { title, content, status };
        setList([list, newList]);
    }
    return(
        <div className="container">
        <Form onSubmit={onSubmitHandler}>
        <label>Tarea:</label>
                <input type="text" name="title" onChange={onHandlerChange}/>
                <br/>
                <label>Description:</label>
                <input type="text" name="content" onChange={onHandlerChange}/>
                <br/>
                <input type="submit" />
  </Form>
  {list.map((item, i) =>
    <div>
        {item.status===true? <p style={{textDecoration:"line-through"}}>{item.title}</p>: <p>{item.title}</p>}
        {item.status===true? <p style={{textDecoration:"line-through"}}>{item.content}</p>: <p>{item.content}</p>}
        {item.status? <button onClick={pending} value={i}>Not Done</button>: <button onClick={finished} value={i}>Done</button>}
                    <button  className="diferent" onClick={deelete} value={i}>Delete</button> 
    
    </div>
  
  )}
  
        </div>
    )

};
export default TodoList;