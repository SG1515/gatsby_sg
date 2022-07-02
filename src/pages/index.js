
import React from "react";
import Head from "../components/head";
import Layout from "../components/layout";


// markup
const IndexPage = () => {
  return (
    <Layout>
      <title>홈</title>

      <h1>홈 페이지</h1>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>

    </Layout>
  );
};

export default IndexPage;
