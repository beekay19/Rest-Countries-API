let darkMode = localStorage.getItem('darkMode');


const isDarkMode = ()=>{
    // add darkmode
    document.body.classList.add('dark')

    // set item to localstorage
    localStorage.setItem('darkMode','enable')
}

const isLighMode = ()=>{
    // add darkmode
    document.body.classList.remove('dark')

    // set item to localstorage
    localStorage.setItem('darkMode','disable')
}

if(darkMode === 'enable'){
    isDarkMode()
}else{
    isLighMode()
}

document.querySelector('.header-toggle').addEventListener('click', (e) => {
    darkMode = localStorage.getItem('darkMode')
   if(darkMode !== 'enable'){
    isDarkMode()
   }else{
    isLighMode()
   }
   })
   