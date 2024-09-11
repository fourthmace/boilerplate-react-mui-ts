// Libraries
import HomeIcon from "@mui/icons-material/Home";
// Components - global
import Page from "@/components/Page";
import Breadcrumbs from "@/components/Breadcrumbs";
// Components - local
import DashboardProfileForm from "./components/DashboardProfileForm";

const DashboardProfile = () => {
  const breadCrumbsLink = [
    {
      name: "Dashboard",
      href: "/dashboard",
      isLink: true,
      icon: <HomeIcon />,
    },
    {
      name: "Profile",
      href: "",
      isLink: false,
    },
  ];

  return (
    <Page title="Profile" sx={{ padding: 3 }}>
      <Breadcrumbs links={breadCrumbsLink} />

      <DashboardProfileForm />
    </Page>
  );
};

export default DashboardProfile;
