import * as commonImports from "../../../commonCode/importMRTRelated";
import * as FlatModel from "./../../../models/flatModel";
import * as UserModel from "../../../models/user";
import * as PropertiesModel from "../../../models/allPropertiesModel";
import { ListItemIcon } from "@material-ui/core";
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
const getOptionIcon = (roomType:string) => {
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
}
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

  return (
    <commonImports.Dialog open={open}>
      <commonImports.DialogTitle textAlign="center">
        Create New Flat
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
              .filter((column) => column.accessorKey === "propertyId")
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                    label="Property Id"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedProperty}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                      });
                      setSelectedProperty(event.target.value);
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
                      Select a Property
                    </commonImports.MenuItem>
                    {propertiesArr.map((option) => (
                      <commonImports.MenuItem
                        key={option._id}
                        value={option._id}
                      >
                        {option.propertyName}
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
              .filter((column) => column.accessorKey === "roomColorSeparator")
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                    label="Room Color Separator"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedRoomColorSeparator}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                      });
                      setSelectedRoomColorSeparator(event.target.value);
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
                      Select a Room Color Separator
                    </commonImports.MenuItem>
                    {roomColorSeparator.map((option) => (
                      <commonImports.MenuItem
                        key={option.value}
                        value={option.value}
                      >
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
              .filter((column) => column.accessorKey === "roomType")
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                    label="Room Type"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedRoomType}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                      });
                      setSelectedRoomType(event.target.value);
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
                      Select a Room Type
                    </commonImports.MenuItem>
                    {roomType.map((option) => (
                      <commonImports.MenuItem
                        key={option.value}
                        value={option.value}
                      >
                        <ListItemIcon>
                        {getOptionIcon(option.value)}
                        </ListItemIcon>
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
              .filter((column) => column.accessorKey === "rentCalcMethod")
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                    label="Rent Calculation Method"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedRentCalcMethod}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                      });
                      setSelectedRentCalcMethod(event.target.value);
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
                      Rent Calculation Method
                    </commonImports.MenuItem>
                    {rentCalcMethod.map((option) => (
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
              .filter((column) => column.accessorKey === "electricityBillType")
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                    label="Electricity Bill Type"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedElecBillType}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                      });
                      setSelectedElecBillType(event.target.value);
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
                      Electricity Bill Type
                    </commonImports.MenuItem>
                    {electricityBillType.map((option) => (
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
              .filter((column) => column.accessorKey === "waterBillType")
              .map((column) => (
                <commonImports.FormControl
                  error={column.accessorKey && !!errors[column.accessorKey]}
                >
                  <commonImports.Select
                    label="Water Bill Type"
                    key={column.accessorKey}
                    name={column.accessorKey}
                    value={selectedWaterBillType}
                    onChange={(event) => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value,
                      });
                      setSelectedWaterBillType(event.target.value);
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
                      Water Bill Type
                    </commonImports.MenuItem>
                    {waterBillType.map((option) => (
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
                  column.accessorKey !== "propertyId" &&
                  column.accessorKey !== "roomColorSeparator" &&
                  column.accessorKey !== "roomType" &&
                  column.accessorKey !== "rentCalcMethod" &&
                  column.accessorKey !== "electricityBillType" &&
                  column.accessorKey !== "waterBillType" &&
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
