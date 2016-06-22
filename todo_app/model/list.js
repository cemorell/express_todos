function List(object){
  // this.id = List.all.length + 1;
  this.task = object.task;
  List.all.push(this);
}

List.all = [{task: "do my laundry"}, {task: "cook dinner"}];

module.exports = List;
