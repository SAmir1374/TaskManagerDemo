import flattenDeep from "lodash/flattenDeep";
import { Route, Routes as ReactRoutes } from "react-router-dom";

import ProtectedRoute from "../ProtectedRoute";
import { LayoutType, RouteType } from "..";

function generateFlattenRoutes(routes : any): RouteType[] {
  if (!routes) return [];
  return flattenDeep(
    routes.map(({ routes: subRoutes, ...rest } : LayoutType) => [
      rest,
      generateFlattenRoutes(subRoutes),
    ])
  );
}


// function generateFlattenRoutes(routes: any): RouteType[] {
//   if (!routes) return [];
//   return flattenDeep(
//     routes.map(({ routes: subRoutes, ...rest }: LayoutType) => [
//       rest,
//       generateFlattenRoutes(subRoutes),
//     ])
//   );
// }



export const renderRoutes = (mainRoutes: LayoutType[]) => {
  const Routes = ({ isAuthorized }: { isAuthorized: boolean }) => {
    const layouts = mainRoutes.map(({ layout: Layout, routes }, index) => {
      const subRoutes = generateFlattenRoutes(routes);

      return (
        <Route key={index} element={<Layout />}>
          {subRoutes.map((subRoute) => {
            return (
              <Route
                element={
                  <ProtectedRoute
                    isPublic={subRoute.isPublic}
                    isAuthorized={isAuthorized}
                  />
                }
              >
                <Route
                  key={subRoute.path}
                  element={subRoute.component()}
                  path={subRoute.path}
                />
              </Route>
            );
          })}
          {/* {subRoutes.map(({ component: Component, path, name }) => {
            <Route element={<ProtectedRoute isAuthorized={isAuthorized} />}>
              return ( Component && path &&
              <Route key={name} element={<Component />} path={path} />
              );
            </Route>;
          })} */}
        </Route>
      );
    });
    return <ReactRoutes>{layouts}</ReactRoutes>;
  };
  return Routes;
};



// import { Route, Routes as ReactRoutes } from "react-router-dom";
// import { LayoutType, RouteType } from "..";
// import ProtectedRoute from "../ProtectedRoute";
// import flattenDeep from "lodash/flattenDeep";

// function generateFlattenRoutes(routes: any): RouteType[] {
//   if (!routes) return [];
//   return flattenDeep(
//     routes.map(({ routes: subRoutes, ...rest }: LayoutType) => [
//       rest,
//       generateFlattenRoutes(subRoutes),
//     ])
//   );
// }

// const renderRoutes = (mainRoutes: LayoutType[]) => {
//   const Routes = ({ isAuthorized }: { isAuthorized: boolean }) => {
//     const layouts = mainRoutes.map(({ layout: Layout, routes }, index) => {
//       const subRoutes = generateFlattenRoutes(routes);

//       return (
//         <Route
//           key={index}
//           element={<Layout />}
//         >
//           {subRoutes.map((subRoute, subIndex) => (
//             <Route
//               key={subIndex}
//               element={
//                 <ProtectedRoute
//                   isPublic={subRoute.isPublic}
//                   isAuthorized={isAuthorized}
//                 />
//               }
//               path={subRoute.path}
//             />
//           ))}
//         </Route>
//       );
//     });
//     return <ReactRoutes>{layouts}</ReactRoutes>;
//   };
//   return Routes;
// };

// export default renderRoutes;
