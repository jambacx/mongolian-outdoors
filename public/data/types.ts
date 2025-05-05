// types.ts
export type SubMenuItem = {
  title: string;
  path: string;
};

export interface NavItem {
  megabar: any;
  title: string;
  path: string;
  submenu?: SubMenuItem[];
  submenuMobile?: SubMenuItem[];
}
