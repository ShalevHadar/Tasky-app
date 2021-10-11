import React, { Component } from "react";

function Date(){
    this.state = {
      currentDateTime: Date().toLocaleString(),
    };

  render()
    return (
      <div>
        <p>{this.state.currentDateTime}</p>
      </div>
    );

export default Date;
