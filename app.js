const data = new Countries()
const ui = new UI()
document.querySelector('.africa').addEventListener('click',africa)
document.querySelector('.europe').addEventListener('click',europe)
document.querySelector('.oceania').addEventListener('click',oceania)
document.querySelector('.america').addEventListener('click', americas)
document.querySelector('.asia').addEventListener('click',asia)
document.getElementById('filter').addEventListener('keyup',filter)

data.getData()
.then(data => {
    data.forEach(item => {
        if(item.name.common === "Guatemala"){
            console.log(item)
    }
    })
    ui.show(data)

}
    )

document.querySelector('.list-main').addEventListener('click',function(e){
document.querySelector('.list-main .list').classList.toggle('show')

})


function currency(data){
    for (let item in data){
        return data[item].name
    }
}

function africa(e){
  const displayAfrica = document.querySelectorAll('.region')
  displayAfrica.forEach((item) =>{
    if(item.textContent.split(' ')[1] !== 'Africa'){
        item.parentElement.parentElement.style.display = 'none'

    }else{
        item.parentElement.parentElement.style.display = 'grid'
    }

  })
}

function  americas(e){
  const displayAmericas = document.querySelectorAll('.region')
  displayAmericas.forEach((item) =>{
    if(item.textContent.split(' ')[1] !== 'Americas'){
        item.parentElement.parentElement.style.display = 'none'
    }else{
        item.parentElement.parentElement.style.display = 'grid'
    }

  })
}

function oceania(e){
  const displayOceania = document.querySelectorAll('.region')
  displayOceania.forEach((item) =>{
    if(item.textContent.split(' ')[1] !== 'Oceania'){
        item.parentElement.parentElement.style.display = 'none'
    }else{
        item.parentElement.parentElement.style.display = 'grid'
    }

  })
}

function asia(e){
  const displayAsia = document.querySelectorAll('.region')
  displayAsia.forEach((item) =>{
    if(item.textContent.split(' ')[1] !== 'Asia'){
        item.parentElement.parentElement.style.display = 'none'

    }else{
        item.parentElement.parentElement.style.display = 'grid'
    }

  })
}

function europe(e){
  const displayEurope = document.querySelectorAll('.region')
  displayEurope.forEach((item) =>{
    if(item.textContent.split(' ')[1] !== 'Europe'){
        item.parentElement.parentElement.style.display = 'none'

    }else{
        item.parentElement.parentElement.style.display = 'grid'
    }

  })
}

function filter(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.country-info').forEach((e)=>{
        if(e.textContent.toLowerCase().indexOf(text)){
            e.parentElement.parentElement.parentElement.style.display = 'none'
        }else{
            e.parentElement.parentElement.parentElement.style.display = 'grid'
        }

        
    })
}