import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { NextApiRequest, NextApiResponse } from 'next';
// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'GET') {
//       res.status(200).json({ message: 'List of billboards' });
//     } else {
//       res.status(405).json({ message: 'Method not allowed' });
//     }
//   }// можно убрать
export async function POST(
req: Request,
) {
try{
const { userId } = auth();
const body = await req. json();

const { name } = body;

if (!userId) {
return new NextResponse("Unauthorized", { status: 401 });
}

if (!name) {
    return new NextResponse("Name is required", {status: 401});
}

const store = await prismadb.store.create({
    data:{
        name,
        userId
    }
});



return NextResponse.json(store);

} catch (error) {
console.log(' [STORES_POST]', error);
return new NextResponse("Internal error", { status: 500 });
}
}