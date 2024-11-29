import { Component, ErrorInfo, ReactNode } from 'react';
import * as Toast from '@radix-ui/react-toast';
import { RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <Toast.Provider>
          <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
            <div className="max-w-md w-full mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Something went wrong
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {this.state.error?.message || 'An unexpected error occurred'}
                </p>
                <button
                  onClick={this.handleReset}
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg
                           hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2
                           focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try again
                </button>
              </div>
            </div>
          </div>

          <Toast.Root className="bg-red-500 text-white p-4 rounded-lg shadow-lg">
            <Toast.Title className="font-medium">Error occurred</Toast.Title>
            <Toast.Description>
              {this.state.error?.message || 'An unexpected error occurred'}
            </Toast.Description>
          </Toast.Root>

          <Toast.Viewport className="fixed bottom-4 right-4 flex flex-col gap-2" />
        </Toast.Provider>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;