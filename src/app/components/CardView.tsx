"use client"
import React, { useEffect, useState } from 'react'
import { getUserById } from '../services/users';
import useStore from '../stores/useStore';

interface CardViewProps {
    userId: number;
}

function CardView({ userId }: CardViewProps) {
    const [user, setUser] = useState<UserModel | null>(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const updateUser = useStore((state) => state.updateUser);
    const deleteUser = useStore((state) => state.deleteUser);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await getUserById(userId);
                setUser(userData);
                setFirstName(userData.firstName);
                setLastName(userData.lastName);
                setEmail(userData.email);
                setPhone(userData.phone || '');
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };
        fetchUser();
    }, [userId]);

    const handleUpdate = async () => {
        if (user) {
            const updatedUser: UserModel = { ...user, firstName, lastName, email, phone };
            updateUser(updatedUser);
            alert('updated!')
        }
        const updatedUserInStore = useStore.getState().users.find(u => u.id === userId);
        console.log(updatedUserInStore);
    };

    const handleDelete = () => {
        if (user) {
            deleteUser(user.id);
            setUser(null);
        }
    };

    return (
        <div className="p-4 border rounded-lg shadow-lg">
            {user ? (
                <div>
                    <h1 className="text-2xl font-bold">Edit User</h1>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name" className="mb-2 p-2 border" />
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name" className="mb-2 p-2 border" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email" className="mb-2 p-2 border" />
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone" className="mb-2 p-2 border" />
                    <button onClick={handleUpdate} className="p-2 bg-green-500 text-white mr-2">Update User</button>
                    <button onClick={handleDelete} className="p-2 bg-red-500 text-white">Delete User</button>
                </div>
            ) : (
                <p>User did not found.</p>
            )}
        </div>
    )
}

export default CardView
