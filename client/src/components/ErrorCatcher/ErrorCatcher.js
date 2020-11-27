import React from 'react';

export default class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // static getDerivedStateFromError(err) {
  //   console.log('caught an error', err);
  //   return { hasError: true };
  // }

  componentDidMount() {
    console.log('hey');
    window.onerror = (msg, url, line, column, error) => {
      console.error('we got one!!!!!!', msg);
    };
    // window.addEventListener('error', function (event) {
    //   console.log(event);
    //   return true;
    // });
  }

  // componentDidCatch(error, errorInfo) {
  //   // You can also log the error to an error reporting service
  //   console.log('caught an error', error, errorInfo);
  //   this.setState({ hasError: true });
  // }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
