if (window.innerWidth < 1000) {
  const menuIcon = document.querySelector('.menu')
  const navbar = document.querySelector('.navbar')

  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change')

    if (!navbar.classList.contains('change')) {
      document.querySelectorAll('.navbar__dropdown').forEach(dropdown => {
        dropdown.style.left = '-20rem'
      })
    }
  })

  document.querySelectorAll('.navbar__list-item--hover .navbar__list-link').forEach(link => {
    link.addEventListener('click', () => {
      link.nextElementSibling.style.left = '0'
    })
  })

  document.querySelectorAll('.navbar__dropdown-item--heading a').forEach(headingLink => {
    headingLink.addEventListener('click', () => {
      headingLink.parentElement.parentElement.style.left = '-20rem'
    })
  })
}
