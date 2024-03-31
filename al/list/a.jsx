//下面代码有什么能够优化的吗
function App() {
  const [num, setNum] = useState(0)
  return (
    <>
      <span>{num}</span>
      <button onClick={() => setNum(num + 1)}>Click</button>
      <OtherComponet />
    </>
  )
}
//1. React.memo(OtherComponet)
//2.抽离 Counter 组件
function App() {
  return (
    <>
      <Counter />
      <OtherComponet />
    </>
  )
}
function Counter() {
  const [num, setNum] = useState(0)
  return (
    <>
      <span>{num}</span>
      <button onClick={() => setNum(num + 1)}>Click</button>
    </>
  )
}
