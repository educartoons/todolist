import ErrorBoundary from "../components/ErrorBoundary";
import UserInformation from "../components/UserInformation";

function Profile() {
  return <UserInformation />;
}

export default function ProfilePage() {
  return (
    <ErrorBoundary>
      <Profile />
    </ErrorBoundary>
  );
}
