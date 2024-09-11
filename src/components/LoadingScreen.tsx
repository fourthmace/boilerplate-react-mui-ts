// LIBRARIES
import { m } from "framer-motion";
import { Box, SxProps } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

const RootStyle2 = styled("div")(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 99999,
  width: "100%",
  height: "100%",
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
}));

type Props = {
  show?: boolean;
  sx?: SxProps;
};

export default function LoadingScreen({ show = true, ...other }: Props) {
  return (
    <RootStyle2 {...other}>
      <m.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeatDelay: 1,
          repeat: Infinity,
        }}
      >
        <CircularProgress />
      </m.div>
      <Box
        component={m.div}
        animate={{
          scale: [1.2, 1, 1, 1.2, 1.2],
          rotate: [270, 0, 0, 270, 270],
          opacity: [0.25, 1, 1, 1, 0.25],
          borderRadius: ["25%", "25%", "50%", "50%", "25%"],
        }}
        transition={{ ease: "linear", duration: 3.2, repeat: Infinity }}
        sx={{
          width: 100,
          height: 100,
          borderRadius: "25%",
          position: "absolute",
          border: (theme) =>
            `solid 3px ${alpha(theme.palette.primary.dark, 0.24)}`,
        }}
      />
      <Box
        component={m.div}
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 270, 270, 0, 0],
          opacity: [1, 0.25, 0.25, 0.25, 1],
          borderRadius: ["25%", "25%", "50%", "50%", "25%"],
        }}
        transition={{
          ease: "linear",
          duration: 3.2,
          repeat: Infinity,
        }}
        sx={{
          width: 120,
          height: 120,
          borderRadius: "25%",
          position: "absolute",
          border: (theme) =>
            `solid 8px ${alpha(theme.palette.primary.dark, 0.24)}`,
        }}
      />
    </RootStyle2>
  );
}