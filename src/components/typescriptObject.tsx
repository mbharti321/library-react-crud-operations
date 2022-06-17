export interface Errors {
    bookName?: string,
    author?:string,
    category?:string
  }
  
  export interface Book {
    id: string | number,
    bookName: string,
    author: string,
    category: string,
  }