// GridFactory.tsx
import * as commonImports from "../../../../commonCode/importMRTRelated";
import React from "react";
import * as FlatModel from "./../../../../models/flatModel";

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
  const flatDetailsGridColumns = commonImports.useMemo<
    commonImports.MRT_ColumnDef<FlatModel.IFlatViewModel>[]
  >(
    () => [
      {
        header: "Flat Id",
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
        header: "propertyId",
        accessorKey: "propertyId",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "roomName",
        accessorKey: "roomName",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "roomRent",
        accessorKey: "roomRent",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "roomColorSeparator",
        accessorKey: "roomColorSeparator",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "roomType",
        accessorKey: "roomType",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "roomRemarks",
        accessorKey: "roomRemarks",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "rentCalcMethod",
        accessorKey: "rentCalcMethod",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "electricityBillType",
        accessorKey: "electricityBillType",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "electricityBillMeterName",
        accessorKey: "electricityBillMeterName",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "electricityBillPerUnitCost",
        accessorKey: "electricityBillPerUnitCost",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "electricityBillMeterReading",
        accessorKey: "electricityBillMeterReading",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "electricityBillFixedAmtCost",
        accessorKey: "electricityBillFixedAmtCost",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "waterBillType",
        accessorKey: "waterBillType",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "waterBillMeterName",
        accessorKey: "waterBillMeterName",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "waterBillPerUnitCost",
        accessorKey: "waterBillPerUnitCost",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "waterBillMeterReading",
        accessorKey: "waterBillMeterReading",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "waterBillFixedAmtCost",
        accessorKey: "waterBillFixedAmtCost",
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
  return flatDetailsGridColumns;
};
