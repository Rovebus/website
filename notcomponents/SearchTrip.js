import { Component } from "react";
import SearchTripDropdown from "../components/SearchTripDropdown";

export default class SearchTrip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div id="searchformcontainer">
        <div className="searchform">
          <div className="form-depart">Depart</div>
          <div className="form-arrive">Arrive</div>
          <div className="form-date">Date</div>
          <div className="form-passenger">1 P</div>
          <div className="form-button">Button</div>
        </div>
        <style jsx>
          {`
            #searchformcontainer {
              width: 100%;
              padding: 20px;
              background-color: dimgrey;
            }
            .searchform {
              display: grid;
              /* grid-template-columns: repeat(12, 1fr);*/
              grid-template-areas: "depart depart depart arrive arrive arrive date date date passenger button button";
              width: 100%;
            }
            .form-depart {
              grid-area: depart;
              background-color: lightgreen;
            }
            .form-arrive {
              grid-area: arrive;
              background-color: lightsalmon;
            }
            .form-date {
              grid-area: date;
              background-color: lightcyan;
            }
            .form-passenger {
              grid-area: passenger;
              background-color: lightcoral;
            }
            .form-button {
              grid-area: button;
              background-color: lightblue;
            }
          `}
        </style>
      </div>
    );
  }
}
