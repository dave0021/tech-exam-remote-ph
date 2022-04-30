const TaskList = (props) => {
  return (
    <div>
      {props.items && props.items.map((i, key) => (
        <ul className="list-group" key={key}>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold" style={{ textDecoration: 'line-through' }}>
                { i.name }
              </div>

              <span style={{ textDecoration: 'line-through' }}>
                { i.description }
              </span>
            </div>

            <span className="badge bg-success rounded-pill">
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