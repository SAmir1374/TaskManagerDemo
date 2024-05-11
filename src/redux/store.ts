import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import workspaceSlice from "./slices/workspaceSlice";
import projectSlice from "./slices/projectSlice";
import boardsSlice from "./slices/boardsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    workSpace: workspaceSlice,
    project: projectSlice,
    boards: boardsSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
