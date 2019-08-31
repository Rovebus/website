import Navbar from "../Navbar";
import SearchTrip from "../SearchTrip";

export default () => (
  <div>
    <div id="home-container">
      <div style={{}}>
        <Navbar theme="white" />
      </div>

      <div id="index-searchTrip">
        <SearchTrip id="index-searchTripForm" />
      </div>
    </div>

    <style global jsx>{`
      body {
        background-image: url("../static/images/DESKTOP-BG-01.jpg");
        height: 100vh;
        background-size: cover;
      }

      #home-container {
        display: grid;
        grid-template-rows: 100px 1fr;
        max-width: 1200px;
        margin: 0 auto;
      }

      #index-searchTrip {
        display: flex;
      }

      #index-searchTripForm {
        display: none;
        align-items: center;
        align-self: center;
        justify-content: center;
      }
    `}</style>
  </div>
);
