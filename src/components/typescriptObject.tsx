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

  export const initialBooks =[
    {
      id: 1,
      bookName: "The Obsession",
      author: "Nora Roberts",
      category: "Novel",
    },
    {
      id: 2,
      bookName: "Book2",
      author: "Nora",
      category: "Novel2",
    },
  ]