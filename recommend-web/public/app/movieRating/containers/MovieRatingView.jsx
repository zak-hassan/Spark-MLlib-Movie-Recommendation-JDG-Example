import React, {Component} from "react";
import Table from "../../table/TableView.jsx";
import { connect } from "react-redux";
import DisplayReportForm from "../components/DisplayReportForm.jsx";
import PropTypes from "prop-types";
import { handleGetRec } from '../movieActions.js';

class MovieRating extends Component {
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
    let title = <h2 className="card-pf-title">Display Report</h2>;
    let recTable = null;
    if(this.props.submittedReportRequest === true) {
      recTable =
        <div className="card-pf card-pf-accented">
          <h2 className="card-pf-title"> Recommended products for user </h2>
          <div className="card-pf-footer">
            <Table config={this._tableConfig() }/>
          </div>
        </div>
    }

    return (
      <div className="col col-cards-pf container-cards-pf fader">
        <div className="cards col-xs-10 col-md-8 ">
          <div className="card-pf card-pf-accented">
            {title}
            <div className="card-pf-footer">
              <DisplayReportForm handleSubmit={this.props.handleGetRec}/>
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
    submittedReportRequest: state.movieReducer.submittedReportRequest,
    columns: state.movieReducer.columns,
    dataSet: state.movieReducer.dataSet,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetRec: (e) => {
      dispatch(handleGetRec(e))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieRating);
