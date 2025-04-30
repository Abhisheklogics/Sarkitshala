import { NextResponse } from 'next/server';
import dbConnect from '@/lib/databaseConnect';
import { Jetson } from '@/models/jetsonmodels';

export async function GET(request) {
    try {
        await dbConnect();

        const url = new URL(request.url);
        const exId = url.searchParams.get('exId'); 

       
        const query = exId ? { _id: exId } : {}; 
        const experiments = await Jetson.find(query).lean();

        if (experiments.length === 0) {
            return NextResponse.json({ message: 'No experiments found' }, { status: 404 });
        }

        return NextResponse.json(experiments, { status: 200 });

    } catch (error) {
        console.error('Server error:', error.message);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
