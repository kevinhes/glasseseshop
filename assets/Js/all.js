const navigationBtn = document.querySelector('.navigation-btn')
const navigation = document.querySelector('.navigation')

navigationBtn.addEventListener('click', function(e) {
  navigation.classList.toggle('navigation-active')
})