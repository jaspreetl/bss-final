import p_img1 from './p_img1.png'
import p_img2_1 from './p_img2_1.png'
import p_img2_2 from './p_img2_2.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img8 from './p_img8.png'
import p_img9 from './p_img9.png'
import p_img10 from './p_img10.png'
import p_img11 from './p_img11.png'
import p_img12 from './p_img12.png'
import p_img13 from './p_img13.png'
import p_img14 from './p_img14.png'
import p_img15 from './p_img15.png'
import p_img16 from './p_img16.png'
import p_img17 from './p_img17.png'
import p_img18 from './p_img18.png'
import p_img19 from './p_img19.png'
import p_img20 from './p_img20.png'
import p_img21_1 from './p_img21_1.png'
import p_img21_2 from './p_img21_2.png'
import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}


export const products = [
    {
        _id: "c0001",
        name: "Classic Cold Brew",
        description: "Smooth, slow-steeped cold brew with chocolatey undertones.",
        price: 4.50,
        image: [p_img1],
        category: "Coffee",
        subCategory: "Cold",
        sizes: ["Small", "Medium", "Large"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "c0002",
        name: "Vanilla Oat Latte",
        description: "Espresso with creamy oat milk and a hint of vanilla.",
        price: 5.20,
        image: [p_img2_1, p_img2_2],
        category: "Coffee",
        subCategory: "Hot",
        sizes: ["Small", "Medium", "Large"],
        date: 1716621345448,
        bestseller: true
    },   
    {
        _id: "m0001",
        name: "Iced Matcha Latte",
        description: "Vibrant ceremonial-grade matcha served over ice with oat milk.",
        price: 4.90,
        image: [p_img3],
        category: "Matcha",
        subCategory: "Cold",
        sizes: ["Small", "Medium", "Large"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "c0003",
        name: "Espresso Tonic",
        description: "Bright espresso poured over sparkling tonic water and citrus.",
        price: 4.70,
        image: [p_img4],
        category: "Coffee",
        subCategory: "Cold",
        sizes: ["Single", "Double"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "c0007",
        name: "Matcha Rose Latte",
        description: "Delicate matcha blended with steamed milk and a floral hint of rose.",
        price: 6.10,
        image: [p_img5],
        category: "Matcha",
        subCategory: "Hot",
        sizes: ["Small", "Medium", "Large"],
        date: 1716659600000,
        bestseller: false
    },    
    {
        _id: "m0002",
        name: "Hot Matcha Latte",
        description: "Earthy matcha steamed with your choice of milk.",
        price: 4.60,
        image: [p_img6],
        category: "Matcha",
        subCategory: "Hot",
        sizes: ["Small", "Medium", "Large"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "c0004",
        name: "Drip Coffee",
        description: "A rotating single-origin brewed to perfection.",
        price: 3.00,
        image: [p_img7],
        category: "Coffee",
        subCategory: "Hot",
        sizes: ["Small", "Medium", "Large"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "c0005",
        name: "Caramel Cold Brew",
        description: "Cold brew infused with house-made caramel syrup.",
        price: 5.00,
        image: [p_img8],
        category: "Coffee",
        subCategory: "Cold",
        sizes: ["Small", "Medium", "Large"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "m0003",
        name: "Matcha Sparkler",
        description: "Iced matcha with sparkling yuzu soda for a citrus kick.",
        price: 4.80,
        image: [p_img9],
        category: "Matcha",
        subCategory: "Cold",
        sizes: ["Single", "Double"],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "c0006",
        name: "Mocha",
        description: "Espresso and dark chocolate with steamed milk.",
        price: 5.20,
        image: [p_img10],
        category: "Coffee",
        subCategory: "Hot",
        sizes: ["Small", "Medium", "Large"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "m0004",
        name: "Strawberry Matcha Latte",
        description: "Layered drink with sweet strawberry milk and earthy matcha.",
        price: 5.30,
        image: [p_img11],
        category: "Matcha",
        subCategory: "Cold",
        sizes: ["Small", "Medium", "Large"],
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "c0007",
        name: "Flat White",
        description: "Velvety steamed milk over bold espresso shots.",
        price: 4.80,
        image: [p_img12],
        category: "Coffee",
        subCategory: "Hot",
        sizes: ["Small", "Medium"],
        date: 1716624445448,
        bestseller: false
    },
    {
        _id: "m0005",
        name: "Iced Coconut Matcha",
        description: "Tropical twist on matcha with coconut milk.",
        price: 5.00,
        image: [p_img13],
        category: "Matcha",
        subCategory: "Cold",
        sizes: ["Small", "Medium", "Large"],
        date: 1716625545448,
        bestseller: false
    },
    {
        _id: "c0008",
        name: "Seasonal Nitro Cold Brew",
        description: "Infused with nitrogen for a creamy, smooth finish.",
        price: 5.40,
        image: [p_img14],
        category: "Coffee",
        subCategory: "Cold",
        sizes: ["Single", "Double"],
        date: 1716627745448,
        bestseller: false
    },
    {
        _id: "m0006",
        name: "Matcha Chai Latte",
        description: "Spicy chai balanced with the calm of matcha.",
        price: 5.10,
        image: [p_img15],
        category: "Matcha",
        subCategory: "Hot",
        sizes: ["Small", "Medium", "Large"],
        date: 1716643145448,
        bestseller: false
    },
    {
        _id: "m0007",
        name: "Ceremonial Matcha Tin",
        description: "Premium, stone-ground matcha for home brewing.",
        price: 32.00,
        image: [p_img16],
        category: "Matcha",
        subCategory: "Retail",
        sizes: ["30g", "60g"],
        date: 1716628845448,
        bestseller: false
    },
    {
        _id: "c0009",
        name: "Coffee Beans - House Blend",
        description: "Balanced roast with notes of chocolate and citrus.",
        price: 31.00,
        image: [p_img17],
        category: "Coffee",
        subCategory: "Retail",
        sizes: ["250g", "500g"],
        date: 1716633245448,
        bestseller: false
    },
    {
        _id: "m0008",
        name: "Matcha Whisk Set",
        description: "Includes bamboo whisk, scoop, and ceramic bowl.",
        price: 25.00,
        image: [p_img18],
        category: "Matcha",
        subCategory: "Merch",
        sizes: [],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "c0010",
        name: "Reusable Cold Cup",
        description: "16oz insulated cup with straw for iced drinks.",
        price: 8.50,
        image: [p_img19],
        category: "Coffee",
        subCategory: "Merch",
        sizes: [],
        date: 1716639845448,
        bestseller: false
    },
    {
        _id: "m0009",
        name: "Iced Lavender Matcha",
        description: "Floral and herbal, a calming twist on matcha.",
        price: 5.40,
        image: [p_img20],
        category: "Matcha",
        subCategory: "Cold",
        sizes: ["Small", "Medium", "Large"],
        date: 1716640945448,
        bestseller: false
    }, 
    {
        _id: "c0011",
        name: "Brown Sugar Shaken Espresso",
        description: "Blonde espresso shaken with brown sugar syrup and oat milk.",
        price: 5.40,
        image: [p_img21_1, p_img21_2],
        category: "Coffee",
        subCategory: "Cold",
        sizes: ["Small", "Medium", "Large"],
        date: 1716650000000,
        bestseller: true
    }, 
];
