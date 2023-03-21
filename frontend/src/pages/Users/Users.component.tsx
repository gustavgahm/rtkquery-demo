import { Stack as MuiStack, styled } from "@mui/material";
import React from "react";
import { User } from "models";
import { UserRow } from "./components/UserRow";

interface Data {
  users: User[];
}

interface Callbacks {
  onUserClick: (id: number) => void;
}

type Props = Data & Callbacks;

const Stack = styled(MuiStack)({
  height: "100%",
  minWidth: "25rem",
  overflow: "auto",
  padding: "1rem",
});

const Component: React.FC<Props> = ({ users, onUserClick }) => {
  return (
    <Stack spacing={2}>
      {users.map((user) => (
        <UserRow
          key={user.id}
          user={user}
          onClick={() => onUserClick(user.id)}
        />
      ))}
    </Stack>
  );
};

export default Component;
