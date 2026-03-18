// Panel de cliente — Placeholder para Phase 2
// Implementar con Auth.js + Supabase cuando corresponda

import { redirect } from "next/navigation";

export default function PanelPage() {
  // Redirect to contact while dashboard is in development
  redirect("/contacto");
}
