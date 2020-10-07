import React, { Suspense,lazy} from "react";
import "./HomePage.scss";
import Card from '@material-ui/core/Card';
import { connect } from "react-redux";
import { selectedBook, setIntialState, onSearchValue } from "./HomePageAction";
import { Redirect } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import Loader from 'react-loader-spinner';
import BrowserService from "../BrowserService";
// import memoize from  "memoizee";

const BookDetailsComponent=lazy(()=>import("../Component/BookDetailsComponent"));
const SiteHeader=lazy(()=>import("../SiteHeader/SiteHeader"));

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        console.log("constructor", props)
        this.state = {
            books: [],
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
        console.log("componentDidMount")
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 2000)
        this.props.setInitialState()
    }

    componentWillReceiveProps(nextProps) {
        const newValue = nextProps.homePage.getAllBookData;
        if (newValue !== this.props.homePage.getAllBookData.length)
            this.setState({ books: nextProps.homePage.getAllBookData }, () => {
                this.recievedData()
            })
    }

    recievedData = () => {
        const data = this.props.homePage.getAllBookData;
        const slice = this.state.books.slice(this.state.offset, this.state.offset + this.state.perPage)
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

    // memoizedExpensiveFunc =()=>{ memoize(this.getCard)};

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
        if (this.props.homePage.storeData) {
            const itemDetails = JSON.stringify(this.props.homePage.selectedBook);
            let id = this.props.homePage.selectedBook._id
            BrowserService.setLocalStorageValue("selectedBook",itemDetails);       
            return <Redirect to={`/buyPrice/${id}`} />
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
                                {/* {this.memoizedExpensiveFunc()} */}
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
