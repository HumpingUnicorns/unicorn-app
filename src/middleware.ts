import { NextResponse } from "next/server";

const allowedOrigins = ['https://api.joepegs.dev/', 'http://localhost:3000', 'http://127.0.0.1:3000', 'https://unicorn-app-ten.vercel.app', 'https://house.humpingunicorns.com/'];

// This middleware will only allow requests from the specified origins
export function middleware(request: Request) {

    const origin = request.headers.get('origin');

    if (origin && !allowedOrigins.includes(origin)) {
        return new NextResponse(null, {
            status: 400,
            statusText: "Bad Request",
            headers: {
                'Content-Type': 'text/plain'
            }
        })
    }

    return NextResponse.next();
}