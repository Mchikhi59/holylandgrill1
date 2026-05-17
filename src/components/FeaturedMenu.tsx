import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { TOAST_ORDER_LINK } from "../constants";
import { ShoppingBag, Star, Leaf, Flame } from "lucide-react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  featured?: boolean;
  vegetarian?: boolean;
  spicy?: boolean;
  link?: string;
  warning?: string;
}

interface Category {
  title: string;
  items: MenuItem[];
}

const MENU_DATA: Category[] = [
  {
    title: "Specials",
    items: [
      {
        name: "The \"Bag-O-Grub\" Special",
        price: "10.99",
        description: "Create your own flavor adventure! Grab a bag of chips, and we will load it with your choice of savory meat, crisp fresh vegetables, and your favorite house sauce.",
        image: "https://res.cloudinary.com/dkbp4licj/image/upload/v1777821233/Grab_a_bag_of_chips_g86njz.jpg",
        featured: true,
        warning: "⚠️ IN-PERSON EXCLUSIVE: Available at the truck only. Not eligible for online ordering or delivery."
      }
    ]
  },
  {
    title: "Wraps",
    items: [
      { 
        name: "Classic Chicken Shawarma", 
        price: "11.99", 
        description: "Thinly sliced, tender chicken marinated in a rich blend of Middle Eastern spices, garlic, and lemon juice, then slow roasted to savory perfection. Served with crisp pickles and our signature garlic sauce, wrapped in warm flatbread ",
        image: "https://res.cloudinary.com/dkbp4licj/image/upload/v1777818464/chicken_shawarma_wrap_mzk2bw.jpg",
        link: "https://www.toasttab.com/local/order/sicilia-pizza-pizza/item-slice-cheese_b63f1c6f-1bcf-4fa3-8c08-9cce410832b9"
      },
      { name: "Heritage Beef Shawarma", price: "11.99", description: "Premium cuts of tender beef deeply marinated in a traditional blend of aromatic Middle Eastern spices, garlic, and a touch of vinegar, then slow roasted to perfection Wrapped in warm flatbread. Served with freshly tomatoes, and a drizzle of rich, authentic tahini sauce", image: "https://res.cloudinary.com/dkbp4licj/image/upload/v1777817015/1000066006_ockwbj.jpg" },
      { name: "Kebab Wrap", price: "11.99", description: "Perfectly seasoned, flame-grilled ground meat skewers packed with fresh herbs and traditional spices. Wrapped in warm flatbread with crisp lettuce, juicy tomatoes, onions, and a drizzle of cool, creamy sauce.", image: "https://res.cloudinary.com/dkbp4licj/image/upload/v1777819921/wrap_Grilled_spiced_beef_hikg75.jpg" },
      { name: "Shish Tawooq Wrap", price: "11.99", description: "Tender, juicy cubes of chicken breast marinated in our signature yogurt, lemon, and garlic spice blend, grilled to perfection. Wrapped in warm flatbread with pickles, and a generous slather of our authentic, creamy garlic sauce", image: "https://res.cloudinary.com/dkbp4licj/image/upload/v1777819611/Shish_Tawooq_Wrap_rhlan4.jpg" },
      { name: "Gyro Wrap", price: "11.99", description: "Flame-roasted, thinly sliced seasoned beef and lamb piled high on warm, Wrapped in warm flatbread. Layered with crisp lettuce, tomatoes, and a generous drizzle of our cool, creamy house-made Tzatziki sauce", image: "https://res.cloudinary.com/dkbp4licj/image/upload/v1777820844/Gyro_wrap_wm153g.jpg" },
    ],
  },
  {
    title: "Bowls & Plates",
    items: [
      { name: "The Sultan's Chicken Bowl", price: "13.99", description: "Your choice of rice or salad topped with signature shaved chicken shawarma,Served with diced tomatoes with topped with garlic sauce", featured: true },
      { name: "Imperial Beef Bowl", price: "13.99", description: "Your choice of rice or salad with savory Beef shawarma, Served with diced tamotoes,onins and topped with tahini sauce " },
      { name: "Shish Tawooq Rice Platter", price: "13.99", description: "rice or salad topped with Two skewers lemon yogurt grilled chicken with garlic sauce" },
      { name: "The Mixed Grill Bowl", price: "13.99", description: "one Shish Tawooq skewer and one Kebab skewer with rice and your choice of sauce" },
      { name: "Mediterranean Chicken Salad Bowl", price: "13.99", description: "Fresh garden vegetables with feta and olives topped savory shaved chicken shwarma " },
    ],
  },
  {
    title: "Loaded Fries",
    items: [
      { name: "The Street King Loaded Fries", price: "14.99", description: "Seasoned fries, shawarma meat, feta, zebra sauce", image: "https://res.cloudinary.com/dkbp4licj/image/upload/v1777821876/Seasoned_fries_hod5il.jpg", featured: true, spicy: true },
    ],
  },
  {
    title: "Appetizers",
    items: [
      { name: "Silky Hummus", price: "6.99", description: "Creamy hummus dip", image: "https://res.cloudinary.com/dkbp4licj/image/upload/v1777822317/Creamy_hummus_dip_adqlk4.jpg", vegetarian: true },
      { name: "Baba Ganoush", price: "6.99", description: "Smoky eggplant dip", image: "https://res.cloudinary.com/dkbp4licj/image/upload/v1777822283/Baba_Ganoush_btcfq6.jpg", vegetarian: true },
      { name: "Crispy Kibbeh", price: "4.99", description: "Crispy fried seasoned bulgur shells filled with seaoned beef meat and onion", image: "https://res.cloudinary.com/dkbp4licj/image/upload/v1777822413/Crispy_Kibbeh_d4ggnx.jpg" },
      { name: "Hand-Made Falafel", price: "6.99", description: "6 pieces Fresh falafel ", image: "https://res.cloudinary.com/dkbp4licj/image/upload/v1777822496/Hand-Made_Falafel_bck6xh.jpg", vegetarian: true },
    ],
  },
  {
    title: "Sides & Soup",
    items: [
      { name: "Mediterranean Lentil Soup", price: "4.99", description: "Served with fresh lemon", image: "https://res.cloudinary.com/dkbp4licj/image/upload/v1777822617/Mediterranean_Lentil_Soup_pchhnt.jpg", vegetarian: true },
      { name: "Seasoned Fries", price: "4.99", description: "Golden crispy fries with mediterranean herbs" },
      { name: "Rice", price: "3.99", description: "Authentic basmati rice" },
      { name: "Mediterranean Salad", price: "4.99", description: "Fresh garden vegetables with feta and olives" },
      
    ],
  },
  
  {
    title: "Desserts & Drinks",
    items: [
      { name: "Famous Baklava", price: "4.99", description: "Phyllo, pistachios, honey syrup", featured: true },
      { name: "Refreshments", price: "2.49", description: "Cola , Sprite, Pepsi or bottled water" },
      
    ],
  },
  {
    title: "Combos",
    items: [
      { name: "Wrap Combo", price: "15.99", description: "Any wrap + fries + drink", featured: true },
      { name: "Bowl Combo", price: "16.99", description: "Any Bowl + fries + drink", },
      
    ],
  },
  {
    title: "Sauces",
    items: [
      { name: "Garlic Sauce", price: "1", description: "Our signature toum garlic whip" },
      { name: "Spicy Garlic Sauce", price: "1", description: "Toum with a spicy kick", spicy: true },
      { name: "Tahini Sauce", price: "1", description: "Creamy roasted sesame dip" },
      { name: "Spicy Tahini Sauce", price: "1", description: "Tahini infused with house spices", spicy: true },
      { name: "Tzatziki", price: "1", description: "Traditional yogurt and cucumber dip", vegetarian: true },
    ],
  },
];

