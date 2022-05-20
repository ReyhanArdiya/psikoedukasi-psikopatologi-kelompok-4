import React from "react";
import TryAgain from "../UI/Fallbacks/TryAgain";

class HandleAnyError extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError : false };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError : true };
	}

	componentDidCatch(error, errorInfo) {
		console.log(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <TryAgain onTryAgain={() => window.location.reload()}/>;
		}

		return this.props.children;
	}
}

export default HandleAnyError;
