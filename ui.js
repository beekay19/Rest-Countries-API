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
                    <h3 class="country"><a href="info.html?code=${
                      item.cca3
                    }" class='country-info'>${item.name.common}</a></h3>
                    <div class="population"><span class="bg-text">population:</span> ${item.population.toLocaleString()}</div>
                    <div class="region"><span class="bg-text">Region:</span> ${
                      item.region
                    }</div>
                    <div class="capital"><span class="bg-text">capital:</span> ${capital(
                      item.capital
                    )}
                    </div>
                </div>
            </div>`;
    });
    document.querySelector(".box").innerHTML = output;
  }

  showData(data) {
    let output = "";

    output += `
           
            <div class ="showcase-img">
            <img src="${data.flags.svg}" alt="${data.flags.alt}">
            </div>
            <div class = "showcase-info">
            <div class = "country-info">
            <h2 class="country">${data.name.common}</h2>
            </div>
            <section class="flex">
            <aside class="box-info left">
                    <div class="info-native pb-s">
                <span class="bg-text">Native Name: </span> ${
                  data.altSpellings[1]
                }
              </div>
              <div class="info-population pb-s">
                <span class="bg-text">population: </span> ${data.population.toLocaleString()}
              </div>
              <div class="info-region pb-s">
                <span class="bg-text">Region: </span>  ${data.region}
              </div>
              <div class="info-sub-region pb-s">
                <span class="bg-text">Sub Region: </span>${data.subregion}
              </div>
              <div class="info-capital pb-s">
                <span class="bg-text">capital: </span>  ${data.capital}
              </div>
            </aside>
             <aside class="box-info right">
                <div class="info-region pb-s"><span class="bg-text">Top Level Domain: </span> ${tdl(
                  data.tdl
                )}</div>
                    <div class="info-sub-region pb-s"><span class="bg-text">currencies: </span>${currency(
                      data.currencies
                    )}</div>
                    <div class="info-capital pb-s"><span class="bg-text">languages:  </span> ${language(
                      data.languages
                    )}
                    </div>
            </aside>

            </section>
            <div class="borders">
            <p class="bg-text">Border Countries:</p>
        <div class="b-countries">
            
        </div>
    </div>
           </div>
           
            `;

    document.querySelector("#showcase").innerHTML = output;
  }
  showBorders(data, all) {
    let output = "";
    data.borders.forEach((item) => {
      all.forEach(function (border) {
        if (item === border.cca3) {
          output += `
          <div class="countries"><a href="info.html?code=${border.cca3}" >${border.name.common}</a></div>
          `;
        }
      });
    });
    document.querySelector(".b-countries").innerHTML = output;
  }
}

function currency(data) {
  for (let item in data) {
    return data[item].name;
  }
}

// turns language into a string
function language(data) {
  list = [];
  for (let item in data) {
    list.push(data[item]);
  }
  return list.join(",");
}

// return tdl data
function tdl(data) {
  if (data !== undefined) {
    return data.tdl;
  } else {
    return "Not Found";
  }
}

// return capital data

function capital(data) {
  if (data !== undefined) {
    return data;
  } else {
    return "Not Found";
  }
}
