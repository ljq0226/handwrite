const list = [
  { id: 1, title: 'child1', parentId: 0 },
  { id: 2, title: 'child2', parentId: 0 },
  { id: 3, title: 'child1_1', parentId: 1 },
  { id: 4, title: 'child1_2', parentId: 1 },
  { id: 5, title: 'child2_1', parentId: 2 }
];
//列表转树
const convert = (lists) => {
  const map = {};
  const res = [];
  lists.forEach((item) => {
    map[item.id] = { ...item, children: [] };
  });
  lists.forEach((item) => {
    const parent = map[item.parentKey];
    if (parent) {
      parent.children.push(map[item.key]);
    } else {
      res.push(map[item.key]);
    }
  });
  return res;
};

const list_convert_tree = (list)=>{
  const res = {}
  list.map(item=>{
    const {parentId} = item
    if(!parentId){
      res[item.id] = ({item,children:[]})
    }else{
      res[parentId].children.push(item)
    }
  })
  return [Object.values(res)]
}

const res = list_convert_tree(list)
console.log('res',JSON.stringify(res))


const  tree = [
  {
    id: 1,
    title: 'child1',
    parentId: 0,
    children: [
      {
        id: 3,
        title: 'child1_1',
        parentId: 1
      },
      {
        id: 4,
        title: 'child1_2',
        parentId: 1
      }
    ]
  },
  {
    id: 2,
    title: 'child2',
    parentId: 0,
    children: [
      {
        id: 5,
        title: 'child2_1',
        parentId: 2
      }
    ]
  }
];
