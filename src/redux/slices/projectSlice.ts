import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProjectBoardType } from "../../api/Project/GetProjectById";

type ProjectSliceType = {
  _id?: string;
  name?: string;
  workspace?: string;
  members: any[];
  boards: ProjectBoardType[];
};

const initialState: ProjectSliceType = {
  _id: undefined,
  name: undefined,
  workspace: undefined,
  members: [],
  boards: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProject: (_, action: PayloadAction<ProjectSliceType>) => {
      return action.payload;
    },
  },
});

export const { setProject } = projectSlice.actions;
export default projectSlice.reducer;
