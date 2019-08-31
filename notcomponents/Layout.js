import Link from "next/link";
import Head from "next/head";
import Header from "./Header";

const Layout = ({ children, backButton }) => (
  <div>
    <Head>
      <title>RoveBus</title>
      <meta name="description" content="RoveBus travel services." />
    </Head>
    <div className="container">
      <Header />

      {children}
    </div>

    <stylez jsxz>{`
      .container {
        max-width: 800px;
        margin: 0 auto;
        background: #f6f6ef;
      }
      nav {
        background: #f60;
        padding: 1em;
      }
      nav > * {
        display: inline-block;
        color: black;
      }
      nav a {
        text-decoration: none;
      }
      nav .main-title {
        font-weight: bold;
      }
      nav .back-button {
        font-size: 0.9rem;
        padding-right: 1em;
        cursor: pointer;
      }
    `}</stylez>
    <style global jsx>{`
      body {
        background: white;
        font-family: Verdana, Geneva, sans-serif;
      }
    `}</style>
  </div>
);

export default Layout;
