const initialState = {};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW":
      return {
        ...state,
        state: action.payload,
      };
  }
  return state;
};

const add = (payload) => ({type: "NEW", payload});

export default basketReducer;
