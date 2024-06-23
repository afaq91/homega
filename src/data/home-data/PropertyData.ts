import { StaticImageData } from "next/image";

import propertyThumb_1 from "@/assets/images/listing/img_01.jpg";
import propertyThumb_2 from "@/assets/images/listing/img_02.jpg";
import propertyThumb_3 from "@/assets/images/listing/img_03.jpg";
import propertyThumb_4 from "@/assets/images/listing/img_04.jpg";
import propertyThumb_5 from "@/assets/images/listing/img_05.jpg";
import propertyThumb_6 from "@/assets/images/listing/img_06.jpg";

import property2Thumb_1 from "@/assets/images/listing/img_07.jpg";
import property2Thumb_2 from "@/assets/images/listing/img_08.jpg";
import property2Thumb_3 from "@/assets/images/listing/img_09.jpg";

import property3Thumb_1 from "@/assets/images/listing/listing-1/image-1.jpeg";
import property3Thumb_2 from "@/assets/images/listing/listing-2/image-1.jpg";
import property3Thumb_3 from "@/assets/images/listing/listing-3/image-1.jpg";



// Carousle Images

import propertyLargThumb_1_1 from "@/assets/images/listing/listing-1/image-1.jpeg";
import propertyLargThumb_1_2 from "@/assets/images/listing/listing-1/image-2.jpg";
import propertyLargThumb_1_3 from "@/assets/images/listing/listing-1/image-3.jpg";
import propertyLargThumb_1_4 from "@/assets/images/listing/listing-1/image-4.jpg";



import propertyLargThumb_2_1 from "@/assets/images/listing/listing-2/image-1.jpg";
import propertyLargThumb_2_2 from "@/assets/images/listing/listing-2/image-2.jpg";
import propertyLargThumb_2_3 from "@/assets/images/listing/listing-2/image-3.jpg";
import propertyLargThumb_2_4 from "@/assets/images/listing/listing-2/image-4.jpg";
import propertyLargThumb_2_5 from "@/assets/images/listing/listing-2/image-5.jpg";



import propertyLargThumb_3_1 from "@/assets/images/listing/listing-3/image-1.jpg";
import propertyLargThumb_3_2 from "@/assets/images/listing/listing-3/image-2.jpg";
import propertyLargThumb_3_3 from "@/assets/images/listing/listing-3/image-3.jpg";
import propertyLargThumb_3_4 from "@/assets/images/listing/listing-3/image-4.jpg";
import propertyLargThumb_3_5 from "@/assets/images/listing/listing-3/image-5.jpg";
import propertyLargThumb_3_6 from "@/assets/images/listing/listing-3/image-6.jpg";






import propertyLargThumb_2 from "@/assets/images/listing/img_large_02.jpg";
import propertyLargThumb_3 from "@/assets/images/listing/img_large_03.jpg";
import propertyLargThumb_4 from "@/assets/images/listing/img_large_04.jpg";
import propertyLargThumb_5 from "@/assets/images/listing/img_large_05.jpg";
import propertyLargThumb_6 from "@/assets/images/listing/img_large_06.jpg";

import propertyIcon_1 from "@/assets/images/icon/icon_04.svg";
import propertyIcon_2 from "@/assets/images/icon/icon_05.svg";
import propertyIcon_3 from "@/assets/images/icon/icon_06.svg";

interface DataType {
   id: number;
   page: string;
   tag: string;
   tag_bg?: string;
   thumb?:StaticImageData
   carousel_thumb: {
      id?:string;
      img: StaticImageData;
      active?: string;
   }[];
   title: string;
   address: string;
   property_info: {
      icon: StaticImageData;
      feature: string;
      total_feature: number;
   }[];
   data_delay_time?: string;
   price: number;
   price_text?: string;
   carousel?: string;
}[];



