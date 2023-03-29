import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Grid } from "@mui/material";

const Widget = (props) => {




  return (
    // <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      // <Grid item xs = {12} sm={12} md={4} lg={4}>
    <div className="widget">
      <div className="left">
        <span className="title">{props.title}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          5 %
        </div>
        <div>
          <p>100</p>
        </div>
        
      </div>
    </div>
    // </Grid>
    // </Grid>
  );
};

export default Widget;