import React from "react";
import { AiOutlineHome, AiOutlineApartment } from "react-icons/ai";
import flatsModuleCss from "./../styles/flats.module.css"; 


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

export function convertToColorDiv(color:string) {
  return <div style={{ backgroundColor: color, width: "100px", height: "20px" }}></div>;
}

export function getRoomTypeIcon(roomType:string) {
  switch (roomType) {
    case "1bhk":
      return <HomeIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "1rk":
      return <HomeIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "2bhk":
      return <DoubleBedIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "2rk":
      return <DoubleBedIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "3bhk":
      return <ApartmentIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "3rk":
      return <ApartmentIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "4bhk":
      return <ApartmentIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "attic":
      return <EmojiPeopleIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "bar":
      return <LocalDrinkIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "basement":
      return <StorageIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "bungalow":
      return <HomeIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "cabin":
      return <MeetingRoomIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "castle":
      return <AccountBalanceIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "cellar":
      return <StorageIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "cubicle":
      return <BusinessCenterOutlinedIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "duplex":
      return <ApartmentTwoToneIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "garage":
      return <DirectionsCarIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "guesthouse":
      return <HotelIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "hall":
      return <EventSeatIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "hotel":
      return <HotelIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "hostel":
      return <HotelOutlinedIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "loft":
      return <ApartmentIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "mansion":
      return <AccountBalanceIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "motel":
      return <HotelOutlinedIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "office":
      return <BusinessIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "palace":
      return <AccountBalanceIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "penthouse":
      return <ApartmentTwoToneIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "resort":
      return <BeachAccessIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "restaurant":
      return <RestaurantIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "shop":
      return <StoreIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "stall":
      return <BusinessCenterTwoToneIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "studio":
      return <ApartmentIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "villa":
      return <HomeIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    case "warehouse":
      return <BusinessTwoToneIcon className={flatsModuleCss.roomTypeGridColIcon}/>;
    // Add more cases for other room types and their respective icons
    default:
      return null;
  }
}

