import React, {useState} from 'react'
import {Row, Col, Button, FormControl} from 'react-bootstrap'
import s from './TodoList.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave, faTrash, faEdit, faLock, faLockOpen} from "@fortawesome/free-solid-svg-icons";

function TodoList({todo, setTodo}) {
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        console.log(newTodo)
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)

    }


    return (
        <div>
            {
                todo.map(item => (
                    <div key={item.id} className={s.listItems}>
                        {
                            edit === item.id ?
                            <div>
                                <input onChange={(e) => setValue(e.target.value)} value={value} />
                            </div> :
                            <div>{item.title} </div>
                        }
                        {
                            edit === item.id ?
                            <div>
                                    <Button onClick={() => saveTodo(item.id)}>< FontAwesomeIcon icon={ faSave } /></Button>
                            </div> :
                            <div>
                                    <Button onClick={() => deleteTodo(item.id)}>
                                        < FontAwesomeIcon icon={ faTrash } />
                                    </Button>
                                    <Button onClick={() => editTodo(item.id, item.title) } className={s.btn}>
                                        < FontAwesomeIcon icon={ faEdit } />
                                    </Button>
                                    <Button onClick={() => statusTodo(item.id) } className={s.btn}>
                                    {
                                        item.status ? < FontAwesomeIcon icon={ faLockOpen } /> : < FontAwesomeIcon icon={ faLock } />
                                    }
                                    </Button>
                            </div>
                        }

                    </div>
                ))
            }
        </div>
    )
}
export default TodoList