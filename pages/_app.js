import React from "react";
import App from "next/app";
import "../styles.css";

export default class TailwindApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
