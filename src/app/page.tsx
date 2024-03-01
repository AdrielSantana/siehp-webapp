import MakeLandingPageLayout from "@/shared/infra/factories/layouts/MakeLandingPageLayout";
import MakeWorkInProgressPage from "@/shared/infra/factories/pages/MakeWorkInProgressPage";

export default function Home() {
  return (
    <MakeLandingPageLayout>
      <MakeWorkInProgressPage />
    </MakeLandingPageLayout>
  );
}
