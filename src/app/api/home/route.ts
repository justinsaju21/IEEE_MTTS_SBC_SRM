import { NextResponse } from 'next/server';
import { getHomePage } from '@/lib/sanity';

export async function GET() {
    try {
        const data = await getHomePage();
        return NextResponse.json(data);
    } catch {
        return NextResponse.json(null);
    }
}
