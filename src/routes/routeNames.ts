export const routeNames = {
  home: 'Home',

  // authenticated
  dashboard: 'Dashboard',
  settings: 'Settings',
} as const;

export type RouteNamesKeys = keyof typeof routeNames;
export type RouteNamesValues = typeof routeNames[RouteNamesKeys];
