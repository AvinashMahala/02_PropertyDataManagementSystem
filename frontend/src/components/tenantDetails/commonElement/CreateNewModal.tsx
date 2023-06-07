import * as commonImports from "../../../commonCode/importMRTRelated";
import React from "react";
import * as TenantModel from "../../../models/tenantModel";
import * as UserModel from "../../../models/user";
import * as FlatsModel from "../../../models/flatModel";

interface CreateModalProps {
  columns: commonImports.MRT_ColumnDef<TenantModel.ITenantViewModel>[];
  onClose: () => void;
  onSubmit: (values: TenantModel.ITenantViewModel) => void;
  open: boolean;
  flatsArr: FlatsModel.IFlatViewModel[];
}

//example of creating a mui dialog modal for creating new rows
export const CreateNewModal = ({
  open,
  columns,
  onClose,
  onSubmit,
  flatsArr,
}: CreateModalProps) => {
  const [values, setValues] = commonImports.useState<any>(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = "";
      return acc;
    }, {} as any)
  );

  const [selectedFlat, setSelectedFlat] = commonImports.useState("");
  const [selectedSalutation, setSelectedSalutation] = commonImports.useState("");
  const [selectedProfession, setSelectedProfession] = commonImports.useState("");
  const [selectedLeaseType, setSelectedLeaseType] = commonImports.useState("");
  const [selectedLeasePeriodType, setSelectedLeasePeriodType] = commonImports.useState("");
  const [selectedExtraService, setSelectedExtraService] = commonImports.useState("");

  const [errors, setErrors] = commonImports.useState<{ [key: string]: string }>(
    {}
  );

  const validate = () => {
    let tempErrors = {};
    tempErrors = {
      ...tempErrors,
      flatId: values.flatId ? "" : "This field is required",
      // Photo: values.Photo ? "" : "This field is required",
      Salutation: values.Salutation ? "" : "This field is required",
      Name: values.Name ? "" : "This field is required",
      Profession: values.Profession ? "" : "This field is required",
      NoOfPeople: values.NoOfPeople ? "" : "This field is required",
      NativeAddress: values.NativeAddress ? "" : "This field is required",
      WorkAddress: values.WorkAddress ? "" : "This field is required",
      PrimaryPhNo: values.PrimaryPhNo ? "" : "This field is required",
      // SecondaryPhNo: values.SecondaryPhNo ? "" : "This field is required",
      Email: values.Email ? "" : "This field is required",
      DepositAmount: values.DepositAmount ? "" : "This field is required",
      DepositPaidDate: values.DepositPaidDate ? "" : "This field is required",
      Balance: values.Balance ? "" : "This field is required",
      MoveInDate: values.MoveInDate ? "" : "This field is required",
      StartRentFromDate: values.StartRentFromDate
        ? ""
        : "This field is required",
      LeaseType: values.LeaseType ? "" : "This field is required",
      // FixedLeaseStartDate: values.FixedLeaseStartDate ? "" : "This field is required",
      // FixedLeasePeriod: values.FixedLeasePeriod ? "" : "This field is required",
      // FixedLeasePeriodType: values.FixedLeasePeriodType ? "" : "This field is required",
      EmergencyContactName: values.EmergencyContactName
        ? ""
        : "This field is required",
      EmergencyContactNo: values.EmergencyContactNo
        ? ""
        : "This field is required",
      EmergencyContactRelation: values.EmergencyContactRelation
        ? ""
        : "This field is required",
      ExtraService: values.ExtraService ? "" : "This field is required",
      // createdAt: values.createdAt ? "" : "This field is required",
      // updatedAt: values.updatedAt ? "" : "This field is required",
    };

            // Validate for metered if it is required
  if (values.LeaseType === "fixedAndDefined" && (!values.FixedLeaseStartDate || !values.FixedLeasePeriod || !values.FixedLeasePeriodType)) {
    if(!values.FixedLeaseStartDate){
      tempErrors = {
        ...tempErrors,
        FixedLeaseStartDate: "This field is required",
      };
    }
    if(!values.FixedLeasePeriod){
      tempErrors = {
        ...tempErrors,
        FixedLeasePeriod: "This field is required",
      };
    }
    if(!values.FixedLeasePeriodType){
      tempErrors = {
        ...tempErrors,
        FixedLeasePeriodType: "This field is required",
      };
    }
  }
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

            {columns
              .filter((column) => column.accessorKey === "flatId")
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                    label="Room Id"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedFlat}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                      });
                      setSelectedFlat(event.target.value);
                    }}
                    displayEmpty
                    sx={{ minWidth: 120 }}
                    MenuProps={{
                      style: {
                        maxHeight: 500,
                      },
                    }}
                  >
                    <commonImports.MenuItem value="" disabled>
                      Select a Room of A Property
                    </commonImports.MenuItem>
                    {flatsArr.map((option) => (
                      <commonImports.MenuItem
                        key={option._id}
                        value={option._id}
                      >
                        {option.roomName}
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
              ))}

{columns
              .filter(
                (column) =>
                  column.accessorKey === "Photo"
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

{columns
              .filter((column) => column.accessorKey === "Salutation")
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                    label="Rent Calculation Method"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedSalutation}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                      });
                      setSelectedSalutation(event.target.value);
                    }}
                    displayEmpty
                    sx={{ minWidth: 120 }}
                    MenuProps={{
                      style: {
                        maxHeight: 500,
                      },
                    }}
                  >
                    <commonImports.MenuItem value="" disabled>
                      Salutation
                    </commonImports.MenuItem>
                    {TenantModel.tenantSalutationArr.map((option) => (
                      <commonImports.MenuItem
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
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
              ))}

