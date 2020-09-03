import React from 'react';
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpense";
import TransactionList from "./Components/TransactionList";
import AddTransaction from "./Components/AddTransaction";
import { GlobalProvider } from "./Components/context/GlobalState";
import './App.css';
import firebase from "./firebase"


function App() {
    const messinging= firebase.messaging();
    messinging.requestPermission().then(()=>{
      return messinging.getToken()
    }).then((token)=>{
      console.log("Tocken",token)
    }
    
    )

    return (
        <GlobalProvider>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    );
}

export default App;
