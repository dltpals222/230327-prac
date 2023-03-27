import tagMakeCall from "../modules/tagMakeCall.js"


const root = document.getElementById('root')
const rootChild = ['header','main','footer']

for(let i=0 ; i<rootChild.length;i++){
  tagMakeCall(root, rootChild[i],function(element){
    element.style.border = '2px solid blue'
    element.style.width = '100px'
    element.style.height = '100px'
  })
}

tagMakeCall(document.body,'input',function(element){
  element.setAttribute('value','되돌아가기')
  element.setAttribute('type','button')
  element.setAttribute('id','about-btn')
})
