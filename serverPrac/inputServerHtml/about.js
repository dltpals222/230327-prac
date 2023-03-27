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

tagMakeCall(root,'form',function(element){
  element.setAttribute('action','/')
  element.setAttribute('id','about-form')
})

const aboutForm = document.getElementById('about-form')

tagMakeCall(aboutForm,'input',function(element){
  element.setAttribute('value','되돌아가기')
  element.setAttribute('type','submit')
  element.setAttribute('id','about-btn')
})
