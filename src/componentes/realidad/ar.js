import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';




const horarios=({lab1,firestore,history}) => {
   if(!lab1) return <Spinner />
   //Eliminar suscriptores
   

   return( 
    <div>
       <a-scene embedded arjs>
      <a-marker-camera preset='hiro'>
        <a-sphere position='0 0.5 0' material='color: white;' radius="1"></a-sphere>
    </a-marker-camera>
    <a-entity camera></a-entity>
    
    
    </a-scene>

    </div>
   );
        
    
}
horarios.propTypes ={
   firestore : PropTypes.object.isRequired,
   usuarios : PropTypes.array
}
export default compose(
   firestoreConnect([{collection : 'lab1'}]),
    connect((state, props) =>({
        lab1: state.firestore.ordered.lab1
    }))
)(horarios);