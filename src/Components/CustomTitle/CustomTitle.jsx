import { useEffect } from "react";

const CustomTitle = ({title}) => {
    useEffect(() => {
        document.title = `The Slash Inn - ${title}`
        return () => {
            document.title = `The Slash Inn`
        }
    },[title])
     
    
};

export default CustomTitle;