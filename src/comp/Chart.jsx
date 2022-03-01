import React from "react";
import { useNavigate } from "react-router-dom";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Chart({ fList }) {
    const navigate= useNavigate();
  return (
    <div className="main">
      <ArrowBackIcon onClick={() => navigate("/main")} />
      <VictoryChart domainPadding={20}>
      <VictoryAxis dependentAxis />
          <VictoryAxis style={{ tickLabels: { fontSize: 5 } }} />
        <VictoryBar data={fList} x="f_desc" y="followers" padding={20}  />
      </VictoryChart>
    </div>
  );
}
