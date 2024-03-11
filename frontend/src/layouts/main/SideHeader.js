import { Box, Divider, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React from "react";

const SideHeader = ({title,one,two,three}) => {
  return (
    <Box style={{ paddingTop: '12px', paddingBottom: '12px'}}> 
      <Typography variant="h3" style={{ fontSize: "18px", fontWeight: "700", paddingLeft: '20px'}}>
        {title}
      </Typography>
      <ul style={{ fontSize: "14px", padding: "0px" }}>
        <li
          style={{ display: "flex", alignItems: "center", justifyContent: 'space-between', cursor: "pointer", paddingRight: '24px', paddingLeft: '24px', paddingTop: '8px', paddingBottom: '8px' }}
        >
          {one}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>
        <li
          style={{ display: "flex", alignItems: "center", justifyContent: 'space-between', cursor: "pointer", paddingRight: '24px', paddingLeft: '24px', paddingTop: '8px', paddingBottom: '8px' }}
        >
          {two}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>
        <li
          style={{ display: "flex", alignItems: "center", justifyContent: 'space-between', cursor: "pointer", paddingRight: '24px', paddingLeft: '24px', paddingTop: '8px', paddingBottom: '8px' }}
        >
          {three}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>
        <Divider />
      </ul>
    </Box>
  );
};

export default SideHeader;
