import React, { useState, useEffect} from "react";
import APIManager from "../../modules/APIManager"
import household_icon from "../../images/household.png";
import HouseholdCard from "./HouseholdCard"

const Household = (props) => {
const [householdMembers, setHouseholdMembers] = useState([])

useEffect(() => {
  const userId = sessionStorage.getItem("userId")
  APIManager.getUserWithHousehold(userId)
  .then(res => setHouseholdMembers(res.householdMembers))
}, []);


  return (
    <>
    <div className="main_content">
      <div className="main_content_header">
        <div className="imgwrap">
          <img src={household_icon} alt="household" className="main_header_img"/>
        </div>
        <h1>Household</h1>
      </div>
      <button className="btn-pink">+ add members</button>
      <h4>click card for details</h4>
      {/* begin member cards */}

      {householdMembers.map(member =>
        <HouseholdCard
          key={member.id}
          member={member}
          {...props}
        />
      )}

      {/* end member cards */}

    </div>
    </>
  );
}

export default Household;