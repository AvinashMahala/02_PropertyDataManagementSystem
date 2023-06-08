import * as commonImports from "../../../commonCode/CommonImports";
import * as FlatModel from "./../../../models/flatModel";
import * as UserModel from "../../../models/user";
import * as PropertiesModel from "../../../models/allPropertiesModel";
import { ListItemIcon } from "@material-ui/core";
import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent } from "react";
import FlatsModuleStyles from "../../../styles/flats.module.css";
// import { Apartment, House, LocalCafe } from "@material-ui/icons";
import {
  electricityBillType,
  rentCalcMethod,
  roomColorSeparator,
  roomType,
  waterBillType,
} from "./../../../models/flatModel";

import {
  Home as HomeIcon,
  Hotel as HotelIcon,
  BusinessCenter as BusinessCenterIcon,
  Bathtub as BathtubIcon,
  KingBed as KingBedIcon,
  KingBed as DoubleBedIcon,
  Apartment as ApartmentIcon,
  LocalCafe as LocalCafeIcon,
  Restaurant as RestaurantIcon,
  Store as StoreIcon,
  Business as BusinessIcon,
  DirectionsCar as DirectionsCarIcon,
  Storage as StorageIcon,
  MeetingRoom as MeetingRoomIcon,
  LocalDrink as LocalDrinkIcon,
  FitnessCenter as FitnessCenterIcon,
  SportsBasketball as SportsBasketballIcon,
  LocalLibrary as LocalLibraryIcon,
  EmojiPeople as EmojiPeopleIcon,
  LocalMall as LocalMallIcon,
  BusinessCenterOutlined as BusinessCenterOutlinedIcon,
  LocalGasStation as LocalGasStationIcon,
  Pets as PetsIcon,
  Casino as CasinoIcon,
  EventSeat as EventSeatIcon,
  HotelOutlined as HotelOutlinedIcon,
  BusinessOutlined as BusinessOutlinedIcon,
  Spa as SpaIcon,
  AccountBalance as AccountBalanceIcon,
  BeachAccess as BeachAccessIcon,
  School as SchoolIcon,
  LocalGroceryStore as LocalGroceryStoreIcon,
  ApartmentOutlined as ApartmentOutlinedIcon,
  BeachAccessOutlined as BeachAccessOutlinedIcon,
  Pool as PoolIcon,
  BusinessCenterTwoTone as BusinessCenterTwoToneIcon,
  ApartmentTwoTone as ApartmentTwoToneIcon,
  LocalHotel as LocalHotelIcon,
  BusinessTwoTone as BusinessTwoToneIcon,
} from "@material-ui/icons";

// Helper function to get the corresponding icon based on the room type
const getOptionIcon = (roomType: string) => {
  switch (roomType) {
    case "1bhk":
      return <HomeIcon />;
    case "1rk":
      return <HomeIcon />;
    case "2bhk":
      return <DoubleBedIcon />;
    case "2rk":
      return <DoubleBedIcon />;
    case "3bhk":
      return <ApartmentIcon />;
    case "3rk":
      return <ApartmentIcon />;
    case "4bhk":
      return <ApartmentIcon />;
    case "attic":
      return <EmojiPeopleIcon />;
    case "bar":
      return <LocalDrinkIcon />;
    case "basement":
      return <StorageIcon />;
    case "bungalow":
      return <HomeIcon />;
    case "cabin":
      return <MeetingRoomIcon />;
    case "castle":
      return <AccountBalanceIcon />;
    case "cellar":
      return <StorageIcon />;
    case "cubicle":
      return <BusinessCenterOutlinedIcon />;
    case "duplex":
      return <ApartmentTwoToneIcon />;
    case "garage":
      return <DirectionsCarIcon />;
    case "guesthouse":
      return <HotelIcon />;
    case "hall":
      return <EventSeatIcon />;
    case "hotel":
      return <HotelIcon />;
    case "hostel":
      return <HotelOutlinedIcon />;
    case "loft":
      return <ApartmentIcon />;
    case "mansion":
      return <AccountBalanceIcon />;
    case "motel":
      return <HotelOutlinedIcon />;
    case "office":
      return <BusinessIcon />;
    case "palace":
      return <AccountBalanceIcon />;
    case "penthouse":
      return <ApartmentTwoToneIcon />;
    case "resort":
      return <BeachAccessIcon />;
    case "restaurant":
      return <RestaurantIcon />;
    case "shop":
      return <StoreIcon />;
    case "stall":
      return <BusinessCenterTwoToneIcon />;
    case "studio":
      return <ApartmentIcon />;
    case "villa":
      return <HomeIcon />;
    case "warehouse":
      return <BusinessTwoToneIcon />;
    // Add more cases for other room types and their respective icons
    default:
      return null;
  }
};

