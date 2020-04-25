// Code your solution here
function findMatching(drivers, st){
  return drivers.filter(n => {
    if(st.toUpperCase()== n.toUpperCase()){
      return n;
    }

  })

}

function matchName(drivers, st){
  return drivers.filter(
    n => {
      if(st.toUpperCase()charAt(0)== n.toUpperCase().charAt(0)){
        return n;
      }

    }
  )


}
function fuzzyMatch(drivers, st){


}
