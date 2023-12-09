import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export default function preview(req: NextApiRequest, res:NextApiResponse) {
        res.clearPreviewData();
        res.writeHead(307, { Location: "/"});
        res.end();

    }