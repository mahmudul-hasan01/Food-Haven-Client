import { useEffect, useState } from "react";

const useMenu = () => {
    const [menuData, setMemuData] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setMemuData(data)
                setLoading(false)
            })
    }, [])
    return [menuData,loading]
};

export default useMenu;