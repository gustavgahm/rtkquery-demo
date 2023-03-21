import React, { useEffect, useReducer, useState } from "react";
import Loading from "./User.loading";
import Component from "./User.component";
import { useUserQuery } from "api/Users.api";

const Container: React.FC = () => {
  const { data, isFetching } = useUserQuery(1);

  if (isFetching) {
    return <Loading />;
  }

  const props = {
    user: data ?? null,
  };

  return <Component {...props} />;
};

export default Container;
