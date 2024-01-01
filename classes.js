'use strict'

export class Div {
constructor(text){
this.text = text
}
}

export class DivManager{
constructor(){
this.divArray = []
}

add(div){
this.divArray.push(div)
}

remove(div) {
    const filteredArr = this.divArray.filter(el => el !== div)
    this.divArray = filteredArr
    return this.divArray
  }

}

export class UI {

}