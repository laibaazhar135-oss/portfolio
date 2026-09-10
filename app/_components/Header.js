import Navigation from "@/app/_components/Navigation";
import Link from "next/link";

export default function Page() {
  return (
    <header className="sticky top-0 z-50 bg-background py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <span className="font-heading font-bold text-2xl text-text-on-bg">
              Laiba Azhar
            </span>
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}