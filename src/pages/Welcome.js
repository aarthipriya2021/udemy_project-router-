import React from 'react';
import { Route} from 'react-router-dom';

export const Welcome = () => {
    return (
        <section>
            <h2>Welcome Page</h2>
            <Route path= '/welcome/new-user'>
                <p>Welcome new-user!</p>
            </Route>
        </section>
    )
}

export default Welcome ;
