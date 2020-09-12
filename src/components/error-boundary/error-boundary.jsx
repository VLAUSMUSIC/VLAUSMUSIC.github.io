import { React, Component } from 'react';

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false,
            notFound: "Выбраного альбома пока не существует",
        };
    }
  
    static getDerivedStateFromError(error) {
        return { 
            hasError: true 
        };
    }
  
    render() {
      if (this.state.hasError) {
        return this.state.notFound;
      }
  
      return this.props.children; 
    }
  }