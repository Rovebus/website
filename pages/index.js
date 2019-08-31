import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import SearchForm from "../components/search_form/SearchForm";
import rovebus_b from "../static/svg/rovebusSVGBlack.svg";
import "../static/foundation-6.5.1-custom/css/foundation.min.css";

export default () => (
  <div style={{ backgroundColor: "" }}>
    <Head>
      <title>RoveBus - Home</title>
    </Head>
    <Navbar></Navbar>
    <div className="rovebus-index" style={{ backgroundColor: "" }}>
      <img
        style={{ height: "100%", width: "auto" }}
        src={rovebus_b}
        alt="rovebus_b"
      />
    </div>
    <div>
      <SearchForm></SearchForm>
    </div>
    <style jsx>{`
      .rovebus-index {
        height: 150px;
        margin: 100px 100px;
        text-align: center;
      }
      @media (max-width: 420px) {
        .rovebus-index {
          height: 50px;
          margin: 0px;
        }
        .rovebus-index img {
          display: none;
        }
      }
    `}</style>
  </div>
);
