
import platformsData from '@/app/data/education-platforms.json';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const search = searchParams.get('search')?.toLowerCase();

  const filteredPlatforms = platformsData.platforms.filter(platform => {
    if (type && platform.type !== type) return false;
    if (search && !platform.name.toLowerCase().includes(search)) return false;
    return true;
  });

  return NextResponse.json({
    total: filteredPlatforms.length,
    data: filteredPlatforms
  });
}
