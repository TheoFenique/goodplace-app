import React, { Component } from 'react';
import styled from 'styled-components';

const StyledEventCard = styled.div`
    position: relative; 
    box-sizing: border-box;
    background: lightgrey;
    padding: 13px;
    margin: 20px 0;
    height: 150px;
    border-radius: 15px;

    div {
        display: flex;
        width: 70%;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        /* align-items: space-between; */
    }

    p {
        font-weight: 700;
        margin: 0;
    }
`

const StyledDate = styled.span`
    background: white;
    border-radius: 50px;
    padding: 3px 9px;
`

const StyledDist = styled.small`
    position: absolute;
    right: 13px;
    color: white;
`

class EventCard extends Component {
    render() {
        let dist = 650;
        return (
            <StyledEventCard onClick={this.props.HandleClick}>
                <StyledDist>{dist}m</StyledDist>
                <div>
                    <span><StyledDate>{this.props.date}</StyledDate></span>
                    <p>{this.props.name}</p>
                </div>
            </StyledEventCard>
        );
    }
}

export default EventCard;