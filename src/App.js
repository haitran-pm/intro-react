import React, { useState } from "react";
import "./App.css";

// function App() {
//   const [like, setLike] = useState(1);
//   const [blog, setBlog] = useState({
//     content: "React is awesome",
//     count: 0,
//   });
//   // Tính toán một function để đưa ra initial state

//   const handleClick = (name) => {
//     setLike(1 - like);
//     setBlog({ ...blog, count: blog.count + 1 });
//     console.log(like);
//   };

//   return (
//     <div>
//       <p>{blog.content}</p>
//       <h1 onClick={() => handleClick("Hai")}>
//         {like === 1 ? "👍" : "👎"} {blog.count}
//       </h1>
//     </div>
//   );
// }

function App() {
  const [count, setCount] = useState(0);

  let color = count > 0 ? "green" : count < 0 ? "red" : "black";

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <div>
      <div className="container">
        <h1>Counter</h1>
        <span style={{ color }} id="value">
          {count}
        </span>
        <div className="btn-group">
          <button onClick={decrement} className="btn btn-descrease">
            DECREASE
          </button>
          <button onClick={resetCount} className="btn btn-reset">
            RESET
          </button>
          <button onClick={increment} className="btn btn-increase">
            INCREASE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
