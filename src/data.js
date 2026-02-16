export const products = [
  {
    id: "1",
    name: "Lollipop",
    mrpPrice: 20,
    sellingPrice: 18,
    image: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec",
    desc: "Colorful and fun sweet treat loved by kids and adults alike. Perfect for quick sugar cravings and party treats. Comes in fruity flavors with long-lasting sweetness.",
  },
  {
    id: "2",
    name: "Bread",
    mrpPrice: 40,
    sellingPrice: 35,
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
    desc: "Soft and freshly baked bread made from quality wheat. Ideal for breakfast toast, sandwiches, or evening snacks. Hygienically packed to retain freshness and taste.",
    units: [
      { id: "u1", weight: 100, unit: "g", mrpPrice: 20, sellingPrice: 18 },
      { id: "u2", weight: 200, unit: "g", mrpPrice: 40, sellingPrice: 35 },
    ],
  },
  {
    id: "3",
    name: "Cake",
    mrpPrice: 200,
    sellingPrice: 180,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    desc: "Delicious freshly baked cake with rich creamy layers. Perfect for birthdays, celebrations, and special occasions. Made with premium ingredients for soft texture and great taste.",
    variants: [
      {
        name: "Black Forest",
        units: [
          { id: "u3", weight: 500, unit: "g", mrpPrice: 200, sellingPrice: 180 },
          { id: "u4", weight: 1, unit: "kg", mrpPrice: 350, sellingPrice: 300 },
        ],
      },
      {
        name: "White Forest",
        units: [
          { id: "u5", weight: 500, unit: "g", mrpPrice: 200, sellingPrice: 200 },
          { id: "u6", weight: 1, unit: "kg", mrpPrice: 350, sellingPrice: 350 },
        ],
      },
    ],
  },
];
