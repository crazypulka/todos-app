/**
 * Created by jyothi on 14/5/17.
 */
import React, {Component, PropTypes} from 'react';
import Dialog from 'material-ui/Dialog';

const OAUTH_PROVIDERS = {
    GITHUB: "github",
    FACEBOOK: "facebook",
    GOOGLE: "google"
};

export default class OAuth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    componentWillUnmount(){
        this.setState({show: false});
    }

    componentWillReceiveProps(nextProps){
        this.setState({show: nextProps.show});
    }

    handleSuccess = (response) => {
        const {handleSuccess} = this.props;
        handleSuccess && handleSuccess(response);
    };

    render() {
        return (
            <Dialog
                modal={true}
                open={this.state.show}
                onRequestClose={() => this.setState({show: false})}
            >
                <div className="row text-center">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </Dialog>
        );
    }
}