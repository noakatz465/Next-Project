"use client"
import React, { useEffect, useState } from 'react'
import Card from './Card';
import useStore from '../stores/useStore';


function CardList() {
    const users = useStore((state) => state.users);
    const fetchUsers = useStore((state) => state.fetchUsers);
    const addUser = useStore((state) => state.addUser);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && lastName && email) {
            const newUser: UserModel = { id: users[users.length - 1].id + 1, firstName, lastName, phone, email };
            addUser(newUser);
            setFirstName('');
            setLastName('');
            setPhone('');
            setEmail('');
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col p-4 mb-4">
                <input type="text" placeholder="First name" value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} required className="mb-2 p-2 border" />
                <input type="text" placeholder="Last name" value={lastName}
                    onChange={(e) => setLastName(e.target.value)} required className="mb-2 p-2 border" />
                <input type="text" placeholder="Phone" value={phone}
                    onChange={(e) => setPhone(e.target.value)} required className="mb-2 p-2 border" />
                <input type="email" placeholder="Email" value={email}
                    onChange={(e) => setEmail(e.target.value)} required className="mb-2 p-2 border" />
                <button type="submit" className="p-2 bg-blue-500 text-white">הוסף משתמש</button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {users.map((user) => (
                    <Card key={user.id} user={user} />
                ))}
            </div>
        </div>
    )
}

export default CardList
