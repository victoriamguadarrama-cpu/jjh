export const menuData = {
  appetizers: {
    label: "Appetizers",
    items: [
      { id: "app-1", name: "Shrimp Cocktail", price: 4, tags: ["GF"] },
      { id: "app-2", name: "Coconut Shrimp with Pineapple Chutney", price: 5, tags: [] },
      { id: "app-3", name: "Bacon Wrapped Shrimp", price: 5, tags: ["GF"] },
      { id: "app-4", name: "Chicken or Beef Skewers", price: 5, tags: ["GF"], note: "Served with dipping sauces" },
      { id: "app-5", name: "Artisan Cheese and Cracker Display", price: 3, tags: [] },
      { id: "app-6", name: "Caprese Skewers", price: 3, tags: ["GF", "V"] },
      { id: "app-7", name: "Vegetable and Dip", price: 3, tags: ["GF", "V"] },
      { id: "app-8", name: "Seasonal Fruit Display", price: 3, tags: ["GF", "V", "Vegan"] },
      { id: "app-9", name: "Sweet and Spicy Meatballs", price: 4, tags: [], note: "Vegetarian option available" },
      { id: "app-10", name: "Charcuterie Board", price: 6, tags: [], note: "Local cheeses, crackers, meats, grapes, berries" },
      { id: "app-11", name: "Goat Cheese and Bruschetta", price: 4, tags: ["V"], note: "With toast points" },
      { id: "app-12", name: "Quesadillas", price: 4, tags: [], note: "Chicken, sweet pork, or roasted vegetable (V)" },
      { id: "app-13", name: "Chino Latino Eggrolls", price: 4, tags: [] },
      { id: "app-14", name: "Taquitos", price: 4, tags: [], note: "Shredded beef or chicken" },
      { id: "app-15", name: "Warm Spinach and Artichoke Dip", price: 3, tags: ["GF", "V"], note: "With tortilla chips" },
      { id: "app-16", name: "Fresh Guacamole", price: 3, tags: ["GF", "V"], note: "With tortilla chips" },
      { id: "app-17", name: "Chips and Salsa", price: 2, tags: ["GF", "V"] },
      { id: "app-18", name: "White Cheddar Queso", price: 3, tags: ["V"], note: "With chips" },
      { id: "app-19", name: "Ceviche", price: 4, tags: ["GF"] },
      { id: "app-20", name: "Crab Dip", price: 5, tags: [], note: "With toast points" },
      { id: "app-21", name: "Roasted Hummus and Pita Chips", price: 3, tags: ["V"] },
    ]
  },
  entrees: {
    label: "Dinner Entrées",
    items: [
      { id: "ent-1", name: "Citrus Chicken", price: 18, tags: [], note: "Fresh lemon, orange and herbs" },
      { id: "ent-2", name: "Teriyaki Chicken", price: 18, tags: [], note: "With pineapple teriyaki sauce" },
      { id: "ent-3", name: "Chicken Cordon Bleu", price: 19, tags: [] },
      { id: "ent-4", name: "Chicken Florentine", price: 19, tags: [], note: "Spinach and parmesan cream sauce" },
      { id: "ent-5", name: "Roasted Chicken with Lemon Hollandaise", price: 20, tags: [] },
      { id: "ent-6", name: "Roast Beef", price: 22, tags: [], note: "With horseradish cream and au jus" },
      { id: "ent-7", name: "Blackened New York Strip Steak", price: 25, tags: [] },
      { id: "ent-8", name: "Beef Tenderloin Medallions", price: 26, tags: [], note: "In mushroom demi-glaze" },
      { id: "ent-9", name: "Prime Rib", price: 28, tags: [], note: "With horseradish cream and au jus" },
      { id: "ent-10", name: "Roasted Beef Tenderloin", price: 30, tags: [] },
      { id: "ent-11", name: "Pork Tenderloin", price: 22, tags: [], note: "With butternut squash/apple chutney" },
      { id: "ent-12", name: "Baked Salmon", price: 22, tags: [], note: "Choice of Tzatziki or Chimichurri" },
    ]
  },
  sides: {
    label: "Salads, Soups & Sides",
    items: [
      { id: "side-1", name: "Traditional House Salad", price: 0, tags: [] },
      { id: "side-2", name: "Classic Caesar Salad", price: 0, tags: [] },
      { id: "side-3", name: "Apple-Frosted Pecan Salad", price: 0, tags: [] },
      { id: "side-4", name: "Steakhouse Wedge", price: 0, tags: [] },
      { id: "side-5", name: "Caprese Salad", price: 0, tags: [] },
      { id: "side-6", name: "Baked Potato Soup", price: 0, tags: [] },
      { id: "side-7", name: "Butternut Squash Soup", price: 0, tags: [] },
      { id: "side-8", name: "Roasted Tomato Soup", price: 0, tags: [] },
      { id: "side-9", name: "Broccoli Cheddar Soup", price: 0, tags: [] },
      { id: "side-10", name: "California Blend Vegetables", price: 0, tags: ["V"] },
      { id: "side-11", name: "Glazed Carrots", price: 0, tags: ["V"] },
      { id: "side-12", name: "Roasted Root Vegetables", price: 0, tags: ["V"] },
      { id: "side-13", name: "Sautéed Green Beans", price: 0, tags: ["V"] },
      { id: "side-14", name: "Roasted Brussels Sprouts", price: 0, tags: ["V"] },
      { id: "side-15", name: "Garlic Mashed Potatoes", price: 0, tags: ["V"] },
      { id: "side-16", name: "Baked Potato", price: 0, tags: ["V"], note: "With butter and sour cream" },
      { id: "side-17", name: "Oven Roasted Red Potatoes", price: 0, tags: ["V"] },
      { id: "side-18", name: "Potatoes Au Gratin", price: 0, tags: ["V"] },
      { id: "side-19", name: "Baked Macaroni and Cheese", price: 0, tags: ["V"] },
    ]
  },
  desserts: {
    label: "Desserts",
    items: [
      { id: "des-1", name: "Gourmet Brownies", price: 3, tags: ["GF*"], note: "Mint, Bluebird, or Cream Cheese" },
      { id: "des-2", name: "Assorted Cookies", price: 2, tags: [] },
      { id: "des-3", name: "Lemon Bars", price: 3, tags: [] },
      { id: "des-4", name: "New York Cheesecake", price: 4, tags: [], note: "With seasonal berry sauce" },
      { id: "des-5", name: "Flourless Chocolate Torte", price: 4, tags: ["GF"], note: "With raspberry sauce" },
      { id: "des-6", name: "Crème Brûlée", price: 4, tags: ["GF"] },
      { id: "des-7", name: "Berry Cobbler", price: 3, tags: [], note: "With cinnamon ice cream" },
      { id: "des-8", name: "Chocolate Covered Strawberries", price: 3, tags: ["GF"] },
      { id: "des-9", name: "French Macarons", price: 3, tags: ["GF"] },
      { id: "des-10", name: "Chocolate Mousse Cake", price: 3, tags: [] },
      { id: "des-11", name: "Berry Bliss Cake", price: 3, tags: [] },
      { id: "des-12", name: "Lemon Cream Cake", price: 3, tags: [] },
      { id: "des-13", name: "Beignets", price: 3, tags: [] },
    ]
  },
  dessertStations: {
    label: "Dessert Stations",
    items: [
      { id: "dst-1", name: "Ice Cream Sundae Bar", price: 7, tags: [], note: "Choice of 2 Aggie Ice Cream flavors, toppings, whipped cream" },
      { id: "dst-2", name: "Bite-Sized Dessert Buffet", price: 6, tags: [], note: "Choose 3: Cheesecake, Torte, or Bars" },
      { id: "dst-3", name: "Donut Holes Station", price: 6, tags: [], note: "Cinnamon Sesame, Almond Glaze, Powdered Sugar" },
      { id: "dst-4", name: "S'mores Station", price: 5, tags: [], note: "Choice of 3 chocolate bar flavors" },
      { id: "dst-5", name: "Crepe Station", price: 8, tags: [], note: "Berries, Bananas, Nutella, Vanilla Cream, Whipped Cream" },
    ]
  },
  beverages: {
    label: "Beverages",
    items: [
      { id: "bev-1", name: "Italian Soda Bar", price: 3.5, tags: [], note: "Flavored syrups, club soda, and cream" },
      { id: "bev-2", name: "Mixed Soda Bar", price: 3.5, tags: [], note: "Choice of sodas, flavored syrups, and limes" },
      { id: "bev-3", name: "Coffee", price: 2, tags: [] },
    ]
  }
};
