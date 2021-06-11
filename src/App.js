import React from "react";
import Profile from "./components/profile/Profile";
import StaticalList from "./components/statistics/statisticsList/StatisticsList";
import FriendList from "./components/friends/friendList/FriendList";
import TransactionList from "./components/transactionHistory/TransactionHistoryList/TransactionHistoryList";
import user from "./user.json";
import statics from "./statistics.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

const App = () => {
  return (
    <div>
      <Profile
        url={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <StaticalList stats={statics} title="UPLOAD STATS" />
      <FriendList friends={friends} />
      <TransactionList items={transactions} />
    </div>
  );
};

export default App;
