function ContactCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}
export default ContactCard;
