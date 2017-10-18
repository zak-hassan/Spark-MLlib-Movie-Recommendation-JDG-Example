import React, { Component } from "react";
import PropTypes from 'prop-types';

class SelectOption extends Component {
  static get propTypes() {
    return {
      index: PropTypes.string.isRequired,
      pageCount: PropTypes.string.isRequired,
    }
  }

  render() {
    return (
      <li data-original-index={this.props.index}>
        <a tabIndex="0" className="" data-tokens="null"
           role="option" aria-disabled="false" aria-selected="false">
          <span className="text">{this.props.pageCount}</span>
          <span className="glyphicon glyphicon-ok"/>
        </a>
      </li>
    );
  }
}

export default SelectOption

