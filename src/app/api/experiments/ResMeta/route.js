import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/databaseConnect';
import { Respberry } from '@/models/resberymodel';

export async function GET(request) {
  try {
    await dbConnect();

  
    const url = new URL(request.url);
    const exId = url.searchParams.get('exId'); 
    console.log('Requested Experiment ID:', exId);

    
    if (exId) {
      const experiment = await Respberry.findOne(
        { slug: exId }, 
        { ExperimentName: 1, overviewinfo1: 1, image1: 1, _id: 0 }  
      );

      if (!experiment) {
        return NextResponse.json({ message: 'Experiment not found' }, { status: 404 });
      }
      return NextResponse.json(experiment, { status: 200 });
    }

   
    const experiments = await Respberry.find(
      {}, 
      { ExperimentName: 1, overview: 1, image1: 1, _id: 0 } 
    );

    if (experiments.length === 0) {
      return NextResponse.json({ message: 'No experiments found' }, { status: 404 });
    }

    
    return NextResponse.json(experiments, { status: 200 });

  } catch (error) {
    console.error('Server error:', error.message);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
