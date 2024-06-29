import HeroHeader from "@/components/core/hero/HeroHeader";
import FixedSidebarWithContent from "@/components/Sidebar/FixedSidebarWithContent";

const heroHeaderTitle = "2024 Release Notes";
const heroHeaderVerbiage = "Browse our release notes";

export default function page() {
  return (
    <>
      <HeroHeader title={heroHeaderTitle} verbiage={heroHeaderVerbiage} />
      <FixedSidebarWithContent />;
    </>
  );
}
