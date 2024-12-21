import { NextRequest, NextResponse } from 'next/server';
import { Arduino } from '@/models/arduinomodels'; 
import dbConnect from '@/lib/databaseConnect';

export async function GET(request) {
  await dbConnect(); // Ensure the DB is connected before proceeding

  try {
    const arduinodata = await Arduino.aggregate([
      {
        $project: {
          _id: 0,               // Excluding _id from the result
          ExperimentName: 1,    // Including ExperimentName in the result
          ExperimentId: 1,      // Including ExperimentId in the result
          image1: 1,            // Including image1 in the result
          poster: 1,            // Including poster in the result
          plot: 1               // Including plot in the result
        }
      }
    ]);

    // Returning the data as a JSON response with status 200
    return NextResponse.json({ arduinodata }, { status: 200 });
  } catch (error) {
    // Logging the error message
    console.error('Error fetching data:', error.message);

    // Returning a 500 error response with a custom error message
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
