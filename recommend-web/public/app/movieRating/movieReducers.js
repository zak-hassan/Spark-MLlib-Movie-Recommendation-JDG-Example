import { MR } from "./movieRatingConstants"

const initialState = {
  dataSet: [],
  columns: [],
  submittedReportRequest: false,
};

export const initialRatingsFormUserState = {
  user: '',
};


const movieRatingReducer = (state = initialState, action) => {
  switch (action.type) {
    case MR.UPDATE_DATASET: {
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


export default movieRatingReducer;