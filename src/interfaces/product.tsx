import { ICategory } from "./category";

export interface IProduct {
    _id: string;
    title: string;
    description: string;
    github: string;
    images: string[];
    categoryId: ICategory[];
  }