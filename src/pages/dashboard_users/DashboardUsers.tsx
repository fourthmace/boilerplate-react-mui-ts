// Libraries
import { useNavigate } from "react-router";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Grid } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
// Components - global
import Page from "@/components/Page";
import Breadcrumbs from "@/components/Breadcrumbs";
// Components - local
import TableUsers from "./components/TableUsers";
import Search from "./components/Search";
// Provider - local
import { SearchProvider } from "./provider/SearchProvider";

const DashboardUsers = () => {
  const breadCrumbsLink = [
    {
      name: "Dashboard",
      href: "/dashboard",
      isLink: true,
      icon: <HomeIcon />,
    },
    {
      name: "Users",
      href: "",
      isLink: false,
    },
  ];

  // Hooks
  const navigate = useNavigate();

  return (
    <Page title="Users" sx={{ padding: 3 }}>
      <SearchProvider>
        <Breadcrumbs links={breadCrumbsLink} />

        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={8}>
            <Search />
          </Grid>
          <Grid item xs={4} display={"flex"} justifyContent={"flex-end"}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => navigate("/dashboard/users/form")}
            >
              tambah
            </Button>
          </Grid>
          <Grid item xs>
            <TableUsers />
          </Grid>
        </Grid>
      </SearchProvider>
    </Page>
  );
};

export default DashboardUsers;
