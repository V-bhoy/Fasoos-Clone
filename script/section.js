let items=document.querySelector(".items");
let drinks=document.querySelector("#drinks");
let desserts=document.querySelector("#desserts");
let special=document.querySelector("#special");
let pocket=document.querySelector("#rolls");
let bowl=document.querySelector("#rice");
let check=document.querySelector("#check");
let empty=document.querySelector("#empty");
let data=document.querySelector("#data");
let total=document.querySelector("#total");
let cart=JSON.parse(localStorage.getItem("cartItems"))
let wraps=[{
    name:"Smokey Fab Combo (Veg)",
    price:198,
    glance:"Is it a pizza or a wrap? Let your tasteb...",
    description:"(Veg Only) 1 Masala Paneer Tikka Wrap + 1 Jumbo Falafel Salsa Wrap . When flavourful surprises come knocking, you welcome them with open arms. Especially when they come with savings of Rs.137!",
    rating:4.7,
    buy:"0.2k",
    type:["Veg","wrap"],
    image:"https://product-assets.faasos.io/production/product/image_1618580131789_image_1618219032186_Fab%20%26%20Smokey%20Veg%20Combo%201%20Masala%20Paneer%20tikka%2B%201%20Jumbo%20Falafel%20Salsa%20Wrap.jpg"
},{
    name:"Fab & Creamy Combo",
    price:198,
    glance:"(Veg + Non-Veg) 1 Reshmi Chicken Keb...",
    description:"(Veg + Non-Veg) 1 Reshmi Chicken Kebab Wrap + 1 Makhani Falafel Wrap. Flavours that surprise and prices that amaze. Save Rs. 147 with this FAB combo!",
    rating:4.5,
    buy:"886",
    type:["Non Veg","wrap"],
    image:"https://product-assets.faasos.io/production/product/image_1618581012383_image_1603542783342_Resmi%20chicken%20kebab%20Wrap%20%2B%20Makhani%20Falafel%20Wrap.jpg"
},{
    name:"Fab & Cheesy NonVeg Combo",
    price:209,
    glance:"(Non-Veg Only) Cheese Melt Chicken Wr...",
    description:"(Non-Veg Only) Cheese Melt Chicken Wrap + Double Cheese Meatball Wrap and a savings of Rs 150! Not easy to beat boredom? Indulge in our FAB combo to be surprised!",
    rating:4.4,
    buy:"0.2k",
    type:["Non Veg","Wrap"],
    image:"https://product-assets.faasos.io/production/product/image_1618581154570_image_1603542884429_Cheese%20melt%20chicken%20wrap%20%2B%20Double%20cheese%20meatball%20wrap.jpg"
},{
    name:"Fab & Loaded Veg Combo",
    price:209,
    glance:"(Veg Only) 1 Jumbo Paneer Chole Wrap...",
    description:"(Veg Only) 1 Jumbo Paneer Chole Wrap + 1 Jumbo Falafel Salsa Wrap. When dill mange more but pockets say please no more, we come to the rescue! Save Rs. 181 with this FAB combo of",
    rating:4.4,
    buy:"669",
    type:["Veg","wrap"],
    image:"https://product-assets.faasos.io/production/product/image_1618581202108_image_1603542499176_Jumbo%20Paneer%20Chole%20Wrap%20%2B%20Jumbo%20Falafel%20Salsa%20Wrap.jpg"
},{
    name:"Exotic Fab Combo (Veg)",
    price:219,
    glance:"(Veg Only) Get a fusion of flavours and...",
    description:"(Veg Only) Get a fusion of flavours and a surprise of savings with this combo. 1 Mexican Potato Salsa Wrap + 1 Makhni Falafel Wrap",
    rating:4.6,
    buy:"293",
    type:["Veg","wrap"],
    image:"https://product-assets.faasos.io/production/product/image_1618581269484_image_1618267295019_Mexican%20Potato%20Salsa%20%2B%20Makhni%20Falafel%20Wrap.jpg"
},{
    name:"Smokey Fab combo (Non-Veg)",
    price:239,
    glance:"(Non-Veg Only) Save Rs. 146 with this de...",
    description:"(Non-Veg Only) Save Rs. 146 with this delicious combo of 1 BBQ Chicken Overload Wrap + 1 Masala Chicken Tikka Wrap. An overload of flavours, an overload of savings, we have it all!",
    rating:4.5,
    buy:"610",
    type:["Non Veg","wrap"],
    image:"https://product-assets.faasos.io/production/product/image_1618581404349_image_1618218800445_Fab%20%26%20Smokey%20Non%20Veg%20Combo%201%20BBQ%20Chicken%20Overload%20Wrap%20%2B%201%20Masala%20Chicken%20Tikka%20Wrap.jpg"
},{
    name:"Fab & Italian Combo",
    price:269,
    glance:"(Veg + Non-Veg) 1 Baked Veggie Pizza W...",
    description:"(Veg + Non-Veg) 1 Baked Veggie Pizza Wrap + 1 Baked Chicken Pizza Wrap. Delicious surprises and amazing savings are in the ‘baking’! Indulge in this FAB combo and save Rs.171.",
    rating:5,
    buy:"152",
    type:["Non Veg","wrap"],
    image:"https://product-assets.faasos.io/production/product/image_1618581460225_image_1603542360913_Baked%20Veggi%20Pizza%20Wrap%20%2B%20Baked%20Chicken%20Pizza%20Wrap.jpg"
},{
    name:"Loaded Fab Combo (Non-Veg)",
    price:279,
    glance:"(Non-Veg Only) 1 BBQ Chicken Overload",
    description:"(Non-Veg Only) 1 BBQ Chicken Overload Wrap + 1 American Smokey Sausage Wrap. Delicious wraps, unbelievable savings of Rs.181!",
    rating:4.2,
    buy:"340",
    type:["Non Veg","wrap"],
    image:"https://product-assets.faasos.io/production/product/image_1618581525548_image_1618218769125_Fab%20%26%20Loaded%20Non%20Veg%20Combo%201%20BBQ%20Chicken%20Overload%20Wrap%20%2B%201%20American%20Smokey%20Sausage%20Wrap.jpg"
}];

