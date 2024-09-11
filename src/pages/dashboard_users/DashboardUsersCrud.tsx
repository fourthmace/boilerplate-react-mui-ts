// Libraries
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router";
import { Button, Grid } from "@mui/material";
import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
// Components - global
import Page from "@/components/Page";
import Breadcrumbs from "@/components/Breadcrumbs";
// Components - local
import CrudForm from "./components/CrudForm";

const DashboardUsersCrud = () => {
  const breadCrumbsLink = [
    {
      name: "Dashboard",
      href: "/dashboard",
      isLink: true,
      icon: <HomeIcon />,
    },
    {
      name: "Users",
      href: "/dashboard/users",
      isLink: true,
    },
    {
      name: "Form",
      href: "",
      isLink: false,
    },
  ];

  // Hooks
  const navigate = useNavigate();

  return (
    <Page title="Form Users" sx={{ padding: 3 }}>
      <Breadcrumbs links={breadCrumbsLink} />

      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12}>
          <Button
            variant="text"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/dashboard/users")}
          >
            kembali
          </Button>
        </Grid>
        <Grid item xs={12}>
          <CrudForm />
        </Grid>
      </Grid>
    </Page>
  );
};

export default DashboardUsersCrud;
