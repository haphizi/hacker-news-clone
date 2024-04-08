// build a store(global data storage) to hold the global state of storing stories in the favourites section, getState() to read the state of the store via reducer func

// using a reducer ( getting/ setting state)

function createStore(reducer) {
  let currentState = reducer(undefined, {});

  return {
    getState: () => currentState,
    dispatch: (action) => {
      currentState = reducer(currentState, action);
    },
  };
}

const initialState = {
  //set empty array
  favorites: [],
};

function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FAVORITE": {
      const addedFavorite = action.payload.favorite;
      const favorites = [...state.favorites, addedFavorite];
      return { favorites };
    }
    case "REMOVE_FAVORITE": {
      const removedFavorite = action.payload.favorite;
      const favorites = state.favorites.filter(
        (favorite) => favorite.id !== removedFavorite.id
      );
      return { favorites };
    }
    default:
      return state;
  }
}

// often payload is an object

const action = {
  type: "ADD_FAVORITE",
  payload: { favorite: { title: "story1", id: 1 } },
};

const store = createStore(favoritesReducer);
store.dispatch(action);
console.log(store.getState());

export default store;
