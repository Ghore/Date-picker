import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import datePickerOperations from "../../redux/datePicker/datePickerOperations";
import "../../Scss/section/month.scss";

function Month({ handleModal, currentYear, currentMonth }) {
  const dispatch = useDispatch();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  // отрисовка дней

  function createTable(currentYear, currentMonth) {
    const current = new Date(currentYear, currentMonth);
    const next = new Date(currentYear, currentMonth + 1);
    const diff = (next - current) / (1000 * 3600 * 24);
    const index = (current.getDay() + 6) % 7;

    let table = [],
      tr,
      firstDay = 1 - index;

    for (let i = 0; i < 6; i++) {
      tr = [];
      for (let td = 0; td < 7; td++) {
        tr.push(
          <td onClick={handleModal} className="days" key={td} id={uuidv4()}>
            {firstDay > 0 && firstDay <= diff ? firstDay : ""}
          </td>
        );
        firstDay++;
      }
      table.push(<tr key={uuidv4()}>{tr}</tr>);
    }
    return table;
  }

  const handleNextMonth = () => {
    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    dispatch(datePickerOperations.getMonth({ currentYear, currentMonth }));
    createTable(currentYear, currentMonth);
  };
  function handlePrevMonth() {
    currentYear = currentMonth === 11 ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth - 1) % 12;
    dispatch(datePickerOperations.getMonth({ currentYear, currentMonth }));
    createTable(currentYear, currentMonth);
  }

  return (
    <>
      <table className="month">
        <caption className="monthName">
          <button className="btnPrev" onClick={handlePrevMonth}>
            {"<"}
          </button>
          {months[currentMonth] + " "} {currentYear}
          <button className="btnNext" onClick={handleNextMonth}>
            {">"}
          </button>
        </caption>
        <tbody className="daysWrapper">
          {createTable(currentYear, currentMonth)}
          <tr>
            {days.map((name) => (
              <th className="day" key={uuidv4()}>
                {name}
              </th>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Month;
