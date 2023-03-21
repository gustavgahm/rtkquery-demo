import { Stack as MuiStack, styled } from "@mui/material";
import React from "react";
import { User } from "models";

interface Data {
  user: User | null;
}

interface Callbacks {}

type Props = Data & Callbacks;

const Stack = styled(MuiStack)({
  height: "100%",
  minWidth: "25rem",
  overflow: "auto",
});

const Component: React.FC<Props> = ({ user }) => {
  return <Stack spacing={2}>{JSON.stringify(user)}</Stack>;
};

export default Component;