let cake=[{
    name:"Salted Caramel Pastry (Box of 2)",
    price:303,
    glance:"Eggless) This 5 layered pastry with lay...",
    description:"(Eggless) This 5 layered pastry with layers of Chocolate sponge, dark ganache and caramel flavored mousse, is a delectable indulgence for 2!",
    rating:4.7,
    buy:"0.7k",
    type:["Veg","ct_amz_Dessert","Amazon Recommended"],
    image:"https://product-assets.faasos.io/production/product/image_1637325434373_Salted%20Caramel%20Pastry%20%28Pack%20of%202%29.jpg"
},{
    name:"Triple Choco Mousse (Box of 2)",
    price:303,
    glance:"(Eggless) Dark, White & Milk chocolate ...",
    description:"(Eggless) Dark, White & Milk chocolate mousse, sandwiched between Dark Chocolate Sponge, topped with ganache & swirled with glaze. Get two, as you cant stop at just one!",
    rating:4.6,
    buy:"1.0k",
    type:["Veg","ct_amz_Dessert","Amazon Recommended"],
    image:"https://product-assets.faasos.io/production/product/image_1637325462118_Triple%20Chocolate%20Mousse%20Pastry%20%28Pack%20of%202%29.jpg"
},{
    name:"Mango Cheesecake (Box of 2)",
    price:303,
    glance:"(Eggless) Original New York Style Mang...",
    description:"(Eggless) Original New York Style Mango Cheesecake but with the hint of delicious notes of mangoes, the perfect balance of sweet and tart! Indulge in not 1 but 2!",
    rating:4.5,
    buy:"1.5k",
    type:["Veg","ct_amz_Dessert","Amazon Recommended"],
    image:"https://product-assets.faasos.io/production/product/image_1638181499604_Rich%20Mango%20Cheesecake%20%28Combo%20of%202%29.jpg"
},{
    name:"Caramel & Choco Pastry (Box of 4)",
    price:576,
    glance:"SAVE Rs. 90! 2 Salted Caramel Pastry + ...",
    description:"SAVE Rs. 90! 2 Salted Caramel Pastry + 2 Chocolate Crusted Cheesecake",
    rating:5,
    buy:"852",
    type:["Veg","ct_amz_Dessert","Amazon Recommended"],
    image:"https://product-assets.faasos.io/production/product/image_1637325641195_Salted%20Caramel%20Pastry%20%26%20Chocolate%20Crusted%20Cheesecake%20Combo%20%5BPack%20of%204%5D.jpg"
},{
    name:"Alphonso Mango Cheesecake",
    price:167,
    glance:"(Eggless) This New York Style Mango Ch...",
    description:"(Eggless) This New York Style Mango Cheesecake, made with premium quality cream cheese and a crust infused with delicious mango flavor, is every dessert lovers delight!",
    rating:4.7,
    buy:"23.6k",
    type:["ct_amz_Dessert","Amazon Recommended","Zomato Recommended"],
    image:"https://product-assets.faasos.io/production/product/image_1635343377971_Mango%20Cheesecake.jpg"
},{
    name:"Hazelnut Brownie",
    price:125,
    glance:"Eggless) Gooey & fudgy on the inside a...",
    description:"(Eggless) Gooey & fudgy on the inside and nutty on the outside. Our melt-in-the-mouth Single Nutty Hazelnut Brownie will give you serious dessert goals.",
    rating:4.5,
    buy:"62.4k",
    type:["ct_amz_Dessert","Amazon Recommended","Zomato Recommended"],
    image:"https://product-assets.faasos.io/production/product/image_1635343555407_Hazelnut%20Brownie.jpg"
},{
    name:"Red Velvet Dessert Jar",
    price:240,
    glance:"(Eggless) Fluffy red velvet sponge cakes...",
    description:"(Eggless) Fluffy red velvet sponge cakes with perfectly sweet & creamy, cream cheese frosting, layered in a mason jar. Worth the indulgence!",
    rating:4.5,
    buy:"14.2k",
    type:["ct_amz_Dessert","Amazon Recommended"],
    image:"https://product-assets.faasos.io/production/product/image_1635344386036_Red%20Velvet%20Dessert%20Jar.jpg"
},{
    name:"Chocolate Dessert Jar",
    price:240,
    glance:"(Eggless) Our three-layered sinful chocol...",
    description:"(Eggless) Our three-layered sinful chocolate dessert in a jar is a decadent chocolate love affair because there is no such thing as too much chocolate.",
    rating:4.5,
    buy:"19.9k",
    type:["ct_amz_Dessert","Amazon Recommended","Zomato Recommended"],
    image:"https://product-assets.faasos.io/production/product/image_1635344342897_Chocolate%20Dessert%20Jar.jpg"
}];
let drink=[{
    name:"Potato Wedges (Medium)",
    price:104,
    glance:"When you dont know what to eat next ...",
    description:"When you dont know what to eat next we suggest keep it simple and call for the wedges.",
    rating:4.4,
    buy:"17.2k",
    type:["ct_amz_Fast food","Amazon Recommended"],
    image:"https://product-assets.faasos.io/production/product/image_1638430875621_Potato%20Wedges%20120gm%20%28without%20Dip%29.jpg"
},{
    name:"Cheesy Chicken Meatballs",
    price:116,
    glance:"[100% Safely Cooked Chicken] Juicy min...",
    description:"(Veg + Non-Veg) 1 Reshmi Chicken Kebab Wrap + 1 Makhani Falafel Wrap. Flavours that surprise and prices that amaze. Save Rs. 147 with this FAB combo!",
    rating:4.3,
    buy:"57.6k",
    type:["ct_amz_Fast food","ct_amz_Mughlai","Zomato Recommended"],
    image:"https://product-assets.faasos.io/production/product/image_1638430697268_Meatballs%20with%20cheesy%20dip.jpg"
},{
    name:"Potato Chilli Shots, Mayo Dip",
    price:100,
    glance:"Crispy and spiced potato shots served ...",
    description:"Crispy and spiced potato shots served with a cheesy mayonnaise dip to tantalize your tastebuds.",
    rating:4.4,
    buy:"0.5k",
    type:["Veg","ct_amz_Fast food"],
    image:"https://product-assets.faasos.io/production/product/image_1646804458610_image_1638430624853_Potato%20Chilli%20shots%20with%20mayo%20dip.jpg"
},{
    name:"Falafel Nuggets with Mayo Dip",
    price:100,
    glance:"Mediterranean inspired crispy falafel ma...",
    description:"Mediterranean inspired crispy falafel made from the finest soaked chickpeas and spices, served with a cheesy mayonnaise dip.",
    rating:4.4,
    buy:"0.4k",
    type:["Veg","ct_amz_Fast food"],
    image:"https://product-assets.faasos.io/production/product/image_1646805108747_image_1638430544869_Falafel%20nuggets%20with%20mayo%20dip.jpg"
},{
    name:"Coca-Cola (475 ML)",
    price:60,
    glance:"Coca-Cola Bottle (475 ML)",
    description:"Coca-Cola Bottle (475 ML)",
    rating:4.7,
    buy:"4.0k",
    type:["Veg","ct_amz_Beverage"],
    image:"https://product-assets.faasos.io/production/product/image_1637175713587_image_1633009753854_Coca-Cola%20Bottle%20%28475%20ML%29%20%281%29.jpg"
},{
    name:"SWIG Green Apple",
    price:50,
    glance:"Aerated drink flavored with the mouth-p...",
    description:"Aerated drink flavored with the mouth-puckering green apple. Sure to refresh you completely!",
    rating:4.5,
    buy:"98.0k",
    type:["ct_amz_Beverage","Amazon Recommended"],
    image:"https://product-assets.faasos.io/production/product/image_1624447680588_SWIG%20Green%20apple%2023rd.jpg"
},{
    name:"SWIG Jeera Masala",
    price:50,
    glance:"Aerated drink with the added zing of jee...",
    description:"Aerated drink with the added zing of jeera and masala. A perfect accompaniment to your meal.",
    rating:4.4,
    buy:"102.1k",
    type:["Amazon Recommended","ct_amz_Beverage"],
    image:"https://product-assets.faasos.io/production/product/image_1602770050512_swwwigg%20jeeerraa%20massa.jpg"
},{
    name:"Classic Hot Chocolate (200ml)",
    price:210,
    glance:"Sweet- Pure Nostalgia in a cup. Warmth...",
    description:"Sweet- Pure Nostalgia in a cup. Warmth of rich, creamy chocolate for days when the heart trumps the head! SLAY Signature Cocoa + Chocolate Sauce + Steamed Milk.",
    rating:4.8,
    buy:"0.7k",
    type:["Veg","ct_amz_Beverage","Amazon Recommended"],
    image:"https://product-assets.faasos.io/production/product/image_1640166343845_Classic%20Mom%20Made%20Hot%20Chocolate%20%20%281%29.jpg"
}];
let chef=[{
    name:"Dahi Kebab Wrap",
    price:247,
    glance:"Absolutely new & unique, it is hard to de...",
    description:"Absolutely new & unique, it is hard to decode in one bite! Delicately spiced velvety dahi kebabs with crispy fried potatoes, onions, almond flakes, mint & imli chutney are splendidly wrapped in laccha paratha",
    rating:4.4,
    buy:"2.0k",
    type:["Veg","Amazon Recommended"],
    image:"https://product-assets.faasos.io/production/product/image_1641883877705_Dahi%20Kebab%20Wrap.jpg"
},
{
    name:"Veg Galauti Kebab Wrap",
    price:247,
    glance:"Absolutely new & unique, this exotic wr...",
    description:"Absolutely new & unique, this exotic wrap has melt-in-mouth Galauti kebabs made of minced veggies. This is enveloped in flaky laccha paratha with crisp fried potatoes, onions, almond flakes, mint & imli chutney",
    rating:4.2,
    buy:"1.1k",
    type:["Veg","ct_amz_Fast food"],
    image:"https://product-assets.faasos.io/production/product/image_1641892553077_Veg%20galouti%20kebab%20Wrap.jpg"
},
{
    name:"Zaikedar Mutton Bhuna Wrap",
    price:314,
    glance:"Straight from the Faasos hall of fame! S...",
    description:"Straight from the Faasos hall of fame! Soft and scrumptious mutton chunks cooked in bhuna flavorful masala and wrapped with an omelette in a flaky laccha paratha. Order and let the good times roll.",
    rating:4.1,
    buy:"0.2k",
    type:["Non Veg","ct_amz_Fast food"],
    image:"https://product-assets.faasos.io/production/product/image_1641571358092_image_1636816153606_Mutton%20Overload%20Wrap.jpg"
},
{
    name:"American Smokey Sausage Wrap",
    price:251,
    glance:"Here comes the showstopper! Smoked c...",
    description:"Here comes the showstopper! Smoked chicken sausage lathered in barbeque sauce, chipotle-flavoured cheese & crunchy onions, wrapped in an omelette & flaky laccha paratha. Now thats wow!",
    rating:4.3,
    buy:"0.3k",
    type:["Non Veg","ct_amz_Fast food"],
    image:"https://product-assets.faasos.io/production/product/image_1645135405426_American%20Smokey%20Sausage%20Wrap.jpg"
},
{
    name:"Baked Pizza Wrap",
    price:219,
    glance:"Is it a pizza or a wrap? Let your tastebu...",
    description:"Is it a pizza or a wrap? Let your tastebuds decide. A medley of flavours with fresh bell peppers, corn, olives & jalapenos draped in pizza sauce & mozzarella cheese, all wrapped in a crispy baked paratha.",
    rating:4.3,
    buy:"0.6k",
    type:["Veg","ct_amz_Fast food"],
    image:"https://product-assets.faasos.io/production/product/image_1645135433982_Bbaked%20vVeggie%20Pizza%20Wrap...jpg"
}];
let rolls=[{
    name:"2 Classic Veg Rolls",
    price:261,
    glance:"Double surprises and amazing SAVINGS...",
    description:"Double surprises and amazing SAVINGS of Rs. 51 await you with this veg classic wraps. Choose 2 of your favourite now!",
    rating:4.4,
    buy:"1.4k",
    type:["Veg","ct_amz_Fast food","ct_amz_Meals"],
    image:"https://product-assets.faasos.io/production/product/image_1645126826179_2%20classic%20wraps%20-%20Veg.jpg"
},{
    name:"2 Classic Non-Veg Rolls",
    price:293,
    glance:"51 is your lucky number and thats exactl...",
    description:"51 is your lucky number and thats exactly what youll SAVE by choosing any 2 of your favourite classic non-veg wraps.",
    rating:4.4,
    buy:"5.8k",
    type:["Non Veg","ct_amz_Fast food", "ct_amz_Meals"],
    image:"https://product-assets.faasos.io/production/product/image_1645126850634_2%20classic%20wraps%20-%20Non-Veg.jpg"
},{
    name:"Double Egg Chatpata Roll",
    price:104,
    glance:"Why settle for something ordinary when...",
    description:"Why settle for something ordinary when you can get a snack that is eggstra ordinary! Like this yum wrap made with golden-fried eggs, drizzled with tangy, cheesy mayo and wrapped in a soft roti.",
    rating:4.4,
    buy:"1.4k",
    type:["Non Veg","ct_amz_Fast food"],
    image:"https://product-assets.faasos.io/production/product/image_1643044467883_image_1641882856293_Double%20Egg%20Chatpata%20Wrap.jpg"
},{
    name:"Chatpate Chole Roll",
    price:104,
    glance:"No one believed us when we said chole ...",
    description:"No one believed us when we said chole can be even more exciting. So we created a wrap that has tangy burst of chole with flavorful Indian spices and crunchy onions, wrapped in a soft roti. Try it & get surprised.",
    rating:4.4,
    buy:"0.6k",
    type:["Veg","ct_amz_Fast food"],
    image:"https://product-assets.faasos.io/production/product/image_1643045267075_image_1641883166128_Chatpate%20Chole%20Wrap.jpg"
},{
    name:"Chipotle Cheese Potato Roll",
    price:142,
    glance:"Who knew potato shots could even do t...",
    description:"Who knew potato shots could even do this? Wrapped in a paratha with crunchy onion, chipotle cheese and a drizzle of mint plus chatpata mayo makes this wrap exceptional.",
    rating:4.2,
    buy:"0.5k",
    type:["Veg","ct_amz_Fast food"],
    image:"https://product-assets.faasos.io/production/product/image_1643045638521_image_1641892694075_Cheese%20Melt%20Potato%20Chili%20wrap.jpg"
}];

