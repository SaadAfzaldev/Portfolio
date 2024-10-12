import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { gridItems } from "@/data";
const Grid = () => {
    return (
        <section id="about"> 
            <BentoGrid>
                {gridItems.map(({id,title,description, img, imgClassName, titleClassName, spareImg, className}) => (<BentoGridItem
                    id={id}
                    title={title}
                    description={description}
                    // className={className} // Comment this if not look good
                    img={img}
                    imgClassname={imgClassName}
                    titleClassname={titleClassName}
                    spareImg={spareImg}
                    />))}    
            </BentoGrid> 
        </section>
    )
}

export default Grid;