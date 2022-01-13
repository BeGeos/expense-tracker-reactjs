import React from "react";

const testData = {
  amount: 1230,
  date: "10/12/2020",
  category: "Food",
};
const testData2 = {
  amount: 1455,
  date: "10/11/2020",
  category: "Clothes",
};

const testData3 = {
  amount: 300,
  date: "08/08/2020",
  category: "Entertinment",
};

function Row({ _id, data, rowClick, fillDetails }) {
  return (
    <div
      className="row"
      onClick={() => {
        rowClick();
        fillDetails(data);
      }}
    >
      <div className="amount">{data.amount} $</div>
      <div className="date">{data.date}</div>
      <div className="category">{data.category}</div>
    </div>
  );
}

export default function ListItem({ period, data, rowClick, setDetails }) {
  const [month, year] = period.split(/\s+/);

  return (
    <div className="list__item" id={month === "December" ? year : undefined}>
      <h2 className="list__header">{period}</h2>
      <div className="list__title">
        <div>Amount</div>
        <div>Date</div>
        <div>Category</div>
      </div>
      <Row rowClick={rowClick} fillDetails={setDetails} data={testData} />
      <Row rowClick={rowClick} fillDetails={setDetails} data={testData2} />
      <Row rowClick={rowClick} fillDetails={setDetails} data={testData3} />
      <div className="list__total">
        <h3>Total: 2.300,20 $</h3>
      </div>
      <span className="total__tooltip">
        Break this amount down in the analytics
      </span>
    </div>
  );
}