let rice=[{
    name:"Royal Veg Rice (Jumbo)",
    price:294,
    glance:"An absolutely lovely combination of ho...",
    description:"An absolutely lovely combination of home-style chole, spiced paneer tikka and corn salsa served with Spicy Hyderabadi Rice or Classic Flavourful Rice.",
    rating:4.5,
    buy:"0.3k",
    type:["Veg","ct_amz_Fast food"],
    image:"https://product-assets.faasos.io/production/product/image_1637265743501_Royal%20Veg%20Rice%20Bowl.jpg"
},{
    name:"Paneer Signature Rice",
    price:200,
    glance:"Let your taste buds fall in love with this ...",
    description:"Let your taste buds fall in love with this unique bowl made using out-of-the-world paneer tikka chunks served over a bed of Spicy Hyderabadi Rice or Classic Flavourful Rice",
    rating:4.5,
    buy:"3.4k",
    type:["Veg","ct_amz_Fast food"],
    image:"https://product-assets.faasos.io/production/product/image_1637265256614_Paneer%20Signature%20Rice%20Bowl.jpg"
},{
    name:"Mutton Bhuna Rice (Regular)",
    price:268,
    glance:"A treasure trove of unique Indian flavour...",
    description:"A treasure trove of unique Indian flavours waiting to surprise your palate! Spicy Hyderabadi Rice or Classic Flavourful Rice with melt-in-your-mouth boneless pieces of bhuna mutton cooked in a spicy Indian gravy.",
    rating: 4.3,
    buy:"0.9k",
    type:["Non Veg","ct_amz_Fast food"],
    image:"https://product-assets.faasos.io/production/product/image_1637265118432_Mutton%20Bhuna%20Rice%20Bowl.jpg"
},{
    name:"Rajma Masala Rice (Jumbo)",
    price:210,
    glance:"Amp up your mundane life with this deli...",
    description:"Amp up your mundane life with this delicious meal! A wholesome bowl of all-time favourite rajma slow-cooked in subtly spiced gravy and served with a portion of Spicy Hyderabadi Rice or Classic Flavourful Rice",
    rating:4.4,
    buy:"1.8k",
    type:["Veg","ct_amz_Fast food"],
    image:"https://product-assets.faasos.io/production/product/image_1637265436588_Rajma%20Rice%20Bowl.jpg"
},{
    name:"Royal Chicken Rice (Jumbo)",
    price:331,
    glance:"Breaking the norm was never this delici...", 
    description:"Breaking the norm was never this delicious! Succulent chicken with roasted Indian spices, chicken tikka & chicken meatballs served on a bed of Spicy Hyderabadi Rice or Classic Flavourful Rice & topped with a fluffy omelette",
    rating:4.4,
    buy:"0.8k",
    type:["Non Veg","ct_amz_Fast food"],
    image:"https://product-assets.faasos.io/production/product/image_1637265656959_Royal%20Chicken%20Rice%20Bowl.jpg"
},{
    name:"Smoked Butter Chicken Rice Bowl",
    price:221,
    glance:"Everyone loves a good butter chicken an...",
    description:"Everyone loves a good butter chicken and this one is made with added excitement to surprise your tastebuds! Served over a bed of Spicy Hyderabadi Rice or Classic Flavourful Rice",
    rating:4.4,
    buy:"4.4k",
    type:["Non Veg","ct_amz_Fast food"],
    image:"https://product-assets.faasos.io/production/product/image_1637265821242_Smoked%20Butter%20Chicken%20Rice%20Bowl.jpg"
}];

