const dropdownItems = document.querySelectorAll('.navbar__list-item--hover')

if (window.innerWidth >= 1000) {
  dropdownItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.lastElementChild.style.cssText = 'opacity: 1; visibility: visible;'

      document.querySelector('.navbar__wrapper').style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)'
    })

    item.addEventListener('mouseout', () => {
      item.lastElementChild.style.cssText = 'opacity: 0; visibility: hidden;'

      document.querySelector('.navbar__wrapper').style.background = 'none'
    })
  })
}
