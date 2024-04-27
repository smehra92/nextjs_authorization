//Dashboard : For Frontend, Here we use useSession() hook for session data and status . 
//getUser : For Backend, Here we use getServerSession() to protect an API Route.


import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/authOptions";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession(authOptions)
    
    if(!session)
        {
            return NextResponse.json({error : "Not Authorized"}, {status : 400})
        }

        return NextResponse.json({success : session}, {status : 200})

}



//This (i.e. getUser) is for getting the session data on server side.