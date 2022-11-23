import React from "react";
import Top1 from "./Top1";
import Top2 from "./Top2";
import Top3 from "./Top3";
import Top4 from "./Top4";
import Top5 from "./Top5";
import Top6 from "./Top6";
import Top7 from "./Top7";
import Top8 from "./Top8";
import Top9 from "./Top9";
import Top10 from "./Top10";

const TopIndex = ({ index }) => {
  switch (index) {
    case 1:
      return <Top1 />;
    case 2:
      return <Top2 />;
    case 3:
      return <Top3 />;
    case 4:
      return <Top4 />;
    case 5:
      return <Top5 />;
    case 6:
      return <Top6 />;
    case 7:
      return <Top7 />;
    case 8:
      return <Top8 />;
    case 9:
      return <Top9 />;
    case 10:
      return <Top10 />;
  }
};

export default TopIndex;
