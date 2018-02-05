const INITIAL_STATE = {
  menuOpen: false,
}

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
  case 'SHOW_PROFILE_MENU':
    return { ...state, menuOpen: true }
  case 'HIDE_PROFILE_MENU':
    return { ...state, menuOpen: false }
  case 'TOGGLE_PROFILE_MENU':
    const { menuOpen } = state;
    return { ...state, menuOpen: !menuOpen }
  default:
    return state
  }
}
