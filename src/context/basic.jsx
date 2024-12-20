import { createContext, useState } from "react";

export const BasicContext = createContext();

export const BasicContextProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "React-ის უპირატესობები თანამედროვე ვებ-დეველოპმენტში",
      description: "React არის JavaScript-ის ბიბლიოთეკა, რომელიც შექმნა Facebook-მა. იგი გამოირჩევა თავისი Virtual DOM-ით, კომპონენტებზე დაფუძნებული არქიტექტურით და დეკლარაციული პროგრამირების სტილით. React-ის გამოყენებით შესაძლებელია რთული ინტერფეისების მარტივად შექმნა და მართვა. ამ სტატიაში განვიხილავთ React-ის მთავარ უპირატესობებს და იმას, თუ რატომ არის ის ასეთი პოპულარული დეველოპერებს შორის."
    },
    {
      id: 2,
      title: "JavaScript-ის ასინქრონული პროგრამირება",
      description: "ასინქრონული პროგრამირება არის JavaScript-ის ერთ-ერთი უმნიშვნელოვანესი კონცეფცია. Promise-ები, async/await და callback-ები გვეხმარება სერვერთან კომუნიკაციის, ფაილების წაკითხვის და სხვა დროში გაწელილი ოპერაციების მართვაში. ამ ბლოგში ვისაუბრებთ ასინქრონული პროგრამირების საფუძვლებზე და განვიხილავთ პრაქტიკულ მაგალითებს."
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox - როდის რომელი გამოვიყენოთ?",
      description: "CSS Grid და Flexbox არის ორი მძლავრი ინსტრუმენტი ვებ-გვერდის განლაგების (layout) შესაქმნელად. მიუხედავად იმისა, რომ ორივე გამოიყენება ელემენტების განლაგებისთვის, მათ შორის არის მნიშვნელოვანი განსხვავებები. Grid უფრო ეფექტურია ორგანზომილებიანი განლაგებისთვის, ხოლო Flexbox - ერთგანზომილებიანი განლაგებისთვის. ამ სტატიაში განვიხილავთ ორივე მიდგომის დადებით და უარყოფით მხარეებს."
    }
  ]);

  const addBlog = (newBlog) => setBlogs([...blogs, { ...newBlog, id: blogs.length + 1 }]);

  return (
    <BasicContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BasicContext.Provider>
  );
}; 