import { memo, useState } from "react"
import Nav from "./Nav";
import GalleryBody from "./GalleryBody";
import FeatureImage from "./FeatureImage";
import SingleImage from "./SingleImage";
import AddImage from "./AddImage";

const LayOut = () =>{
    const [images, setImage] = useState([])

    return(
        <>
            <div>
                <Nav/>
                <GalleryBody>
                    <FeatureImage/>
                    {
                        images.map(img => <SingleImage key={img?.id} url={img?.path}/>)
                    }
                    <AddImage/>
                </GalleryBody>
            </div>
        </>
    )
}
export default memo(LayOut);