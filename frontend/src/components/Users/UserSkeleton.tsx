import { Skeleton } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

export const UserSkeleton = () => (
  <Stack direction='row' spacing={1}>
    <Skeleton variant='circular' width='10%' height={110} />
    <Stack spacing={1}>
      <Skeleton variant='rectangular' width='90%' height={110 / 2} />
      <Skeleton variant='rectangular' width='90%' height={110 / 2} />
    </Stack>
  </Stack>
);
