// import React from "react";
// import "./Example.scss";
// import JwPagination from 'jw-react-pagination';
// import {array} from "./Array";
//
//
// class Example extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         exampleItems: array,
//     //         pageOfItems: []
//     //     };
//     //     this.onChangePage = this.onChangePage.bind(this);
//     // }
//     //
//     // onChangePage(pageOfItems) {
//     //     this.setState({ pageOfItems: pageOfItems });
//     // }
//     //
//     // render() {
//     //     return (
//     //         <div>
//     //             <div className={"footer-header"}><JwPagination items={this.state.exampleItems} onChangePage={this.onChangePage}/></div>
//     //         </div>
//     //     )
//     // }
//
//     books=()=>{
//       return array.map((item) => {
//             <div className='some-page-wrapper'>
//                 <div className='row'>
//                     <div className='column'>
//                         <div className='blue-column'>
//                             {item.price}
//                         </div>
//                     </div>
//                     <div className='column'>
//                         <div className='green-column'>
//                             {item.price}
//                         </div>
//                     </div>
//                     <div className='column'>
//                         <div className='orange-column'>
//                             {item.price}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         })
//     }
//     render() {
//         return (
//             {}
//
//         )
//     }
// }
//
// export default Example