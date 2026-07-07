
var meals = [
  {
    name: "Chicken Stir-Fry",
    description: "Quick and healthy stir-fry with colorful vegetables",
    image: "./img/photo-1467003909585-2f8a72700288.avif",
    difficulty: "Easy",
    cuisine: "Asian",
    rating: 4.5,
    reviews: 324,
    prepTime: "15 min",
    cookTime: "15 min",
    servings: "4 people",
    ingredients: [
      "500g chicken breast, sliced",
      "2 bell peppers, sliced",
      "1 broccoli head, florets",
      "2 carrots, julienned",
      "3 tablespoons soy sauce",
      "2 tablespoons oyster sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "Fresh ginger, grated",
    ],
    instructions: [
      "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
      "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
      "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
      "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
      "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
    ],
    nutrition: {
      calories: "320 kcal",
      protein: "34g",
      carbs: "18g",
      fat: "12g",
      fiber: "5g",
      sodium: "840mg",
    },
    tips: [
      "Cut all ingredients before starting to cook",
      "Keep heat high for authentic stir-fry texture",
      "Don't overcrowd the wok or vegetables will steam",
      "Add cashews or peanuts for extra crunch",
    ],
  },
  {
    name: "Koshari",
    description:
      "Egypt's beloved street-food classic of rice, lentils, pasta and crispy onions",
    image: "img/photo-1509722747041-616f39b57569.avif",
    difficulty: "Medium",
    cuisine: "Egyptian",
    rating: 4.8,
    reviews: 512,
    prepTime: "20 min",
    cookTime: "40 min",
    servings: "5 people",
    ingredients: [
      "1 cup rice",
      "1 cup brown lentils",
      "1 cup small macaroni",
      "2 large onions, thinly sliced",
      "3 tomatoes, blended",
      "3 cloves garlic, minced",
      "2 tablespoons vinegar",
      "1 teaspoon cumin",
      "Vegetable oil for frying",
    ],
    instructions: [
      "Boil lentils until tender, about 20 minutes.",
      "Cook rice and macaroni separately until done.",
      "Deep fry sliced onions until deep golden and crispy; set aside.",
      "Make the tomato sauce: simmer blended tomatoes with garlic, cumin and vinegar for 15 minutes.",
      "Layer rice, lentils and macaroni in a bowl. Top with tomato sauce and crispy onions.",
    ],
    nutrition: {
      calories: "410 kcal",
      protein: "13g",
      carbs: "72g",
      fat: "9g",
      fiber: "9g",
      sodium: "620mg",
    },
    tips: [
      "Fry the onions low and slow so they crisp evenly without burning",
      "A splash of extra vinegar in the sauce brightens the whole dish",
      "Make dakka (garlic-vinegar sauce) on the side for extra kick",
      "Leftovers reheat well with a splash of water",
    ],
  },
  {
    name: "Margherita Pizza",
    description: "Classic Neapolitan pizza with fresh basil and mozzarella",
    image: "img/photo-1546069901-eacef0df6022 (1).avif",
    difficulty: "Medium",
    cuisine: "Italian",
    rating: 4.7,
    reviews: 891,
    prepTime: "20 min",
    cookTime: "12 min",
    servings: "2 people",
    ingredients: [
      "1 pizza dough ball",
      "1/2 cup crushed tomatoes",
      "150g fresh mozzarella, torn",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "1 clove garlic, minced",
      "Salt to taste",
    ],
    instructions: [
      "Preheat oven to its highest setting with a pizza stone if you have one.",
      "Stretch the dough into a thin round on a floured surface.",
      "Spread crushed tomatoes mixed with garlic and salt over the dough.",
      "Scatter torn mozzarella evenly across the top.",
      "Bake for 10-12 minutes until the crust is golden and blistered. Finish with fresh basil and olive oil.",
    ],
    nutrition: {
      calories: "560 kcal",
      protein: "22g",
      carbs: "68g",
      fat: "20g",
      fiber: "3g",
      sodium: "980mg",
    },
    tips: [
      "Let the dough come to room temperature before stretching",
      "Don't overload with toppings or the center will stay soggy",
      "A very hot oven is key to a crisp, blistered crust",
      "Add basil after baking so it doesn't wilt too much",
    ],
  },
  {
    name: "Beef Tacos",
    description: "Crispy corn tacos with seasoned beef and fresh toppings",
    image: "img/photo-1467003909585-2f8a72700288.avif",
    difficulty: "Easy",
    cuisine: "Mexican",
    rating: 4.6,
    reviews: 445,
    prepTime: "15 min",
    cookTime: "15 min",
    servings: "4 people",
    ingredients: [
      "500g ground beef",
      "8 small corn tortillas",
      "1 packet taco seasoning (or homemade mix)",
      "1 cup shredded lettuce",
      "1 tomato, diced",
      "1/2 cup shredded cheese",
      "Sour cream, to serve",
      "Lime wedges",
    ],
    instructions: [
      "Brown the ground beef in a skillet over medium-high heat, breaking it up as it cooks.",
      "Stir in taco seasoning and a splash of water; simmer for 5 minutes.",
      "Warm the tortillas in a dry pan or directly over a flame until slightly charred.",
      "Fill each tortilla with beef, lettuce, tomato and cheese.",
      "Top with sour cream and a squeeze of lime before serving.",
    ],
    nutrition: {
      calories: "480 kcal",
      protein: "28g",
      carbs: "30g",
      fat: "26g",
      fiber: "4g",
      sodium: "710mg",
    },
    tips: [
      "Warm tortillas right before serving so they stay soft and pliable",
      "Drain excess fat from the beef for a lighter filling",
      "Char the tortillas briefly over an open flame for extra flavor",
      "Set up toppings buffet-style so everyone builds their own",
    ],
  },
  {
    name: "Creamy Mushroom Pasta",
    description:
      "Rich and comforting pasta tossed in a garlicky mushroom cream sauce",
    image: "img/photo-1565299585323-38d6b0865b47.avif",
    difficulty: "Easy",
    cuisine: "Italian",
    rating: 4.4,
    reviews: 267,
    prepTime: "10 min",
    cookTime: "20 min",
    servings: "3 people",
    ingredients: [
      "300g fettuccine",
      "300g mushrooms, sliced",
      "1 cup heavy cream",
      "3 cloves garlic, minced",
      "1/2 cup parmesan, grated",
      "2 tablespoons butter",
      "Fresh parsley, chopped",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Cook fettuccine in salted boiling water until al dente. Reserve a cup of pasta water.",
      "Melt butter in a pan and sauté mushrooms until golden, about 6 minutes.",
      "Add garlic and cook for 1 minute until fragrant.",
      "Pour in cream and simmer gently for 5 minutes until slightly thickened.",
      "Toss in the pasta and parmesan, loosening with pasta water as needed. Finish with parsley.",
    ],
    nutrition: {
      calories: "610 kcal",
      protein: "18g",
      carbs: "58g",
      fat: "34g",
      fiber: "4g",
      sodium: "540mg",
    },
    tips: [
      "Don't crowd the mushrooms or they'll steam instead of browning",
      "Save pasta water — it's the secret to a silky sauce",
      "Freshly grated parmesan melts far better than pre-shredded",
      "A pinch of nutmeg pairs beautifully with cream sauces",
    ],
  },
  {
    name: "Grilled Salmon Bowl",
    description: "Light and fresh salmon bowl with rice and a citrus glaze",
    image: "img/photo-1585032226651-759b368d7246.avif",
    difficulty: "Easy",
    cuisine: "Japanese",
    rating: 4.6,
    reviews: 198,
    prepTime: "10 min",
    cookTime: "12 min",
    servings: "2 people",
    ingredients: [
      "2 salmon fillets",
      "1 cup cooked rice",
      "2 tablespoons soy sauce",
      "1 tablespoon honey",
      "1 tablespoon lime juice",
      "1 avocado, sliced",
      "1 cucumber, sliced",
      "Sesame seeds, to garnish",
    ],
    instructions: [
      "Whisk together soy sauce, honey and lime juice to make the glaze.",
      "Pat salmon dry and season lightly with salt and pepper.",
      "Sear salmon in a hot pan, skin-side down, for 4 minutes, then flip.",
      "Brush the glaze on during the last 2 minutes of cooking.",
      "Serve salmon over rice with avocado, cucumber and a sprinkle of sesame seeds.",
    ],
    nutrition: {
      calories: "430 kcal",
      protein: "31g",
      carbs: "34g",
      fat: "18g",
      fiber: "6g",
      sodium: "460mg",
    },
    tips: [
      "Don't move the salmon while searing to get a crisp skin",
      "Let the glaze reduce slightly before brushing for more flavor",
      "Rest the salmon 2 minutes before serving",
      "A dash of chili flakes adds a nice kick to the bowl",
    ],
  },
];

