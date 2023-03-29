import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import DrawerHeader from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
let linkTo = [
    "/",
    "/all-students",
    "/create-student",
    "/view-attendence",
    "/attendance-report",
    "/send-email",
    "/take-attendance",
    "/train-data"
]

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    // left: false,
    // bottom: false,
    // right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Dashboard', 'All Student', 'Add Student', 'View Attendance'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link style = {{textDecoration:"none"}}to={text === 'Dashboard' ? linkTo[0] : text === 'All Student' ? linkTo[1] : text === 'Add Student' ? linkTo[2] : linkTo[3]}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Attendance Report', 'Send Email', 'Take Attedance','Train Data'].map((text, index) => (
            <ListItem key={text} disablePadding>
               
            <ListItemButton >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <Link style = {{textDecoration:"none"}}to={text === 'Attendance Report'? linkTo[4] : text === 'Send Email' ? linkTo[5] : text=== 'Take Attedance'? linkTo[6] : linkTo[7]}>
                  <ListItemText primary={text} />
                  </Link>
                </ListItemButton>
               
            </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><ListOutlinedIcon/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
