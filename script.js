const questions = document.querySelectorAll('.card__faq-question');
console.log(questions)


questions.forEach(question => {
 question.addEventListener('click', e => {
  e.target.classList.toggle('active')
 })
})
