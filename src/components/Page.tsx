// LIBRARIES
import { Helmet } from "react-helmet-async";
import { forwardRef, ReactNode, useEffect } from "react";
import { Box, BoxProps } from "@mui/material";
// CONFIG
import { APP_NAME } from "@/config";
// HOOKS
import useContextLayout from "@/hooks/useContextLayout";

interface Props extends BoxProps {
  children: ReactNode;
  meta?: ReactNode;
  title: string;
}

const Page = forwardRef<HTMLDivElement, Props>(
  ({ children, title = "", meta, ...other }, ref) => {
    const { updateTopBarTitle } = useContextLayout();

    useEffect(() => {
      if (title && title !== "") {
        updateTopBarTitle(title);
      }
    }, [title]);

    return (
      <>
        <Helmet>
          <title>{`${title} | ${APP_NAME}`}</title>
          {meta}
        </Helmet>

        <Box ref={ref} {...other}>
          {children}
        </Box>
      </>
    );
  }
);

export default Page;
