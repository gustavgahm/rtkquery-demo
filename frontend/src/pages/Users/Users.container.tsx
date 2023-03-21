import React, { useEffect, useReducer, useState } from "react";
import Loading from "./Users.loading";
import Component from "./Users.component";
import { useUsersQuery } from "api/Users.api";

const Container: React.FC = () => {
  const { data, isFetching } = useUsersQuery();

  const handleUserClick = (id: number) => {
    console.log(id)
  }

  if (isFetching) {
    return <Loading />;
  }

  const props = {
    users: data ?? [],
    onUserClick: handleUserClick,
  };

  return <Component {...props} />;
};

export default Container;
