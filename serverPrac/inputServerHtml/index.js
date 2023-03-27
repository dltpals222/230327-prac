import tagMakeCall from "../modules/tagMakeCall.js"


const root = document.getElementById('root')
const rootChildForm = [
  root,
  'form',
  [function(element){
    element.setAttribute('action','about')
    element.setAttribute('method','get')
  },
  function(element){
    element.setAttribute('action','contact')
    element.setAttribute('method','get')
  },
  function(element){
    element.setAttribute('action','404')
    element.setAttribute('method','get')
  }],
  ]
  
  
  for(let i=0;i<rootChildForm[2].length;i++){
  tagMakeCall(rootChildForm[0],rootChildForm[1],rootChildForm[2][i])
}





const inputButton = [
  [root.children[1],root.children[2],root.children[3]],
  'button',
  [function(element){
      element.setAttribute('id','about-btn')
      element.setAttribute('type','submit')
      element.innerText = 'about버튼'
    },
    function(element){
      element.setAttribute('id','contact-btn')
      element.setAttribute('type','submit')
      element.innerText = 'contact버튼'
    },
    function(element){
      element.setAttribute('id','404-btn')
      element.setAttribute('type','submit')
      element.innerText = '404버튼'
    }
  ]
]

for(let i=0;i<inputButton.length;i++){
  tagMakeCall(inputButton[0][i],inputButton[1],inputButton[2][i])
}