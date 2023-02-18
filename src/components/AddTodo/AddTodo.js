import React, {useState} from 'react'
import * as uuid from 'uuid'
import {Row, Col, Button, FormControl} from 'react-bootstrap'
import s from './AddTodo.module.css'


function AddTodo({todo, setTodo}) {
    const [value, setValue] = useState('')

    function saveTodo() {
        //11-22 Проверка на пустую строку
        if (value.trim() !== '') {
            setTodo(
                [...todo, {
                    id: uuid.v4(),
                    title: value,
                    status: true
                }]
            )
            setValue('')
        } else {
            setValue('')
        }
    }

    return (
        <Row>
            <Col className={s.addTodoForm}>
                <FormControl placeholder='Введите задачу' value={value} onChange={(e) => setValue(e.target.value)}/>
                <Button variant="outline-primary" onClick={saveTodo} className={s.btn}>Сохранить</Button>
            </Col>

        </Row>
    )
}

export default AddTodo