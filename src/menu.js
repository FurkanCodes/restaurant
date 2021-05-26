const renderMenuPage = (() => {
  //container
  const contentContainer = document.querySelector("#content");
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  menu.setAttribute("data-tab-content", "");
  menu.innerHTML = `
  <div class="hero">
  <h1>Menu</h1>

</div>
<div class="menu-container">
  <div class="menu-item">
    <img src="images/ezogelin.jpg" alt="" />
    <div class="item-content">
      <h4>Ezogelin Soup: <span>€3.49</span></h4>
      <p>
       'Ezogelin' soup is a hearty and delicious Turkish soup made with red lentils, rice, bulgur, pepper paste, and Turkish spices. It comes from the southeastern region of Turkey, and it's a great example of Turkish regional cuisine.
      </p>
      <button class="basket" type="button"> ADD TO BASKET </button>
    </div>
  </div>
  <div class="menu-item">
    <img src="images/iskenderkebab.jpg" alt="" />
    <div class="item-content">
      <h4>iskender Kebab: <span>€20.99</span></h4>
      <p> A perfect combination slices of lamb or beef in tomato based sauce, served over pide bread with yoghurt and grilled vegetables by the side. </p>
      <button class="basket" type="button"> ADD TO BASKET </button>
    </div>
  </div>
  <div class="menu-item">
    <img src="images/kisir.jpg" alt="" />
    <div class="item-content">
      <h4>Kisir: <span>€3.49</span></h4>
      <p>Kısır is a bulgur based salad found in Turkish cuisine.The main ingredients are finely ground bulgur, parsley, and tomato paste.</p>
      <button class="basket" type="button"> ADD TO BASKET </button>
    </div>
  </div>
  <div class="menu-item">
    <img src="images/kofte.jpg" alt="" />
    <div class="item-content">
      <h4>İnegöl Meatballs: <span>€11.99</span></h4>
      <p>İnegöl köfte are grilled meatballs (köfte) specific to İnegöl, Bursa. </p>
      <button class="basket" type="button"> ADD TO BASKET </button>
    </div>
  </div>
  <div class="menu-item">
    <img src="images/mercimek.jpg" alt="" />
    <div class="item-content">
      <h4>Mercimek Köftesi: <span>€8.99</span></h4>
      <p>Lentil Balls, this vegetarian kofte is one of the most popular appetizers of Turkish cuisine.</p>
      <button class="basket" type="button"> ADD TO BASKET </button>
    </div>
  </div>
  <div class="menu-item">
    <img src="images/saksuka.jpg" alt="" />
    <div class="item-content">
      <h4>Saksuka: <span>€4.99</span></h4>
      <p>
     Şakşuka is a Turkish side dish or meze made of vegetables cooked in olive oil. The particular vegetable may vary from region to region, but eggplant is a common choice. In Balıkesir şakşuka is made with green tomatoes. The dish sometimes includes potato and peppers as well.
     
      </p>
      <button class="basket" type="button"> ADD TO BASKET </button>
    </div>
  </div>
  <div class="menu-item">
    <img src="images/sarma.jpg" alt="" />
    <div class="item-content">
      <h4>Yaprak Sarma <span>€7.99</span></h4>
      <p>
       Sarma, commonly marketed as stuffed grape leaves, is a type of dolma—a stuffed dish of the cuisines of the former Ottoman Empire from the Middle East to Southeastern Europe—comprising vine, cabbage, monk's rhubarb, kale or chard leaves rolled around a filling of grains (like bulgur or rice), minced meat, or both.
      </p>
      <button class="basket" type="button"> ADD TO BASKET </button>
    </div>
  </div>

  </div>
</div>`;

  contentContainer.appendChild(menu);
})();

export { renderMenuPage };
