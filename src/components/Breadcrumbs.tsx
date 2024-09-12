import { ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";
// @mui
import {
  Box,
  Link,
  Typography,
  BreadcrumbsProps,
  Breadcrumbs as MUIBreadcrumbs,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// ----------------------------------------------------------------------

type TLink = {
  href?: string;
  name: string;
  icon?: ReactElement;
  isLink?: boolean;
};

export interface Props extends BreadcrumbsProps {
  links: TLink[];
  separator?: ReactElement;
}

export default function Breadcrumbs({ links, separator, ...other }: Props) {
  const list = links.map((link) => (
    <div key={link.name}>
      {link.isLink === true ? (
        <LinkItem link={link} />
      ) : (
        <NonLinkItem link={link} />
      )}
    </div>
  ));

  const selectedSeparator = separator ? (
    separator
  ) : (
    <NavigateNextIcon fontSize="small" />
  );

  return (
    <MUIBreadcrumbs separator={selectedSeparator} {...other}>
      {list}
    </MUIBreadcrumbs>
  );
}

// ----------------------------------------------------------------------

type LinkItemProps = {
  link: TLink;
};

function LinkItem({ link }: LinkItemProps) {
  const { href, name, icon } = link;
  return (
    <Link
      key={name}
      variant="body2"
      component={RouterLink}
      to={href || "#"}
      sx={{
        lineHeight: 1,
        display: "flex",
        alignItems: "center",
        color: "text.primary",
        "& > div": { display: "inherit" },
      }}
    >
      {icon && (
        <Box sx={{ mr: 1, "& svg": { width: 20, height: 20 } }}>{icon}</Box>
      )}
      {name}
    </Link>
  );
}

function NonLinkItem({ link }: LinkItemProps) {
  const { name, icon } = link;
  return (
    <Box
      sx={{
        lineHeight: 1,
        display: "flex",
        alignItems: "center",
        color: "text.primary",
      }}
    >
      {icon && (
        <Box sx={{ mr: 1, "& svg": { width: 20, height: 20 } }}>{icon}</Box>
      )}
      <Typography variant="body2">{name}</Typography>
    </Box>
  );
}
