
function treeGrower(data){
  this.permaCount = 0;
  this.treeData = data;

  this.buildTree = function(){
    this.permaCount = 0;
    var div = document.createElement('div');
    div.appendChild(this.buildBranch(this.treeData, div, this.permaCount));
    return div;
  };

  this.buildLabel = function(count, data){
    var h3 = document.createElement('h3');
    var a = document.createElement('a');
    a.appendChild(document.createTextNode(data["label"]));
    a.setAttribute('href', '.branch'+count.toString());
    a.setAttribute('data-toggle', 'collapse');
    if(data.hasOwnProperty("items") && (data.items.length > 0)){
      a.setAttribute('class', 'items');
    }
    h3.appendChild(a);
    return h3;
  };

  this.buildBranch = function(data, element, current_count){
    var count = current_count;
    var div = element;
    var ul = document.createElement('ul');
    ul.setAttribute('class', 'branch'+count.toString());
    div.appendChild(this.buildLabel(count, data));

    if(data.hasOwnProperty("items")){
        for(var i=0; i<data.items.length; i++){
            this.permaCount += 1;
            var li = document.createElement('li');
            var div = document.createElement('div');
            div.appendChild(this.buildBranch(data.items[i], div, this.permaCount));
            li.appendChild(div);
            ul.appendChild(li);
        }
    }
    return ul;
  };
};