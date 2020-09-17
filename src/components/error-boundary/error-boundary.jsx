import React from 'react';
import { Page404 } from '@@/404/page-404'

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false,
        };
    }

    static getDerivedStateFromError(error) {
        return { 
            hasError: true 
        };
    }

    render() {
      if (this.state.hasError) {
        return <Page404 />;
      }

      return this.props.children; 
    }
  } 