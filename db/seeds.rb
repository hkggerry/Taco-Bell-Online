# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Customer.create(id: 1, username:"gerrywon@gmail.com", password:"1234", name:"Gerry")



Menu.create([
    {
        id: 1,
        name: "Soft Taco",
        price: 1.69,
        ingredients: "Cheddar Cheese, Flour Tortilla, Iceberg Lettuce, Seasoned Beef",
        image_url: "https://www.tacobell.com/images/22110_soft_taco_269x269.jpg",
        calories: 180,
        
    },
    {
        id: 2,
        name: "Crunchy Taco",
        price: 1.69,
        ingredients: "Cheddar Cheese, Taco Shell, Iceberg Lettuce, Seasoned Beef",
        image_url: "https://www.tacobell.com/images/22100_crunchy_taco_269x269.jpg",
        calories: 190,
    },
    {
        id: 3,
        name: "Soft Potato Soft Taco",
        price: 1.15,
        ingredients: "Cheddar Cheese, Flour Tortilla, Creamy Chipotle Sauce, Iceberg Lettuce, Potato Bites",
        image_url: "https://www.tacobell.com/images/22259_spicy_potato_soft_taco_269x269.jpg",
        calories: 240,
    },
    {
        id: 4,
        name: "Nacho Cheese Taco",
        price: 2.39,
        ingredients: "Cheddar Cheese, Doritos Loco Taco Nacho Cheese Shell, Iceberg Lettuce, Seasoned Beef",
        image_url: "https://www.tacobell.com/images/22172_nacho_cheese_doritos_locos_tacos_269x269.jpg",
        calories: 170,
    },
    {
        id: 5,
        name: "Nacho Fries",
        price: 1.79,
        ingredients: "Seasoned Fries, Nacho Cheese Dip",
        image_url: "https://www.tacobell.com/images/28095_nacho_fries_269x269.jpg",
        calories: 330,
    },
    {
        id: 6,
        name: "Mexican Pizza",
        price: 4.49,
        ingredients: "Mexican Pizza Sauce, Mexican Pizza Shell, Refried Beans, Seasoned Beef, Three Cheese Blend, Tomataoes",
        image_url: "https://www.tacobell.com/images/22303_mexican_pizza_269x269.jpg",
        calories: 540,
    },
    {
        id: 7,
        name: "Crunchwrap Supreme",
        price: 4.69,
        ingredients: "Flour Tortilla, Iceberg Lettuce, Nacho Cheese Sauce, Reduced-Fat Sour Cream, Seasoned Beef, Tomatoes, Tostada Shells",
        image_url: "https://www.tacobell.com/images/22362_crunchwrap_supreme_269x269.jpg",
        calories: 540,
    },
    {
        id: 8,
        name: "Chicken Chipotle Melt",
        price: 1.59,
        ingredients: "Cheddar Cheese, Creamy Chipotle Sauce, Flour Tortilla, Grilled Chicken",
        image_url: "https://www.tacobell.com/images/28158_chicken_chipotle_melt_269x269.jpg",
        calories: 190,
    },
    {
        id: 9,
        name: "Beefy Melt Burrito",
        price: 2.25,
        ingredients: "Fiesta Tortilla Strips, Flour Tortilla, Nacho Cheese Sauce, Reduce-Fat Sour Cream, Seasoned Beef, Seasoned Rice, Three Cheese Blend",
        image_url: "https://www.tacobell.com/images/23263_beefy_melt_burrito_crunchy_269x269.jpg",
        calories: 620,
    },
    {
        id: 10,
        name: "Fiesta Veggie Burrito",
        price: 2.20,
        ingredients: "Black Beans, Creamy Chipotle Sauce, Fiesta Tortilla Strips, Flour Tortilla, Guacamole, Reduced-Fat Sour Cream, Seasoned Rice, Three Cheese Blend, Tomatoes",
        image_url: "https://www.tacobell.com/images/23264_fiesta_veggie_burrito_269x269.jpg",
        calories: 570,
    },
    {
        id: 11,
        name: "Cheese Bean Burrito",
        price: 1.15,
        ingredients: "Creamy Jalapeno Sauce, Flour Tortilla, Nacho Cheese Sauce, Refried Beans, Seasoned Rice",
        image_url: "https://www.tacobell.com/images/22283_cheesy_bean_and_rice_burrito_269x269.jpg",
        calories: 420,
    },
    {
        id: 12,
        name: "Grilled Steak Cheese Burrito",
        price: 6.79,
        ingredients: "Creamy Chipotle Sauce,Fiesta Tortilla Strips, Flour Tortilla, Nacho Cheese Sauce, Reduced-Fat Sour Cream, Seasoned Rice, Steak, Three Cheese Blend",
        image_url: "https://www.tacobell.com/images/23194_double_steak_grilled_cheese_burrito_classic_269x269.jpg",
        calories: 920,
    },
    {
        id: 13,
        name: "Quesarito",
        price: 4.39,
        ingredients: "Cheddar Cheese, Creamy Chipotle Sauce, Flour Tortilla, Nacho Cheese Sauce, Reduced-Fat Sour Cream, Seasoned Beef, Seasoned Rice",
        image_url: "https://www.tacobell.com/images/22371_quesarito_269x269.jpg",
        calories: 650,
    },
    {
        id: 14,
        name: "Baja Blast Freeze",
        price: 3.19,
        ingredients: "Mtn Dew® Baja Blast Freeze",
        image_url: "https://www.tacobell.com/images/1491_mtn_dew_baja_blast_freeze_269x269.jpg",
        calories: 190,
    },
    {
        id: 15,
        name: "Cherry Bliss Freeze",
        price: 3.19,
        ingredients: "Cherry Bliss Freeze",
        image_url: "https://www.tacobell.com/images/1648_cherry_bliss_freeze_269x269.jpg",
        calories: 220,
    },
    {
        id: 16,
        name: "Mango Freeze",
        price: 3.19,
        ingredients: "Mango Freeze",
        image_url: "https://www.tacobell.com/images/1467_mango_freeze_269x269.jpg",
        calories: 190,
    },
    {
        id: 17,
        name: "Wild Cherry Freeze",
        price: 3.19,
        ingredients: "Wild Cherry Freeze",
        image_url: "https://www.tacobell.com/images/1644_wild_cherry_freeze_269x269.jpg",
        calories: 190,
    },
    {
        id: 18,
        name: "Pepsi",
        price: 2.29,
        ingredients: "Pepsi",
        image_url: "https://www.tacobell.com/images/1002_pepsi_269x269.jpg",
        calories: 380,
    },
    {
        id: 19,
        name: "MTN DEW",
        price: 2.29,
        ingredients: "MTN DEW",
        image_url: "https://www.tacobell.com/images/1012_mountain_dew_269x269.jpg",
        calories: 420,
    },
    {
        id: 20,
        name: "Sweet Iced Tea",
        price: 0.99,
        ingredients: "Sweet Iced Tea",
        image_url: "https://www.tacobell.com/images/1267_sweet_tea_269x269.jpg",
        calories: 170,
    },
    {
        id: 21,
        name: "Water",
        price: 0.05,
        ingredients: "Water",
        image_url: "https://www.tacobell.com/images/1400_cup_of_water_269x269.jpg",
        calories: 0,
    },
    {
        id: 22,
        name: "Iced Coffee",
        price: 1.79,
        ingredients: "Iced Coffee",
        image_url: "https://www.tacobell.com/images/1534_iced_regular_coffee_269x269.jpg",
        calories: 10,
    }
])

