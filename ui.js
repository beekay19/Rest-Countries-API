class UI {
  constructor() {}
  show(data) {
    let output = "";
    data.forEach(function (item) {
      output += `
        <div class="boxes">
                <div class="boxes-img">
                    <img src="${item.flags.png}" alt="${item.flags.alt}">
                </div>
                <div class="box-info">
                    <h3 class="country"><a href="#">${item.name.common}</a></h3>
                    <div class="population"><span class="bg-text">population:</span> ${item.population.toLocaleString()}</div>
                    <div class="region"><span class="bg-text">Region:</span> ${
                      item.region
                    }</div>
                    <div class="capital"><span class="bg-text">capital:</span> ${
                      item.capital
                    }
                    </div>
                </div>
            </div>`;
    });
    document.querySelector(".box").innerHTML = output;
  }

  showData(data) {
    let output = "";
    output += `
            <div class="container">
            <aside class="back-arrow">
            <div class"arrow-nav">
            <i class="fa-solid fa-arrow-left"></i>
            back
            </div>
            </aside>
            <article class="showcase">
            <div class ="showcase-img">
            <img src"${data.flags.svg}" alt="${data.flags.alt}"/>
            </div>
            <div class = "showcase-info">
            <div class = "country">
            <h2 class="country">${data.name.common}</h2>
            </div>
            <section class="flex">
            <aside class="box-info left">
                    <div class="info-native pb-s">
                <span class="bg-text">Native Name:</span> ${
                  data.altSpellings[1]
                }
              </div>
              <div class="info-population pb-s">
                <span class="bg-text">population:</span> ${data.population.toLocaleString()}
              </div>
              <div class="info-region pb-s">
                <span class="bg-text">Region:</span>  ${data.region}
              </div>
              <div class="info-sub-region pb-s">
                <span class="bg-text">Sub Region:</span>${data.subregion}
              </div>
              <div class="info-capital pb-s">
                <span class="bg-text">capital:</span> > ${item.capital}
              </div>
            </aside>
             <aside class="box-info right">
                <div class="info-region pb-s"><span class="bg-text">Region:</span> ${data.tld[0]}</div>
                    <div class="info-sub-region pb-s"><span class="bg-text">Sub Region:</span>${data.subregion}</div>
                    <div class="info-capital pb-s"><span class="bg-text">capital:</span> berlin
                    </div>
            </aside>

            </section>
            </div>
            </article>
            </div>
            `;
  }
}
