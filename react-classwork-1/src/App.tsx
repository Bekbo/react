import React from 'react';
import './App.css';
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";
import UserTable from "./UserTable";

function App() {
  return (
      <>
        Counter
        <Counter initialCount = {0}></Counter>
        CounterHooks
        <CounterHooks initialCount = {4}></CounterHooks>
        UserTable
        <UserTable users={
            [
            {name : "Bekbolatabylay", email : "bekbolat@mail.ru", age : 20, date : (new Date().getMonth()+1)+"/"+ new Date().getDate()}
            ]
        }/>
      </>
  );
}

export default App;
