import * as commonImports from "../../../commonCode/CommonImports";
import React from "react";
import * as RentReceiptMDataDetailsModel from "../../../models/rentReceiptMetaDataDetails";
import * as UserModel from "../../../models/user";

interface CreateModalProps {
  columns: commonImports.MRT_ColumnDef<RentReceiptMDataDetailsModel.IRentReceiptMetaDataDetailsViewModel>[];
  onClose: () => void;
  onSubmit: (values: RentReceiptMDataDetailsModel.IRentReceiptMetaDataDetailsViewModel) => void;
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

  const [selectedOwnerType, setSelectedOwnerType] = commonImports.useState("");
  const [errors, setErrors] = commonImports.useState<{ [key: string]: string }>(
    {}
  );

  const validate = () => {
    let tempErrors = {};
    tempErrors = {
      ...tempErrors,
      rentReceiptMetaDataRefNm: values.rentReceiptMetaDataRefNm ? "" : "This field is required",
      logo: values.logo ? "" : "This field is required",
      bk_details_bk_name: values.bk_details_bk_name ? "" : "This field is required",
      bk_details_bk_acc_number: values.bk_details_bk_acc_number ? "" : "This field is required",
      bk_details_bk_ifsc: values.bk_details_bk_ifsc ? "" : "This field is required",
      bk_details_acc_holder_name: values.bk_details_acc_holder_name ? "" : "This field is required",
      wallet_details_type: values.wallet_details_type ? "" : "This field is required",
      wallet_details_name: values.wallet_details_name ? "" : "This field is required",
      wallet_details_upi_id: values.wallet_details_upi_id ? "" : "This field is required",
      will_generate_direct_upi_payment_links: values.will_generate_direct_upi_payment_links ? "" : "This field is required",
      payment_qr_code: values.payment_qr_code ? "" : "This field is required",
      payment_signature: values.payment_signature ? "" : "This field is required",
      payment_watermark: values.payment_watermark ? "" : "This field is required",
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
        Create New Rent Receipt Meta Data
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
          Create New Rent Receipt Meta Data
        </commonImports.Button>
      </commonImports.DialogActions>
    </commonImports.Dialog>
  );
};
