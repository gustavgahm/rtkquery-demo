import { CssBaseline, Stack } from "@mui/material";
import Users from "pages/Users";
import User from "pages/User";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div
        style={{
          height: "100vh",
          display: "flex",
        }}
      >
        <CssBaseline />
        <Stack
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            margin: "10rem",
            border: "1px solid #ccc",
          }}
        >
          <Users />
          <User />
        </Stack>
      </div>
    </Provider>
  );
}

export default App;
