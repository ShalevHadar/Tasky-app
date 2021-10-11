import React from "react";

export default function Date() {
  var today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

  this.state = {
    currentDate: date,
  };
  return (
    <div>
      <p>{this.state.currentDate}</p>
    </div>
  );
}