interface CreateModalProps {
  columns: commonImports.MRT_ColumnDef<FlatModel.IFlatViewModel>[];
  onClose: () => void;
  onSubmit: (values: FlatModel.IFlatViewModel) => void;
  open: boolean;
  propertiesArr: PropertiesModel.IPropertyDetailsViewModel[];
}

//example of creating a mui dialog modal for creating new rows
export const CreateNewModal = ({
  open,
  columns,
  onClose,
  onSubmit,
  propertiesArr,
}: CreateModalProps) => {
  const [values, setValues] = commonImports.useState<any>(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = "";
      return acc;
    }, {} as any)
  );

  const [selectedProperty, setSelectedProperty] = commonImports.useState("");
  const [selectedRoomColorSeparator, setSelectedRoomColorSeparator] =
    commonImports.useState("");
  const [selectedRoomType, setSelectedRoomType] = commonImports.useState("");
  const [selectedRentCalcMethod, setSelectedRentCalcMethod] =
    commonImports.useState("");
  const [selectedElecBillType, setSelectedElecBillType] =
    commonImports.useState("");
  const [selectedWaterBillType, setSelectedWaterBillType] =
    commonImports.useState("");
  const [errors, setErrors] = commonImports.useState<{ [key: string]: string }>(
    {}
  );

  const validate = () => {
    let tempErrors = {};
    tempErrors = {
      ...tempErrors,
      propertyId: values.propertyId ? "" : "This field is required",
      roomName: values.roomName ? "" : "This field is required",
      roomRent: values.roomRent ? "" : "This field is required",
      roomColorSeparator: values.roomColorSeparator
        ? ""
        : "This field is required",
      roomType: values.roomType ? "" : "This field is required",
      // roomRemarks: values.roomRemarks ? "" : "This field is required",
      rentCalcMethod: values.rentCalcMethod ? "" : "This field is required",
      electricityBillType: values.electricityBillType
        ? ""
        : "This field is required",
      // electricityBillMeterName: values.electricityBillMeterName ? "" : "This field is required",
      // electricityBillPerUnitCost: values.electricityBillPerUnitCost ? "" : "This field is required",
      // electricityBillMeterReading: values.electricityBillMeterReading ? "" : "This field is required",
      // electricityBillFixedAmtCost: values.electricityBillFixedAmtCost ? "" : "This field is required",
      waterBillType: values.waterBillType ? "" : "This field is required",
      // waterBillMeterName: values.waterBillMeterName ? "" : "This field is required",
      // waterBillPerUnitCost: values.waterBillPerUnitCost ? "" : "This field is required",
      // waterBillMeterReading: values.waterBillMeterReading ? "" : "This field is required",
      // waterBillFixedAmtCost: values.waterBillFixedAmtCost ? "" : "This field is required",
    };

    // Validate for metered if it is required
    if (
      values.electricityBillType === "metered" &&
      !values.electricityBillMeterName &&
      !values.electricityBillPerUnitCost &&
      !values.electricityBillMeterReading
    ) {
      tempErrors = {
        ...tempErrors,
        electricityBillMeterName: "This field is required",
        electricityBillPerUnitCost: "This field is required",
        electricityBillMeterReading: "This field is required",
      };
    }

    // Validate waterBillFixedAmtCost if it is required
    if (
      values.electricityBillType === "fixed" &&
      !values.electricityBillFixedAmtCost
    ) {
      tempErrors = {
        ...tempErrors,
        electricityBillFixedAmtCost: "This field is required",
      };
    }

    // Validate for Water Bill metered if it is required
    if (
      values.waterBillType === "metered" &&
      !values.waterBillMeterName &&
      !values.waterBillPerUnitCost &&
      !values.waterBillMeterReading
    ) {
      tempErrors = {
        ...tempErrors,
        waterBillMeterName: "This field is required",
        waterBillPerUnitCost: "This field is required",
        waterBillMeterReading: "This field is required",
      };
    }

    // Validate waterBillFixedAmtCost if it is required
    if (values.waterBillType === "fixed" && !values.waterBillFixedAmtCost) {
      tempErrors = {
        ...tempErrors,
        waterBillFixedAmtCost: "This field is required",
      };
    }
    setErrors({
      ...tempErrors,
    });

    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleReset = () => {
    setSelectedProperty("");
    setSelectedRoomColorSeparator("");
    setSelectedRoomType("");
    setSelectedElecBillType("");
    setSelectedRentCalcMethod("");
    setSelectedWaterBillType("");
    setValues(
      columns.reduce((acc, column) => {
        acc[column.accessorKey ?? ""] = "";
        return acc;
      }, {} as any)
    );
  };

  const handleSubmit = () => {
    //put your validation logic here
    if (validate()) {
      onSubmit(values);
      onClose();
      setSelectedProperty("");
      setSelectedRoomColorSeparator("");
      setSelectedRoomType("");
      setSelectedElecBillType("");
      setSelectedRentCalcMethod("");
      setSelectedWaterBillType("");
      setValues(
        columns.reduce((acc, column) => {
          acc[column.accessorKey ?? ""] = "";
          return acc;
        }, {} as any)
      );
    }
  };

  const getSelectedValue = (accessorKey: string) => {
    return values[accessorKey];
  };

  // const handleSelectChange = (
  //   event: React.ChangeEvent<{ name: string; value: unknown }>,
  //   accessorKey: string
  // ) => {
  //   setValues({
  //     ...values,
  //     [event.target.name]: event.target.value,
  //   });
  // };
  // Define the options based on the accessorKey
  let options: any[] = [];
  const getOptions = (accessorKey: string) => {
    if (accessorKey === "propertyId") {
      options = propertiesArr.map((option) => ({
        value: option._id,
        label: option.propertyName,
      }));
    } else if (accessorKey === "roomColorSeparator") {
      options = roomColorSeparator.map((option) => ({
        value: option.value,
        label: (
          <>
            <span
              style={{
                backgroundColor: option.value,
                width: "100%",
                height: "20px",
                display: "inline-block",
                marginRight: "5px",
              }}
            ></span>
            {option.label}
          </>
        ),
      }));
    } else if (accessorKey === "roomType") {
      options = roomType.map((option) => ({
        value: option.value,
        label: (
          <>
            <ListItemIcon>{getOptionIcon(option.value)}</ListItemIcon>
            {option.label}
          </>
        ),
      }));
    } else if (accessorKey === "rentCalcMethod") {
      options = rentCalcMethod.map((option) => ({
        value: option.value,
        label: option.label,
      }));
    } else if (accessorKey === "electricityBillType") {
      options = electricityBillType.map((option) => ({
        value: option.value,
        label: option.label,
      }));
    } else if (accessorKey === "waterBillType") {
      options = waterBillType.map((option) => ({
        value: option.value,
        label: option.label,
      }));
    }
    return options;
  };

  const getOptionLabel = (value: string) => {
    // Return the label for the provided value
    const option = options.find((option) => option.value === value);
    return option ? option.label : "";
  };
  const handleSelectChange = (
    e: SelectChangeEvent<any>,
    accessorKey?: string
  ) => {
    if (accessorKey) {
      const { name, value } = e.target;
      const updatedValues = {
        ...values,
        [accessorKey]: value,
      };
      setValues(updatedValues);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    accessorKey?: string
  ) => {
    if (accessorKey) {
      const { name, value } = e.target;
      const updatedValues = {
        ...values,
        [accessorKey]: value,
      };
      setValues(updatedValues);
    }
  };

  return (
    <commonImports.Dialog open={open}
    PaperProps={{
      sx: {
        width: "100%",
        maxWidth: "85%!important",
      },
    }}    
    >
      <commonImports.DialogTitle textAlign="center">
        Create New Flat
      </commonImports.DialogTitle>
      <commonImports.DialogContent >
        <form onSubmit={(e) => e.preventDefault()}>
          <commonImports.Stack
            sx={{
              width: "85%",
              minWidth: "85%",
              gap: "1.5rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
             {columns
              .filter((column) => column.accessorKey === "propertyId")
              .map((column) => (
              <commonImports.FormControl
                key={column.accessorKey}
                error={column.accessorKey && !!errors[column.accessorKey]}
              >
                {
                  column.accessorKey === "propertyId" &&
                  (
                    <commonImports.Select
                      label={column.header}
                      name={column.accessorKey}
                      value={getSelectedValue(column.accessorKey)}
                      onChange={(event) =>{
                        handleSelectChange(event, column.accessorKey);
                        setSelectedProperty(event.target.value as string);
                      }
                        
                      }
                      displayEmpty
                      sx={{ minWidth: 120 }}
                      MenuProps={{
                        style: {
                          maxHeight: 500,
                        },
                      }}
                    >
                      <commonImports.MenuItem value="" disabled>
                        {column.header}
                      </commonImports.MenuItem>
                      {getOptions(column.accessorKey).map((option) => (
                        <commonImports.MenuItem
                          key={option.value}
                          value={option.value}
                        >
                          {getOptionLabel(option.value)}
                        </commonImports.MenuItem>
                      ))}
                    </commonImports.Select>
                  )
                }
                <commonImports.FormHelperText>
                  {column.accessorKey &&
                  errors.hasOwnProperty(column.accessorKey)
                    ? errors[column.accessorKey]
                    : ""}
                </commonImports.FormHelperText>
              </commonImports.FormControl>
            ))}

{columns
              .filter((column) => column.accessorKey === "roomName" || column.accessorKey === "roomRent")
              .map((column) => (
              <commonImports.FormControl
                key={column.accessorKey}
                error={column.accessorKey && !!errors[column.accessorKey]}
              >
                {
                  (column.accessorKey === "roomName" || column.accessorKey === "roomRent")
                   &&
                  (
                    <commonImports.TextField
                      label={column.header}
                      name={column.accessorKey}
                      value={values[column.accessorKey as keyof typeof values]}
                      onChange={(event) =>
                        handleInputChange(event, column.accessorKey)
                      }
                      error={column.accessorKey && !!errors[column.accessorKey]}
                      helperText={
                        column.accessorKey &&
                        errors.hasOwnProperty(column.accessorKey)
                          ? errors[column.accessorKey]
                          : ""
                      }
                    />
                  )
                }
                <commonImports.FormHelperText>
                  {column.accessorKey &&
                  errors.hasOwnProperty(column.accessorKey)
                    ? errors[column.accessorKey]
                    : ""}
                </commonImports.FormHelperText>
              </commonImports.FormControl>
            ))}

{columns
              .filter((column) => column.accessorKey === "roomColorSeparator")
              .map((column) => (
              <commonImports.FormControl
                key={column.accessorKey}
                error={column.accessorKey && !!errors[column.accessorKey]}
              >
                {
                  (column.accessorKey === "roomColorSeparator") &&
                  (
                    <commonImports.Select
                      label={column.header}
                      name={column.accessorKey}
                      value={getSelectedValue(column.accessorKey)}
                      onChange={(event) =>{
                        handleSelectChange(event, column.accessorKey);
                        setSelectedRoomColorSeparator(event.target.value as string);
                      }
                      }
                      displayEmpty
                      sx={{ minWidth: 120 }}
                      MenuProps={{
                        style: {
                          maxHeight: 500,
                        },
                      }}
                    >
                      <commonImports.MenuItem value="" disabled>
                        {column.header}
                      </commonImports.MenuItem>
                      {getOptions(column.accessorKey).map((option) => (
                        <commonImports.MenuItem
                          key={option.value}
                          value={option.value}
                        >
                          {getOptionLabel(option.value)}
                        </commonImports.MenuItem>
                      ))}
                    </commonImports.Select>
                  )
                }
                <commonImports.FormHelperText>
                  {column.accessorKey &&
                  errors.hasOwnProperty(column.accessorKey)
                    ? errors[column.accessorKey]
                    : ""}
                </commonImports.FormHelperText>
              </commonImports.FormControl>
            ))}
{columns
              .filter((column) => column.accessorKey === "roomType")
              .map((column) => (
              <commonImports.FormControl
                key={column.accessorKey}
                error={column.accessorKey && !!errors[column.accessorKey]}
              >
                {
                  (column.accessorKey === "roomType") &&
                  (
                    <commonImports.Select
                      label={column.header}
                      name={column.accessorKey}
                      value={getSelectedValue(column.accessorKey)}
                      onChange={(event) =>{
                        setSelectedRoomType(event.target.value as string);
                        handleSelectChange(event, column.accessorKey);
                      }
                      }
                      displayEmpty
                      sx={{ minWidth: 120 }}
                      MenuProps={{
                        style: {
                          maxHeight: 500,
                        },
                      }}
                    >
                      <commonImports.MenuItem value="" disabled>
                        {column.header}
                      </commonImports.MenuItem>
                      {getOptions(column.accessorKey).map((option) => (
                        <commonImports.MenuItem
                          key={option.value}
                          value={option.value}
                        >
                          {getOptionLabel(option.value)}
                        </commonImports.MenuItem>
                      ))}
                    </commonImports.Select>
                  )
                }
                <commonImports.FormHelperText>
                  {column.accessorKey &&
                  errors.hasOwnProperty(column.accessorKey)
                    ? errors[column.accessorKey]
                    : ""}
                </commonImports.FormHelperText>
              </commonImports.FormControl>
            ))}

{columns
              .filter((column) => column.accessorKey === "roomRemarks")
              .map((column) => (
              <commonImports.FormControl
                key={column.accessorKey}
                error={column.accessorKey && !!errors[column.accessorKey]}
              >
                {
                  (column.accessorKey === "roomRemarks")
                   &&
                  (
                    <commonImports.TextField
                      label={column.header}
                      name={column.accessorKey}
                      value={values[column.accessorKey as keyof typeof values]}
                      onChange={(event) =>
                        handleInputChange(event, column.accessorKey)
                      }
                      error={column.accessorKey && !!errors[column.accessorKey]}
                      helperText={
                        column.accessorKey &&
                        errors.hasOwnProperty(column.accessorKey)
                          ? errors[column.accessorKey]
                          : ""
                      }
                    />
                  )
                }
                <commonImports.FormHelperText>
                  {column.accessorKey &&
                  errors.hasOwnProperty(column.accessorKey)
                    ? errors[column.accessorKey]
                    : ""}
                </commonImports.FormHelperText>
              </commonImports.FormControl>
            ))}

            {columns
              .filter((column) => column.accessorKey === "rentCalcMethod")
              .map((column) => (
              <commonImports.FormControl
                key={column.accessorKey}
                error={column.accessorKey && !!errors[column.accessorKey]}
              >
                {
                  (column.accessorKey === "rentCalcMethod") &&
                  (
                    <commonImports.Select
                      label={column.header}
                      name={column.accessorKey}
                      value={getSelectedValue(column.accessorKey)}
                      onChange={(event) =>{
                        setSelectedRentCalcMethod(event.target.value as string);
                        handleSelectChange(event, column.accessorKey);
                      }
                      }
                      displayEmpty
                      sx={{ minWidth: 120 }}
                      MenuProps={{
                        style: {
                          maxHeight: 500,
                        },
                      }}
                    >
                      <commonImports.MenuItem value="" disabled>
                        {column.header}
                      </commonImports.MenuItem>
                      {getOptions(column.accessorKey).map((option) => (
                        <commonImports.MenuItem
                          key={option.value}
                          value={option.value}
                        >
                          {getOptionLabel(option.value)}
                        </commonImports.MenuItem>
                      ))}
                    </commonImports.Select>
                  )
                }
                <commonImports.FormHelperText>
                  {column.accessorKey &&
                  errors.hasOwnProperty(column.accessorKey)
                    ? errors[column.accessorKey]
                    : ""}
                </commonImports.FormHelperText>
              </commonImports.FormControl>
            ))}

{columns
              .filter((column) => column.accessorKey === "electricityBillType")
              .map((column) => (
              <commonImports.FormControl
                key={column.accessorKey}
                error={column.accessorKey && !!errors[column.accessorKey]}
              >
                {
                  (column.accessorKey === "electricityBillType") &&
                  (
                    <commonImports.Select
                      label={column.header}
                      name={column.accessorKey}
                      value={getSelectedValue(column.accessorKey)}
                      onChange={(event) =>{
                        handleSelectChange(event, column.accessorKey);
                        setSelectedElecBillType(event.target.value);
                      }
                      }
                      displayEmpty
                      sx={{ minWidth: 120 }}
                      MenuProps={{
                        style: {
                          maxHeight: 500,
                        },
                      }}
                    >
                      <commonImports.MenuItem value="" disabled>
                        {column.header}
                      </commonImports.MenuItem>
                      {getOptions(column.accessorKey).map((option) => (
                        <commonImports.MenuItem
                          key={option.value}
                          value={option.value}
                        >
                          {getOptionLabel(option.value)}
                        </commonImports.MenuItem>
                      ))}
                    </commonImports.Select>
                  )
                }
                <commonImports.FormHelperText>
                  {column.accessorKey &&
                  errors.hasOwnProperty(column.accessorKey)
                    ? errors[column.accessorKey]
                    : ""}
                </commonImports.FormHelperText>
              </commonImports.FormControl>
            ))}

{(selectedElecBillType==="metered") && columns
              .filter(
                (column) => column.accessorKey === "electricityBillMeterName" ||
                column.accessorKey === "electricityBillPerUnitCost" ||
                column.accessorKey === "electricityBillMeterReading"
                )
              .map((column) => (
              <commonImports.FormControl
                key={column.accessorKey}
                error={column.accessorKey && !!errors[column.accessorKey]}
              >
                {
                  (column.accessorKey === "electricityBillMeterName" ||
                  column.accessorKey === "electricityBillPerUnitCost" ||
                  column.accessorKey === "electricityBillMeterReading"
                  )
                   &&
                  (
                    <commonImports.TextField
                      label={column.header}
                      name={column.accessorKey}
                      value={values[column.accessorKey as keyof typeof values]}
                      onChange={(event) =>
                        handleInputChange(event, column.accessorKey)
                      }
                      error={column.accessorKey && !!errors[column.accessorKey]}
                      helperText={
                        column.accessorKey &&
                        errors.hasOwnProperty(column.accessorKey)
                          ? errors[column.accessorKey]
                          : ""
                      }
                    />
                  )
                }
                <commonImports.FormHelperText>
                  {column.accessorKey &&
                  errors.hasOwnProperty(column.accessorKey)
                    ? errors[column.accessorKey]
                    : ""}
                </commonImports.FormHelperText>
              </commonImports.FormControl>
            ))}

{(selectedElecBillType==="fixed") && columns
              .filter(
                (column) => column.accessorKey === "electricityBillFixedAmtCost"
                )
              .map((column) => (
              <commonImports.FormControl
                key={column.accessorKey}
                error={column.accessorKey && !!errors[column.accessorKey]}
              >
                {
                  (column.accessorKey === "electricityBillFixedAmtCost"
                  )
                   &&
                  (
                    <commonImports.TextField
                      label={column.header}
                      name={column.accessorKey}
                      value={values[column.accessorKey as keyof typeof values]}
                      onChange={(event) =>
                        handleInputChange(event, column.accessorKey)
                      }
                      error={column.accessorKey && !!errors[column.accessorKey]}
                      helperText={
                        column.accessorKey &&
                        errors.hasOwnProperty(column.accessorKey)
                          ? errors[column.accessorKey]
                          : ""
                      }
                    />
                  )
                }
                <commonImports.FormHelperText>
                  {column.accessorKey &&
                  errors.hasOwnProperty(column.accessorKey)
                    ? errors[column.accessorKey]
                    : ""}
                </commonImports.FormHelperText>
              </commonImports.FormControl>
            ))}

{columns
              .filter((column) => column.accessorKey === "waterBillType")
              .map((column) => (
              <commonImports.FormControl
                key={column.accessorKey}
                error={column.accessorKey && !!errors[column.accessorKey]}
              >
                {
                  (column.accessorKey === "waterBillType") &&
                  (
                    <commonImports.Select
                      label={column.header}
                      name={column.accessorKey}
                      value={getSelectedValue(column.accessorKey)}
                      onChange={(event) =>{
                        handleSelectChange(event, column.accessorKey);
                        setSelectedWaterBillType(event.target.value);
                      }
                      }
                      displayEmpty
                      sx={{ minWidth: 120 }}
                      MenuProps={{
                        style: {
                          maxHeight: 500,
                        },
                      }}
                    >
                      <commonImports.MenuItem value="" disabled>
                        {column.header}
                      </commonImports.MenuItem>
                      {getOptions(column.accessorKey).map((option) => (
                        <commonImports.MenuItem
                          key={option.value}
                          value={option.value}
                        >
                          {getOptionLabel(option.value)}
                        </commonImports.MenuItem>
                      ))}
                    </commonImports.Select>
                  )
                }
                <commonImports.FormHelperText>
                  {column.accessorKey &&
                  errors.hasOwnProperty(column.accessorKey)
                    ? errors[column.accessorKey]
                    : ""}
                </commonImports.FormHelperText>
              </commonImports.FormControl>
            ))}

{(selectedWaterBillType==="metered") && columns
              .filter(
                (column) => column.accessorKey === "waterBillMeterName" ||
                column.accessorKey === "waterBillPerUnitCost" ||
                column.accessorKey === "waterBillMeterReading"
                )
              .map((column) => (
              <commonImports.FormControl
                key={column.accessorKey}
                error={column.accessorKey && !!errors[column.accessorKey]}
              >
                {
                  (column.accessorKey === "waterBillMeterName" ||
                  column.accessorKey === "waterBillPerUnitCost" ||
                  column.accessorKey === "waterBillMeterReading"
                  )
                   &&
                  (
                    <commonImports.TextField
                      label={column.header}
                      name={column.accessorKey}
                      value={values[column.accessorKey as keyof typeof values]}
                      onChange={(event) =>
                        handleInputChange(event, column.accessorKey)
                      }
                      error={column.accessorKey && !!errors[column.accessorKey]}
                      helperText={
                        column.accessorKey &&
                        errors.hasOwnProperty(column.accessorKey)
                          ? errors[column.accessorKey]
                          : ""
                      }
                    />
                  )
                }
                <commonImports.FormHelperText>
                  {column.accessorKey &&
                  errors.hasOwnProperty(column.accessorKey)
                    ? errors[column.accessorKey]
                    : ""}
                </commonImports.FormHelperText>
              </commonImports.FormControl>
            ))}

{(selectedWaterBillType==="fixed") && columns
              .filter(
                (column) => column.accessorKey === "waterBillFixedAmtCost"
                )
              .map((column) => (
              <commonImports.FormControl
                key={column.accessorKey}
                error={column.accessorKey && !!errors[column.accessorKey]}
              >
                {
                  (column.accessorKey === "waterBillFixedAmtCost"
                  )
                   &&
                  (
                    <commonImports.TextField
                      label={column.header}
                      name={column.accessorKey}
                      value={values[column.accessorKey as keyof typeof values]}
                      onChange={(event) =>
                        handleInputChange(event, column.accessorKey)
                      }
                      error={column.accessorKey && !!errors[column.accessorKey]}
                      helperText={
                        column.accessorKey &&
                        errors.hasOwnProperty(column.accessorKey)
                          ? errors[column.accessorKey]
                          : ""
                      }
                    />
                  )
                }
                <commonImports.FormHelperText>
                  {column.accessorKey &&
                  errors.hasOwnProperty(column.accessorKey)
                    ? errors[column.accessorKey]
                    : ""}
                </commonImports.FormHelperText>
              </commonImports.FormControl>
            ))}


          </commonImports.Stack>
        </form>
      </commonImports.DialogContent>

      <commonImports.DialogActions sx={{ p: "1.25rem" }}>
        <commonImports.Button onClick={onClose}>Cancel</commonImports.Button>
        <commonImports.Button
          color="warning"
          onClick={handleReset}
          variant="contained"
        >
          Reset
        </commonImports.Button>
        <commonImports.Button
          color="secondary"
          onClick={handleSubmit}
          variant="contained"
        >
          Create New Flat
        </commonImports.Button>
      </commonImports.DialogActions>
    </commonImports.Dialog>
  );
};
