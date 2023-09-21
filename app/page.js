import dynamic from "next/dynamic";

import Header from "@/components/Header";
const NewDocumentWrapper=dynamic(()=>import("@/components/NewDocument"),{
  loading:()=><p>Loading...</p>
})

export default function Home() {
  return (
    <main className="text-gray">
      <Header />
      <NewDocumentWrapper />
    </main>
  );
}
