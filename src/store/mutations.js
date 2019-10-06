export default{
  changecolor(state, colorObj) {
    state.color = colorObj.classcolor
    state.background = colorObj.changebackground
  }
}