import ContactCard from "./ContactCard";
import contact from "./contact";

function App() {
  return (
    <div>
      <h2>My Contact List</h2>
      {contact.map((contact) => (
        <ContactCard
          key={contact.id}
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}
export default App;
