// import { useState } from "react";
import RoomTable from "../features/rooms/RoomTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
// import Button from "../ui/Button";
// import CreateRoomForm from "../features/rooms/CreateRoomForm";

function Rooms() {
  // const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">모든 방들</Heading>
        <p>필터 / 정리</p>
      </Row>

      <Row>
        <RoomTable />
      </Row>
    </>
  );
}

export default Rooms;
