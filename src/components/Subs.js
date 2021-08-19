import React from 'react'
import subs from './subscriptions.json'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Subs = ({match}) => {
    const filteredOptions = subs.filter(value => value.user_id === match.params.id)
    
   
    
    return (
        <>{ filteredOptions.length > 0 ? (
        subs
        .filter(value => value.user_id === match.params.id)
        .map(value =>( 
                    <div className="subscriptionPlans">
                    <h2>Subscription Plan</h2>
                    <div className="subscription">
                        <h4 key={value.id}>{value.package}</h4>
                        <p key={value.id}>Expires on : {value.expires_on}</p>
                    </div><br />
                    <Link to="/" className="subsRedirect">Return to User List</Link>
                    </div>)
                )): (
                    <div className="subscriptionNotFound">
                    <h1>No results Found !</h1>
                        <br/>
                        <Link to="/" className="subsRedirect">Return to User List</Link>
                    </div>
                )
        
    }
        </>
    )
}


