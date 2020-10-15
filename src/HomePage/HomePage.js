import React, { Suspense, lazy } from "react";
import "./HomePage.scss";
import Card from '@material-ui/core/Card';
import { connect } from "react-redux";
import { selectedBook, setIntialState, onSearchValue } from "./HomePageAction";
import { Redirect } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import Loader from 'react-loader-spinner';
import BrowserService from "../BrowserService";

const BookDetailsComponent = lazy(() => import("../Component/BookDetailsComponent"));
const SiteHeader = lazy(() => import("../SiteHeader/SiteHeader"));

class HomePage extends React.Component {

    constructor(props) {
        super(props);
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
            storeData: this.props.homePage.storeData,
        }
        console.log("constructop HomePage")
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 2000)
        this.getToken();
        this.props.setInitialState()
    }


    componentWillReceiveProps(nextProps) {
        const newValue = nextProps.homePage.getAllBookData;
        if (newValue !== this.props.homePage.getAllBookData.length)
            this.setState({ books: nextProps.homePage.getAllBookData }, () => {
                this.recievedData(newValue)
            })
    }


    getToken = () => {
        if (this.state.storeData === true) {
            this.setState({ storeData: false });
        }
    }

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

    selectedBook=(item)=>{
        const itemDetails = JSON.stringify(item);
        BrowserService.setLocalStorageValue("selectedBook", itemDetails);
        this.setState({storeData:true})
    }

    getCard = () => {
        return (
            <div className={"root-block"}>
                <div>
                    {this.state.pageOfItems.map((item, i) => (
                        <div className={"card-block"} key={i}>
                            <Card className='card' onClick={() => {
                                this.selectedBook(item)
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

    searchValue = (e) => {
        const payload = e.target.value;
        if (payload !== "") {
            console.log("PPP", payload)
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
        if (this.state.storeData) {
            const value=BrowserService.getLocalStorageValue("selectedBook");
            const bookDetails=JSON.parse(value);
            let id = bookDetails._id
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
        "setInitialState": () => (dispatch(setIntialState())),
        "onSearchValue": (e) => (dispatch(onSearchValue(e))),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
