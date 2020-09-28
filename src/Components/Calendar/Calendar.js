import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../Scss/section/calendar.scss";
import datePickerOperations from "../../redux/datePicker/datePickerOperations";
import Month from "../Month/Month";
import Modal from "../Modal/Modal";

const Calendar = () => {
  const dispatch = useDispatch();
  let currentYear = useSelector((state) => state.date.year);
  let currentMonth = useSelector((state) => state.date.month);
  let selectedDay = useSelector((state) => state.date.selectedDay);
  const [isOpen, setIsOpen] = useState(false);

  function handleModal(e) {
    const fatDay = e.target;
    const easyDay = fatDay.innerHTML;
    setIsOpen(!isOpen);
    dispatch(datePickerOperations.getDay({ easyDay }));
  }
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setIsOpen(isOpen);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Month
        handleModal={handleModal}
        currentYear={currentYear}
        currentMonth={currentMonth}
      />
      {!isOpen ? (
        <div className="modalWrapper">
          <Modal />
        </div>
      ) : (
        <div className="modalWrapperVisible">
          <Modal
            currentMonth={currentMonth}
            selectedDay={selectedDay}
            handleClose={handleClose}
          />
        </div>
      )}
    </>
  );
};

export default Calendar;
