import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { ListArea } from "./components/ListArea";
import { useState } from "react";


const hrPerWeek = 7 * 24;

function App() {
  const [taskList, setTaskList] = useState([]);
  const [itemToDelete, setItemToDelete] = useState([]);

 const totalHrs = taskList.reduce((subTtl , item)=> subTtl + +item.hr,0);


  const addTask = (data) => {
    if (hrPerWeek < totalHrs + + data.hr){
      return alert("Sorry La");
    }
    console.log(data);
    setTaskList([...taskList, data]);
  };

  const switchTask = (_id , type) => {
    console.log(_id);
    const temArg = taskList.map((item) => {
      if (item._id === _id) {
        item.type = type;
      }
      return item;
    });
    setTaskList(temArg);
  };

  const handleOnSelect = (e) => {
    const { value, checked } = e.target;
    console.log(value, checked)

    checked
      ? setItemToDelete([...itemToDelete, value])
      : setItemToDelete(itemToDelete.filter((item) => item !== value))
  };


const handleOnDelete = () => {
  if (!window.confirm("Are you sure you want to delete")){
    return;
  }
  setTaskList = taskList.filter((item) => !itemToDelete.includes(item._id));
  setItemToDelete ([]);
}
console.log(itemToDelete)

  return (
    <div className="wrapper">
      <div className="container">
        {/* <!-- top title --> */}
        <Title />

        <Form addTask={addTask} />
        {/* <!-- form area --> */}

        <ListArea
        itemToDelete ={itemToDelete}
          taskList={taskList}
          switchTask={switchTask}
          handleOnSelect={handleOnSelect}
        />
        {/* <!-- list area --> */}

        {/* <!-- total hr area --> */}
        <div className="row fw-bold">
          <div className="col">
            The total hours allocated = {taskList.reduce((subTtl , item)=> subTtl + +item.hr,0)} Hrs
          </div>
          
        </div>
        {itemToDelete.length > 0 && (
        <div className="d-grid">
          <button 
          onClick={handleOnDelete}
          className="btn btn-danger">
            Delete Selected ({itemToDelete.length}) Task (s)
          </button>
        </div>
        )}
      </div>
    </div>
  );
}

export default App;
