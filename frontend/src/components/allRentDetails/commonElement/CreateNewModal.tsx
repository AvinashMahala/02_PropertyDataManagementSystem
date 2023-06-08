import * as commonImports from "../../../commonCode/CommonImports";
import React from "react";
import * as AllRentDetailsModel from "../../../models/allRentDetailsModel";
import * as UserModel from "../../../models/user";

interface CreateModalProps {
  columns: commonImports.MRT_ColumnDef<AllRentDetailsModel.IRentDetailsViewModel>[];
  onClose: () => void;
  onSubmit: (values: AllRentDetailsModel.IRentDetailsViewModel) => void;
  open: boolean;
  usersArr:UserModel.User[];
}

//example of creating a mui dialog modal for creating new rows
export const CreateNewModal = ({
  open,
  columns,
  onClose,
  onSubmit,
  usersArr

}: CreateModalProps) => {
  const [values, setValues] = commonImports.useState<any>(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = "";
      return acc;
    }, {} as any)
  );

  const [selectedRentDetail, setSelectedRentDetail] = commonImports.useState("");
  const [errors, setErrors] = commonImports.useState<{ [key: string]: string }>(
    {}
  );

  const validate = () => {
    let tempErrors = {};
    tempErrors = {
      ...tempErrors,
      flatId: values.flatId ? values.flatId : "This field is required",
      tenantId: values.tenantId ? values.tenantId : "This field is required",
      rentStartDate: values.rentStartDate ? values.rentStartDate : "This field is required",
      rentEndDate: values.rentEndDate ? values.rentEndDate : "This field is required",
      rentAmount: values.rentAmount ? values.rentAmount : "This field is required",
      buildingMaintenanceAmount: values.buildingMaintenanceAmount ? values.buildingMaintenanceAmount : "This field is required",
      previousBalance: values.previousBalance ? values.previousBalance : "This field is required",
      ebillPreviousMeterReading: values.ebillPreviousMeterReading ? values.ebillPreviousMeterReading : "This field is required",
      ebillPreviousMeterReadingDate: values.ebillPreviousMeterReadingDate ? values.ebillPreviousMeterReadingDate : "This field is required",
      ebillNewMeterReading: values.ebillNewMeterReading ? values.ebillNewMeterReading : "This field is required",
      ebillNewMeterReadingDate: values.ebillNewMeterReadingDate ? values.ebillNewMeterReadingDate : "This field is required",
      ebillMultiplier: values.ebillMultiplier ? values.ebillMultiplier : "This field is required",
      ebillUnitsConsumed: values.ebillUnitsConsumed ? values.ebillUnitsConsumed : "This field is required",
      ebillAmount: values.ebillAmount ? values.ebillAmount : "This field is required",
      totalAmount: values.totalAmount ? values.totalAmount : "This field is required",
      paidAmount: values.paidAmount ? values.paidAmount : "This field is required",
      currentBalance: values.currentBalance ? values.currentBalance : "This field is required",
      paymentDate: values.paymentDate ? values.paymentDate : "This field is required",
      paymentMode: values.paymentMode ? values.paymentMode : "This field is required",
      paymentReference: values.paymentReference ? values.paymentReference : "This field is required",
      paymentRemarks: values.paymentRemarks ? values.paymentRemarks : "This field is required",
      paymentStatus: values.paymentStatus ? values.paymentStatus : "This field is required",
      paymentReceipt: values.paymentReceipt ? values.paymentReceipt : "This field is required",
      paymentReceiptDate: values.paymentReceiptDate ? values.paymentReceiptDate : "This field is required",
      paymentReceiptRemarks: values.paymentReceiptRemarks ? values.paymentReceiptRemarks : "This field is required",
      paymentReceiptStatus: values.paymentReceiptStatus ? values.paymentReceiptStatus : "This field is required",

    };
    setErrors({
      ...tempErrors,
    });

    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = () => {
    //put your validation logic here
    if (validate()) {
      onSubmit(values);
      onClose();
    }
  };

  return (
    <commonImports.Dialog open={open}>
      <commonImports.DialogTitle textAlign="center">
      Create New Rent Record
      </commonImports.DialogTitle>
      <commonImports.DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <commonImports.Stack
            sx={{
              width: "100%",
              minWidth: { xs: "300px", sm: "360px", md: "400px" },
              gap: "1.5rem",
            }}
          >
            {/* {columns
              .filter((column) => column.accessorKey === "userId")
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                    label="User Id"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedOwnerType}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                      });
                      setSelectedOwnerType(event.target.value);
                    }}
                    displayEmpty
                    sx={{ minWidth: 120 }}
                  >
                    <commonImports.MenuItem value="" disabled>
                      Select a User
                    </commonImports.MenuItem>
                    {usersArr.map((option) => (
                      <commonImports.MenuItem
                        key={option._id}
                        value={option._id}
                      >
                        {option.username + " - " + option.role}
                      </commonImports.MenuItem>
                    ))}
                  </commonImports.Select>
                  <commonImports.FormHelperText>
                    {column.accessorKey &&
                    errors.hasOwnProperty(column.accessorKey)
                      ? errors[column.accessorKey]
                      : ""}
                  </commonImports.FormHelperText>
                </commonImports.FormControl>
              ))} */}

            {columns
              .filter(
                (column) =>
                  column.accessorKey !== "_id" &&
                  column.accessorKey !== "createdAt" &&
                  column.accessorKey !== "updatedAt"
              )
              .map((column) => (
                <commonImports.TextField
                  key={column.accessorKey}
                  label={column.header}
                  name={column.accessorKey}
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                  error={column.accessorKey && !!errors[column.accessorKey]}
                  helperText={
                    column.accessorKey &&
                    errors.hasOwnProperty(column.accessorKey)
                      ? errors[column.accessorKey]
                      : ""
                  }
                />
              ))}
          </commonImports.Stack>
        </form>
      </commonImports.DialogContent>
      <commonImports.DialogActions sx={{ p: "1.25rem" }}>
        <commonImports.Button onClick={onClose}>Cancel</commonImports.Button>
        <commonImports.Button
          color="secondary"
          onClick={handleSubmit}
          variant="contained"
        >
          Create New Rent Record
        </commonImports.Button>
      </commonImports.DialogActions>
    </commonImports.Dialog>
  );
};
