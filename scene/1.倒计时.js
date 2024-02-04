const Time = (n)=>{
  if(n<=100){
    setTimeout(()=>{
      console.log(n)
    },n*1000)
    return Time(n+1)
  }
}

Time(1)

// react usehooks
const useClock = (allTime)=>{
  const [time,setTime] = useState(allTime)
  useEffect(() => {
    const timeout = setTimeout(()=>{
      setTime(t=>t-1)
    },1000)
    return ()=>{
      clearTimeout(timeout)
    }
  }, [time])
  return (
    <div>
      当前时间:{time}
    </div>
  )
}
