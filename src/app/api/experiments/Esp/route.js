import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/databaseConnect';
import { Esp } from '@/models/espmodel';

export async function GET(request) {
  try {
    // Connect to the database
    await dbConnect();

    // Extract query parameter exId from the request URL
    const url = new URL(request.url);
   
    const exId = url.searchParams.get('exId'); // Retrieve exId from query parameters
    console.log(exId)
    // If exId is provided, find the experiment by ExperimentId
    if (exId) {
      const experiment = await Esp.findOne({ ExperimentId: exId });

      // If experiment not found, return a 404 error
      if (!experiment) {
        return NextResponse.json({ message: 'Experiment not found' }, { status: 404 });
      }

      // Return the found experiment
      return NextResponse.json(experiment, { status: 200 });
    }

    // If exId is not provided, return all experiments
    const experiments = await Esp.find(); // Fetch all experiments

    // Return all experiments if available
    if (experiments.length === 0) {
      return NextResponse.json({ message: 'No experiments found' }, { status: 404 });
    }

    // Return all experiments data
    return NextResponse.json(experiments, { status: 200 });

  } catch (error) {
    // Log the error and return a 500 server error
    console.error('Server error:', error.message);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
