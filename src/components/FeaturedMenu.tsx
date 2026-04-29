import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { TOAST_ORDER_LINK } from "../constants";
import { ShoppingBag, Star, Leaf, Flame } from "lucide-react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
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
        description: "Marinated chicken, pickles, toum garlic whip",
        link: "https://www.toasttab.com/local/order/sicilia-pizza-pizza/item-slice-cheese_b63f1c6f-1bcf-4fa3-8c08-9cce410832b9"
      },
      { name: "Heritage Beef Shawarma", price: "11.99", description: "Flame-seared beef, sumac onions, tomatoes, tahini" },
      { name: "Kebab Wrap", price: "11.99", description: "Grilled spiced beef, hummus, tomatoes, onions" },
      { name: "Shish Tawooq Wrap", price: "11.99", description: "Grilled spiced chicken, garlic sauce, cucumber pickles" },
      { name: "Gyro Wrap", price: "10.99", description: "Traditional gyro meat, tomatoes, tzatziki" },
    ],
  },
  {
    title: "Bowls & Plates",
    items: [
      { name: "The Sultan's Chicken Bowl", price: "13.99", description: "Chicken shawarma, hummus, extra garlic sauce", featured: true },
      { name: "Imperial Beef Bowl", price: "13.99", description: "Beef shawarma, tomatoes, onions, tahini" },
      { name: "Shish Tawooq Rice Platter", price: "13.99", description: "Two skewers lemon yogurt grilled chicken" },
      { name: "The Mixed Grill Bowl", price: "14.99", description: "Shish Tawooq skewer and Kebab skewer" },
    ],
  },
  {
    title: "Loaded Fries",
    items: [
      { name: "The Street King Loaded Fries", price: "14.99", description: "Seasoned fries, shawarma meat, feta, zebra sauce", featured: true, spicy: true },
    ],
  },
  {
    title: "Appetizers",
    items: [
      { name: "Silky Hummus", price: "6.99", description: "Creamy hummus dip", vegetarian: true },
      { name: "Baba Ganoush", price: "6.99", description: "Smoky eggplant dip", vegetarian: true },
      { name: "Crispy Kibbeh", price: "7.99", description: "Crispy seasoned bulgur shells" },
      { name: "Hand-Made Falafel", price: "6.99", description: "Fresh falafel pieces", vegetarian: true },
    ],
  },
  {
    title: "Sides & Soup",
    items: [
      { name: "Mediterranean Lentil Soup", price: "5.99", description: "Served with fresh lemon", vegetarian: true },
      { name: "Seasoned Fries", price: "4.99", description: "Golden crispy fries with mediterranean herbs" },
      { name: "Rice", price: "3.99", description: "Authentic basmati rice" },
      { name: "Greek Salad", price: "7.99", description: "Fresh garden vegetables with feta and olives" },
    ],
  },
  {
    title: "Desserts & Drinks",
    items: [
      { name: "Famous Baklava", price: "4.99", description: "Phyllo, pistachios, honey syrup", featured: true },
      { name: "Refreshments", price: "2.49", description: "Soft drink or bottled water" },
      { name: "Fresh Lemonade", price: "4.99", description: "House-made recipe" },
    ],
  },
  {
    title: "Combos",
    items: [
      { name: "Wrap Combo", price: "15.99", description: "Any wrap + fries + drink", featured: true },
      { name: "Bowl Combo", price: "18.99", description: "Any bowl + drink", featured: true },
    ],
  },
];

export default function FeaturedMenu() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="menu" className="py-24 bg-charcoal">
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
                  className={`group relative p-8 border border-white/5 hover:border-gold/30 transition-all duration-500 bg-black/20 ${
                    item.featured ? "bg-white/[0.03]" : ""
                  }`}
                >
                  {item.featured && (
                    <div className="absolute -top-3 left-8 bg-gold text-charcoal px-3 py-1 text-[10px] uppercase font-black tracking-widest flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      {item.name.includes("Bag-O-Grub") ? "Specials" : "Popular"}
                    </div>
                  )}
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-serif text-2xl text-cream group-hover:text-gold transition-colors duration-300">
                          {item.name}
                        </h4>
                        {item.vegetarian && <Leaf className="w-4 h-4 text-green-500" title="Vegetarian" />}
                        {item.spicy && <Flame className="w-4 h-4 text-orange-500" title="Spicy" />}
                      </div>
                      <p className="text-cream/50 font-light text-sm italic leading-relaxed max-w-sm">
                        {item.description}
                      </p>
                      {item.warning && (
                        <p className="mt-3 text-[#ff4d4d] text-[10px] font-black uppercase tracking-wider bg-red-500/10 p-2 rounded border border-red-500/20">
                          {item.warning}
                        </p>
                      )}
                    </div>
                    <div className="text-xl font-serif text-gold font-light tracking-wide">
                      ${item.price}
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
