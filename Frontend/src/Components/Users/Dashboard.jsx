import React from "react";

import TransactionList from "../Transaction/TransactionList";
import TransactionChart from "../Transaction/TransactionChart";

const Dashboard = () => {
  return (
    <>
      <TransactionChart />
      <TransactionList />
    </>
  );
};

export default Dashboard;
