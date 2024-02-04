// 获取所有带有data-src属性的图片元素
const lazyImages = document.querySelectorAll('img[data-src]');

// 创建IntersectionObserver实例
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src; // 加载图片
      observer.unobserve(lazyImage); // 停止观察已加载的图片
    }
  });
});

// 遍历图片元素，并开始观察每个图片元素
lazyImages.forEach(image => {
  observer.observe(image);
});


// const lazyImages = document.querySelectorAll('img[data-src]')

// const observer = new IntersectionObserver(function(entries,observer){
//   entries.forEach(entry=>{
//     if(entry.isIntersecting){
//       const lazyImage = entry.target
//       lazyImage.src = lazyImage.dataset.src
//       observer.unobserve(lazyImage)
//     }
//   })
// })
// lazyImages.forEach(image=>{
//   observer.observe(image)
// })
