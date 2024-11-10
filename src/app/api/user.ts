import { NextResponse } from "next/server";

// GET
export async function GET() {
    const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
    return NextResponse.json({ message: 'User list retrieved', users });
}

// POST  
export async function POST(req: Request) {
    const newUser = await req.json(); 
    return NextResponse.json({ message: 'User created', user: newUser });
}

// PUT 
export async function PUT(req: Request) {
    const updatedUser = await req.json(); 
    return NextResponse.json({ message: 'User updated', user: updatedUser });
}

// DELETE 
export async function DELETE(req: Request) {
    const userId = req.headers.get('userId'); 
    return NextResponse.json({ message: `User with ID ${userId} deleted` });
}