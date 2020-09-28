import React from "react";
import Header from "../../Components/Header/Header";
import Calendar from "../../Components/Calendar/Calendar";
import "../../Scss/section/homePage.scss";

const HomePage = () => {
  return (
    <>
      <main>
        <div className="container">
          <Header />
          <div className="calendarWrapper">
            <h2 className="title">
              choose the day for the <span className="titleSpan">meeting</span>
            </h2>
            <Calendar />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
