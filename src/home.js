const renderHomePage = (() => {
  //container
  const contentContainer = document.querySelector("#content");

  const home = document.createElement("div");
  home.classList.add("tab-content")
  home.innerHTML = `<div id="home" class="active" data-tab-content>
  <div class="hero">
    <h1>The Greatest Food From The GLORIOUS TURKISH CUISINE</h1>
    <p>TASTIEST FOOD FOR THE BUCK</p>
    <div class="btn-container">
      <a data-tab-target="#menu" class="order-now">Order Now</a>
    </div>
  </div>
  <div class="info">
    <div class="address">
      <span><i class="fas fa-location-arrow"></i></span>
      <p>1024 OOsterhout<br/>Nord Braband, NL 124124</p>
    </div>
    <div class="hours">
      <span><i class="fas fa-briefcase"></i></span>
      <p>
        <span>Mon-Thurs:</span>8am-8pm<br /><span>Fri-Sun:</span
        >8am-11pm
      </p>
    </div>
  </div>
</div>`;

  contentContainer.appendChild(home);
})();

export { renderHomePage };
