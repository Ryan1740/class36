class Player
{
  constructor()
  {

  }
  getCount()
  {
    var playerCountref=database.ref('playercount');
    playerCountref.on("value",function(data){
      playercount=data.val()
    })
  }
    updateCount(){
      database.ref('/').update({
        playercount:count
      })
    }
  update(name)
  {
   var playerIndex= "player"+playercount;
   database.ref(playerIndex).set({
       name:name
   })
    }
  
}
