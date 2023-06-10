import React from "react";
import { AiOutlineHome, AiOutlineApartment } from "react-icons/ai";
import flatsModuleCss from "./../styles/flats.module.css"; 
import {
  MdHome,
  MdHotel,
  MdBusinessCenter,
  MdBathtub,
  MdApartment,
  MdLocalCafe,
  MdRestaurant,
  MdStore,
  MdDirectionsCar,
  MdStorage,
  MdMeetingRoom,
  MdLocalDrink,
  MdFitnessCenter,
  MdSportsBasketball,
  MdLocalLibrary,
  MdEmojiPeople,
  MdLocalMall,
  MdBusiness,
  MdPets,
  MdCasino,
  MdEventSeat,
  MdSpa,
  MdAccountBalance,
  MdBeachAccess,
  MdSchool,
  MdLocalGroceryStore,
  MdLocalHotel,
} from 'react-icons/md';


export function convertToColorDiv(color:string) {
  return <div style={{ backgroundColor: color, width: "100px", height: "20px" }}></div>;
}

export function getRoomTypeIcon(roomType:string) {
  switch (roomType) {
    case '1bhk':
    case '1rk':
      return <MdHome />;
    case '2bhk':
    case '2rk':
      return <MdApartment />;
    case '3bhk':
    case '3rk':
    case '4bhk':
      return <MdApartment />;
    case 'attic':
      return <MdEmojiPeople />;
    case 'bar':
      return <MdLocalDrink />;
    case 'basement':
      return <MdStorage />;
    case 'bungalow':
      return <MdHome />;
    case 'cabin':
      return <MdMeetingRoom />;
    case 'castle':
      return <MdAccountBalance />;
    case 'cellar':
      return <MdStorage />;
    case 'cubicle':
      return <MdBusinessCenter />;
    case 'duplex':
      return <MdApartment />;
    case 'garage':
      return <MdDirectionsCar />;
    case 'guesthouse':
      return <MdHotel />;
    case 'hall':
      return <MdEventSeat />;
    case 'hotel':
      return <MdHotel />;
    case 'hostel':
      return <MdHotel />;
    case 'loft':
      return <MdApartment />;
    case 'mansion':
      return <MdAccountBalance />;
    case 'motel':
      return <MdHotel />;
    case 'office':
      return <MdBusiness />;
    case 'palace':
      return <MdAccountBalance />;
    case 'penthouse':
      return <MdApartment />;
    case 'resort':
      return <MdBeachAccess />;
    case 'restaurant':
      return <MdRestaurant />;
    case 'shop':
      return <MdStore />;
    case 'stall':
      return <MdBusinessCenter />;
    case 'studio':
      return <MdApartment />;
    case 'villa':
      return <MdHome />;
    case 'warehouse':
      return <MdBusiness />;
    default:
      return null;
  }
}

