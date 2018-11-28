import React ,{ Component } from 'react'
//import PropTypes from 'prop-types'
import ElementsListItem from './comp/ElementsListItem/ElementsListItem';
import {Elements} from '../ElementListSearch/Elements'

class ElementsList extends Component{
    render(){
        return(
            <React.Fragment>
                <ElementsListItem item={Elements[0]}/>
                <ElementsListItem item={Elements[1]}/>
                <ElementsListItem item={Elements[2]}/>
            </React.Fragment>
        )
    }
}

export default ElementsList;