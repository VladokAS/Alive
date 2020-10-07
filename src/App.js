import React, {Component} from 'react';
import classes from './App.css';
import Layout from "./hoc/Layout/Layout";
import PageContainer from "./containers/PageContainer/PageContainer";

class App extends Component {

    componentDidMount() {
        window.addEventListener("load", this.loaded);
    }

    componentWillUnmount() {
        window.removeEventListener("load", this.loaded);
    }

    loaded = () => {
    };

    render() {
        return (
            <div className={classes.App}>
                <Layout>
                    <PageContainer/>
                </Layout>
            </div>
        );
    }
}

export default App;