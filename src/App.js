import "./App.css";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function App() {
  const [data, setData] = useState([]);
  const [newList, setnewList] = useState("");

  const fillData = () => {
    setData([...data, newList]);
    setnewList("");
  };
  const deleteData = (index) => {
    const upData = data.filter((_, i) => i !== index);
    setData(upData);
  };
  console.log(data, "Data");

  return (
    <div className="App">
      <div className="todo-list">
        <div className="todo-container">
          <div className="lists">
            <input
              type="text"
              value={newList}
              onChange={(e) => setnewList(e.target.value)}
            />
            <button onClick={fillData} className="add-button">
              Add
            </button>
          </div>

          {data.map((task, index) => {
            return (
              <div className="list-container">
                <li key={index}>
                  <input type="text" value={task} className="todo-field" />
                  <button
                    onClick={() => deleteData(index)}
                    className="delete-button"
                  >
                    <RxCross2 style={{ color: "white" }} />
                  </button>
                </li>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