const property_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_1, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_3 }],
      title: "Blueberry villa",
      address: "Mirpur 10, Stadium dhaka 1208",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 1370 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o3 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o2 },],
      price: 3280,
      price_text: "m",
      carousel: "1",
   },
   {
      id: 2,
      page: "home_1",
      tag: "FOR SELL",
      tag_bg: "sale",
      carousel_thumb: [{ img: propertyThumb_2, active: "active" }, { img: propertyThumb_3 }, { img: propertyThumb_1 }],
      title: "White House villa",
      address: "Muza link road, ca, usa",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 1270 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o2 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o2 },],
      data_delay_time: "0.1s",
      price: 28100,
      carousel: "2",
   },
   {
      id: 3,
      page: "home_1",
      tag: "FOR SELL",
      tag_bg: "sale",
      carousel_thumb: [{ img: propertyThumb_3, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_1 }],
      title: "Luxury villa in Dal lake.",
      address: "Mirpur 10, Stadium",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 1270 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o2 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o2 },],
      data_delay_time: "0.2s",
      price: 42500,
      carousel: "3",
   },
   {
      id: 4,
      page: "home_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_4, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_6 }],
      title: "Blueberry villa",
      address: "Mirpur 10, Stadium dhaka 1208",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 1370 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o3 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o2 },],
      price: 3280,
      price_text: "m",
      carousel: "4",
   },
   {
      id: 5,
      page: "home_1",
      tag: "FOR SELL",
      tag_bg: "sale",
      carousel_thumb: [{ img: propertyThumb_5, active: "active" }, { img: propertyThumb_4 }, { img: propertyThumb_6 }],
      title: "White House villa",
      address: "Muza link road, ca, usa",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 1270 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o2 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o2 },],
      data_delay_time: "0.1s",
      price: 28100,
      carousel: "5",
   },
   {
      id: 6,
      page: "home_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_6, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_4 }],
      title: "Luxury villa in Dal lake.",
      address: "Mirpur 10, Stadium",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 1270 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o2 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o2 },],
      data_delay_time: "0.2s",
      price: 42500,
      price_text: "m",
      carousel: "6",
   },

   // home two
   
   {
      id: 1,
      page: "home_2",
      tag: "FOR RENT",
      carousel_thumb: [{ img: property2Thumb_1, active: "active" }, { img: property2Thumb_2 }, { img: property2Thumb_3 }],
      title: "Blueberry villa.",
      address: "Mirpur 10, Stadium dhaka 1208",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 1370 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o3 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o2 },],
      price: 34900.00,
      carousel: "1",
   },
   {
      id: 2,
      page: "home_2",
      tag: "FOR SELL",
      carousel_thumb: [{ img: property2Thumb_2, active: "active" }, { img: property2Thumb_1 }, { img: property2Thumb_2 }],
      title: "White House villa",
      address: "Muza link road, ca, usa",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 1270 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o2 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o2 },],
      data_delay_time: "0.1s",
      price: 28100.00,
      carousel: "2",
   },
   {
      id: 3,
      page: "home_2",
      tag: "FOR SELL",
      carousel_thumb: [{ img: property2Thumb_3, active: "active" }, { img: property2Thumb_2 }, { img: property2Thumb_1 }],
      title: "Luxury villa in Dal lake.",
      address: "Mirpur 10, Stadium",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 1270 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o2 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o2 },],
      data_delay_time: "0.2s",
      price: 42500.00,
      carousel: "3",
   },

   // home_3_property_2

   {
      id: 1,
      page: "home_3_property_2",
      tag: "FOR RENT",
      thumb:property3Thumb_1,
      carousel_thumb: [{id:"1", img: propertyLargThumb_1_1}, {id:"2", img: propertyLargThumb_1_2 }, {id:"3", img: propertyLargThumb_1_3}, {id:"4", img: propertyLargThumb_1_4}],
      title: "Dubai Marina Appartment",
      address: "Unit 2606 5242 Tower Dubai Marina",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 1780 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o3 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o2 },],
      price: 34900,
      carousel:"04",
   },
   {
      id: 2,
      page: "home_3_property_2",
      tag: "FOR SELL",
      thumb:property3Thumb_2,
      carousel_thumb: [{id:"1", img: propertyLargThumb_2_1}, {id:"2", img: propertyLargThumb_2_2 }, {id:"3", img: propertyLargThumb_2_3 }, {id:"4", img: propertyLargThumb_2_4 }, {id:"5", img: propertyLargThumb_2_5 }],
      title: "Creek Harbor Appartment",
      address: "M09 Creek Harbor",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2340 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
      price: 28100,
      carousel:"03",
   },
   
   {
      id: 3,
      page: "home_3_property_2",
      tag: "FOR SELL",
      thumb:property3Thumb_3,
      carousel_thumb: [{id:"1", img: propertyLargThumb_3_1}, {id:"2", img: propertyLargThumb_3_2 }, {id:"3", img: propertyLargThumb_3_3 }, {id:"4", img: propertyLargThumb_3_4 }, {id:"5", img: propertyLargThumb_3_5 }],
      title: "Burj Vista tower",
      address: "Burj Vista tower",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2450 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o4 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
      price: 55500,
      carousel:"05",
   },
   
   

   // home_5
]

export default property_data;