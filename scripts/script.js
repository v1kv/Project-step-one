const tabsService = document.querySelector('.tabs-service')
//Create tabs-service
tabsService.addEventListener('click', (event) => {
  const activTabs = document.querySelector('.active-tabs-service')
  activTabs.classList.remove('active-tabs-service')
  event.target.classList.add('active-tabs-service')
  const data = event.target.getAttribute('data-tab')
  const activeText = document.querySelector(`.service-item[data-tab="${data}"]`)
  document
    .querySelector('.service-item.tabs-service-active')
    .classList.remove('tabs-service-active')
  activeText.classList.add('tabs-service-active')
})
//Create tabs-work
const cardsWork = document.querySelectorAll('.cards-work')
const tabsWork = document.querySelector('.tabs-work')
const allTabs = document.querySelector('.cards-work-wrap')
tabsWork.addEventListener('click', (event) => {
  let dataClass = event.target.dataset['work']
  const activeTabs = document.querySelector('.activ-tabs-work')
  console.log(activeTabs)
  activeTabs.classList.remove('activ-tabs-work')
  event.target.classList.add('activ-tabs-work')
  cardsWork.forEach((elem) => {
    elem.classList.remove('hide')
    if (!elem.classList.contains(dataClass) && dataClass !== 'all') {
      elem.classList.remove('hide-list')
      elem.classList.add('hide')
    }
    // if (!elem.classList.contains(dataClass)) {
    //   btnMore.style.display = 'none'
    // }
  })
})

// Loader
const btnMore = document.querySelector('#btn-more')

btnMore.addEventListener('click', () => {
  const loader = document.querySelector('#loader')
  btnMore.classList.add('hide')
  loader.classList.remove('hide')
  const loaderTime = setTimeout(hideLoader, 4000)
  setTimeout(showListWork, 4000)
})

function hideLoader() {
  loader.classList.add('hide')
}
// function showListWork() {
//   const listWorkOutImg = document.querySelectorAll('.hide-list')
//   listWorkOutImg.forEach((elem) => {
//     elem.classList.remove('hide-list')
//   })
// }

function showListWork() {
  const listWorkOutImg = document.querySelector('.cards-work-wrap')
  console.log(listWorkOutImg)
  listWorkOutImg.style.height = '100%'
}
