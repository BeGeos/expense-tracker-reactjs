import React, { useState } from "react";

// Components
import ListItem from "./List";
import SearchList from "./SearchList";
import DetailModal from "./DetailModal";
import Timeline from "../Generic/Timeline";

export default function Dashboard() {
  const [openDetails, setOpenDetails] = useState(false);
  const [detailData, setDetailData] = useState({});

  const detailsModalClick = () => {
    setOpenDetails(!openDetails);
  };

  return (
    <div className="dashboard">
      <Timeline />
      <DetailModal
        open={openDetails}
        handleClick={detailsModalClick}
        data={detailData}
      />
      <SearchList />
      <ListItem
        period="December 2021"
        rowClick={detailsModalClick}
        setDetails={setDetailData}
      />
      <ListItem
        period="November 2021"
        rowClick={detailsModalClick}
        setDetails={setDetailData}
      />
      <ListItem
        period="October 2021"
        rowClick={detailsModalClick}
        setDetails={setDetailData}
      />
      <ListItem
        period="September 2021"
        rowClick={detailsModalClick}
        setDetails={setDetailData}
      />
    </div>
  );
}
