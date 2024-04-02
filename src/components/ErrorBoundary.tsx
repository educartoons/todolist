import { Component, ErrorInfo } from "react";
import { Link } from "react-router-dom";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2 className="text-white">There was an error</h2>
          <Link className="text-white" to="/">
            Back to Home
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}
