import React, { Suspense } from "react";
import "./HomePage.scss";
import Card from '@material-ui/core/Card';
import Papa from 'papaparse';
import SiteHeader from "../SiteHeader/SiteHeader";
import { connect } from "react-redux";
import { selectedBook, setIntialState, onSearchValue } from "./HomePageAction";
import { Redirect } from "react-router-dom";
import array from '../Component/Def.json';
import ReactPaginate from 'react-paginate';
import BookDetailsComponent from '../Component/BookDetailsComponent';
// import ReactLoading from 'react-loading';
import Loader from 'react-loader-spinner';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            exampleItems: array,
            selectedStateData: this.props.storeData,
            pageOfItems: [],
            offset: 0,
            data: [],
            perPage: 10,
            currentPage: 0,
            selectedPage: this.props.header.selectedPage,
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 2000)
        this.props.setInitialState();
        this.recievedData();
        //  this.setState({ isLoading: false })
    }

    recievedData = () => {
        const data = array;
        const slice = this.state.exampleItems.slice(this.state.offset, this.state.offset + this.state.perPage)
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            pageOfItems: slice
        })
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.recievedData()
        });
    };

    getCard = () => {
        return (
            <div className={"root"}>
                <div>
                    {this.state.pageOfItems.map((item, i) => (
                        <div className={"card-block"} id={i}>
                            <Card className='card' onClick={() => {
                                this.props.selectedBook(item)
                            }}>
                                <Suspense fallback={<div>Loading...</div>}>
                                    <BookDetailsComponent element={i} item={item} />
                                </Suspense>
                            </Card>
                        </div>
                    )
                    )}
                </div>
            </div>
        )
    }

    render() {
        console.log("DDDDDDDddddddd");
        console.log("DDDDDDDddddddd", this.state.isLoading);
        console.log("data", this.props.homePage.storeData);
        console.log("data1", this.props.header.signUpPage);
        console.log("data2", this.props.header.cartPage);
        if (this.props.homePage.storeData) {
            return <Redirect to="/buyPrice" />
        }

        if (this.props.header.signUpPage) {
            return <Redirect to='/login' />
        }

        if (this.props.header.cartPage) {
            return <Redirect to='/cart' />
        }
        return (
            <>
                <div className={"homepage"}>
                    <SiteHeader onSearch={this.props.onSearchValue} />
                    {this.state.isLoading ? <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={700}
                        width={200}
                        timeout={2000} /> :
                        <div className={"main-content"}>
                            <div>
                                {this.getCard()}
                            </div>
                            <div className={"footer-header"}>
                                <ReactPaginate
                                    previousLabel={"prev"}
                                    nextLabel={"next"}
                                    breakLabel={"..."}
                                    breakClassName={"break-me"}
                                    pageCount={this.state.pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={this.handlePageClick}
                                    containerClassName={"pagination"}
                                    subContainerClassName={"pages pagination"}
                                    activeClassName={"active"} />
                                <br />
                                <br />
                                <br />
                            </div>
                        </div>}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        "selectedBook": (item) => (dispatch(selectedBook(item))),
        "setInitialState": () => (dispatch(setIntialState())),
        "onSearchValue": (e) => (dispatch(onSearchValue(e))),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
