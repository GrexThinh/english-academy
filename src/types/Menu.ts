export type menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: menu[];
};