wraps.forEach((elem,index)=>{
    let div=document.createElement("div");
    let pic=document.createElement("img");
    pic.src=elem.image;
    let name=document.createElement("div");
    name.style.display="flex";
    name.style.justifyContent="space-between";
    name.style.padding="10px";
    div.class="name";
    let title=document.createElement("h4");
    title.innerText=elem.name;
    title.style.fontSize="16px";
    title.style.paddingRight="80px";
    title.style.lineHeight="1.5";
    let p1=document.createElement("p");
    p1.innerText=`₹${elem.price}`;
    p1.style.fontSize="14px";
    name.append(title,p1);
    let p2=document.createElement("p");
    p2.innerText=elem.glance;
    p2.style.fontSize="12px";
    p2.style.padding="10px";
    p2.style.color="rgb(126,126,126)";
    p2.style.letterSpacing="0.4px";
    p2.style.paddingBottom="0px";
    p2.style.marginBottom="0px";
    let link=document.createElement("a");
    link.addEventListener("click",function(){
        elem.quan=1;
        localStorage.setItem("show",JSON.stringify(elem));
    })
    link.href="details.html";
    link.innerText="Read More";
    let star=document.createElement("div");
    div.class="star";
    star.style.display="flex";
    star.style.justifyContent="space-between";
    star.style.padding="10px";
    star.style.marginTop="10px";
    let div1=document.createElement("div");
    let p3=document.createElement("p");
    p3.innerText=`⭐ ${elem.rating}`;
    p3.style.backgroundColor="rgb(24, 170, 24)";
    p3.style.marginRight="60px";
    p3.style.padding="2px 5px";
    p3.style.paddingRight="7px";
    p3.style.fontSize="12px";
    p3.style.fontWeight="bold";
    p3.style.color="white";
    p3.style.borderRadius="3px";
    let p4=document.createElement("p4");
    p4.innerText=elem.buy+" bought this";
    p4.style.fontSize="10px";
    p4.style.color="rgb(167, 165, 165)";
    p4.style.padding="2px";
    p4.style.letterSpacing="0.8px";
    div1.append(p3,p4);
    let div2=document.createElement("div");
    let btn=document.createElement("button");
    btn.innerText="ADD";
    btn.addEventListener("click",function(){
        empty.style.display="none";
        check.style.display="block";

        let cart = JSON.parse(localStorage.getItem("cartItems"))||[];
        elem.quan=1;
        console.log(elem);
        cart.push(elem);
        localStorage.setItem("cartItems",JSON.stringify(cart));
          
        let cartItems=JSON.parse(localStorage.getItem("cartItems"));
        displayData(cartItems);
        showTotal();
    })
    btn.style.backgroundColor="rgb(252, 216, 58)";
    btn.style.border="1px solid rgb(252,216,58)";
    btn.style.width="100px";
    btn.style.height="28px";
    btn.style.fontSize="14px";
    btn.style.fontWeight="bold";
    btn.style.borderRadius="4px";
    btn.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
    btn.style.cursor="pointer";
    let p5=document.createElement("p");
    p5.innerText="Customisable";
    p5.style.fontSize="10px";
    p5.style.color="rgb(167, 165, 165)";
    p5.style.padding="5px";
    p5.style.letterSpacing="0.8px";
    p5.style.textAlign="center";
    div2.append(btn,p5);
    star.append(div1,div2);
    div.append(pic,name,p2,link,star);
    
    items.append(div);
    
});
chef.forEach((elem,index)=>{
    let div=document.createElement("div");
    let pic=document.createElement("img");
    pic.src=elem.image;
    let name=document.createElement("div");
    name.style.display="flex";
    name.style.justifyContent="space-between";
    name.style.padding="10px";
    div.class="name";
    let title=document.createElement("h4");
    title.innerText=elem.name;
    title.style.fontSize="16px";
    title.style.paddingRight="80px";
    title.style.lineHeight="1.5";
    let p1=document.createElement("p");
    p1.innerText=`₹${elem.price}`;
    p1.style.fontSize="14px";
    name.append(title,p1);
    let p2=document.createElement("p");
    p2.innerText=elem.glance;
    p2.style.fontSize="12px";
    p2.style.padding="10px";
    p2.style.color="rgb(126,126,126)";
    p2.style.letterSpacing="0.4px";
    p2.style.paddingBottom="0px";
    p2.style.marginBottom="0px";
    let link=document.createElement("a");
    link.href="#";
    link.innerText="Read More";
    link.addEventListener("click",function(){
        elem.quan=1;
        localStorage.setItem("show",JSON.stringify(elem));
    })
    let star=document.createElement("div");
    div.class="star";
    star.style.display="flex";
    star.style.justifyContent="space-between";
    star.style.padding="10px";
    star.style.marginTop="10px";
    let div1=document.createElement("div");
    let p3=document.createElement("p");
    p3.innerText=`⭐ ${elem.rating}`;
    p3.style.backgroundColor="rgb(24, 170, 24)";
    p3.style.marginRight="60px";
    p3.style.padding="2px 5px";
    p3.style.paddingRight="7px";
    p3.style.fontSize="12px";
    p3.style.fontWeight="bold";
    p3.style.color="white";
    p3.style.borderRadius="3px";
    let p4=document.createElement("p4");
    p4.innerText=elem.buy+" bought this";
    p4.style.fontSize="10px";
    p4.style.color="rgb(167, 165, 165)";
    p4.style.padding="2px";
    p4.style.letterSpacing="0.8px";
    div1.append(p3,p4);
    let div2=document.createElement("div");
    let btn=document.createElement("button");
    btn.innerText="ADD";
    btn.addEventListener("click",function(){
        empty.style.display="none";
        check.style.display="block";

        let cart = JSON.parse(localStorage.getItem("cartItems"))||[];
        elem.quan=1;
        console.log(elem);
        cart.push(elem);
        localStorage.setItem("cartItems",JSON.stringify(cart));
          
        let cartItems=JSON.parse(localStorage.getItem("cartItems"));
        displayData(cartItems);
        showTotal();
    })
    btn.style.backgroundColor="rgb(252, 216, 58)";
    btn.style.border="1px solid rgb(252,216,58)";
    btn.style.width="100px";
    btn.style.height="28px";
    btn.style.fontSize="14px";
    btn.style.fontWeight="bold";
    btn.style.borderRadius="4px";
    btn.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
    btn.style.cursor="pointer";
    let p5=document.createElement("p");
    p5.innerText="Customisable";
    p5.style.fontSize="10px";
    p5.style.color="rgb(167, 165, 165)";
    p5.style.padding="5px";
    p5.style.letterSpacing="0.8px";
    p5.style.textAlign="center";
    div2.append(btn,p5);
    star.append(div1,div2);
    div.append(pic,name,p2,link,star);
    special.append(div);
})
drink.forEach((elem,index)=>{
    let div=document.createElement("div");
    let pic=document.createElement("img");
    pic.src=elem.image;
    let name=document.createElement("div");
    name.style.display="flex";
    name.style.justifyContent="space-between";
    name.style.padding="10px";
    div.class="name";
    let title=document.createElement("h4");
    title.innerText=elem.name;
    title.style.fontSize="16px";
    title.style.paddingRight="80px";
    title.style.lineHeight="1.5";
    let p1=document.createElement("p");
    p1.innerText=`₹${elem.price}`;
    p1.style.fontSize="14px";
    name.append(title,p1);
    let p2=document.createElement("p");
    p2.innerText=elem.glance;
    p2.style.fontSize="12px";
    p2.style.padding="10px";
    p2.style.color="rgb(126,126,126)";
    p2.style.letterSpacing="0.4px";
    p2.style.paddingBottom="0px";
    p2.style.marginBottom="0px";
    let link=document.createElement("a");
    link.href="#";
    link.innerText="Read More";
    link.addEventListener("click",function(){
        elem.quan=1;
        localStorage.setItem("show",JSON.stringify(elem));
    })
    let star=document.createElement("div");
    div.class="star";
    star.style.display="flex";
    star.style.justifyContent="space-between";
    star.style.padding="10px";
    star.style.marginTop="10px";
    let div1=document.createElement("div");
    let p3=document.createElement("p");
    p3.innerText=`⭐ ${elem.rating}`;
    p3.style.backgroundColor="rgb(24, 170, 24)";
    p3.style.marginRight="60px";
    p3.style.padding="2px 5px";
    p3.style.paddingRight="7px";
    p3.style.fontSize="12px";
    p3.style.fontWeight="bold";
    p3.style.color="white";
    p3.style.borderRadius="3px";
    let p4=document.createElement("p4");
    p4.innerText=elem.buy+" bought this";
    p4.style.fontSize="10px";
    p4.style.color="rgb(167, 165, 165)";
    p4.style.padding="2px";
    p4.style.letterSpacing="0.8px";
    div1.append(p3,p4);
    let div2=document.createElement("div");
    let btn=document.createElement("button");
    btn.innerText="ADD";
    btn.addEventListener("click",function(){
        empty.style.display="none";
        check.style.display="block";

         
        let cart = JSON.parse(localStorage.getItem("cartItems"))||[];
        elem.quan=1;
        console.log(elem);
        cart.push(elem);
        localStorage.setItem("cartItems",JSON.stringify(cart));
          
        let cartItems=JSON.parse(localStorage.getItem("cartItems"));
        displayData(cartItems);
        showTotal();
    })
    btn.style.backgroundColor="rgb(252, 216, 58)";
    btn.style.border="1px solid rgb(252,216,58)";
    btn.style.width="100px";
    btn.style.height="28px";
    btn.style.fontSize="14px";
    btn.style.fontWeight="bold";
    btn.style.borderRadius="4px";
    btn.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
    btn.style.cursor="pointer";
    let p5=document.createElement("p");
    p5.innerText="Customisable";
    p5.style.fontSize="10px";
    p5.style.color="rgb(167, 165, 165)";
    p5.style.padding="5px";
    p5.style.letterSpacing="0.8px";
    p5.style.textAlign="center";
    div2.append(btn,p5);
    star.append(div1,div2);
    div.append(pic,name,p2,link,star);
    drinks.append(div);
});
cake.forEach((elem,index)=>{
    let div=document.createElement("div");
    let pic=document.createElement("img");
    pic.src=elem.image;
    let name=document.createElement("div");
    name.style.display="flex";
    name.style.justifyContent="space-between";
    name.style.padding="10px";
    div.class="name";
    let title=document.createElement("h4");
    title.innerText=elem.name;
    title.style.fontSize="16px";
    title.style.paddingRight="80px";
    title.style.lineHeight="1.5";
    let p1=document.createElement("p");
    p1.innerText=`₹${elem.price}`;
    p1.style.fontSize="14px";
    name.append(title,p1);
    let p2=document.createElement("p");
    p2.innerText=elem.glance;
    p2.style.fontSize="12px";
    p2.style.padding="10px";
    p2.style.color="rgb(126,126,126)";
    p2.style.letterSpacing="0.4px";
    p2.style.paddingBottom="0px";
    p2.style.marginBottom="0px";
    let link=document.createElement("a");
    link.href="#";
    link.innerText="Read More";
    link.addEventListener("click",function(){
        elem.quan=1;
        localStorage.setItem("show",JSON.stringify(elem));
    })
    let star=document.createElement("div");
    div.class="star";
    star.style.display="flex";
    star.style.justifyContent="space-between";
    star.style.padding="10px";
    star.style.marginTop="10px";
    let div1=document.createElement("div");
    let p3=document.createElement("p");
    p3.innerText=`⭐ ${elem.rating}`;
    p3.style.backgroundColor="rgb(24, 170, 24)";
    p3.style.marginRight="60px";
    p3.style.padding="2px 5px";
    p3.style.paddingRight="7px";
    p3.style.fontSize="12px";
    p3.style.fontWeight="bold";
    p3.style.color="white";
    p3.style.borderRadius="3px";
    let p4=document.createElement("p4");
    p4.innerText=elem.buy+" bought this";
    p4.style.fontSize="10px";
    p4.style.color="rgb(167, 165, 165)";
    p4.style.padding="2px";
    p4.style.letterSpacing="0.8px";
    div1.append(p3,p4);
    let div2=document.createElement("div");
    let btn=document.createElement("button");
    btn.innerText="ADD";
    btn.addEventListener("click",function(){
        empty.style.display="none";
        check.style.display="block";

          
        let cart = JSON.parse(localStorage.getItem("cartItems"))||[];
        elem.quan=1;
        console.log(elem);
        cart.push(elem);
        localStorage.setItem("cartItems",JSON.stringify(cart));
          
        let cartItems=JSON.parse(localStorage.getItem("cartItems"));
        displayData(cartItems);
        showTotal();
    })
    btn.style.backgroundColor="rgb(252, 216, 58)";
    btn.style.border="1px solid rgb(252,216,58)";
    btn.style.width="100px";
    btn.style.height="28px";
    btn.style.fontSize="14px";
    btn.style.fontWeight="bold";
    btn.style.borderRadius="4px";
    btn.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
    btn.style.cursor="pointer";
    let p5=document.createElement("p");
    p5.innerText="Customisable";
    p5.style.fontSize="10px";
    p5.style.color="rgb(167, 165, 165)";
    p5.style.padding="5px";
    p5.style.letterSpacing="0.8px";
    p5.style.textAlign="center";
    div2.append(btn,p5);
    star.append(div1,div2);
    div.append(pic,name,p2,link,star);
    desserts.append(div);
});
rolls.forEach((elem,index)=>{
    let div=document.createElement("div");
    let pic=document.createElement("img");
    pic.src=elem.image;
    let name=document.createElement("div");
    name.style.display="flex";
    name.style.justifyContent="space-between";
    name.style.padding="10px";
    div.class="name";
    let title=document.createElement("h4");
    title.innerText=elem.name;
    title.style.fontSize="16px";
    title.style.paddingRight="80px";
    title.style.lineHeight="1.5";
    let p1=document.createElement("p");
    p1.innerText=`₹${elem.price}`;
    p1.style.fontSize="14px";
    name.append(title,p1);
    let p2=document.createElement("p");
    p2.innerText=elem.glance;
    p2.style.fontSize="12px";
    p2.style.padding="10px";
    p2.style.color="rgb(126,126,126)";
    p2.style.letterSpacing="0.4px";
    p2.style.paddingBottom="0px";
    p2.style.marginBottom="0px";
    let link=document.createElement("a");
    link.href="#";
    link.innerText="Read More";
    link.addEventListener("click",function(){
        elem.quan=1;
        localStorage.setItem("show",JSON.stringify(elem));
    })
    let star=document.createElement("div");
    div.class="star";
    star.style.display="flex";
    star.style.justifyContent="space-between";
    star.style.padding="10px";
    star.style.marginTop="10px";
    let div1=document.createElement("div");
    let p3=document.createElement("p");
    p3.innerText=`⭐ ${elem.rating}`;
    p3.style.backgroundColor="rgb(24, 170, 24)";
    p3.style.marginRight="60px";
    p3.style.padding="2px 5px";
    p3.style.paddingRight="7px";
    p3.style.fontSize="12px";
    p3.style.fontWeight="bold";
    p3.style.color="white";
    p3.style.borderRadius="3px";
    let p4=document.createElement("p4");
    p4.innerText=elem.buy+" bought this";
    p4.style.fontSize="10px";
    p4.style.color="rgb(167, 165, 165)";
    p4.style.padding="2px";
    p4.style.letterSpacing="0.8px";
    div1.append(p3,p4);
    let div2=document.createElement("div");
    let btn=document.createElement("button");
    btn.innerText="ADD";
    btn.addEventListener("click",function(){
        empty.style.display="none";
        check.style.display="block";

          
        let cart = JSON.parse(localStorage.getItem("cartItems"))||[];
        elem.quan=1;
        console.log(elem);
        cart.push(elem);
        localStorage.setItem("cartItems",JSON.stringify(cart));
          
        let cartItems=JSON.parse(localStorage.getItem("cartItems"));
        displayData(cartItems);
        showTotal();
    });
    btn.style.backgroundColor="rgb(252, 216, 58)";
    btn.style.border="1px solid rgb(252,216,58)";
    btn.style.width="100px";
    btn.style.height="28px";
    btn.style.fontSize="14px";
    btn.style.fontWeight="bold";
    btn.style.borderRadius="4px";
    btn.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
    btn.style.cursor="pointer";
    let p5=document.createElement("p");
    p5.innerText="Customisable";
    p5.style.fontSize="10px";
    p5.style.color="rgb(167, 165, 165)";
    p5.style.padding="5px";
    p5.style.letterSpacing="0.8px";
    p5.style.textAlign="center";
    div2.append(btn,p5);
    star.append(div1,div2);
    div.append(pic,name,p2,link,star);
    pocket.append(div);
});
rice.forEach((elem,index)=>{
    let div=document.createElement("div");
    let pic=document.createElement("img");
    pic.src=elem.image;
    let name=document.createElement("div");
    name.style.display="flex";
    name.style.justifyContent="space-between";
    name.style.padding="10px";
    div.class="name";
    let title=document.createElement("h4");
    title.innerText=elem.name;
    title.style.fontSize="16px";
    title.style.paddingRight="80px";
    title.style.lineHeight="1.5";
    let p1=document.createElement("p");
    p1.innerText=`₹${elem.price}`;
    p1.style.fontSize="14px";
    name.append(title,p1);
    let p2=document.createElement("p");
    p2.innerText=elem.glance;
    p2.style.fontSize="12px";
    p2.style.padding="10px";
    p2.style.color="rgb(126,126,126)";
    p2.style.letterSpacing="0.4px";
    p2.style.paddingBottom="0px";
    p2.style.marginBottom="0px";
    let link=document.createElement("a");
    link.href="#";
    link.innerText="Read More";
    link.addEventListener("click",function(){
        elem.quan=1;
        localStorage.setItem("show",JSON.stringify(elem));

          
    })
    let star=document.createElement("div");
    div.class="star";
    star.style.display="flex";
    star.style.justifyContent="space-between";
    star.style.padding="10px";
    star.style.marginTop="10px";
    let div1=document.createElement("div");
    let p3=document.createElement("p");
    p3.innerText=`⭐ ${elem.rating}`;
    p3.style.backgroundColor="rgb(24, 170, 24)";
    p3.style.marginRight="60px";
    p3.style.padding="2px 5px";
    p3.style.paddingRight="7px";
    p3.style.fontSize="12px";
    p3.style.fontWeight="bold";
    p3.style.color="white";
    p3.style.borderRadius="3px";
    let p4=document.createElement("p4");
    p4.innerText=elem.buy+" bought this";
    p4.style.fontSize="10px";
    p4.style.color="rgb(167, 165, 165)";
    p4.style.padding="2px";
    p4.style.letterSpacing="0.8px";
    div1.append(p3,p4);
    let div2=document.createElement("div");
    let btn=document.createElement("button");
    btn.innerText="ADD";
    btn.addEventListener("click",function(){
        empty.style.display="none";
        check.style.display="block";


        let cart = JSON.parse(localStorage.getItem("cartItems"))||[];
        elem.quan=1;
        console.log(elem);
        cart.push(elem);
        localStorage.setItem("cartItems",JSON.stringify(cart));
          
        let cartItems=JSON.parse(localStorage.getItem("cartItems"));
        displayData(cartItems);
        showTotal();
    })
    btn.style.backgroundColor="rgb(252, 216, 58)";
    btn.style.border="1px solid rgb(252,216,58)";
    btn.style.width="100px";
    btn.style.height="28px";
    btn.style.fontSize="14px";
    btn.style.fontWeight="bold";
    btn.style.borderRadius="4px";
    btn.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
    btn.style.cursor="pointer";
    let p5=document.createElement("p");
    p5.innerText="Customisable";
    p5.style.fontSize="10px";
    p5.style.color="rgb(167, 165, 165)";
    p5.style.padding="5px";
    p5.style.letterSpacing="0.8px";
    p5.style.textAlign="center";
    div2.append(btn,p5);
    star.append(div1,div2);
    div.append(pic,name,p2,link,star);
    bowl.append(div);
});


