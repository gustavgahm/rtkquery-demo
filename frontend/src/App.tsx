import { CssBaseline, Stack } from '@mui/material';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { rootApi } from 'api/RootApi';
import Posts from 'components/Posts';
import User from 'components/User';
import Users from 'components/Users';
import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        {/* <Provider store={store}> */}
        <ApiProvider api={rootApi}>
          <Routes>
            <Route path='/' element={<Navigate to='/users' />} />
            <Route path='/users' element={<Layout />}>
              <Route index element={<UsersPage />} />
              <Route path=':id' element={<UserPage />} />
            </Route>
            <Route path='/posts' element={<Layout />}>
              <Route index element={<PostsPage />} />
            </Route>
          </Routes>
        </ApiProvider>
        {/* </Provider> */}
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;

const Layout = () => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
    }}
  >
    <CssBaseline />
    <Stack
      direction='row'
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5rem',
        border: '1px solid #ccc',
      }}
    >
      <Outlet />
    </Stack>
  </div>
);

const PostsPage = () => (
  <>
    <Posts />
  </>
);

const UsersPage = () => (
  <>
    <Users />
  </>
);

const UserPage = () => (
  <>
    <Users />
    <User />
  </>
);
