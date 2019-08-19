import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const Questions = ({
    columns,
    data
}) => (
    <div>
        <ReactTable
            columns={columns}
            NoDataComponent={() =>('')}
            minRows={1}
            filterAll={false}
            // data={data}
            data={data}
            />
    </div>
)

Questions.propTypes ={
    columns:PropTypes.any,
    data:PropTypes.any,
}

export default(Questions);