import { dateSlice } from "./datePickerReducers";

const getMonth = ({ currentYear, currentMonth }) => (dispatch) => {
  dispatch(dateSlice.actions.changeMonth({ currentYear, currentMonth }));
};

const getDay = ({ easyDay }) => (dispatch) => {
  dispatch(dateSlice.actions.addDay({ easyDay }));
};

export default { getMonth, getDay };
