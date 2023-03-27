import tagMakeCall from '../modules/tagMakeCall.js'
import tagMakeFor from '../modules/tagMakeFor.js'

const root = document.getElementById('root')

tagMakeFor(root,'div',3)
tagMakeCall(root.children[0], 'input',function(element){
  element.setAttribute('id','404-btn')
  element.setAttribute('value','되돌아가기')
  element.setAttribute('type','button')
})

root.children[2].innerText = "404-NotFound"

