import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  WorkspaceGetAllResponseBody,
  WorkspaceProjectType,
} from "../../api/Workspace/GetAllWorkspaces";

const initialState: WorkspaceGetAllResponseBody[] = [];

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    setWorkspaces: (
      _,
      action: PayloadAction<WorkspaceGetAllResponseBody[]>
    ) => {
      return action.payload;
    },

    editWorkspace: (
      state,
      action: PayloadAction<{
        _id: string;
        updatedWorkspace: WorkspaceGetAllResponseBody;
      }>
    ) => {
      return state.map((item) => {
        if (item._id === action.payload._id) {
          return {
            ...item,
            ...action.payload.updatedWorkspace,
          };
        }
        return item;
      });
    },

    addWorkspace: (
      state,
      action: PayloadAction<WorkspaceGetAllResponseBody>
    ) => {
      return [...state, action.payload];
    },

    removeWorkspace: (state, action: PayloadAction<{ _id: string }>) => {
      return state.filter((item) => item._id !== action.payload._id);
    },

    addProject: (
      state,
      action: PayloadAction<{
        workspaceId: string;
        project: WorkspaceProjectType;
      }>
    ) => {
      return state.map((item) => {
        if (item._id === action.payload.workspaceId) {
          return {
            ...item,
            projects: [...item.projects, action.payload.project],
          };
        }
        return item;
      });
    },

    updateProject: (
      state,
      action: PayloadAction<{
        workspaceId: string;
        updatedProject: WorkspaceProjectType;
      }>
    ) => {
      const tempState = state.map((item) => {
        if (item._id === action.payload.workspaceId) {
          const updatedProjects = item.projects.map((project) => {
            if (project._id === action.payload.updatedProject._id) {
              return { ...project, ...action.payload.updatedProject };
            }
            return project;
          });
          return { ...item, projects: updatedProjects };
        }
        return item;
      });
      return tempState;
    },

    removeProject: (
      state,
      action: PayloadAction<{
        workspaceId: string;
        projectId: string;
      }>
    ) => {
      const tempState = state.map((item) => {
        if (item._id === action.payload.workspaceId) {
          const updatedProjects = item.projects.filter(
            (project) => project._id !== action.payload.projectId
          );
          return { ...item, projects: updatedProjects };
        }
        return item;
      });
      return tempState;
    },
  },
});

export const { setWorkspaces } = workspaceSlice.actions;
export default workspaceSlice.reducer;
