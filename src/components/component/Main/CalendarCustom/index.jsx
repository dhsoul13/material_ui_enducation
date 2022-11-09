import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import { markForm } from '../../../../helper/function';
const CalendarCustom = ({ onChange, value, defaultValue }) => {
  const mark = markForm(defaultValue);
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        tileClassName={({ date, view }) => {
          if (
            mark.find((x) => {
              return x === moment(date).format('DD-MM-YYYY');
            })
          ) {
            return 'highlight';
          }
        }}
      />
    </div>
  );
};

export default CalendarCustom;
