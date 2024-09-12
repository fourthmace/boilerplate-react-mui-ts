// Libraries
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
// Components - local
import TableUsersRowInfo from "./TableUsersRowInfo";
import TableUsersRowData from "./TableUsersRowData";
// Styled
import { TableCellStyled, TableRowStyled } from "./Styled";
// Types
import { UserType } from "../models/Types";
// Functions
import { GetUsers } from "../models/Functions";
// Hooks - local
import { useContextSearch } from "../provider/SearchProvider";

const TableUsers = () => {
  // Hooks
  const { keyword } = useContextSearch();

  // state
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [dataTotal, setDataTotal] = useState(0);
  const [dataTable, setDataTable] = useState<UserType[]>([]);

  // fetch data users
  const fetchDataUsers = async () => {
    setIsLoading(true);
    const data = await GetUsers(page, limit, keyword);
    setDataTotal(data.pages);
    setDataTable(data.users);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataUsers();
  }, [page, limit, keyword]);

  // pagination handle
  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(1);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRowStyled>
              <TableCellStyled align="center">NO</TableCellStyled>
              <TableCellStyled align="center">EMAIL</TableCellStyled>
              <TableCellStyled align="center">LEVEL</TableCellStyled>
              <TableCellStyled align="center">ACTION</TableCellStyled>
            </TableRowStyled>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableUsersRowInfo text="loading ..." />
            ) : (
              <>
                {dataTable.length === 0 ? (
                  <TableUsersRowInfo text="data not-found ..." />
                ) : (
                  dataTable.map((row: UserType, index: number) => {
                    return (
                      <TableUsersRowData
                        key={index}
                        no={index++}
                        page={page}
                        dataUser={row}
                        onDeleted={fetchDataUsers}
                      />
                    );
                  })
                )}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[1, 10, 25, 100]}
        component="div"
        count={dataTotal}
        rowsPerPage={limit}
        page={page - 1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default TableUsers;
