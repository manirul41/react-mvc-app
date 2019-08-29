import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTestData } from '../../actions/test';
import Button from '@material-ui/core/Button';

class Dashboard extends Component {
    componentDidMount(){
        this.props.getTestData();
    }
    render() {
        console.log("testReducerResponse", this.props.testReducerResponse)
        return (
            <div className="container-fluid">
                <h1>Hello</h1>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    //console.log('Test Data..............', state.test.testReducer);
    return {
        testReducerResponse: state.test.testReducer
    };
  }
  
  export default connect(mapStateToProps,{ getTestData })(Dashboard);
