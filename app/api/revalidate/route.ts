import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(req: NextRequest) {
  try {
    const { body } = await parseBody(req, process.env.SANITY_REVALIDATE_SECRET)

    if (!body?._type) {
      return new NextResponse('Bad Request', { status: 400 })
    }

    revalidateTag(body._type,'default')
    
    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return new NextResponse('Error revalidating', { status: 500 })
  }
}