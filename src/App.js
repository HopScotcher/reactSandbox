import "./styles.css";
import React, { useState, useRef } from "react";
import axios from "axios";
import styles from "./App.module.css";

export default function App() {
  const URL = "https://dog.ceo/api/breeds/image/random";
  const intervalRef = useRef(null); // useRef for interval reference

  const [data, setData] = useState(null);

  function fetchData() {
    axios
      .get(URL)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  const startInterval = () => {
    intervalRef.current = setInterval(fetchData, 3000);
    console.log("starting...");
  };

  const clearIntervalId = () => {
    clearInterval(intervalRef.current);
    console.log("clearing...");
  };

  let imgUrl;

  if (data) {
    imgUrl = data.message;
  }

  const btnStyle = data ? styles["receiving--data"] : styles["no--data"];

  return (
    <>
      <button onClick={startInterval} className={btnStyle}>
        Start
      </button>

      <button onClick={clearIntervalId}>Stop</button>
      <div>{data && <img src={imgUrl} alt="dog pic" />}</div>
    </>
  );
}

// import "./styles.css";
// import React, { useState } from "react";
// import axios from "axios";
// import styles from "./App.module.css";

// export default function App() {
//   const URL = "https://dog.ceo/api/breeds/image/random";

//   const [data, setData] = useState(null);

//   function fetchData() {
//     axios
//       .get(URL)
//       .then((response) => {
//         setData(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }

//   let interval;

//   const startInterval = () => {
//     interval = setInterval(fetchData, 3000);
//     console.log("starting...");
//   };

//   const clearIntervalId = () => {
//     clearInterval(interval);
//     console.log("clearing...");
//   };

//   let imgUrl;

//   if (data) {
//     imgUrl = data.message;
//     // console.log(imgUrl);
//   }

//   // const display = data ? "stop" : "start";
//   const btnStyle = data ? styles["receiving--data"] : styles["no--data"];

//   return (
//     <>

//       <button onClick={startInterval} className={btnStyle}>
//         Start
//       </button>

//       <button onClick={clearIntervalId}>Stop</button>
//       <div>
//         {data && <img src={imgUrl} alt="dog pic" />}
//       </div>
//     </>
//   );
// }

// useEffect(() => {
//   const intervalId = setInterval(() => {
//     axios
//       .get(URL)
//       .then((response) => {
//         setData(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, 30000);
// }, []);

{
  /* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */
}
{
  /* <button>Get Quote</button>
        <p>Your quote appears here</p> */
}
