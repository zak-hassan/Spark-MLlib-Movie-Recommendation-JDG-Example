import { MR } from './movieRatingConstants'
import { ROUTES } from '../routes.js'
export function handleGetRec(data){
  return (dispatch) => {
    $.ajax({
      type: 'POST',
      url: ROUTES.MR.GET_REC_MOVIE_RATING,
      data: JSON.stringify(data),
      dataType: 'json',
      contentType: 'application/json',
      success: function (result) {
        // result should have columns and dataSet
        dispatch(submitReq(result));
      },
      error: function () {}
    })
  };
}


export function submitReq(results){
  return {
    type: MR.UPDATE_DATASET,
    payload: results,
  }
}