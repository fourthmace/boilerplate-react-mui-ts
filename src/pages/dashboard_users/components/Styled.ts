// Libraries
import { styled, TableCell, tableCellClasses, TableRow } from "@mui/material";

export const TableRowStyled = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const TableCellStyled = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.action.focus,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
