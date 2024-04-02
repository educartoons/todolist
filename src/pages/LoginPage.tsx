import ErrorBoundary from "../components/ErrorBoundary";
import SignIn from "../components/SignIn";

function Login() {
  return <SignIn />;
}

export default function LoginPage() {
  return (
    <ErrorBoundary>
      <Login />
    </ErrorBoundary>
  );
}
