import React from 'react'
import PropTypes from 'prop-types'

const ElementsListItem =({item})=>{
    return(
        <React.Fragment>
        <tr>
            <td>{`${item.name}`}</td>
            <td>{`${item.ip}`}</td>
            <td>{`${item.status}`}</td>
        </tr>
        </React.Fragment>
    );
}

export default ElementsListItem;

ElementsListItem.prototypes={
    item: PropTypes.shape(
        {
            name: PropTypes.string.isRequired,
            ip: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired
        }
    ).isRequired
}

ElementsListItem.defautlProps={
    item: PropTypes.shape(
        {
            name: '',
            ip: '',
            status: ''
        }
    )
}