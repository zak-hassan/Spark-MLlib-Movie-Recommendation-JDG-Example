import React, {Component} from "react";
import DropDownGroup from "../../util/DropDownGroup.jsx";
import { Range } from "../../util/util.jsx"
import { Form } from 'react-redux-form';
import PropTypes from "prop-types";

class RecForm extends Component {
  static get propTypes() {
    return {
      handleSubmit: PropTypes.func.isRequired,
    }
  }

  render() {
    let ratingOptions = ['Must See', 'Will enjoy', 'It\'s okay', 'Fairly bad', 'Awful'];
    let productOptions = Range(1, 6);
    let userOptions = Range(1, 6);

    return (
      <Form className="form-horizontal" role="form" model="display"
            onSubmit={(display) => this.props.handleSubmit(display)}>
        <p className="fields-status-pf">All fields are required.</p>
          <DropDownGroup options={userOptions} label="Select User" model="display.user"/>
          <DropDownGroup options={productOptions} label="Select Product" model="display.product"/>
          <DropDownGroup options={ratingOptions} label="Select Rating" model="display.rating"/>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
        </div>
      </Form>
    )
  }
}


export default RecForm
