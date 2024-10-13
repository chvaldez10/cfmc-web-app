import { HeroHeader } from "@/components/core/hero";
import { ReleaseSidebar } from "@/components/Sidebar";

const heroHeaderTitle = "2024 Release Notes";
const heroHeaderVerbiage = "Browse our release notes";

export default function page() {
  return (
    <>
      <HeroHeader header={heroHeaderTitle} longParagraph={heroHeaderVerbiage} />
      <ReleaseSidebar />;
    </>
  );
}