//database
localStorage.setItem("wraps",JSON.stringify(wraps));
localStorage.setItem("drink",JSON.stringify(drink));
localStorage.setItem("cake",JSON.stringify(cake));
localStorage.setItem("chef",JSON.stringify(chef));
localStorage.setItem("roll",JSON.stringify(rolls));
localStorage.setItem("rice",JSON.stringify(rice));
//-------


function displayData(cart){
    data.innerHTML=null;
  
    cart.forEach((elem,index)=>{
        let div=document.createElement("div");
        total.innerText="₹ "+elem.price;
        div.style.display="flex";
        div.style.justifyContent="space-between";
        div.style.marginBottom="10px"
        let meal=document.createElement("p");
        let quan=document.createElement("div");
        let btn1=document.createElement("button")
        btn1.innerText="-";
        btn1.style.transform="skewY(-10deg)";
        btn1.style.cursor="pointer";
        btn1.addEventListener("click",function(){
            decreaseQuant(index);
                
        
            
        })
        let quantity=document.createElement("span");
        quantity.id="quantity";
        quantity.innerText=elem.quan;
        let btn2=document.createElement("button")
        btn2.style.transform="skewY(10deg)";
        btn2.style.cursor="pointer";
        btn2.innerText="+";
        btn2.addEventListener("click",function(){
            increaseQuant(index);
         
        })
        quan.id="quan";
        quan.append(btn1,quantity,btn2);
        meal.id="meal";
        meal.innerText=elem.name;
        let price= document.createElement("p");
        price.id="cash";
        price.innerText="₹ "+(elem.price*elem.quan);
        div.append(meal,quan,price);
        data.append(div);
    })
}

function decreaseQuant(index) {
    let cart=JSON.parse(localStorage.getItem("cartItems"));
    cart[index].quan--;
    if(cart[index].quan<0){
        cart[index].quan=0;
    }
    if(cart[index].quan===0){
        cart.splice(index,1);
    }
    if(cart.length===0){
        localStorage.removeItem("cartItems");
        check.style.display="none";
        empty.style.display="block";
        return;
    }
    localStorage.setItem("cartItems", JSON.stringify(cart));
    
    displayData(cart); // this will show data when we move from men to cart//
    showTotal();
  }

  function increaseQuant(index) {
    let cart=JSON.parse(localStorage.getItem("cartItems"));
    cart[index].quan++;
    localStorage.setItem("cartItems", JSON.stringify(cart));
    displayData(cart); // this will show data when we move from men to cart/
    showTotal();
  }
  function showTotal() {
    let cart=JSON.parse(localStorage.getItem("cartItems"));
    let sum=0;
    cart.map(function (elem) {
       sum+= (elem.quan*elem.price);
    });
    total.innerText="₹ "+sum;
  }


  
  