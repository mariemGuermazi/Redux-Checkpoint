import React from 'react'
import {useSelector} from 'react-redux'
import Task from '../Task/Task'

const ListTask = () => {
    const list = useSelector(state => state.listReducer.tasksList)
    return (
        <div>
            {list.map( el => (<Task task={el} key={el.id}/>))}
        </div>
    )
}

export default ListTask
