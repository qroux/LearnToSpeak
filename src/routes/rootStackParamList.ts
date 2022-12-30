import {routeNames} from './routeNames';

export type RootStackParamList = {
  [routeNames.home]: undefined;

  // authenticated
  [routeNames.dashboard]: undefined;
  [routeNames.settings]: undefined;
};
