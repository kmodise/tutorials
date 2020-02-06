import React from 'react'

function Child(prop) {
    return(
        <div>
            <button onClick={() => prop.handler('your loving child')}>click</button>
        </div>
        
    )
}

export default Child