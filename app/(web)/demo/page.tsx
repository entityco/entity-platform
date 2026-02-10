// app/demo/page.tsx
import { permanentRedirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function DemoRedirect() {
  permanentRedirect("https://demo.entityhq.co");
}
