import React from "react";
import household_icon from "../../images/household.png";
import water_icon from "../../images/water.png";
import food_icon from "../../images/grocery.png";
import supplies_icon from "../../images/supplies.png";
import checkmark_icon from "../../images/checkmark.png";

function Welcome(props) {
  const user = props.user;

  return (
    <>
      <div className="main_content">
        <h1>Welcome, {user.username}</h1>
        <h3>Let's Get Prept in 4 Simple Steps ...</h3>

        {/* begin inventory cards */}
        <section id="household_card" className="card welcome_card">
          <h3>1</h3>
          <p>
            Add your household members and some basic info about them so Prept
            can estimate their daily water and caloric needs.
          </p>
          <div className="welcome_card_right">
            {user.householdMembers.length > 0 ? (
              <>
                <img src={checkmark_icon} alt="checkmark" />
                <div>complete</div>
              </>
            ) : (
              <>
                <img src={household_icon} alt="household" />
                <button className="btn-pink">+ add members</button>
              </>
            )}
          </div>
        </section>
        <section id="water_card" className="card welcome_card">
          <h3>2</h3>
          <p>
            Add water to your inventory so Prept can calculate how many days of
            water you have for your household.
          </p>
          <div className="welcome_card_right">
            {user.waters.length > 0 ? (
              <>
                <img src={checkmark_icon} alt="checkmark" />
                <div>complete</div>
              </>
            ) : (
              <>
                <img src={water_icon} alt="water" />
                <button
                  className="btn-pink"
                  onClick={() => {
                    props.history.push("/water/new");
                  }}
                >
                  + add water
                </button>
              </>
            )}
          </div>
        </section>
        <section id="food_card" className="card welcome_card">
          <h3>3</h3>
          <p>
            Add food to your inventory so Prept can calculate how many days of
            food you have for your household.
          </p>
          <div className="welcome_card_right">
            {user.foods.length > 0 ? (
              <>
                <img src={checkmark_icon} alt="checkmark" />
                <div>complete</div>
              </>
            ) : (
              <>
                <img src={food_icon} alt="food" />
                <button
                  className="btn-pink"
                  onClick={() => {
                    props.history.push("/food/new");
                  }}
                >
                  + add food
                </button>
              </>
            )}
          </div>
        </section>

        {/* <section id="supplies_card" className="card welcome_card">
          <h3>4</h3>
          <p>
            Add supplies such as medicine, toiletries, cleaning products. etc.
            to your inventory to know when it’s time to re-stock.
          </p>
          <div className="welcome_card_right">
            {user.supplies.length > 0 ? (
              <>
                <img src={checkmark_icon} alt="checkmark" />
                <div>complete</div>
              </>
            ) : (
              <>
                <img src={supplies_icon} alt="food" />
                <button className="btn-pink">+ add supplies</button>
              </>
            )}
          </div>
        </section> */}

        {/* end inventory cards */}
      </div>
    </>
  );
}

export default Welcome;
