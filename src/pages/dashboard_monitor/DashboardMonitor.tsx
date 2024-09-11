// Libraries
import HomeIcon from "@mui/icons-material/Home";
import Card from "@mui/material/Card";
// Components - global
import Breadcrumbs from "@/components/Breadcrumbs";
import Page from "@/components/Page";
import { Divider, Typography } from "@mui/material";

const BlastingMonitor = () => {
  const breadCrumbsLink = [
    {
      name: "Dashboard",
      href: "",
      isLink: false,
      icon: <HomeIcon />,
    },
    {
      name: "Monitor",
      href: "",
      isLink: false,
    },
  ];

  return (
    <Page title="Monitor" sx={{ padding: 3 }}>
      <Breadcrumbs links={breadCrumbsLink} />

      <Card sx={{ marginTop: 4, padding: 2 }}>
        <Typography variant="h5">
          Kickstart Your Project with Our React + MUI Boilerplate
        </Typography>
        <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
        <Typography variant="body1">
          Jumpstart your web development with our React + MUI Boilerplate—an
          optimized foundation that combines the power of React with the sleek
          design of Material UI. Perfect for developers looking to build
          responsive, modern applications with ease
        </Typography>
      </Card>
    </Page>
  );
};

export default BlastingMonitor;
