import { fetchDataFromSpreadsheet } from '@/utils/gsheets';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const data = await fetchDataFromSpreadsheet(
    '1_Q4cDumXzWSlWDUPjGPd4lhsJ6-xblCU9NtxVEqhBk4',
    'Sheet1!A:C'
  );
  console.log('data > ', data);
  return NextResponse.json({ name: 'John Doe' }, { status: 200 });
}
