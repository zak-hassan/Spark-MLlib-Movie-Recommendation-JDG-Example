import React, {Component} from "react";
import DropDownGroup from "../../util/DropDownGroup.jsx";
import { Range } from "../../util/util.jsx"
import { Form } from 'react-redux-form';
import PropTypes from "prop-types";


class DisplayReportForm extends Component {
  static get propTypes() {
    return {
      handleSubmit: PropTypes.func.isRequired,
    }
  }

  render() {
    let userOptions = Range(1, 6);

    return (
      <Form className="form-horizontal" role="form" model="ratings"
            onSubmit={(display) => this.props.handleSubmit(display)}>
        <p className="fields-status-pf">All fields are required.</p>
        <DropDownGroup options={userOptions} label="Select User" model="ratings.user"/>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
        </div>
      </Form>
    )
  }
}


export default DisplayReportForm
