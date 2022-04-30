import './App.css';
import Card from './components/Card';

import { useEffect, useState } from 'react';
import LargeButton from './components/LargeButton';
import TaskList from './components/TaskList';
import DoneTaskList from './components/DoneTaskList';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Task 1',
      description: 'This is task 1',
      isDone: false
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'This is task 2',
      isDone: false
    },
    {
      id: 3,
      name: 'Task 3',
      description: 'This is task 3',
      isDone: false
    },
    {
      id: 4,
      name: 'Task 4',
      description: 'This is task 4',
      isDone: false
    },
    {
      id: 5,
      name: 'Task 5',
      description: 'This is task 5',
      isDone: false
    }
  ]) 

  const [itemsDone, setItemsDone] = useState([])

  const [buttonDisable, setButtonDisable] = useState(true)

  useEffect(() => {
    checkTrueItems()
  }, [])

  const checkTrueItems = () => {
    let check = items.filter(data => data.isDone)

    setButtonDisable(check.length > 0 ? false : true)
  }

  const onItemClick = (data) => {
    var cbx = document.getElementById(`cbx-task-list-${data.id}`)

    if (cbx.checked) {
      cbx.checked = false
    } else {
      cbx.checked = true
    }

    let index = items.findIndex((i) => i.id === data.id)
    const newItems = [...items]
    newItems[index]['isDone'] = cbx.checked
    setItems(newItems)
    checkTrueItems()
  }

  const moveTask = () => {
    let doneArray = items.filter(data => data.isDone)
    setItemsDone(doneArray)
    removeTasks(doneArray)
  }

  const removeTasks = (arr) => {
    let newArr = items

    for (let x = 0; x < arr.length; x++) {
      newArr.splice(arr[x], 1)
    }
  }

  console.log(buttonDisable)

  return (
    <div className="App">
      <div className="main-container" align="center">
        <div className="mb-5">
          <Card 
            header="Ongoing Task Lists"
            footer={
              <LargeButton name="Move to Done" type='success' onClick={() => moveTask()} disabled={items.length == 0 || buttonDisable}/>
            }
          >
            <div>
              <TaskList
                items={items}
                onItemClick={onItemClick}
              />
            </div>
          </Card>
        </div>

        <div>
          <Card 
            header="Done Lists"
          >
            <div>
              <DoneTaskList
                items={itemsDone}
                onItemClick={onItemClick}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
