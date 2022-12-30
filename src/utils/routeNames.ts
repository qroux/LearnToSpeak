const authenticatedRoutes = {
  authenticatedNavigator: 'AuthenticatedNavigator',
  dashboard: 'Dashboard',
  reader: 'Reader',
  settings: 'Settings',
} as const;

const unAuthenticatedRoutes = {
  unAuthenticatedNavigator: 'UnAuthenticatedNavigator',
  home: 'Home',
} as const;

const routeNames = {
  ...unAuthenticatedRoutes,
  ...authenticatedRoutes,
} as const;

export type AuthenticatedRouteKeys = keyof typeof authenticatedRoutes;
export type AuthenticatedRouteValues =
  typeof authenticatedRoutes[AuthenticatedRouteKeys];

export type UnAuthenticatedRouteKeys = keyof typeof unAuthenticatedRoutes;
export type UnAuthenticatedRouteValues =
  typeof unAuthenticatedRoutes[UnAuthenticatedRouteKeys];

export type RouteNamesKey = keyof typeof routeNames;
export type RouteNamesValues = typeof routeNames[RouteNamesKey];

export default routeNames;
