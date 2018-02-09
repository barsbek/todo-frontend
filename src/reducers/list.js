export const handleUpdate = (state, action) => {
  const { result: id, entities } = action.payload;
  return {
    ...state,
    [id]: entities.lists[id]
  }
}
