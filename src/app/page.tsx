import MakeLandingPageLayout from "@/shared/infra/factories/layouts/MakeLandingPageLayout";
// import MakeWorkInProgressPage from "@/shared/infra/factories/pages/MakeWorkInProgressPage";
import MakeLoginPage from "@/modules/user/login/make";

export const metadata = { title: "SIEHP | Em Construção" };

export default function Home() {
  return (
    <MakeLandingPageLayout>
      <MakeLoginPage />
      {/* <MakeWorkInProgressPage /> */}
    </MakeLandingPageLayout>
  );
}
