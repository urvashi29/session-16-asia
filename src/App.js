import React from "react";
import Counter from "./Counter";
import CounterDec from "./CounterDec";
// import MovieData from "./MovieData";
// import MovieCount from "./MovieCount";
import ApiData from "./ApiData";
import CounterFunction from "./CounterFunction";

const App = () => {

  return (
    <React.Fragment>
      <Counter />
      <CounterDec />
      <ApiData />

      {/* <MovieCount />
      <MovieData /> */}

      <h2>Function Based Component</h2>
      <CounterFunction />
    </React.Fragment>

  );
}

export default App;


// react context api

// task
// Create a array of object (employee data) in store. 
// Display its data in a componnet. Update any array element property on click of a button


// installation
// index.js
// store.js
// reducer.js
// components: get the data from store | send the data to store(action.js, actionType.js)