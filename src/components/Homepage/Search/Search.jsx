import React, { Component } from 'react';
import styled from 'styled-components';
import searchlogo from '../../../assets/image/Homepage/searchlogo.png';

const StyledSearch = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    top: 20px;
    width: calc(100% - 40px);
    height: 50px;
    margin: 0 20px;
    background: white;
    border-radius: 15px;
    box-shadow: 0px 0px 8px rgba(51, 51, 51, 0.15);
    z-index: 10000;

    .toggler {
        display: flex;
        position: relative;
        background: white;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 50px;
        border-radius: 15px;

        button {
            display: flex;
            background: white;
            position: relative;
            height: 21px;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: none;
            border: none;

            &:focus {
                outline: none;
            }
            
            div {
                width: 23px;
                height: 2px;
                background: #3498DB;
                border-radius: 40px;
            }
        }
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        img {
            height: 18px;
            opacity: 60%;
        }
    }
    
    input {
        background: white;
        width: 65%;
        height: 23px;
        border: none;
        color: #CACACA;
        border-left: 1px solid #CACACA;
        padding-left: 15px;
        box-sizing: border-box;

        &::placeholder {
            color: #CACACA;
        }

        &:focus {
            outline: none;
        }
    }
`

class Search extends Component {

    changeStatus = () => {
        this.props.ChangeStatus();
        console.log('bit')
    }

    render() {
        return (
            <StyledSearch>
                <div onClick={this.changeStatus} className="toggler">
                    <button>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
                <input type="text" placeholder="Recherche" />
                <div>
                    <img src={searchlogo} />
                </div>
            </StyledSearch>
        );
    }
}

export default Search;