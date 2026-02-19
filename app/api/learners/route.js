import { NextResponse } from 'next/server';

// This handles the POST request from your frontend form
export async function POST(request) {
  try {
    // 1. Grab the JSON data sent from the frontend
    const body = await request.json();
    
    console.log("📥 BOOM! Backend received new learner data:", body);

    // ---------------------------------------------------------
    // 2. THIS IS WHERE WE WILL PLUG IN YOUR DATABASE LOGIC
    // Example: await db.learners.create({ data: body });
    // ---------------------------------------------------------

    // 3. Simulate a database saving delay (1 second) so the frontend loading state shows
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 4. Send a success response back to the frontend
    return NextResponse.json(
      { message: "Account created successfully!", user: body },
      { status: 201 }
    );

  } catch (error) {
    console.error("❌ Backend Error:", error);
    
    // Send an error response if something breaks
    return NextResponse.json(
      { error: "Failed to create account. Please try again." },
      { status: 500 }
    );
  }
}