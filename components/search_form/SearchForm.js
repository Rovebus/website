import React from "react";
import {
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";
import Datetime from "react-datetime";
import "bootstrap/dist/css/bootstrap.css";
import "../../static/foundation-6.5.1-custom/css/foundation.min.css";
import "react-datetime/css/react-datetime.css";

const arrivalTownList = ["one", "two", "three", "four", "five", "six", "seven"];

const btnStyle = {
  backgroundColor: "orange",
  border: "5px solid white"
};

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Let's use the static moment reference in the Datetime component
    var yesterday = Datetime.moment().subtract(1, "day");
    var valid = function(current) {
      return current.isAfter(yesterday);
    };
    return (
      <div className="grid-container searchform">
        <div className="grid-x">
          <div className="small-12 medium-6 large-3 searchItem padding5 departlabel">
            <Input type="select" bsSize="lg">
              {arrivalTownList.map(town => (
                <option>{town}</option>
              ))}
            </Input>
          </div>
          <div className="small-12 medium-6 large-3 searchItem padding5 arrivelabel">
            <Input type="select" bsSize="lg">
              {arrivalTownList.map(town => (
                <option>{town}</option>
              ))}
            </Input>
          </div>
          <div className="small-12 medium-6 large-3 searchItem padding5 datelabel">
            <Datetime
              isValidDate={valid}
              defaultValue={new Date()}
              timeFormat={false}
            />
          </div>
          <div className="small-12 medium-6 large-3 searchItem padding5">
            <div className="grid-x">
              <div
                className="small-4 searchItem passengerlabel"
                style={{ paddingRight: "8px" }}
              >
                <Input
                  defaultValue={1}
                  min={1}
                  max={100}
                  type="number"
                  step="1"
                  bsSize="lg"
                />
              </div>
              <div className="small-8 searchItem">
                <Button style={btnStyle} size="lg" block>
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .padding5 {
            padding: 5px;
          }
          .searchItem {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .searchform {
            background-color: rgba(0, 0, 0, 0.3);
            padding: 10px;
            margin: 5px auto;
            border-radius: 5px;
          }
          .searchbtn {
            background-color: orange !important;
            border: solid white 5px !important;
          }
          .departlabel::before {
            content: " Depart From" !important;
            text-align: center;
          }
          .arrivelabel::before {
            content: " Arrive At" !important;
            text-align: center;
          }
          .datelabel::before {
            content: " Date" !important;
            text-align: center;
          }
          .passengerlabel::before {
            content: " Psngr" !important;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}
