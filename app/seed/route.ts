import type { NextApiRequest, NextApiResponse } from 'next';
import {setup} from 'app/scripts/setup.mjs'

// async function handler(_req: NextApiRequest, res: NextApiResponse) {
//   const message = await setup();

//   if (message) {
//     res.status(500).json({
//       error: { message }
//     });
//   } else {
//     await res.revalidate(`/`);
//     res.status(200).send('ok.');
//   }
// }

// export default handler;

export async function GET() {
    // return Response.json({
    //   message:
    //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
    // });
    try {
        const message = await setup();
        if (message) {
            return Response.json({ message }, { status: 500 });
        };
        return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  }
  