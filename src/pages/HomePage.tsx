import ErrorBoundary from "../components/ErrorBoundary";
import { Todo } from "../components/Todo";

function Home() {
  return <Todo />;
}

export default function HomePage() {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}
