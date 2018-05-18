class TowersOfHanoi {
  constructor(){
    this.stacks = [[3,2,1],[],[]];
  }
  
  move(from_tower, to_tower){
    if (this.stacks[from_tower].length === 0){
      throw "sucks";
    }else if (!valid_move(from_tower,to_tower)){
      throw "sucks again";
    }else{
      this.stacks[to_tower].push(this.stacks[from_tower].pop());
    }
  }
  
  
}