import React from 'react';
import {connect} from 'react-redux';
import{increment,decrement,reset,toggleVisibility} from "../Redux/actionCreator";
const Counter=({isVisible,count,increment,decrement,reset,toggleVisibility})=>{
   
return(
<div>
<button  className="btn btn-outline-info" onClick={()=>toggleVisibility()}> {isVisible ? "Hide Counter":"Show Counter"}</button>
{isVisible &&<>
<p> {count}</p>
<button  className="btn btn-primary" onClick={()=>increment()}>+</button>
<button   className="btn btn-danger"  onClick={()=>decrement()}>-</button> <br/>
<button   className="btn btn-outline-primary"  onClick={()=>reset()}> reset</button> </>}
</div>

)
}


function mapStateToProps(state){

return{
count:state.count,
isVisible:state.isVisible
}
}


function mapDispatchToProps(dispatch){
return{

  increment:()=>dispatch(increment()),
   decrement:()=>dispatch(decrement()),
   reset    :()=>dispatch(reset()),
   toggleVisibility : ()=>dispatch(toggleVisibility())


}
}

export default  connect(mapStateToProps,mapDispatchToProps)(Counter);