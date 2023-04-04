import { defineStore } from 'pinia';

interface SidebarState {
  isSideBarOpen: boolean;
  componentName: string;
}

export enum SideBarAvailableComponents {
  INCIDENTS_CREATE_NEW = 'INCIDENTS_CREATE_NEW' 
}

export const useSideBarStore = defineStore('sidebar', {
  state: (): SidebarState => {
    return {
      isSideBarOpen: false,
      componentName: '',
    };
  },
  actions: {
    openSideBar(componentNameToRender: SideBarAvailableComponents): void {
      this.isSideBarOpen = true;
      this.componentName = componentNameToRender;
    },
    closeSideBar(): void {
      this.isSideBarOpen = false;
    }
  },
});