{columns
              .filter(
                (column) =>
                  column.accessorKey === "Name"
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


{columns
              .filter((column) => column.accessorKey === "Profession")
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                    label="Profession"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedProfession}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                      });
                      setSelectedProfession(event.target.value);
                    }}
                    displayEmpty
                    sx={{ minWidth: 120 }}
                    MenuProps={{
                      style: {
                        maxHeight: 500,
                      },
                    }}
                  >
                    <commonImports.MenuItem value="" disabled>
                      Profession
                    </commonImports.MenuItem>
                    {TenantModel.tenantProfessionArr.map((option) => (
                      <commonImports.MenuItem
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
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
              ))}

{columns
              .filter(
                (column) =>
                  column.accessorKey === "NoOfPeople"
              )
              .map((column) => (
                <commonImports.TextField
                  key={column.accessorKey}
                  type="number"
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

{columns
              .filter(
                (column) =>
                  column.accessorKey === "NativeAddress" ||
                  column.accessorKey === "WorkAddress" ||
                  column.accessorKey === "PrimaryPhNo" ||
                  column.accessorKey === "SecondaryPhNo" ||
                  column.accessorKey === "Email" ||
                  column.accessorKey === "DepositAmount" ||
                  column.accessorKey === "DepositPaidDate" ||
                  column.accessorKey === "Balance" ||
                  column.accessorKey === "MoveInDate" ||
                  column.accessorKey === "StartRentFromDate"
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

{columns
              .filter((column) => column.accessorKey === "LeaseType")
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                    label="LeaseType"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedLeaseType}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                      });
                      setSelectedLeaseType(event.target.value);
                    }}
                    displayEmpty
                    sx={{ minWidth: 120 }}
                    MenuProps={{
                      style: {
                        maxHeight: 500,
                      },
                    }}
                  >
                    <commonImports.MenuItem value="" disabled>
                    Lease Type
                    </commonImports.MenuItem>
                    {TenantModel.tenantLeaseTypeArr.map((option) => (
                      <commonImports.MenuItem
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
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
              ))}

{
  selectedLeaseType==="fixedAndDefined" &&
  columns
              .filter(
                (column) =>
                  column.accessorKey === "FixedLeaseStartDate" ||
                  column.accessorKey === "FixedLeasePeriod"
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
              ))
}

{selectedLeaseType==="fixedAndDefined" && 
columns
              .filter((column) => column.accessorKey === "FixedLeasePeriodType")
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                    label="Fixed Lease Period Type"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedLeasePeriodType}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                      });
                    setSelectedLeasePeriodType(event.target.value);
                    }}
                    displayEmpty
                    sx={{ minWidth: 120 }}
                    MenuProps={{
                      style: {
                        maxHeight: 500,
                      },
                    }}
                  >
                    <commonImports.MenuItem value="" disabled>
                    Fixed Lease Period Type
                    </commonImports.MenuItem>
                    {TenantModel.tenantLeasePeriodTypeArr.map((option) => (
                      <commonImports.MenuItem
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
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
              ))}

{columns
              .filter(
                (column) =>
                  column.accessorKey === "EmergencyContactName" ||
                  column.accessorKey === "EmergencyContactNo" ||
                  column.accessorKey === "EmergencyContactRelation"
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

{columns
              .filter((column) => column.accessorKey === "ExtraService")
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                    label="Fixed Lease Period Type"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedExtraService}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                      });
                    setSelectedExtraService(event.target.value);
                    }}
                    displayEmpty
                    sx={{ minWidth: 120 }}
                    MenuProps={{
                      style: {
                        maxHeight: 500,
                      },
                    }}
                  >
                    <commonImports.MenuItem value="" disabled>
                    Extra Service
                    </commonImports.MenuItem>
                    {TenantModel.tenantExtraServiceArr.map((option) => (
                      <commonImports.MenuItem
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
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
              ))}


            {columns
              .filter(
                (column) =>
                  column.accessorKey !== "_id" &&
                  column.accessorKey !== "flatId" &&
                  column.accessorKey !== "Photo" &&
                  column.accessorKey !== "Salutation" &&
                  column.accessorKey !== "Name" &&
                  column.accessorKey !== "Profession" &&
                  column.accessorKey !== "NoOfPeople" &&
                  column.accessorKey !== "NativeAddress" &&
                  column.accessorKey !== "WorkAddress" &&
                  column.accessorKey !== "PrimaryPhNo" &&
                  column.accessorKey !== "SecondaryPhNo" &&
                  column.accessorKey !== "Email" &&
                  column.accessorKey !== "DepositAmount" &&
                  column.accessorKey !== "DepositPaidDate" &&
                  column.accessorKey !== "Balance" &&
                  column.accessorKey !== "MoveInDate" &&
                  column.accessorKey !== "StartRentFromDate" &&
                  column.accessorKey !== "LeaseType" &&
                  column.accessorKey !== "FixedLeaseStartDate" &&
                  column.accessorKey !== "FixedLeasePeriod" &&
                  column.accessorKey !== "FixedLeasePeriodType" &&
                  column.accessorKey !== "EmergencyContactName" &&
                  column.accessorKey !== "EmergencyContactNo" &&
                  column.accessorKey !== "EmergencyContactRelation" &&
                  column.accessorKey !== "ExtraService" &&
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
