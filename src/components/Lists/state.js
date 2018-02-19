const getList = (state, id) => state[id];

export const getLists = (state) => {
  const { ids, byId } = state.entities.lists;
  return ids.map(id => getList(byId, id));
}

export const getLoading = (state) => {
  return state.entities.lists.loading;
}

export const hasNewList = (state) => {
  return state.entities.lists.ids.indexOf('new') > 0;
}
