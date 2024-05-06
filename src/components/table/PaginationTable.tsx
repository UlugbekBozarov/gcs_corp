import { FC, useMemo, useState } from "react";
import { Box, Card, Table } from "@mui/material";
import { get } from "lodash";

import { useResize } from "hooks";
import { IStatus, PaginationTableColumnProps } from "types";

import Header from "./header/Header";
import Body from "./body/Body";
import Footer from "./footer/Footer";

export type ITableData = {
  data: Array<any>;
  total: number;
  status: IStatus;
  error?: any;
};

export type ICheckedType = {
  all: boolean;
  others: Array<string>;
};

export type ITabsValue = {
  value?: number;
  valueKey?: string | number | boolean;
  labelKey: string;
  color?:
    | "primary"
    | "success"
    | "warning"
    | "info"
    | "secondary"
    | "error"
    | undefined;
};

interface PaginationTableProps {
  isChecked?: boolean | undefined;
  isIndexing?: boolean | undefined;
  dataKey?: string;
  filterContentId?: string;
  paramFields?: Array<{
    key: string;
    field: string;
  }>;
  onRowClick?: (item: any) => void;
  columns?: Array<PaginationTableColumnProps>;
  isLoading?: boolean;
  isSuccess?: boolean;
  data?: Array<object>;
  error?: any;
}

const SORT_NAME = "sort";

const PaginationTable: FC<PaginationTableProps> = ({
  isIndexing = false,
  isChecked = true,
  dataKey = "id",
  filterContentId = "filter-wrapper-id",
  onRowClick,
  paramFields = [],
  columns,
  isLoading = false,
  isSuccess = false,
  data = [],
  error,
}) => {
  const { height } = useResize(filterContentId);

  const [checked, setChecked] = useState<ICheckedType>({
    all: false,
    others: [],
  });

  const cellLength = useMemo(() => {
    return (
      get(columns, "length", 0) + (isIndexing ? 1 : 0) + (isChecked ? 1 : 0)
    );
  }, [columns, isIndexing, isChecked]);

  const handleRowClick = (item: any) => () => {
    if (onRowClick) {
      onRowClick(item);
    }
  };

  const handleChangeChecked = (id: string) => () => {
    if (id === "all") {
      setChecked((prev) => ({
        all: get(prev, "others.length", 0) ? true : !get(prev, "all", false),
        others: [],
      }));
    } else {
      setChecked((prev) => ({
        all: get(prev, "all", false),
        others: prev?.others?.includes(id)
          ? [...get(prev, "others", []).filter((value) => value !== id)]
          : [...get(prev, "others", []), id],
      }));
    }
  };

  return (
    <Box height={`calc(100vh - ${(height || 0) + 140}px)`}>
      <Card
        sx={{
          position: "relative",
          maxWidth: "100%",
          height: "100%",
          overflow: "auto",
        }}
      >
        <Table sx={{ height: "100%" }}>
          <Header
            isChecked={isChecked}
            checked={checked}
            onChecked={handleChangeChecked}
            isIndexing={isIndexing}
            // sort={sort}
            sortName={SORT_NAME}
            columns={columns}
          />
          <Body
            isChecked={isChecked}
            checked={checked}
            onChecked={handleChangeChecked}
            isIndexing={isIndexing}
            data={{
              data: data,
              status: isLoading ? "loading" : isSuccess ? "success" : "failed",
              total: get(data, "length", 0),
              error: error,
            }}
            cellLength={cellLength}
            onRowClick={handleRowClick}
            dataKey={dataKey}
            params={{}}
            columns={columns}
          />
          {/* <Footer dataLength={0} colSpan={cellLength} /> */}
          <Footer dataLength={get(data, "length", 0)} colSpan={cellLength} />
        </Table>
      </Card>
    </Box>
  );
};

export default PaginationTable;
