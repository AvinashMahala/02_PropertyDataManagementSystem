import * as commonImports from "../../../commonCode/importMRTRelated";
import React from "react";
import * as TenantModel from "../../../models/tenantModel";
import * as UserModel from "../../../models/user";

interface CreateModalProps {
  columns: commonImports.MRT_ColumnDef<TenantModel.ITenantViewModel>[];
  onClose: () => void;
  onSubmit: (values: TenantModel.ITenantViewModel) => void;
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

  const [selectedTenant, setSelectedTenant] = commonImports.useState("");
  const [errors, setErrors] = commonImports.useState<{ [key: string]: string }>(
    {}
  );

  const validate = () => {
    let tempErrors = {};
    tempErrors = {
      ...tempErrors,
      flatId: values.flatId ? "" : "This field is required",
      Photo: values.Photo ? "" : "This field is required",
      Salutation: values.Salutation ? "" : "This field is required",
      Name: values.Name ? "" : "This field is required",
      Profession: values.Profession ? "" : "This field is required",
      NoOfPeople: values.NoOfPeople ? "" : "This field is required",
      NativeAddress: values.NativeAddress ? "" : "This field is required",
      WorkAddress: values.WorkAddress ? "" : "This field is required",
      PrimaryPhNo: values.PrimaryPhNo ? "" : "This field is required",
      SecondaryPhNo: values.SecondaryPhNo ? "" : "This field is required",
      Email: values.Email ? "" : "This field is required",
      DepositAmount: values.DepositAmount ? "" : "This field is required",
      DepositPaidDate: values.DepositPaidDate ? "" : "This field is required",
      Balance: values.Balance ? "" : "This field is required",
      MoveInDate: values.MoveInDate ? "" : "This field is required",
      StartRentFromDate: values.StartRentFromDate ? "" : "This field is required",
      LeaseType: values.LeaseType ? "" : "This field is required",
      FixedLeaseStartDate: values.FixedLeaseStartDate ? "" : "This field is required",
      FixedLeasePeriod: values.FixedLeasePeriod ? "" : "This field is required",
      FixedLeasePeriodType: values.FixedLeasePeriodType ? "" : "This field is required",
      EmergencyContactName: values.EmergencyContactName ? "" : "This field is required",
      EmergencyContactNo: values.EmergencyContactNo ? "" : "This field is required",
      EmergencyContactRelation: values.EmergencyContactRelation ? "" : "This field is required",
      ExtraService: values.ExtraService ? "" : "This field is required",
      createdAt: values.createdAt ? "" : "This field is required",
      updatedAt: values.updatedAt ? "" : "This field is required",
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
        Create New Tenant
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
          Create New Tenant
        </commonImports.Button>
      </commonImports.DialogActions>
    </commonImports.Dialog>
  );
};
