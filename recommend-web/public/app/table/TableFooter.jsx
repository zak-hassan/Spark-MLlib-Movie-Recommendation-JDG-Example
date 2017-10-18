import React, { Component } from 'react';

class TableFooter extends Component{
  render(){
    let preventDefaultClick = (e) => {
      e.preventDefault();
      return false;
    };

    return (
      <form className="content-view-pf-pagination table-view-pf-pagination clearfix" id="pagination1">
        <div className="form-group">
          <span><span className="pagination-pf-items-current"/> of <span className="pagination-pf-items-total"/></span>
          <ul className="pagination pagination-pf-back">
            <li><a href="#" onClick={preventDefaultClick} title="First Page"><span
              className="i fa fa-angle-double-left"/></a></li>
            <li><a href="#" onClick={preventDefaultClick} title="Previous Page"><span
              className="i fa fa-angle-left"/></a></li>
          </ul>
          <label htmlFor="pagination1-page" className="sr-only">Current Page</label>
          <input className="pagination-pf-page" type="text" id="pagination1-page" defaultValue="1"/>
          <span>of <span className="pagination-pf-pages"/></span>
          <ul className="pagination pagination-pf-forward">
            <li><a href="#" onClick={preventDefaultClick} title="Next Page"><span className="i fa fa-angle-right"/></a>
            </li>
            <li><a href="#" onClick={preventDefaultClick} title="Last Page"><span
              className="i fa fa-angle-double-right"/></a></li>
          </ul>
        </div>
      </form>
    )
  }

}

export default TableFooter;