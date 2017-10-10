import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Control} from 'react-redux-form';

class DropDownGroup extends Component {
  static get propTypes(){
    return {
      options: PropTypes.array,
      label: PropTypes.string,
      model: PropTypes.string,
    }
  }

  _createOptions(items){
    return items.map((item, i) => {
      return (<option key={i}>{item}</option>)
    })
  }

  render() {
    return(
    <div className="form-group">
      <label className="col-sm-2 control-label">{this.props.label}</label>
      <div className="col-sm-8">
        <div className="input-group-btn">
          <Control.select model={this.props.model} className="form-control">
            <option label=" "/>
            {this._createOptions(this.props.options)}
          </Control.select>
        </div>
      </div>
    </div>
    )
  }
}


export default DropDownGroup
