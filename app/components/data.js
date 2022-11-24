export const ProductData = [
  {
    id: "1",
    image: "/imran-vai/1.jpg",
    title: "Tetul achar",
    description: "1 pack 15 piece",
    price: "120",
  },
  {
    id: "2",

    image: "/imran-vai/1.jpg",
    title: "Badam",
    description: "1 pack 15 piece",
    price: "150",
  },
  {
    id: "3",
    image: "/imran-vai/1.jpg",
    title: "Boroi achar",
    description: "1 pack 15 piece",
    price: "160",
  },
  {
    id: "4",
    image: "/imran-vai/1.jpg",
    title: "Chocolate",
    description: "1 pack 15 piece",
    price: "90",
  },
  {
    id: "5",
    image: "/imran-vai/1.jpg",
    title: "Calsome",
    description: "1 pack 30 piece",
    price: "700",
  },
  {
    id: "6",
    image: "/imran-vai/1.jpg",
    title: "Badam",
    description: "/imran-vai/1.jpg",
    price: "250",
  },
  {
    id: "7",
    image: "/imran-vai/1.jpg",
    title: "Chocolate",
    description: "1 pack 20 piece",
    price: "120",
  },
  {
    id: "8",
    image: "/imran-vai/1.jpg",
    title: "Chocolate",
    description: "1 pack 40 piece",
    price: "90",
  },
  {
    id: "9",
    image: "/imran-vai/1.jpg",
    title: "Couri achar",
    description: "1 pack 15 piece",
    price: "120",
  },
  {
    id: "10",
    image: "/imran-vai/1.jpg",
    title: "Condon kat",
    description: "1 pack 2 piece",
    price: "80",
  },
];
export const AboutData = [
  {
    id: 1,
    image: "/images/sakim-vai.jpg",
    name: "Md Shahriar Imtiaz Sakim",
    Post: "CEO & Founder",
    description: ` Hi there! Im Sakim, Founder and CEO of Barmis Mart online Store. Itis one of the most modern store of Daffodil International
            University. We are providing best food with reasonable price.
         `,
    fbLink: "https://www.facebook.com/shahriarimtiaz.sakim",
  },
  {
    id: 1,
    image: "/images/developer.jpeg",
    name: "Md Shahriar Imtiaz Sakim",
    Post: `Software Engineer`,
    description: `Hi there! Im Mohammad Parvez Musharaf. Leader of Technical Support Team of Barmis mart. Im there working there from the beganing of the startup. Im also the co-founder of Barmis-mart.I have used Ractjs,React-redux, React-redux-Toolkti,Nextjs and Tailwindcss for making this site.`,
    fbLink: "https://www.facebook.com/parvez.musharaf.355/",
  },
];

export const getProductById = (id) => {
  return ProductData.find((event) => event.id === id);
};
