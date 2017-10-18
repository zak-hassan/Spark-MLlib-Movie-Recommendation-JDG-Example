import React, { Component } from "react";
import PropTypes from 'prop-types';
import TableFooter from './TableFooter.jsx';

//import SelectOption from './selectOption.jsx';
import * as _ from 'underscore';

class Table extends Component {
  static get propTypes() {
    return {
      config: PropTypes.object.isRequired,
    }
  }

  shouldComponentUpdate(nextProps) {
    /* Table has not been created (see ComponentDidMount()).*/
    if(this.props.config.data.length === 0)
      return true;
    else if(nextProps.config.data !== this.props.config.data)
      this._reloadTableData(nextProps.config.data);
    else
      this._updateTable(nextProps.config.data);

    return false;
  }

  _reloadTableData(data) {
    const table = $(this.table).DataTable();
    table.clear();
    table.rows.add(data);
    table.draw();
  }

  _updateTable(newData) {
    const table = $(this.table).DataTable();
    let dataChanged = false;
    table.rows().every(function () {
      const oldDataRow = this.data();
      const newDataRow = newData.find((newRow) => {
        return _.isEqual(newRow, oldDataRow);
      });

      if (_.isEqual(newDataRow, oldDataRow)) {
        dataChanged = true;
        this.data(newDataRow);
      }
      return true; // RCA esLint configuration wants us to
      // return something
    });

    if (dataChanged) {
      table.draw();
    }
  }

  render() {
    return (
    <div>
      <table ref={table => this.table = table }
             className="table table-striped table-bordered table-hover"
             id="table1"/>
      <TableFooter/>
    </div>
    )
  }

  componentDidUpdate(){
    if(this.props.config.data.length !== 0)
      $(this.table).DataTable(this.props.config);
  }

  componentDidMount() {
    if(this.props.config.data.length !== 0)
      $(this.table).DataTable(this.props.config);
  }

  componentWillUnmount(){
    $(this.table).DataTable().destroy();
  }
}

export default Table
