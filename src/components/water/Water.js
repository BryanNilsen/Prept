import React from "react";

function Water() {

  // calculate water per day per person
  const calculateOzPerDayPerPerson = person => {
    return Math.ceil(person.weight * 0.67);
  };

  const bryan = {
    weight: 235
  }

  console.log("ounces", calculateOzPerDayPerPerson(bryan));

  return (
    <div className="Water">
      water
    </div>
  );
}

export default Water;