import { sum } from './modules/sum'

const root = document.querySelector('#root')
root.textContent = sum(6, -1).toString()

// import template from './template.hbs'
