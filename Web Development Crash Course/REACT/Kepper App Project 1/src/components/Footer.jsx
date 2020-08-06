import React from 'react'


let currentYear = new Date().getFullYear()
function Footer(){
    return (
        <footer><center><p>CopyRight {currentYear}</p></center></footer>
        
    )
}

export default Footer