// GridFactory.tsx
import * as commonImports from "../../../../commonCode/importMRTRelated";
import React from "react";
import * as MaintenanceRequestModel from "../../../../models/maintenanceRequestModel";

type FieldConfig = {
  header: string;
  accessorKey: string;
  editable?: boolean;
  renderCell?: (cell: any) => JSX.Element;
};

export const GridFactory = (
  getCommonEditTextFieldProps: any,
  usersArr: any[],
  validationErrors: any,
  setValidationErrors: any
) => {
  const maintenanceRequestsGridColumns = commonImports.useMemo<
    commonImports.MRT_ColumnDef<MaintenanceRequestModel.IMaintenanceRequestViewModel>[]
  >(
    () => [
      {
        header: "Maintenance Request Id",
        accessorKey: "_id",
        enableColumnOrdering: false, //disable column ordering on this column
        enableSorting: false,
        enableHiding: false, //disable hiding on this column
        enableEditing: false, //disable editing on this column
        // editable: "never",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(
            cell,
            validationErrors,
            setValidationErrors,
            usersArr
          ),
        }),
      },
      {
        header: "flatId",
        accessorKey: "flatId",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "tenantId",
        accessorKey: "tenantId",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "startDate",
        accessorKey: "startDate",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "endDate",
        accessorKey: "endDate",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "priority",
        accessorKey: "priority",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "amount",
        accessorKey: "amount",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "status",
        accessorKey: "status",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "tenantNotes",
        accessorKey: "tenantNotes",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "ownerNotes",
        accessorKey: "ownerNotes",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Created Date",
        accessorKey: "createdAt",
        //customize normal cell render on normal non-aggregated rows
        Cell: ({ cell }) => (
          <>{commonImports.formatDate(cell.getValue<string>())}</>
        ),
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Updated Date",
        accessorKey: "updatedAt",
        //customize normal cell render on normal non-aggregated rows
        Cell: ({ cell }) => (
          <>{commonImports.formatDate(cell.getValue<string>())}</>
        ),
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
    ],
    [getCommonEditTextFieldProps, usersArr]
  );
  return maintenanceRequestsGridColumns;
};
