import { Icon } from "@material-ui/core";


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
    { value: "1bhk", label: "1 BHK"},
  { value: "1rk", label: "1 RK"},
  { value: "2bhk", label: "2 BHK"},
  { value: "2rk", label: "2 RK"},
  { value: "3bhk", label: "3 BHK"},
  { value: "3rk", label: "3 RK"},
  { value: "4bhk", label: "4 BHK"},
  { value: "attic", label: "Attic"},
  { value: "bar", label: "Bar"},
  { value: "basement", label: "Basement"},
  { value: "bungalow", label: "Bungalow"},
  { value: "cabin", label: "Cabin"},
  { value: "castle", label: "Castle"},
  { value: "cellar", label: "Cellar"},
  { value: "cubicle", label: "Cubicle"},
  { value: "duplex", label: "Duplex"},
  { value: "garage", label: "Garage"},
  { value: "guesthouse", label: "Guesthouse"},
  { value: "hall", label: "Hall"},
  { value: "hotel", label: "Hotel"},
  { value: "hostel", label: "Hostel"},
  { value: "loft", label: "Loft"},
  { value: "mansion", label: "Mansion"},
  { value: "motel", label: "Motel"},
  { value: "office", label: "Office"},
  { value: "palace", label: "Palace" },
  { value: "penthouse", label: "Penthouse"},
  { value: "resort", label: "Resort"},
  { value: "restaurant", label: "Restaurant"},
  { value: "shop", label: "Shop"},
  { value: "stall", label: "Stall" },
  { value: "studio", label: "Studio Apartment"},
  { value: "villa", label: "Villa"},
  { value: "warehouse", label: "Warehouse"},
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

