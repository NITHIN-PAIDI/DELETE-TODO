import './index.css'

const TodoItem = props => {
  const {todo, DeleteTodo} = props
  const {id, title} = todo
  const onDeleteTodo = () => {
    DeleteTodo(id)
  }

  return (
    <li className="list-container">
      <p className="descrption">{title}</p>
      <button className="button" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
