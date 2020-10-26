import React, { Suspense, lazy } from "react";
import "./HomePage.scss";
import Card from '@material-ui/core/Card';
import { connect } from "react-redux";
import { setIntialState, searchValue, selectedBook, setState, getPageCount } from "./HomePageAction";
import { Redirect } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import Loader from 'react-loader-spinner';
import BrowserService from "../BrowserService";
const BookDetailsComponent = lazy(() => import("../Component/BookDetailsComponent"));
const SiteHeader = lazy(() => import("../SiteHeader/SiteHeader"));

class HomePage extends React.PureComponent {
    didMount = false;
    countNoOfPages = false;
    searchData = false;

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            pageOfItems: [],
            offset: 0,
            data: [],
            perPage: 10,
            currentPage: 0,
            countNoOfPages: [],
            searchData: [],
            paginationValue: 0,
            clicked: true,
            selectedPage: this.props.header.selectedPage,
            isLoading: true,
            expanded: this.props.homePage.storeData,
            data: true
        }
    }

    componentDidMount() {
        this.props.getPageCount()
        this.props.setInitialState(this.state.currentPage, this.state.perPage);
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 3000)
        this.props.searchValue();
    }

    componentDidUpdate(prevProps) {
        const newValue = prevProps.homePage.getAllBookData;
        if (newValue.length <= this.props.homePage.getAllBookData.length && this.props.homePage.getAllBookData.length > 0 && this.didMount === false) {
            this.setState({ books: this.props.homePage.getAllBookData }, () => {
                this.didMount = true;
                this.recievedData(newValue)
            })
        }
        if (prevProps.homePage.countNoOfPages <= this.props.homePage.countNoOfPages && this.props.homePage.countNoOfPages > 0 && this.countNoOfPages === false) {
            this.setState({ countNoOfPages: this.props.homePage.countNoOfPages })
            this.countNoOfPages = true;
        }

        if (prevProps.homePage.searchData.length <= this.props.homePage.searchData.length && this.props.homePage.searchData.length > 0 && this.searchData === false) {
            this.setState({ searchData: this.props.homePage.searchData }, () => {
                this.searchData = true;
            })
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.homePage.storeData !== state.expanded) {
            return {
                expanded: !state.expanded
            }
        }
        else if (state.expanded === true && props.location.aboutProps === "headerIcon") {
            return {
                expanded: !state.expanded,
                data: false
            }
        }
        else {
            return null;
        }
    }

    recievedData = (data) => {
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        this.setState({
            paginationValue: Math.ceil(this.state.countNoOfPages / this.state.perPage),
            pageOfItems: slice
        })
    }

    searchValuePagination = (data) => {
        this.setState({
            pageOfItems: data
        })
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        this.props.setInitialState(selectedPage);
        this.props.getPageCount();
        this.didMount = false;
    };

    getData = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
        const props = this.props.homePage.searchData;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.recievedData(props)
        });
    };

    searchValue = (e) => {
        const payload = e.target.value;
        if (payload !== "") {
            const filteredData = this.state.searchData.filter(element => {
                return element.title.toLowerCase().includes(payload.toLowerCase());
            });
            this.setState({ pageOfItems: filteredData, clicked: false })
            this.searchValuePagination(filteredData);
        }

        else if (payload.length === 0) {
            const props = this.props.homePage.getAllBookData;
            const filteredData = props.filter(element => {
                return element.title.toLowerCase().includes(payload.toLowerCase());
            });
            this.setState({ pageOfItems: filteredData, clicked: true })
            this.recievedData(filteredData);
        }
    }

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

    render() {
        if (this.state.expanded) {
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
                                {this.state.clicked ?
                                    <ReactPaginate
                                        previousLabel={"prev"}
                                        nextLabel={"next"}
                                        breakLabel={"..."}
                                        breakClassName={"break-me"}
                                        pageCount={this.state.paginationValue}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={5}
                                        onPageChange={this.handlePageClick}
                                        containerClassName={"pagination"}
                                        subContainerClassName={"pages pagination"}
                                        activeClassName={"active"} /> : ""}
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
        "getPageCount": () => (dispatch(getPageCount())),
        "selectedBook": (item) => (dispatch(selectedBook(item))),
        "setInitialState": (payload) => (dispatch(setIntialState(payload))),
        "searchValue": () => (dispatch(searchValue()))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
