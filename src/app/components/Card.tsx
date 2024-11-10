import Link from 'next/link'
import React from 'react'

interface CardProps {
    user: UserModel;
}

function Card({ user }: CardProps) {

    return (
        <Link  href={`/pages/cardList/${user.id}`} className="border rounded-lg p-4 shadow-lg">
            <h2 className="text-xl font-bold">{user.firstName} {user.lastName}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </Link>
    )
}

export default Card
