import React, { Suspense, lazy } from "react";
import "./HomePage.scss";
import Card from '@material-ui/core/Card';
import { connect } from "react-redux";
import { setIntialState, onSearchValue, selectedBook, setState } from "./HomePageAction";
import { Redirect } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import Loader from 'react-loader-spinner';
import BrowserService from "../BrowserService";
import { ThemeProvider } from "react-bootstrap";

const BookDetailsComponent = lazy(() => import("../Component/BookDetailsComponent"));
const SiteHeader = lazy(() => import("../SiteHeader/SiteHeader"));

class HomePage extends React.Component {
    _isMounted = true;

    constructor(props) {
        super(props);
        // this.getToken();
        this.state = {
            books: [],
            selectedStateData: this.props.storeData,
            pageOfItems: [],
            offset: 0,
            data: [],
            perPage: 10,
            currentPage: 0,
            selectedPage: this.props.header.selectedPage,
            isLoading: true,
            storeData: this.props.homePage.storeData
        }
        console.log(this.state.storeData, "constructor")
        console.log("value", this.props.homePage.storeData)
    }

    componentDidMount() {
        console.log("component")
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 2000)
        this.props.setInitialState();
    }

    componentWillReceiveProps(nextProps) {
        const newValue = nextProps.homePage.getAllBookData;
        const value = nextProps.homePage.storeData;
        console.log("newValue", value)
        console.log("value", this.props.homePage.storeData)

        if (newValue !== this.props.homePage.getAllBookData.length)
            this.setState({ books: nextProps.homePage.getAllBookData }, () => {
                this.recievedData(newValue)
            })
        if (value !== this.props.homePage.storeData) {
            this.setState({ storeData: true })
        }

    }


    // componentDidUpdate(prevProps, prevState) {
    //     // console.log("nextProips", prevProps)
    //     //    console.log("prevSate",prevState)
    //     // if (prevState.storeData !== this.state.pathname){
    //     //     console.log("prevState.pathname", prevState.pathname);
    //     //     console.log("this.props.pathname", this.props.pathname);
    //     //     this.animate(0);
    //     // }
    //     if(this.state.storeData){
    //     this.setState({})
    //     }
    // }

    // componentWillUnmount = () => {
    //     this._isMounted = false;
    // }

    recievedData = (data) => {
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            pageOfItems: slice
        })
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
        const props = this.props.homePage.getAllBookData;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.recievedData(props)
        });
    };

    getCard = () => {
        return (
            <div className={"root-block"}>
                <div>
                    {this.state.pageOfItems.map((item, i) => (
                        <div className={"card-block"} key={i}>
                            <Card className='card' onClick={() => {
                                this.props.selectedBook(item)
                            }}>
                                <Suspense fallback={<div>Loading...</div>}>
                                    <BookDetailsComponent element={i} item={item} />
                                </Suspense>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    searchValue = (e) => {
        const payload = e.target.value;
        if (payload !== "") {
            const filteredData = this.state.pageOfItems.filter(element => {
                return element.title.toLowerCase().includes(payload.toLowerCase());
            });
            this.setState({ pageOfItems: filteredData })
            this.recievedData(filteredData);
        }

        else if (payload === "") {
            const props = this.props.homePage.getAllBookData;
            const filteredData = props.filter(element => {
                return element.title.toLowerCase().includes(payload.toLowerCase());
            });
            this.setState({ pageOfItems: filteredData })
            this.recievedData(filteredData);
        }
    }
    render() {
        console.log(this.state.storeData, "render")
        // this.getToken()
        if (this.state.storeData) {
            const itemDetails = JSON.stringify(this.props.homePage.selectedBook);
            let id = this.props.homePage.selectedBook._id
            BrowserService.setLocalStorageValue("selectedBook", itemDetails);
            return <Redirect to={`/buyPrice/${id}`} />
        }

        return (
            <>
                <div className={"homepage"}>
                    <SiteHeader onSearchValue={this.searchValue} />
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
        "setState": () => (dispatch(setState())),
        "selectedBook": (item) => (dispatch(selectedBook(item))),
        "setInitialState": () => (dispatch(setIntialState())),
        "onSearchValue": (e) => (dispatch(onSearchValue(e))),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
