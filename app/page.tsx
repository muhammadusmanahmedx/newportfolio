import Image from "next/image";
import { Preview } from "./components/hero";
import { LandingAccordionItem } from "./components/ui/services";

export default function Home() {
  return (
    <>
      <Preview />
      <LandingAccordionItem />
    </>
  );
}
