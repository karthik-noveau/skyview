import React, { useEffect, useState } from "react";

import { Helmet } from "react-helmet";

import { SpaceHeader } from "./space_header";
import { BoardHeader } from "./board_header";
import { ScrollToTop } from "../../common/scroll_to_top_init";

import { DndBoard } from "./dnd_board";
import { columns, tasks } from "./dnd_board/FakeData";

export default function Connect() {
  useEffect(() => {}, []);

  ScrollToTop();
  return (
    <React.Fragment>
      <Helmet>
        <title>add title here</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>

      <SpaceHeader />
      <BoardHeader />
      <DndBoard tasks={tasks} columns={columns} />
    </React.Fragment>
  );
}
