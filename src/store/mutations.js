export default{
  changecolor(state, colorObj) {
    state.color = colorObj.classcolor
    state.background = colorObj.changebackground
  },
  changecity(state,city){
    state.city = city
  }
}