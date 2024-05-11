import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProjectBoardType } from "../../api/Project/GetProjectById";

type BoardSliceType = {
  _id: string;
  name: string;
  position: number;
  project: string;
  tasks: [
    {
      _id: string;
      name: string;
      description: string;
      label: [];
      board: string;
      taskTags: [];
      taskAssigns: string[];
      comments: string[];
      position: number;
    }
  ];
};

const initialState: BoardSliceType[] = [];

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    setBoards: (_, action: PayloadAction<BoardSliceType[]>) => {
      return action.payload;
    },
  },
});

export const { setBoards } = boardsSlice.actions;
export default boardsSlice.reducer;
