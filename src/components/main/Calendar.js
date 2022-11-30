import { Icon } from "@iconify/react";
import {
  addMonths,
  endOfDay,
  format,
  startOfWeek,
  subMonths,
  parse,
  addDays,
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
} from "date-fns";
import { useState } from "react";
import styled from "styled-components";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const onDateClick = (day) => {
    setSelectedDay(day);
    console.log(selectedDay);
  };

  return (
    <CalendarDiv>
      <RenderHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <RenderDays />
      <RenderCells
        currentMonth={currentMonth}
        selectedDay={selectedDay}
        onDateClick={onDateClick}
      />
    </CalendarDiv>
  );
};

const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <Header>
      <ColStart>
        <Text>
          <Month>{format(currentMonth, "M")}월</Month>
          {format(currentMonth, "yyyy")}
        </Text>
      </ColStart>
      <ColEnd>
        <Arrow icon="bi:arrow-left-circle-fill" onClick={prevMonth} />
        <Arrow icon="bi:arrow-right-circle-fill" onClick={nextMonth} />
      </ColEnd>
    </Header>
  );
};

const RenderDays = () => {
  const days = [];
  const date = ["Sun", "Mon", "Thu", "Wed", "Thrs", "Fri", "Sat"];
  for (let i = 0; i < 7; i++) {
    days.push(<Col key={i}> {date[i]} </Col>);
  }
  return <Days>{days}</Days>;
};

const RenderSpan = ({ currentMonth, day, formattedDate }) => {
  if (format(currentMonth, "M") !== format(day, "M"))
    return <NotValid>{formattedDate}</NotValid>;
  return <DateDate> {formattedDate} </DateDate>;
};

const RenderSpanDiv = ({
  day,
  monthStart,
  currentMonth,
  selectedDate,
  formattedDate,
  cloneDay,
  onDateClick,
  key,
}) => {
  if (!isSameMonth(day, monthStart)) {
    return (
      <Disabled key={key} onClick={() => onDateClick(parse(cloneDay))}>
        <RenderSpan
          currentMonth={currentMonth}
          day={day}
          formattedDate={formattedDate}
        />
      </Disabled>
    );
  }

  if (isSameDay(day, selectedDate)) {
    return (
      <Selected key={key} onClick={() => onDateClick(parse(cloneDay))}>
        <RenderSpan
          currentMonth={currentMonth}
          day={day}
          formattedDate={formattedDate}
        />
      </Selected>
    );
  }

  if (format(currentMonth, "M") !== format(day, "M")) {
    return (
      <NotValidDiv key={key} onClick={() => onDateClick(parse(cloneDay))}>
        <RenderSpan
          currentMonth={currentMonth}
          day={day}
          formattedDate={formattedDate}
        />
      </NotValidDiv>
    );
  }

  return (
    <Valid key={key} onClick={() => onDateClick(parse(cloneDay))}>
      <RenderSpan
        currentMonth={currentMonth}
        day={day}
        formattedDate={formattedDate}
      />
    </Valid>
  );
};
const RenderCells = ({ currentMonth, selectedDate, onDateClick }) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfDay(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;
      days.push(
        <RenderSpanDiv
          day={day}
          monthStart={monthStart}
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          formattedDate={formattedDate}
          key={day}
          onDateClick={onDateClick}
          cloneDay={cloneDay}
          onClick={() =>
            //  onDateClick(parse(cloneDay))
            console.log()
          }
        />
      );
      day = addDays(day, 1);
    }
    rows.push(<Row key={day}>{days}</Row>);
    days = [];
  }
  return <Body>{rows}</Body>;
};

export default Calendar;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Col = styled.div`
  font-weight: bold;
`;
const Text = styled.span`
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;
const Cell = styled(Col)`
  width: 14.28%;
  text-align: center;
  line-height: 130px;
  height: 130px;
`;
const CalendarDiv = styled.div`
  width: 963px;
  height: 831px;
  border: 1px solid #5b5b5b;
`;
const Header = styled(Row)`
  display: flex;
  justify-content: space-between;
  border: 2px solid #364fc7;
  padding: 25px 0px;
`;
const Month = styled(Text)`
  font-size: 40px;
  font-weight: bold;
`;
const Days = styled(Row)`
  font-size: 30px;
  height: 40px;
  margin: 10px 0px;
  line-height: 40px;
`;
const Body = styled.div``;
const ColStart = styled(Col)``;
const ColEnd = styled(Col)``;
const NotValid = styled(Text)`
  color: #9e9e9e;
`;
const Disabled = styled(Cell)`
  background-color: #efefef;
`;
const Selected = styled(Cell)``;
const NotValidDiv = styled(Cell)``;
const Valid = styled(Cell)`
  background-color: #f4f7ff;
  border: 1px solid white;
`;
const Arrow = styled(Icon)`
  width: 40px;
  height: 40px;
  color: #364fc7;
  margin: 0px 10px;
  margin-top: 10px;
`;
const DateDate = styled.span`
  font-size: 30px;
`;