Category.create([
    {
        id: 1,
        category: "Burritos",
    },
    {
        id: 2,
        category: "Tacos",
    },
    {
        id: 3,
        category: "Craving Value Menu",
    },
    {
        id: 4,
        category: "Drinks",
    },
    {
        id: 5,
        category: "Specialties",
    }
])

MenuCategory.create([
    {
        id: 1,
        menu_id: 1,
        category_id: 2,
    },
    {
        id: 2,
        menu_id: 2,
        category_id: 2,
    },
    {
        id: 3,
        menu_id: 3,
        category_id: 2,
    },
    {
        id: 4,
        menu_id: 4,
        category_id: 2,
    },
    {
        id: 5,
        menu_id: 5,
        category_id: 5,
    },
    {
        id: 6,
        menu_id: 6,
        category_id: 5,
    },
    {
        id: 7,
        menu_id: 7,
        category_id: 5,
    },
    {
        id: 8,
        menu_id: 8,
        category_id: 5,
    },
    {
        id: 9,
        menu_id: 9,
        category_id: 1,
    },
    {
        id: 10,
        menu_id: 10,
        category_id: 1,
    },
    {
        id: 11,
        menu_id: 11,
        category_id: 1,
    },
    {
        id: 12,
        menu_id: 12,
        category_id: 1,
    },
    {
        id: 13,
        menu_id: 13,
        category_id: 5,
    },
    {
        id: 14,
        menu_id: 14,
        category_id: 4,
    },
    {
        id: 15,
        menu_id: 15,
        category_id: 4,
    },
    {
        id: 16,
        menu_id: 16,
        category_id: 4,
    },
    {
        id: 17,
        menu_id: 17,
        category_id: 4,
    },
    {
        id: 18,
        menu_id: 18,
        category_id: 4,
    },
    {
        id: 19,
        menu_id: 19,
        category_id: 4,
    },
    {
        id: 20,
        menu_id: 20,
        category_id: 4,
    },
    {
        id: 21,
        menu_id: 21,
        category_id: 4,
    },
    {
        id: 22,
        menu_id: 22,
        category_id: 4,
    },
    {
        id: 23,
        menu_id: 8,
        category_id: 3,
    },
    {
        id: 24,
        menu_id: 11,
        category_id: 3,
    },
    {
        id: 25,
        menu_id: 10,
        category_id: 3,
    },
    {
        id: 26,
        menu_id: 9,
        category_id: 3,
    },
    {
        id: 27,
        menu_id: 5,
        category_id: 3,
    },
    {
        id: 28,
        menu_id: 3,
        category_id: 3,
    },
    {
        id: 29,
        menu_id: 1,
        category_id: 3,
    },
    {
        id: 30,
        menu_id: 2,
        category_id: 3,
    }
])