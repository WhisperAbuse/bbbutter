import { StaticImageData } from "next/image";

export interface ReviewItem {
  id: number;
  personImg: StaticImageData;
  companyLogo: StaticImageData;
  backgroundColor: string;
  text: string;
  author: string;
  role: string;
}
