/* -------------------------------------------------------------------------- */
/*                                    Auth                                    */
/* -------------------------------------------------------------------------- */

export const AuthRegisterRoute = "/auth/register";
export const AuthLoginRoute = "/auth/login";
export const AuthResetPasswordRoute = "/auth/reset-password";
export const AuthForgetPasswordRoute = "/auth/forget-password";
export const AuthRefreshTokenRoute = "/auth/refreshtoken";

/* -------------------------------------------------------------------------- */
/*                                    User                                    */
/* -------------------------------------------------------------------------- */

export const UsersBaseRoute = "/users";



/* -------------------------------------------------------------------------- */
/*                                    Board                                   */
/* -------------------------------------------------------------------------- */

export const BoardRoute = '/board/'

export const BoardChangeBoardPositionRoute = '/board/:id/position/:index'
export const BoardCreateBoardRoute = '/board/'
export const BoardDeleteBoardByIdRoute = '/board/:id'
export const BoardGetAllProjectBoardsRoute = '/board/:projectId'
export const BoardGetBoardersTasksRoute = '/board/:id/tasks'
export const BoardRenameBoardRoute = '/board/:id'


/* -------------------------------------------------------------------------- */
/*                                    Tag                                     */
/* -------------------------------------------------------------------------- */

export const TagRoute = '/tags/'

export const TagCreateTagRoute = '/tags'
export const TagDeleteTagRoute = '/tags/:tagIdOrName'
export const TagGetTagByNameORIdRoute = '/tags/:tagOrTagname'
export const TagGetTagsOfTaskByTaskIdRoute = '/tags/task/'
export const TagRenameTagByIdRoute = '/tags/:tagIdOrName'
export const TagUnTagTaskRoute = '/tags/untag'


/* -------------------------------------------------------------------------- */
/*                                 Workspace                                  */
/* -------------------------------------------------------------------------- */


export const WorkSpaceAddWorkSpaceMemberRoute = '/workspace/:workspaceId/members/:usernameOrId'
export const WorkSpaceCreateWorkSpaceRoute = '/workspace/create'
export const WorkSpaceDeleteWorkSpaceRoute = '/workspace/:id'
export const WorkSpaceGetAllWorkSpacesRoute = '/workspace/get-all'
export const WorkSpaceGetWorkSpaceByIdRoute = '/workspace/:id'
export const WorkSpaceRemoveWorkSpaceMemberRoute = ''
export const WorkSpaceUpdateWorkSpaceRoute = '/workspace/:id'