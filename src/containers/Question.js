import React, {Component} from 'react'
import { connect } from 'react-redux'
import  * as actions from '../actions/actionCreator'
import { createStructuredSelector } from 'reselect';
import * as selectors from '../selectors/questionSelector'
// import { Question as QuestionComponent } from '../components/Question';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Question extends Component {
    
    componentDidMount() {
        this.props.dispatch(actions.loadQuestionListRequest());
      };

    render(){
        const columns = [{
            Header:"#",
            Cell: ({original}) => (
                <div>
                    {original.quNumber}
                </div>
            ) ,
        },{
          Header:"Question",
          Cell: ({original}) => (
              <div>
                  {original.question}
              </div>
          ) ,
        },{
          Header:"Category",
          Cell: ({original}) => (
              <div>
                  {original.category}
              </div>
          ) ,
        },{
          Header:"State",
          Cell: ({original}) => (
            <div>
                {original.state}
            </div>
          ) ,
        },{
          Header:"Question Group",
          Cell: ({original}) => (
            <div>
                {original.quGroup}
            </div>
          ),
        },{
          Header:"License",
          Cell: ({original}) => (
            <div>
                {original.license}
            </div>
          ),
        },{
          Header:"Status",
          Cell: ({original}) => (
            <div>
                {original.status}
            </div>
          ),
        },{
          Header:"Display",
          Cell: ({original}) => (
            <div>
                {original.display}
            </div>
          ),
        },{
          Header:"Action",
          Cell: ({original}) => (
            <div>
                {original.action}
            </div>
          ),
        }]
        // const data = [
        //     {
        //         quNumber:1,
        //         question:"question",
        //         category:"category",
        //         state:"state",
        //         quGroup:"quGroup",
        //         license:"license",
        //         status:"status",
        //         display:"display",
        //         action:"action"
        //     }
        // ]
        return (
            <div container justify="center">
                <div className="form-group row">
                    <div className="col md8">
                        <h3> Custom Question Manager </h3>
                    </div>
                    <div className="col md4">
                        <button variant="contained" color="primary">Add New Question</button>
                    </div>
                </div>   
                <ReactTable
                    columns={columns}
                    NoDataComponent={() =>('')}
                    minRows={1}
                    filterAll={false}
                    // data={data}
                    data={this.props.qList}
                    />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    loading: selectors.makeSelectQuestionLoading(),
    qList: selectors.makeSelectQuestion(),
  });

function mapDispatchToProps(dispatch) {
    return {
      dispatch,
    };
  }
  
const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );

export default (withConnect)(Question)