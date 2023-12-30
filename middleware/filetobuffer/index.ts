import { NextResponse } from "next/server";
import type { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";
import multer from "multer";

const upload = multer();
const multerMiddleware = upload.single("file");
// export default function multerMiddleware(handler: NextMiddleware) {
//   return async (request: NextRequest, _next: NextFetchEvent) => {
//     // const file = await request.formData();

//     // console.log(buffer);
//     console.log("heelo");
//     return multerMiddleware(handler(request, _next));
//   };
// }
export default multerMiddleware;
