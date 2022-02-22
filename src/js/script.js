document.querySelectorAll('.logo').forEach(logo => {
  logo.addEventListener('click', () => {
    document.querySelector('.page__front-page').style.display = 'block'
    document.querySelector('.login').style.display = 'none'
    document.querySelector('.signup-page').style.display = 'none'
  })
})

document.querySelectorAll('.btn--login').forEach(btnLogin => {
  btnLogin.addEventListener('click', () => {
    document.querySelector('.page__front-page').style.display = 'none'
    document.querySelector('.login').style.display = 'flex'
    document.querySelector('.signup-page').style.display = 'none'
  })
})

document.querySelectorAll('.btn--signup').forEach(btnSignup => {
  btnSignup.addEventListener('click', () => {
    document.querySelector('.page__front-page').style.display = 'none'
    document.querySelector('.login').style.display = 'none'
    document.querySelector('.signup-page').style.display = 'block'
  })
})

window.addEventListener('resize', () => {
  window.location.reload()
})
