import React, { Suspense } from "react";
import "./HomePage.scss";
import Card from '@material-ui/core/Card';
import SiteHeader from "../SiteHeader/SiteHeader";
import { connect } from "react-redux";
import { getBooks, setIntialState,onSearchValue} from "./HomePageAction";
import { Redirect } from "react-router-dom";
import { array } from '../Component/Array';
import ReactPaginate from 'react-paginate';

const BookDetailsComponent = React.lazy(() => import('../Component/BookDetailsComponent'));

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
            selectedPage: this.props.header.selectedPage
        }
    }

    componentDidMount() {
        this.props.setInitialState();
        this.recievedData();
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
                                this.props.getBooks(item)
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
        if (this.props.homePage.storeData) {
            return <Redirect to="/buyPrice" />
        }

        if (this.props.header.signUpPage) {
            return <Redirect to='/login' />
        }

        if (this.props.header.cartPage) {
            return <Redirect to='/cart' />
        }
        console.log("Asasas", this.props.homePage.storeData)
        return (
            <div className={"homepage"}>
                <SiteHeader onSearch={this.props.onSearchValue}/>
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
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        "getBooks": (item) => (dispatch(getBooks(item))),
        "setInitialState": () => (dispatch(setIntialState())),
        "onSearchValue": (e) => (dispatch(onSearchValue(e))),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
