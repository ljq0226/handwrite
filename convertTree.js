const convert = (lists) => {
  const map = {};
  const res = [];
  lists.forEach((item) => {
    map[item.key] = { ...item, children: [] };
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

const convertTree = (list)=>{
  const map = {}
  const res = []
  list.forEach((item)=>{
    map[item.key] = {...item,children:[]}
  })
  list.forEach(item=>{
    const parent = map[item.parentKey]
    if(parent){
      parent.children.push(map[item.key])
    }else{
      res.push(map[item.key])
    }
  })
  return res
}


const convertList = (tree) => {
  const res = [];
  const dfs = (node) => {
    const { children, ...item } = node;
    res.push(item);

    if (children && children.length) {
      children.forEach(dfs);
    }
  };
  tree.forEach(dfs);
  return res.sort((a, b) => a.key - b.key);
};

// const convertList = (tree)=>{
//   const res = []
//   const dfs = (node)=>{
//     const {children,...item} = node
//     res.push(item)
//     if(children && children.length){
//       children.forEach(dfs)
//     } 
//   }
//   tree.forEach(dfs)
//   return res.sort((a,b)=>a.key-b.key)
// }


const list = [
  { key: 1, value: 'A', parentKey: 0 },
  { key: 2, value: 'B', parentKey: 0 },
  { key: 3, value: 'C', parentKey: 1 },
  { key: 4, value: 'D', parentKey: 1 },
  { key: 5, value: 'E', parentKey: 2 },
  { key: 6, value: 'F', parentKey: 3 },
  { key: 7, value: 'G', parentKey: 4 },
];



const tree = [
  {
      key: 1,
      value: 'A',
      parentKey: 0,
      children: [
          {
              key: 3,
              value: 'C',
              parentKey: 1,
              children: [
                  { key: 6, value: 'F', parentKey: 3 }
              ]
          },
          {
              key: 4,
              value: 'D',
              parentKey: 1,
              children: [
                  { key: 7, value: 'G', parentKey: 4 }
              ]
          }
      ]
  },
  {
      key: 2,
      value: 'B',
      parentKey: 0,
      children: [
          {
              key: 5,
              value: 'E',
              parentKey: 2
          }
      ]
  }
];
console.log('convert(list)',convertTree(list))
console.log('convertList(tree)',convertList(tree))
