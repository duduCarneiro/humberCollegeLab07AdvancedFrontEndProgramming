import Button from "./Button";

export default function ButtonsContainer(props) {
   return (
      <div>
      <Button sharedMethod={props.sharedMethod} operation={props.operation} />
      </div>
   );
}
