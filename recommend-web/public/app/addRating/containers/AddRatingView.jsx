import React, {Component} from "react";
import PropTypes from "prop-types";
import Table from "../../pf-lib/table/TableView.jsx";
import { connect } from "react-redux";
import { handleGetRec } from '../addRatingActions.js';
import RecForm from "../components/RecForm.jsx";

class AddRating extends Component {
  static get propTypes() {
    return {
      columns: PropTypes.array,
      dataSet: PropTypes.array,
      submittedReportRequest: PropTypes.bool,
      handleGetRec: PropTypes.func,
    }
  }

  _tableConfig(){
    return (
      {
        columns: this.props.columns,
        data: this.props.dataSet,
        dom: "t",
        order: [[ 0, 'asc' ]],
        pfConfig: {
          filterCaseInsensitive: true,
          paginationSelector: "#pagination1",
          colvisMenuSelector: '.table-view-pf-colvis-menu'
        },
      }
    )
  }

  render() {
    let title = <h2 className="card-pf-title">View Recommended Movies Results</h2>;
    let recTable = null;

    if(this.props.submittedReportRequest === true){
      recTable =
        <div className="card-pf card-pf-accented">
          <h2 className="card-pf-title"> Results </h2>
          <div className="card-pf-footer">
            <Table config={this._tableConfig()} />
          </div>
        </div>
    }

    return (
      <div className="col col-cards-pf container-cards-pf fader">
        <div className="cards col-xs-10 col-md-8 ">
          <div className="card-pf card-pf-accented">
            {title}
            <div className="card-pf-footer">
              <RecForm handleSubmit={this.props.handleGetRec}/>
            </div>
          </div>
          {recTable}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    submittedReportRequest: state.addRatingReducer.submittedReportRequest,
    columns: state.addRatingReducer.columns,
    dataSet: state.addRatingReducer.dataSet,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetRec: (e) => {
      dispatch(handleGetRec(e))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRating);
