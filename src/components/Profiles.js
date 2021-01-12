import React from 'react'

const Profiles = ({profiles}) => {
    return (
        <div>
            <center><h1> List</h1></center>
            {profiles.map((profiles) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{profiles.firstname}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{profiles.email}</h6>
                        
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Profiles