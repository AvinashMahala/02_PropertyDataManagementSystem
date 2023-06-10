// GridFactory.tsx
import * as commonImports from "../../../../commonCode/CommonImports";
import React from "react";
import * as FlatModel from "./../../../../models/flatModel";
import * as CommonUtils from "../../../../utils/commonUtils";
import * as CommonUIRenderers from "../../../../utils/CommonUiRenderers";

import flatsModuleCss from "./../../../../styles/flats.module.css"; 

type FieldConfig = {
  header: string;
  accessorKey: string;
  editable?: boolean;
  renderCell?: (cell: any) => JSX.Element;
};


export const GridFactory = (
  getCommonEditTextFieldProps: any,
  propertiesArr: any[],
  validationErrors: any,
  setValidationErrors: any,
  flatsArr:any
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
            propertiesArr
          ),
        }),
      },
      {
        header: "Property Name",
        accessorKey: "propertyId",
        fontsize: '20px', // Define the desired font size for this column
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        //customize normal cell render on normal non-aggregated rows
        Cell: ({ cell }) => (
          <>{CommonUtils.formatColumnFromArr("_id",cell.getValue<string>(),propertiesArr,"propertyName")}</>
        ),
      },
      {
        header: "Room Name",
        accessorKey: "roomName",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        
      },
      {
        header: "Room Rent",
        accessorKey: "roomRent",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Room Color Separator",
        accessorKey: "roomColorSeparator",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
         //customize normal cell render on normal non-aggregated rows
         Cell: ({ cell }) => (
          <><div>
          {/* Render the color div */}
          {CommonUIRenderers.convertToColorDiv(cell.getValue<string>())}
        </div></>
        ),
      },
      {
        header: "Room Type",
        accessorKey: "roomType",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        //customize normal cell render on normal non-aggregated rows
        Cell: ({ cell }) => (
          <><div className={flatsModuleCss.roomTypeGridCol}>
          {/* Render the color div */}
          {CommonUIRenderers.getRoomTypeIcon(cell.getValue<string>())}
          <span className={flatsModuleCss.roomTypeGridColValue}>{cell.getValue<string>()}</span>
          
        </div></>
        ),
      },
      {
        header: "Room Remarks",
        accessorKey: "roomRemarks",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Rent Calculation Method",
        accessorKey: "rentCalcMethod",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Electricity Bill Type",
        accessorKey: "electricityBillType",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Electricity Bill Meter Name",
        accessorKey: "electricityBillMeterName",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Electricity Bill Per Unit Cost",
        accessorKey: "electricityBillPerUnitCost",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Electricity Bill Meter Reading",
        accessorKey: "electricityBillMeterReading",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Electricity Bill Fixed Amount",
        accessorKey: "electricityBillFixedAmtCost",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Water Bill Type",
        accessorKey: "waterBillType",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Water Bill Meter Name",
        accessorKey: "waterBillMeterName",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Water Bill Per Unit Cost",
        accessorKey: "waterBillPerUnitCost",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Water Bill Meter Reading",
        accessorKey: "waterBillMeterReading",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        header: "Water Bill Fixed Cost",
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
    [getCommonEditTextFieldProps, propertiesArr,flatsArr]
  );
  return flatDetailsGridColumns;
};