function getRandomMeal(mealList) {
  var randomIndex = Math.floor(Math.random() * mealList.length);
  return mealList[randomIndex];
}

var activeTab = "ingredients";

function renderMeal(meal) {
  document.getElementById("mealImage").src = meal.image;
  document.getElementById("mealRating").textContent = meal.rating;

  document.getElementById(
    "mealReviews"
  ).textContent = `(${meal.reviews} reviews)`;

  document.getElementById("prepTime").textContent = meal.prepTime;
  document.getElementById("cookTime").textContent = meal.cookTime;
  document.getElementById("servings").textContent = meal.servings;
  document.getElementById("tagDifficulty").textContent = meal.difficulty;
  document.getElementById("tagCuisine").textContent = meal.cuisine;
  document.getElementById("mealName").textContent = meal.name;
  document.getElementById("mealDesc").textContent = meal.description;

  renderTab(meal);
}


function renderTab(meal) {
  var panel = document.getElementById("tabPanel");

  if (activeTab === "ingredients") {
    var html = `<ul class="ingredient-list">`;
    for (var i = 0; i < meal.ingredients.length; i++) {
      html +=
        `<li><span class="num-badge">${i + 1}</span>` +
        `<span>${meal.ingredients[i]}</span></li>`;
    }
    html += `</ul>`;
    panel.innerHTML = html;
  }

  if (activeTab === "instructions") {
    var html = `<ul class="instruction-list">`;
    for (var i = 0; i < meal.instructions.length; i++) {
      html +=
        `<li><span class="num-badge">${i + 1}</span>` +
        `<span>${meal.instructions[i]}</span></li>`;
    }
    html += `</ul>`;
    panel.innerHTML = html;
  }

  if (activeTab === "nutrition") {
    var n = meal.nutrition;
    var nutritionItems = [
      ["Calories", n.calories, "🔥", "#FDECE3"],
      ["Protein", n.protein, "💪", "#E4ECFB"],
      ["Carbohydrates", n.carbs, "🌾", "#FBF3DA"],
      ["Fat", n.fat, "💧", "#FBE4EC"],
      ["Fiber", n.fiber, "🌿", "#E5F5E7"],
      ["Sodium", n.sodium, "🧂", "#FCE9F1"],
    ];

    var html = `<div class="nutrition-grid">`;
    for (var i = 0; i < nutritionItems.length; i++) {
      var label = nutritionItems[i][0];
      var val = nutritionItems[i][1];
      var icon = nutritionItems[i][2];
      var bg = nutritionItems[i][3];

      html += `
        <div class="nutri-box">
          <div class="nutri-icon" style="background:${bg}">${icon}</div>
          <div class="text">
            <span class="name">${label}</span>
            <span class="val">${val}</span>
          </div>
        </div>`;
    }
    html += `</div>`;
    panel.innerHTML = html;
  }

  if (activeTab === "tips") {
    var html = `<ul class="tips-list">`;
    for (var i = 0; i < meal.tips.length; i++) {
      html += `<li>${meal.tips[i]}</li>`;
    }
    html += `</ul>`;
    panel.innerHTML = html;
  }
}

var currentMeal = getRandomMeal(meals);
renderMeal(currentMeal);

document.getElementById("tryAnotherBtn").addEventListener("click", function () {
  currentMeal = getRandomMeal(meals);
  renderMeal(currentMeal);
});
