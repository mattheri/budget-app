import { List, ListItem } from "@chakra-ui/react";
import SideNav from "components/side-nav/SideNav";
import { FC } from "react";
import { Link } from "react-router-dom";

const Nav: FC = () => {
  return (
    <SideNav
      items={[
        {
          sectionTitle: "Dashboard",
          titleLink: "/",
        },
        {
          sectionTitle: "Cashflow",
          element: (
            <List spacing={3}>
              <ListItem>
                <Link to="expenses">My Expanses</Link>
              </ListItem>
              <ListItem>
                <Link to="incomes">My Incomes</Link>
              </ListItem>
            </List>
          ),
          titleLink: " ",
        },
      ]}
    />
  );
};

export default Nav;
