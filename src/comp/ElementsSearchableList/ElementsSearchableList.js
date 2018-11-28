import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import ElementsListSearch from './comp/ElementListSearch/ElementListSearch';
import ElementsList from './comp/ElementsList/ElementsList';

class ElementsSearchableList  extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        item:{
            name: '',
            ip: '',
            status: ''
        }
      }
    }

    render(){
        return(
            <div>
                <h1>Agencias en Synap</h1>
                <hr/>
                <ElementsListSearch/>
                <hr/>
                <h3>Listado</h3>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>IP</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ElementsList/>
                    </tbody>
                </table>
                <hr/>
            </div>            
        )
    }
}

export default ElementsSearchableList;