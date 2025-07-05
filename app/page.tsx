import FeaturedPostSection from "@/components/general/featuredPost";
import RecentPosts from "@/components/general/recentPosts";

export const revalidate = 3600; // Revalidate every 60 minutes

export default function Home() {
  return (
    <>
      <FeaturedPostSection />
      <RecentPosts />
    </>
  );
}
