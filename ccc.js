if (localStorage.theme === 'dark') {
  html.classList.add('dark')
}

btn.addEventListener('click', () => {
  html.classList.toggle('dark')
  localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light'
})
