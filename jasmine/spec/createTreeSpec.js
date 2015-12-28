describe("treeGrower", function(){
  var tree;
  var items = {
    label: 'Node Label',
    items: [
        {
            label: 'Child Node Label',
            items: [
                {
                    label: 'Child Node Label',
                    items: [
                        {
                            label: 'Child Node Label',
                            items: [

                            ]
                        },
                        {
                            label: 'Child Node Label',
                        },
                        {
                            label: 'Leaf Node Label'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Leaf Node Label'
        }
    ]
  };

  beforeEach(function(){ tree = new treeGrower(items); });
  afterEach(function(){ tree = undefined; });

  it("should return a treeGrower object", function(){
    expect(tree).toBeDefined();
  });

  it("should have a permaCount of 0 when created", function(){
    expect(tree.permaCount).toEqual(0);
  });

  it("should be instantiated with data", function(){
    expect(tree.treeData).toBeDefined();
  });

  describe("buildLabel", function(){
    it("should return a h3 element", function(){
      var result = tree.buildLabel(0, "Test Label");
      expect(result).toEqual('h3');
    });
  });

  describe("buildBranch", function(){
    it("should return a ul element", function(){
      var sampleDiv = document.createElement('div');
      var result = tree.buildBranch(items, sampleDiv, 0);
      expect(result).toEqual('ul');
    });

    it("should have class of 'branch' plus current count", function(){
      var sampleDiv = document.createElement('div');
      var result = tree.buildBranch(items, sampleDiv, 0);
      expect(result).toHaveClass('branch0');
    })
  });

  describe("buildTree", function(){
    it("should return a div element", function(){
      var result = tree.buildTree();
      expect(result).toEqual('div');
    });
  });
});