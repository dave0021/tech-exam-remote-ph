const TaskList = (props) => {
  const onItemClick = (i) => {
    props.onItemClick(i)
  }

  return (
    <div>
      {props.items && props.items.map((i, key) => (
        <ul className="list-group" key={key}>
          <li 
            className="custom-list list-group-item d-flex justify-content-between align-items-start"
            onClick={() => onItemClick(i)}
          >
            <div>
              <input type="checkbox" id={`cbx-task-list-${i.id}`} name={`cbx-task-list-${i.id}`} value={`cbx-task-list-${i.id}`}/>
            </div>

            <div className="ms-2 me-auto">
              <div className="fw-bold">
                { i.name }
              </div>

              { i.description }
            </div>

            <span className="badge bg-primary rounded-pill">
              { !i.isDone ? 'On Going' : 'Done' }
            </span>
          </li>
        </ul>
      ))
      }
    </div>
  )
}

export default TaskList