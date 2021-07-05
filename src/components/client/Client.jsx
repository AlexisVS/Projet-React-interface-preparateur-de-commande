import React, { Component } from 'react';

class Client extends Component {
    render() {
        return (
            <div>
                <p>{this.props.id}</p>
                <p>{this.props.firstName}</p>
                <p>{this.props.lastName}</p>
                <p>{this.props.society}</p>
                <p>{this.props.email}</p>
                <p>{this.props.tel}</p>
                <p>{this.props.order}</p>
                <p>{this.props.orderHistory}</p>
                <p>Bonjour</p>
            </div>
        );
    }
}

export default Client;