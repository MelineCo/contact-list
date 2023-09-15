import { useEffect, useState } from 'react';
import './App.css';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

let nextIdContact = 0;
let nextIdAppointment = 0;

export default function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState();
  const [contacts, setContacts] = useState([]);

  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [appointments, setAppointments] = useState([]);

  const [duplicate, setDuplicate] = useState(false);

  // Lorsque le nom est modifié, on vérifie si le nom existe déjà dans nos contacts
  useEffect(() => {
    contacts.forEach(function (contact) {
      if (name === contact.name) {
        setDuplicate(true);
      }
  });
  }, [name]);

  function handleContacts(e){
    e.preventDefault();
    // Si le nom n'existe pas encore dans le répertoire, on ajoute les infos
    if (!duplicate){
      setContacts([
        ...contacts,
        { id: nextIdContact++, name: name, phone: phone, email: email }
      ]);
      // Puis on remet les champs du formulaire à leur état par défaut
      setName('');
      setPhone('');
      setEmail('');
    }
  }

  function handleAppointments(e){
    e.preventDefault();
    setAppointments([
      ...appointments,
      { id: nextIdAppointment++, name: name, contact: contact, date: date, time: time }
    ])
  }


  return (
    <>
      <h1>Gestion du répertoire</h1>
      <h2>Add contact</h2>
      <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleContacts={handleContacts} />
      
      <h2>Contact list</h2>
      <ContactList contacts={contacts} />
    </>
  );
}





