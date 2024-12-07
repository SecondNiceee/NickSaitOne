import { routes } from "../models/routes";

export const getProfileRoute = (id : string) => {
    return routes.profile.replace(':id', id);
  };