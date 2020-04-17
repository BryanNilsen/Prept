import React from "react";
import household_icon from "../../images/household.png";
import water_icon from "../../images/water.png";
import food_icon from "../../images/grocery.png";
import supplies_icon from "../../images/supplies.png";

function Welcome() {


  return (
    <>
    <div class="main_content">
      <h1 className="welcome_title">Welcome, User!</h1>
      <h3 className="welcome_title">Let's Get Prept in 4 Simple Steps ...</h3>

      {/* begin inventory cards */}
      <section id="household_card" class="welcome_card">
        <h3>1</h3>
        <p>Add your household members and some basic info about them so Prept can estimate their daily water and caloric needs.</p>
        <div class="welcome_card_right">
        <img src={household_icon} alt="household" />
          <button className="btn-pink">+ add members</button>
        </div>
      </section>
      <section id="water_card" class="welcome_card">
        <h3>2</h3>
        <p>Add water to your inventory so Prept can calculate how many days of water you have for your household.</p>
        <div class="welcome_card_right">
        <img src={water_icon} alt="water bottle" />
          <button className="btn-pink">+ add water</button>
        </div>
      </section>
      <section id="food_card" class="welcome_card">
        <h3>3</h3>
        <p>Add food to your inventory so Prept can calculate how many days of food you have for your household.</p>
        <div class="welcome_card_right">
        <img src={food_icon} alt="food" />
          <button className="btn-pink">+ add food</button>
        </div>
      </section>
      <section id="supplies_card" class="welcome_card">
        <h3>4</h3>
        <p>Add supplies such as medicine, toiletries, cleaning products. etc. to your inventory to know when it’s time to re-stock.</p>
        <div class="welcome_card_right">
        <img src={supplies_icon} alt="food" />
          <button className="btn-pink">+ add supplies</button>
        </div>
      </section>
      {/* end inventory cards */}

    </div>
    </>
  );
}

export default Welcome;