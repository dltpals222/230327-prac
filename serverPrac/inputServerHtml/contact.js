import tagMakeCall from "../modules/tagMakeCall.js";
import tagMakeFor from "../modules/tagMakeFor.js";


const root = document.getElementById('root')

const rootChild = ['header','nav','main','footer']


for(let i=0 ; i<rootChild.length;i++){
  tagMakeCall(root, rootChild[i],function(element){
    element.style.border = '1px solid black'
    element.style.width = '100px'
    element.style.height = '100px'
  })
}
