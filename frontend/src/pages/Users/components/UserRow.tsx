import {
  Avatar, Stack as MuiStack,
  Typography,
  styled
} from "@mui/material";
import { stringAvatar } from "utilities/Avatar";
import React from "react";
import { User } from "models";

interface UserRowProps {
  user: User | null;
  onClick: () => void;
}
const Stack = styled(MuiStack)({
  cursor: "pointer",
  ":hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
});

Stack.defaultProps = {
  direction: "row",
  alignItems: "center",
};

export const UserRow: React.FC<UserRowProps> = ({ user, onClick }) => {
  const fullName = `${user?.firstName} ${user?.lastName}`;

  return (
    <Stack spacing={1} onClick={onClick}>
      {user && <Avatar {...stringAvatar(fullName)} />}
      <MuiStack spacing={0}>
        <Typography variant="h6">{fullName}</Typography>
        <Typography variant="caption">{user?.email}</Typography>
      </MuiStack>
    </Stack>
  );
};
