import {useSelector ,useDispatch} from "react-redux"
import { colorChange } from "./colorSlice";

const App=()=>{
  const myclr = useSelector((state)=>state.mycolor.color);
  const dispatch=useDispatch();
  return(
    <>
    <h1>colorchange program</h1>

    <button onClick={()=>{dispatch(colorChange())}}>click here</button>
    <br/>
    <div style={{width:"360px" ,height:"200px",background:myclr}}></div>
    </>
    
  )
}
export default App;