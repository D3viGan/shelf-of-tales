export interface Book {
    isbn: string;
    title: string;
    author: string | string[];
    category: string;
    cover: string;
    price: number;
    available: boolean;
  }
