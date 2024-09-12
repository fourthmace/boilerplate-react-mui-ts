// Styled
import { TableCellStyled, TableRowStyled } from "./Styled";

export interface Props {
  text: string;
}

const TableUsersRowInfo = ({ text }: Props) => {
  return (
    <TableRowStyled>
      <TableCellStyled colSpan={4} align="center">
        {text}
      </TableCellStyled>
    </TableRowStyled>
  );
};

export default TableUsersRowInfo;
