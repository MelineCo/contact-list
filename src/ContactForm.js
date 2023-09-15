export default function ContactForm({name, setName, phone, setPhone, email, setEmail, handleContacts}){
    return (
        <>
            <form onSubmit={handleContacts}>
                <label for="name">Name: </label>
                <input
                    id="name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name} />
                <label for="phone">Phone: </label>
                <input
                    id="phone"
                    type="tel"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone} />
                <label for="email">Email: </label>
                <input
                    id="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} />

                <button type="submit">Add contact</button>
            </form>
        </>
    );
}