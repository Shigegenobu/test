import { useState,useEffect } from "react"
// import Button from "./components/Button";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {

  const [todos,setTodos] =useState([]);
  const [todoTitle,setTodoTitle] = useState("");
  const [todoId,setTodoId] = useState(0);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter,setFilter] = useState('notStarted');

  //  /** 編集制御 */
  const [isEditable,setIsEditable] = useState(false);
  const [editId,setEditId] =useState()
  const [newTitle,setNewTitle] =useState("")

  //  /** 作成フォームの状態制御 */
  const handleAddFormChanges = e => {
    setTodoTitle(e.target.value)
  }

  const handleEditFormChanges = e => {
    setNewTitle(e.target.value)
  }

  const resetFormInput = () => {
    setTodoTitle("")
  }

  /** 編集フォーム表示 */
  // 編集ボタンを押された時に引数にtodoを渡しているので、分割代入でidを受け取っている
  const handleOpenEditForm = ({id,title}) => {
    setIsEditable(true)
    setEditId(id) //（実行されるたびに対象のtodoのidを受け取ってセットされる）
    setNewTitle(title)
    console.log(handleOpenEditForm)
  }

  /** 編集フォーム閉じる */
  const handleCloseEditForm =() => {
    setIsEditable(false)
    setEditId()
  }

  const handleAddTodo =() => {
    setTodos([...todos,{id: todoId,title:todoTitle,status:'notStarted'},])
    setTodoId(todoId + 1)
    resetFormInput()
  }

  const handleDeleteTodo = targetTodo => {
    setTodos(todos.filter(todo => todo !== targetTodo))
  }

  /** Todo編集 */
	const handleEditTodo = () => {
    const newTodos = todos.map((todo) => ({ ...todo }));
      setTodos(() => newTodos.map((todo) =>
        todo.id === editId ? {...todo, title: newTitle} : todo
      ));
      setNewTitle("")
      handleCloseEditForm()
      setEditId()
    }

    const handleStatusChange = ({id}, e) => {
      console.log(e)
      const newTodos = todos.map(todo => ({ ...todo }));
      setTodos(newTodos.map(todo =>
          todo.id === id ? { ...todo, status: e.target.value } : todo
        ));
        console.log(newTodos)

    };

    useEffect(() => {
    console.log("依存関係の確認")
      const filteringTodos = () => {
        switch(filter) {
          case 'notStarted': setFilteredTodos(todos.filter((todo) => todo.status === 'notStarted'));
          break;
          case 'inProgress': setFilteredTodos(todos.filter((todo) => todo.status === 'inProgress'));
          break;
          case 'done': setFilteredTodos(todos.filter((todo) => todo.status === 'done'));
          break;
          default:setFilteredTodos(todos);
        }
      };
      filteringTodos()
    },[filter,todos])

  return (
    <>
      {!isEditable ? (
        /* 新規作成フォーム */
        <Form
          type="text"
          label="タイトル"
          title={todoTitle}
          handleChange={handleAddFormChanges}
          handleClick={handleAddTodo}
        />
      ) : (
        /* 編集フォーム */
        <Form
          type="text"
          label="タイトル"
          title={newTitle}
          handleChange={handleEditFormChanges}
          handleClick={handleEditTodo}
          handleClick2={handleCloseEditForm}
        />
      )}

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value='all'>すべて</option>
        <option value='notStarted'>未着手</option>
        <option value='inProgress'>作業中</option>
        <option value='done'>完了</option>
      </select>

      {/* Todoリスト */}

      {/* <Todo /> */}
      <ul style={{backgroundColor:'green'}}>
      <>todoエリア</>
        {filteredTodos.map(todo => (
          <List
            key={todo.id}
            todo={todo}
            handleChange={handleStatusChange}
            handleOpenClick={handleOpenEditForm}
            handleDeleteClick={handleDeleteTodo}
          />
        ))}
      </ul>
    </>
  )
}

export default App


