import { useNavigate } from "react-router-dom";
import { Trans } from "react-i18next";
import { Box, Button } from "@mui/material";
import { get } from "lodash";

import { LayoutMain, PaginationTable, SearchInput } from "components";
import { Add } from "assets/icons";

// interface IBookType {
//   createdAt: string;
//   updatedAt: string;
//   name: string;
//   status: "active" | "inactive";
//   orderNumber: number;
// }

const BooksList = () => {
  const navigate = useNavigate();

  const goToAdd = () => {
    navigate("/books/add");
  };

  const handleRowClick = (item: any) => {
    navigate(`/books/edit/${get(item, "id")}`);
  };

  return (
    <LayoutMain>
      <Box id="filter-wrapper-id">
        <Box display="flex" justifyContent="space-between" pb="20px">
          <Box>
            <Button
              size="large"
              variant="contained"
              onClick={goToAdd}
              startIcon={<Add />}
            >
              <Trans>Add</Trans>
            </Button>
          </Box>
          <Box>
            <SearchInput />
          </Box>
        </Box>
      </Box>
      <PaginationTable
        isChecked={false}
        onRowClick={handleRowClick}
        columns={[
          {
            width: 350,
            headerKey: "Title",
            field: "title",
          },
          {
            header: "Author",
            field: "author",
          },
          {
            header: "Published",
            field: "published",
          },
          {
            header: "Pages",
            field: "pages",
          },
        ]}
      />
    </LayoutMain>
  );
};

export default BooksList;
