export default function Alert(props) {
  return (
  <div style={{height:'15px'}}>
   { props.alert && <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert">
      <strong>{props.alert.message}</strong>
    </div>}
    </div>
  );
}