export default function FeaturedMenu() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="menu" className="py-24 bg-transparent scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
          >
            Experience the Flavors
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl text-cream mb-6"
          >
            <span className="italic font-light gold-gradient">Menu</span>
          </motion.h2>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 border-b border-white/5 pb-8">
          {MENU_DATA.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 text-sm uppercase tracking-widest font-bold transition-all duration-300 relative ${
                activeTab === idx ? "text-gold" : "text-cream/40 hover:text-cream"
              }`}
            >
              {cat.title}
              {activeTab === idx && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12"
            >
              {MENU_DATA[activeTab].items.map((item) => (
                <div 
                  key={item.name} 
                  className={`group relative border border-white/5 hover:border-gold/30 transition-all duration-500 bg-black/20 overflow-hidden ${
                    item.featured ? "bg-white/[0.03]" : ""
                  }`}
                >
                  {item.featured && (
                    <div className="absolute top-4 left-4 z-10 bg-gold text-charcoal px-3 py-1 text-[10px] uppercase font-black tracking-widest flex items-center gap-1 shadow-xl">
                      <Star className="w-3 h-3 fill-current" />
                      {item.name.includes("Bag-O-Grub") ? "Specials" : "Popular"}
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row h-full">
                    {item.image && (
                      <div className="w-full sm:w-48 h-56 sm:h-auto overflow-hidden bg-black/40 border-b sm:border-b-0 sm:border-r border-white/5 flex items-center justify-center">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                    
                    <div className="flex-1 p-8">
                      <div className="flex justify-between items-start mb-4 gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h4 className="font-serif text-2xl text-cream group-hover:text-gold transition-colors duration-300">
                              {item.name}
                            </h4>
                            <div className="flex items-center gap-2">
                              {item.vegetarian && <Leaf className="w-4 h-4 text-green-500" title="Vegetarian" />}
                              {item.spicy && <Flame className="w-4 h-4 text-orange-500" title="Spicy" />}
                            </div>
                          </div>
                          <p className="text-cream/50 font-light text-sm italic leading-relaxed max-w-sm">
                            {item.description}
                          </p>
                          {item.warning && (
                            <p className="mt-4 text-[#ff4d4d] text-[10px] font-black uppercase tracking-wider bg-red-500/10 p-2 rounded border border-red-500/20">
                              {item.warning}
                            </p>
                          )}
                        </div>
                        <div className="text-xl font-serif text-gold font-light tracking-wide whitespace-nowrap">
                          ${item.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="text-center mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-cream/40 text-sm italic mb-8">
              * Prices and availability are subject to change. Please check our online ordering page for the most up-to-date information.
            </p>
            <a 
              href={TOAST_ORDER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-16 py-6 bg-gold text-charcoal font-black uppercase tracking-[0.2em] text-xs hover:bg-cream transition-all duration-500 shadow-2xl shadow-gold/10"
            >
              Order Online
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
