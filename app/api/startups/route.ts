import { NextResponse } from 'next/server';

interface Startup {
  name: string;
  founded: number;
 
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const startupData: Startup[] = [
    { name: "Eco Citizen Academy", founded: 2025 },
    { name: "Terraflex Industries", founded: 2022 },
    { name: "Zimperium", founded: 2024 },
    { name: "Stops.com", founded: 2024 },
    { name: "VALFIX Medical", founded: 2024},
  ];

  const filteredData = startupData.filter(startup => {
    if (searchParams.get('nameOrDescription')) {
      const search = searchParams.get('nameOrDescription')?.toLowerCase();
      if (!startup.name.toLowerCase().includes(search!)) return false;
    }

 
    if (searchParams.get('founded')) {
      if (startup.founded !== parseInt(searchParams.get('founded')!)) return false;
    }


    return true;
  });

  return NextResponse.json({
    total: filteredData.length,
    data: filteredData
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (!body.name || !body.founded) {
      return NextResponse.json(
        { error: 'חסרים שדות חובה' },
        { status: 400 }
      );
    }
    
    return NextResponse.json({ 
      message: "סטארטאפ נוסף בהצלחה",
      data: body 
    }, { status: 201 });
    
  } catch (error) {
    return NextResponse.json(
      { error: 'נתוני בקשה לא תקינים' },
      { status: 400 }
    );
  }
}
