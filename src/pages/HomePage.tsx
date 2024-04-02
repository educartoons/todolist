import ErrorBoundary from "../components/ErrorBoundary";
import Layout from "../components/Layout";
import { Todo } from "../components/Todo";

function Home() {
  return <Todo />;
}

export default function HomePage() {
  return (
    <ErrorBoundary>
      <Layout>
        <Home />
      </Layout>
    </ErrorBoundary>
  );
}
