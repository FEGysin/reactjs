function reducer(myStore, action) {
  const { type, payload } = action;
  switch (type) {
    case "Add-Item": {
      const { id } = payload;
      const items = [];

      return items;
    }
    case "Del-Item":
    case "Mod-Item":
    default: {
    }
  }
}

export default reducer;
