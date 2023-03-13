

export default function Button(props) {
   return (
   <div>
      <button  style={{margin: "5px", maxWidth: "30px", minWidth: "30px"}} onClick={props.sharedMethod}>{props.operation}</button>
   </div>
   );
}