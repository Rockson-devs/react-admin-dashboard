// import React from 'react'
import { useState } from "react";
import { Sidebar as Side, Menu, MenuItem } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import LightModeOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

// const Item = ({ title, to, icon, selected, setSelected}) => {
//      const theme = useTheme();
//      const colors = tokens(theme.palette.mode);
//      return (
//       <MenuItem
//           active={selected === title}
//           style={{ color:colors.grey[100]}}
//           onClick={() => setSelected(title)}
//           icon={icon}
//       >
//         <Typography>{title}</Typography>
//         <Link to={to}/>
//       </MenuItem>
//      )
// }

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
    // sx={{
    //   "& .pro-sidebar-inner": {
    //     background: `${colors.primary[400]} !important`,
    //   },
    //   "& .pro-icon-wrapper": {
    //     backgroundColor: "transparent !important",
    //   },
    //   "& .pro-inner-item": {
    //     padding: "5px 35px 5px 20px !important",
    //   },
    //   "& .pro-inner-item:hover": {
    //     color: "#869dfb !important",
    //   },
    //   "& .pro-menu-item.active": {
    //     color: "#6870fa !important",
    //   },
    // }}
    >
      <Side
        collapsed={isCollapsed}
        style={{
          display: "flex",
          width: "18vw",
          backgroundColor: colors.primary[400],
          color: "black",
          height: "160vh",
        }}
      >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="5px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="70px"
                  height="70px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Rockson
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}
          {/* MENU ITEMS */}
          <Menu paddingLeft={isCollapsed ? undefined : "100%"}>
            <MenuItem
              title=" Dashboard"
              component={<Link to="/" />}
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              {!isCollapsed && <Typography>Dashboard</Typography>}{" "}
            </MenuItem>

            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>

            <MenuItem
              title="Manage Team"
              component={<Link to="/team" />}
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              {!isCollapsed && <Typography>Manage Team</Typography>}{" "}
            </MenuItem>

            <MenuItem
              title="Contacts Information"
              component={<Link to="/contacts" />}
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              {" "}
              {!isCollapsed && (
                <Typography>Contacts Information</Typography>
              )}{" "}
            </MenuItem>

            <MenuItem
              title="Invoices Balances"
              component={<Link to="/invoices" />}
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              {" "}
              {!isCollapsed && <Typography>Invoices Balances</Typography>}{" "}
            </MenuItem>

            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>

            <MenuItem
              title="Profile Form"
              component={<Link to="/form" />}
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              {" "}
              {!isCollapsed && <Typography>Profile Form</Typography>}{" "}
            </MenuItem>

            <MenuItem
              title="Calendar"
              component={<Link to="/calendar" />}
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              {" "}
              {!isCollapsed && <Typography>Calendar</Typography>}{" "}
            </MenuItem>

            <MenuItem
              title="FAQ Page"
              component={<Link to="/faq" />}
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              {" "}
              {!isCollapsed && <Typography>FAQ Page</Typography>}{" "}
            </MenuItem>

            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts{" "}
            </Typography>
            <MenuItem
              title="Bar Chart"
              component={<Link to="/bar" />}
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              {" "}
              {!isCollapsed && <Typography>Bar Chart</Typography>}{" "}
            </MenuItem>

            <MenuItem
              title="Pie Chart"
              component={<Link to="/pie" />}
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              {" "}
              {!isCollapsed && <Typography>Pie Chart</Typography>}{" "}
            </MenuItem>

            <MenuItem
              title="Line Chart"
              component={<Link to="/line" />}
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              {" "}
              {!isCollapsed && <Typography>Line Chart</Typography>}{" "}
            </MenuItem>

            <MenuItem
              title="Geography Chart"
              component={<Link to="/geography" />}
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              {" "}
              {!isCollapsed && <Typography>Geography Chart</Typography>}{" "}
            </MenuItem>
          </Menu>
        </Menu>
      </Side>
    </Box>
  );
};

export default Sidebar;
