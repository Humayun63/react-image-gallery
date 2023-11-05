import { memo } from "react"

const GalleryBody = ({childeren}) =>{
    return(
        <>
            <div>
                {childeren}
            </div>
        </>
    )
}
export default memo(GalleryBody);