"use client";
import { usePathname } from "next/navigation";
import Form from "../misc/Form";

export default function Footer() {
  const pathName = usePathname();
  return (
    <footer id="footer">
      <section>{!(pathName == "post") || <Form />}</section>
    </footer>
  );
}
