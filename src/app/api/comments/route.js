import { comments } from "./comments.js";

export async function GET() {
  return Response.json(comments);
}
