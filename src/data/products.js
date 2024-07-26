// There are 3 types of tag: Accessories, Footwear, Clothing

const ProductList =[
    {
        id: 1,
        name: "Bag",
        image: "https://cdn.pixabay.com/photo/2024/04/18/14/31/ai-generated-8704438_1280.jpg",
        initialPrice: 10,
        newPrice: 100,
        description: "A stylish and durable bag suitable for all occasions.",
        tag: "Accessories"
    },
    {
        id: 2,
        name: "Shoes",
        image: "https://cdn.pixabay.com/photo/2024/04/21/13/30/ai-generated-8710583_1280.jpg",
        initialPrice: 20,
        newPrice: 150,
        description: "Comfortable and fashionable shoes for daily wear.",
        tag: "Footwear"
    },
    {
        id: 3,
        name: "Watch",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        initialPrice: 50,
        newPrice: 200,
        description: "A sleek and modern watch with advanced features.",
        tag: "Accessories"
    },
    {
        id: 4,
        name: "Sunglasses",
        image: "https://cdn.pixabay.com/photo/2024/06/18/17/24/chic-blonde-woman-8838452_1280.jpg",
        initialPrice: 15,
        newPrice: 80,
        description: "Stylish sunglasses with UV protection.",
        tag: "Accessories"
    },
    {
        id: 5,
        name: "Jacket",
        image: "https://cdn.pixabay.com/photo/2023/11/24/17/51/ai-generated-8410416_1280.jpg",
        initialPrice: 30,
        newPrice: 250,
        description: "A warm and comfortable jacket for cold weather.",
        tag: "Clothing"
    },
    {
        id: 6,
        name: "Hat",
        image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        initialPrice: 8,
        newPrice: 60,
        description: "A fashionable hat to complement your outfit.",
        tag: "Accessories"
    },
    {
        id: 7,
        name: "Scarf",
        image: "https://plus.unsplash.com/premium_photo-1665408932949-a8db7f9b55fc?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        initialPrice: 12,
        newPrice: 70,
        description: "A cozy scarf to keep you warm.",
        tag: "Accessories"
    },
    {
        id: 8,
        name: "Gloves",
        image: "https://images.unsplash.com/photo-1549396555-3d107fd70c85?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        initialPrice: 5,
        newPrice: 40,
        description: "Comfortable gloves for cold weather.",
        tag: "Accessories"
    },
    {
        id: 9,
        name: "Belt",
        image: "https://images.unsplash.com/photo-1585856331426-d7a22437d4bb?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        initialPrice: 10,
        newPrice: 50,
        description: "A stylish belt for any occasion.",
        tag: "Accessories"
    },
    {
        id: 10,
        name: "Wallet",
        image: "https://images.unsplash.com/photo-1614330315526-166f2d71e544?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        initialPrice: 20,
        newPrice: 100,
        description: "A sleek wallet to keep your essentials organized.",
        tag: "Accessories"
    },
    {
        id: 11,
        name: "Backpack",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        initialPrice: 25,
        newPrice: 120,
        description: "A spacious backpack for your daily needs.",
        tag: "Accessories"
    },
    {
        id: 12,
        name: "Dress",
        image: "https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        initialPrice: 40,
        newPrice: 150,
        description: "An elegant dress for special occasions.",
        tag: "Clothing"
    },
    {
        id: 13,
        name: "Skirt",
        image: "https://images.unsplash.com/photo-1582142306909-195724d33ffc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        initialPrice: 25,
        newPrice: 100,
        description: "A stylish skirt for a chic look.",
        tag: "Clothing"
    },
    {
        id: 14,
        name: "Blouse",
        image: "https://images.unsplash.com/photo-1608234807905-4466023792f5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        initialPrice: 30,
        newPrice: 120,
        description: "A fashionable blouse for a sophisticated appearance.",
        tag: "Clothing"
    },
    {
        id: 15,
        name: "Jeans",
        image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        initialPrice: 35,
        newPrice: 90,
        description: "Comfortable and trendy jeans for everyday wear.",
        tag: "Clothing"
    }
]

export default ProductList;
