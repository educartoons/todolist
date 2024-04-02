import ErrorBoundary from "../components/ErrorBoundary";
import Layout from "../components/Layout";
import UserInformation from "../components/UserInformation";

function Profile() {
  return <UserInformation />;
}

export default function ProfilePage() {
  return (
    <ErrorBoundary>
      <Layout>
        <Profile />
      </Layout>
    </ErrorBoundary>
  );
}
