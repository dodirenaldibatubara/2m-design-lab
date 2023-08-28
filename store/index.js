export const state = () => ({
    activeMenu : false
  });

  


  export const mutations = {
    setActiveMenu(state) {
      state.activeMenu = !state.activeMenu;
    },

    setHiddenMenu(state) {
        state.activeMenu = !state.activeMenu;
      },
  
    
  };