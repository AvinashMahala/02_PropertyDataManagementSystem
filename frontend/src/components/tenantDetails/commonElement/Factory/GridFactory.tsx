// GridFactory.tsx
import * as commonImports from "../../../../commonCode/importMRTRelated";
import React from "react";
import * as PropertiesModel from "../../../../models/allPropertiesModel";

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
  const ownerDetailsGridColumns = commonImports.useMemo<
    commonImports.MRT_ColumnDef<PropertiesModel.IPropertyDetailsViewModel>[]
  >(
    () => [
      {
        header: "Property Id",
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
        header: "ownerId",
        accessorKey: "ownerId",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "rentReceiptMetaDataId",
        accessorKey: "rentReceiptMetaDataId",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "propertyName",
        accessorKey: "propertyName",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "propertyType",
        accessorKey: "propertyType",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "propertyAddress",
        accessorKey: "propertyAddress",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "propertyTakeRentOf",
        accessorKey: "propertyTakeRentOf",
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
  return ownerDetailsGridColumns;
};
