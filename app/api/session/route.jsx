import bcrypt from "bcryptjs-react";
import prisma from '../../libs/prismadb'
import { NextResponse } from 'next/server'
import { AuthOptions } from "next-auth";
export async function GET(request) {
    const session = await getServerSession(authOptions);
  
    return NextResponse.json({
      authenticated: !!session,
      session,
    });
  }