import React from "react";
import Profile from "./components/profileList/profileListItem/ProfileListItem";
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
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StaticalList stats={statics} />
      <FriendList friends={friends} />
      <TransactionList items={transactions} />
    </div>
  );
};

export default App;
