import { Icon } from "@material-ui/core";
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

export interface IFlatViewModel{
    _id:string;
    propertyId: string;
    roomName: string;
    roomRent: number;
    roomColorSeparator: string;
    roomType: string;
    roomRemarks: string;
    rentCalcMethod: string;
    electricityBillType: string;
    electricityBillMeterName: string;
    electricityBillPerUnitCost: number;
    electricityBillMeterReading: number;
    electricityBillFixedAmtCost: number;
    waterBillType: string;
    waterBillMeterName: string;
    waterBillPerUnitCost: number;
    waterBillMeterReading: number;
    waterBillFixedAmtCost: number;
    createdAt:Date;
    updatedAt:Date;
}

export interface IFlatInputModel{
    propertyId: string;
    roomName: string;
    roomRent: number;
    roomColorSeparator: string;
    roomType: string;
    roomRemarks: string;
    rentCalcMethod: string;
    electricityBillType: string;
    electricityBillMeterName: string;
    electricityBillPerUnitCost: number;
    electricityBillMeterReading: number;
    electricityBillFixedAmtCost: number;
    waterBillType: string;
    waterBillMeterName: string;
    waterBillPerUnitCost: number;
    waterBillMeterReading: number;
    waterBillFixedAmtCost: number;
}


export const roomColorSeparator=[
    { value: "#FF0000", label: "Red" },
    { value: "#00FF00", label: "Green" },
    { value: "#0000FF", label: "Blue" },
    { value: "#FFFF00", label: "Yellow" },
    { value: "#FFA500", label: "Orange" },
    { value: "#800080", label: "Purple" },
    { value: "#FFC0CB", label: "Pink" },
    { value: "#A52A2A", label: "Brown" },
    { value: "#000000", label: "Black" },
    { value: "#FFFFFF", label: "White" },
    { value: "#808080", label: "Gray" },
    { value: "#C0C0C0", label: "Silver" },
    { value: "#FFD700", label: "Gold" },
    { value: "#00FFFF", label: "Cyan" },
    { value: "#FF00FF", label: "Magenta" },
    { value: "#E6E6FA", label: "Lavender" },
    { value: "#008080", label: "Teal" },
    { value: "#FF7F50", label: "Coral" },
    { value: "#4B0082", label: "Indigo" },
    { value: "#800000", label: "Maroon" },
];

export const roomType=[
    { value: "1bhk", label: "1 BHK", icon: `<HomeIcon />` },
  { value: "1rk", label: "1 RK", icon: `<HomeIcon />` },
  { value: "2bhk", label: "2 BHK", icon: `<DoubleBedIcon />` },
  { value: "2rk", label: "2 RK", icon: `<DoubleBedIcon />` },
  { value: "3bhk", label: "3 BHK", icon: `<ApartmentIcon />` },
  { value: "3rk", label: "3 RK", icon: `<ApartmentIcon />` },
  { value: "4bhk", label: "4 BHK", icon: `<ApartmentIcon />` },
  { value: "attic", label: "Attic", icon: `<EmojiPeopleIcon />` },
  { value: "bar", label: "Bar", icon: `<LocalDrinkIcon />` },
  { value: "basement", label: "Basement", icon: `<StorageIcon />` },
  { value: "bungalow", label: "Bungalow", icon: `<HomeIcon />` },
  { value: "cabin", label: "Cabin", icon: `<MeetingRoomIcon />` },
  { value: "castle", label: "Castle", icon: `<AccountBalanceIcon />` },
  { value: "cellar", label: "Cellar", icon: `<StorageIcon />` },
  { value: "cubicle", label: "Cubicle", icon: `<BusinessCenterOutlinedIcon />` },
  { value: "duplex", label: "Duplex", icon: `<ApartmentTwoToneIcon />` },
  { value: "garage", label: "Garage", icon: `<DirectionsCarIcon />` },
  { value: "guesthouse", label: "Guesthouse", icon: `<HotelIcon />` },
  { value: "hall", label: "Hall", icon: `<EventSeatIcon />` },
  { value: "hotel", label: "Hotel", icon: `<HotelIcon />` },
  { value: "hostel", label: "Hostel", icon: `<HotelOutlinedIcon />` },
  { value: "loft", label: "Loft", icon: `<ApartmentIcon />` },
  { value: "mansion", label: "Mansion", icon: `<AccountBalanceIcon />` },
  { value: "motel", label: "Motel", icon: `<HotelOutlinedIcon />` },
  { value: "office", label: "Office", icon: `<BusinessIcon />` },
  { value: "palace", label: "Palace", icon: `<AccountBalanceIcon />` },
  { value: "penthouse", label: "Penthouse", icon: `<ApartmentTwoToneIcon />` },
  { value: "resort", label: "Resort", icon: `<BeachAccessIcon />` },
  { value: "restaurant", label: "Restaurant", icon: `<RestaurantIcon />` },
  { value: "shop", label: "Shop", icon: `<StoreIcon />` },
  { value: "stall", label: "Stall", icon: `<BusinessCenterTwoToneIcon />` },
  { value: "studio", label: "Studio Apartment", icon: `<ApartmentIcon />` },
  { value: "villa", label: "Villa", icon: `<HomeIcon />` },
  { value: "warehouse", label: "Warehouse", icon: `<BusinessTwoToneIcon />` },
];

export const rentCalcMethod=[
    { value: "relative", label: "Relative" }, //Date to Date
    { value: "fixed", label: "Fixed" }, //1st of Every Month
];

export const electricityBillType=[
    {value:"noCost", label:"No Cost"},//When the Cost is Inclusive.
    {value:"metered", label:"Metered"},
    {value:"fixed", label:"Fixed Amount"},
];

export const waterBillType=[
    {value:"noCost", label:"No Cost"},//When the Cost is Inclusive.
    {value:"metered", label:"Metered"},
    {value:"fixed", label:"Fixed Amount"},
];

