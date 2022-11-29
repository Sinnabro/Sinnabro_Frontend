import DayUserList from "../components/DayUserList";

const DayUser = () => {
  const data = [
    { id: "1", name: "시나브로", like: 12321 },
    { id: "2", name: "시나브로", like: 12321 },
    { id: "3", name: "시나브로", like: 12321 },
  ];
  return <DayUserList data={data} />;
};

export default DayUser;
