import { useNavigate } from "react-router";
import { Box, IconButton } from "@mui/material";
import {
  Delete as DeleteIcon,
  BorderColor as BorderColorIcon,
} from "@mui/icons-material";
// Styled
import { TableCellStyled, TableRowStyled } from "./Styled";
// Hooks
import useContextAlertConfirm from "@/hooks/useContextAlertConfirm";
// Types
import { UserType } from "../models/Types";
// Functions
import { DeleteUsers } from "../models/Functions";

export interface Props {
  no: number;
  page: number;
  dataUser: UserType;
  onDeleted: () => void;
}

const TableUsersRowData = ({ no, page, dataUser, onDeleted }: Props) => {
  // Hooks
  const { showAlert } = useContextAlertConfirm();
  const navigate = useNavigate();

  // Handle
  const handleDelete = (userId: string) => {
    showAlert(
      "Delete user",
      "Anda yakin ingin menghapus data ini?",
      async () => {
        await DeleteUsers(userId);
        onDeleted();
      }
    );
  };

  return (
    <TableRowStyled>
      <TableCellStyled align="center">{no + page}</TableCellStyled>
      <TableCellStyled align="center">{dataUser.email}</TableCellStyled>
      <TableCellStyled align="center">
        {dataUser.user_level.name}
      </TableCellStyled>
      <TableCellStyled align="center">
        {
          <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
            <IconButton
              color="warning"
              size="small"
              onClick={() =>
                navigate(`/dashboard/users/form/${dataUser.user_id}`)
              }
            >
              <BorderColorIcon fontSize="small" />
            </IconButton>
            <IconButton
              color="error"
              size="small"
              onClick={() => handleDelete(dataUser.user_id)}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        }
      </TableCellStyled>
    </TableRowStyled>
  );
};

export default TableUsersRowData;
