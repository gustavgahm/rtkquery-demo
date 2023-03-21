import { Divider, Skeleton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const UserSkeleton = () => (
  <Stack direction="row" spacing={1}>
    <Skeleton variant="circular" width={110} height={110} />
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={400} height={110 / 2} />
      <Skeleton variant="rectangular" width={400} height={110 / 2} />
    </Stack>
  </Stack>
);

const Component: React.FC = () => {
  return (
    <Stack spacing={1}>
      <UserSkeleton />
      <UserSkeleton />
      <UserSkeleton />
      <UserSkeleton />
      <UserSkeleton />
    </Stack>
  );
};

export default Component;
