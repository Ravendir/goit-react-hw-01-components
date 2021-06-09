import React from "react";
import Friends from "../Friend";

const FriendsList = ({ friends }) => (
  <ul>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <Friends key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);

export default FriendsList;
