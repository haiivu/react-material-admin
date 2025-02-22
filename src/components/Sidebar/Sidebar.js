import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  Group as GroupIcon,
  ArrowBack as ArrowBackIcon,
  Assignment as AssignmentIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Dashboard", link: "/app/dashboard", icon: <HomeIcon /> },
  { id: 2, label: "Quản lý tài khoản", link: "/app/tables", icon: <GroupIcon /> },
  { id: 3, label: "Quản lý bài đăng", link: "/app/jobs", icon: <AssignmentIcon /> },

];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
      <Drawer
          variant={isPermanent ? "permanent" : "temporary"}
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: isSidebarOpened,
            [classes.drawerClose]: !isSidebarOpened,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: isSidebarOpened,
              [classes.drawerClose]: !isSidebarOpened,
            }),
          }}
          open={isSidebarOpened}
      >
        <div className={classes.toolbar} />
        <div className={classes.mobileBackButton}>
          <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
            <ArrowBackIcon
                classes={{
                  root: classNames(classes.headerIcon, classes.headerIconCollapse),
                }}
            />
          </IconButton>
        </div>
        <List className={classes.sidebarList}>
          {structure.map(link => (
              <SidebarLink
                  key={link.id}
                  location={location}
                  isSidebarOpened={isSidebarOpened}
                  {...link}
              />
          ))}
        </List>
      </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
