import * as actions from "../actions"

const reducer = (state = {}, action) => {
	switch (action.type) {
		case actions.ADD_ACTIVITY:
			return state;
		default:
			return state;
	}
};

export default reducer;
