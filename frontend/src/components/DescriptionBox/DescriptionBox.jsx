import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-navBox">
                Description
            </div>
            <div className="descriptionbox-navBox fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quam molestiae, nihil impedit, hic quod suscipit atque cumque officiis optio minus dolorem odit voluptatibus neque dolore numquam ducimus earum architecto?*1</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo illum rerum, ad natus error non aut eveniet numquam similique necessitatibus suscipit labore molestias alias id ipsam odit in dolores itaque.</p>
        </div>
        
    </div>
  )
}

export default DescriptionBox