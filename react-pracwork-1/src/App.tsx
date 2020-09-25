import React from 'react';
import './App.css';
import UserTable from "./UserTable";

function App() {
  return (
      <>
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
