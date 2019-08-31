import { Component } from "react";
import Link from "next/link";
import $ from "jquery";
import { User } from "react-feather";
import ReactSVG from "react-svg";

const rovebusLogoWhite = "../static/svg/rovebusSVGWhite.svg";
const rovebusLogoBlack = "../static/svg/rovebusSVGBlack.svg";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  onNavTriggerClicked = () => {
    $(".navTrigger").toggleClass("active");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
  };

  componentDidMount() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $(".nav").addClass("affix");
        console.log("OK");
      } else {
        $(".nav").removeClass("affix");
      }
    });
  }

  render() {
    // theme: white | black | ??
    const { theme } = this.props;

    let svgToUse;
    let navTriggerStyle;
    let textStyle;

    if (theme) {
      if (theme === "black") {
        svgToUse = rovebusLogoBlack;
        navTriggerStyle = { backgroundColor: "black" };
        textStyle = "text-black outIn";
      } else if (theme === "white") {
        svgToUse = rovebusLogoWhite;
        navTriggerStyle = { backgroundColor: "white" };
        textStyle = "text-white outIn";
      }
    }

    return (
      <div>
        <nav class="nav">
          <div class="container">
            <div class="logo">
              <Link href="#home" as="/">
                <ReactSVG
                  src={svgToUse}
                  beforeInjection={svg => {
                    svg.classList.add("reactsvg-logo");
                    svg.setAttribute("style", "width: 150px");
                  }}
                />
              </Link>
            </div>
            <div id="mainListDiv" class="main_list">
              <ul class="navlinks">
                <li>
                  <Link href="#bookATrip">
                    <span className={textStyle}>About</span>
                  </Link>
                </li>
                <li>
                  <Link href="#contactUs">
                    <span className={textStyle}>Portfolio</span>
                  </Link>
                </li>
                <li style={{ paddingRight: "3rem", paddingLeft: "2rem" }}>
                  <a href="#user">
                    <span className="accountIcon">
                      <User
                        color="black"
                        style={{ padding: "0px", margin: "0px" }}
                      />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <span
              class="navTrigger"
              onClick={() => {
                this.onNavTriggerClicked();
              }}
            >
              <i style={navTriggerStyle} />
              <i style={navTriggerStyle} />
              <i style={navTriggerStyle} />
            </span>
          </div>
        </nav>
        {/* <!-- Jquery needed --> */}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" />
        <script src="js/scripts.js" />

        <style jsx>{`
          .outIn {
            position: absolute;
            justify-content: space-between;
            /*
            top: calc(50% + 15px);
            left: 50%;
            transform: translate(-50%, 0%);
            white-space: nowrap;
            cursor: pointer;
            */
          }
          .outIn::before,
          .outIn::after {
            position: absolute;
            content: "";
            bottom: 0;
            width: 100%;
            height: 3px;
            background-color: #a0f;
            transition: all 0.5s;
          }

          .outIn::before {
            left: 0;
            transform: scaleX(0);
            transform-origin: 0 50%;
          }
          .outIn:hover::before {
            transform: scaleX(0.55);
          }

          .outIn::after {
            right: 0;
            transform: scaleX(0);
            transform-origin: 100% 50%;
          }
          .outIn:hover::after {
            transform: scaleX(0.55);
          }

          .text-white {
            color: white !important;
            cursor: pointer;
          }
          .text-black {
            color: black !important;
            cursor: pointer;
          }
          /*
          .text-black:hover {
            border-bottom: 5px solid;
            border-radius: 4px;
          }
          .text-white:hover {
            border-bottom: 5px solid;
            border-radius: 4px;
          }
          */
        `}</style>

        <style global jsx>{`
          .accountIcon {
            background-color: white;
            padding: 0px 5px;
            border-radius: 20px;
          }
          .reactsvg-logo {
            height: auto;
            cursor: pointer;
            color: red;
            border: red;
          }
          /*-- Inspiration taken from abdo steif -->
      /* --> https://codepen.io/abdosteif/pen/bRoyMb?editors=1100*/

          /* Navbar section */
          .nav {
            width: 100%;
            height: 65px;
            position: fixed;
            /*line-height: 65px;*/
            line-height: 100px;
            text-align: center;
          }

          .nav div.logo {
            float: left;
            width: auto;
            height: auto;
            padding-left: 3rem;
          }

          /*
          .nav div.logo a {
            height: 1px;
            width: auto;
          }
          */

          .nav div.main_list {
            height: 65px;
            float: right;
          }

          .nav div.main_list ul {
            width: 100%;
            height: 65px;
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
            line-height: 65px;
            font-size: 25px;
            font-family: "Bitter";
            font-weight: 700;
            position: relative;
          }

          .nav div.main_list ul li {
            width: auto;
            height: 65px;
            padding: 0;
            padding-right: 6rem;
          }

          .nav div.main_list ul li a {
            text-decoration: none;
            /* color: #fff; */
            line-height: 65px;
            font-size: 25px;
            font-family: "Bitter";
            font-weight: 700;
          }

          .nav div.main_list ul li a:hover {
            /* color: #00e676; */
            text-decoration: underline;
          }

          .navTrigger {
            display: none;
          }

          .nav {
            padding-top: 20px;
            padding-bottom: 20px;
            -webkit-transition: all 0.4s ease;
            transition: all 0.4s ease;
          }

          /* Media qurey section */

          @media screen and (min-width: 768px) and (max-width: 1024px) {
            .container {
              margin: 0;
            }
          }

          @media screen and (max-width: 768px) {
            .nav div.logo {
              float: left;
              width: auto;
              height: auto;
              padding-left: 0rem;
              padding-top: 0.8rem;
            }
            .accountIcon {
              padding: 0px 20px 14px 20px;
              border-radius: 50px;
            }
            .navTrigger {
              display: block;
            }
            .nav div.logo {
              margin-left: 15px;
            }
            .nav div.main_list {
              width: 100%;
              height: 0;
              overflow: hidden;
            }
            .nav div.show_list {
              height: auto;
              display: none;
            }
            .nav div.main_list ul {
              flex-direction: column;
              width: 100%;
              height: 100vh;
              right: 0;
              left: 0;
              bottom: 0;
              background-color: #111;
              /*same background color of navbar*/
              background-position: center top;
            }
            .nav div.main_list ul li {
              width: 100%;
              text-align: right;
            }
            .nav div.main_list ul li a {
              text-align: center;
              width: 100%;
              font-size: 3rem;
              padding: 20px;
            }
            .nav div.media_button {
              display: block;
            }
          }

          /* Animation */
          /* Inspiration taken from Dicson https://codemyui.com/simple-hamburger-menu-x-mark-animation/ */

          .navTrigger {
            cursor: pointer;
            width: 30px;
            height: 25px;
            margin: auto;
            position: absolute;
            right: 30px;
            top: 0;
            bottom: 0;
          }

          .navTrigger i {
            /* background-color: #fff; */
            border-radius: 2px;
            content: "";
            display: block;
            width: 100%;
            height: 4px;
          }

          .navTrigger i:nth-child(1) {
            -webkit-animation: outT 0.8s backwards;
            animation: outT 0.8s backwards;
            -webkit-animation-direction: reverse;
            animation-direction: reverse;
          }

          .navTrigger i:nth-child(2) {
            margin: 5px 0;
            -webkit-animation: outM 0.8s backwards;
            animation: outM 0.8s backwards;
            -webkit-animation-direction: reverse;
            animation-direction: reverse;
          }

          .navTrigger i:nth-child(3) {
            -webkit-animation: outBtm 0.8s backwards;
            animation: outBtm 0.8s backwards;
            -webkit-animation-direction: reverse;
            animation-direction: reverse;
          }

          .navTrigger.active i:nth-child(1) {
            -webkit-animation: inT 0.8s forwards;
            animation: inT 0.8s forwards;
          }

          .navTrigger.active i:nth-child(2) {
            -webkit-animation: inM 0.8s forwards;
            animation: inM 0.8s forwards;
          }

          .navTrigger.active i:nth-child(3) {
            -webkit-animation: inBtm 0.8s forwards;
            animation: inBtm 0.8s forwards;
          }

          @-webkit-keyframes inM {
            50% {
              -webkit-transform: rotate(0deg);
            }
            100% {
              -webkit-transform: rotate(45deg);
            }
          }

          @keyframes inM {
            50% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(45deg);
            }
          }

          @-webkit-keyframes outM {
            50% {
              -webkit-transform: rotate(0deg);
            }
            100% {
              -webkit-transform: rotate(45deg);
            }
          }

          @keyframes outM {
            50% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(45deg);
            }
          }

          @-webkit-keyframes inT {
            0% {
              -webkit-transform: translateY(0px) rotate(0deg);
            }
            50% {
              -webkit-transform: translateY(9px) rotate(0deg);
            }
            100% {
              -webkit-transform: translateY(9px) rotate(135deg);
            }
          }

          @keyframes inT {
            0% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(9px) rotate(0deg);
            }
            100% {
              transform: translateY(9px) rotate(135deg);
            }
          }

          @-webkit-keyframes outT {
            0% {
              -webkit-transform: translateY(0px) rotate(0deg);
            }
            50% {
              -webkit-transform: translateY(9px) rotate(0deg);
            }
            100% {
              -webkit-transform: translateY(9px) rotate(135deg);
            }
          }

          @keyframes outT {
            0% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(9px) rotate(0deg);
            }
            100% {
              transform: translateY(9px) rotate(135deg);
            }
          }

          @-webkit-keyframes inBtm {
            0% {
              -webkit-transform: translateY(0px) rotate(0deg);
            }
            50% {
              -webkit-transform: translateY(-9px) rotate(0deg);
            }
            100% {
              -webkit-transform: translateY(-9px) rotate(135deg);
            }
          }

          @keyframes inBtm {
            0% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-9px) rotate(0deg);
            }
            100% {
              transform: translateY(-9px) rotate(135deg);
            }
          }

          @-webkit-keyframes outBtm {
            0% {
              -webkit-transform: translateY(0px) rotate(0deg);
            }
            50% {
              -webkit-transform: translateY(-9px) rotate(0deg);
            }
            100% {
              -webkit-transform: translateY(-9px) rotate(135deg);
            }
          }

          @keyframes outBtm {
            0% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-9px) rotate(0deg);
            }
            100% {
              transform: translateY(-9px) rotate(135deg);
            }
          }

          .affix {
            padding: 0;
            background-color: #111;
          }

          .myH2 {
            text-align: center;
            font-size: 4rem;
          }
          .myP {
            text-align: justify;
            padding-left: 15%;
            padding-right: 15%;
            font-size: 20px;
          }
          @media all and (max-width: 700px) {
            .myP {
              padding: 2%;
            }
          }
        `}</style>
      </div>
    );
  }
}
