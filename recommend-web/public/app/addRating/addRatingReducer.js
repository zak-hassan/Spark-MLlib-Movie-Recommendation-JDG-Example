import { AR } from "./addRatingConstants"

const initialState = {
  submittedReportRequest: false,
  dataSet: [],
  columns: [],
};

export const initialFormUserState = {
  user: '',
  product: '',
  rating: '',
};

const addRatingReducer = (state = initialState, action) => {
  switch (action.type) {
    case AR.UPDATE_DATASET: {
      state = {
        ...state,
        dataSet: action.payload.dataSet,
        columns: action.payload.columns,
        submittedReportRequest: true
      };
      break;
    }
  }
  return state
};


export default addRatingReducer;
