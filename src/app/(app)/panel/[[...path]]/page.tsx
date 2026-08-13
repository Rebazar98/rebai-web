import { redirect } from "next/navigation";

export default function RetiredPrivateAreaPage() {
  redirect("/panel/login");
}
