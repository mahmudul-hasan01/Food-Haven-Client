import { useEffect, useState } from "react";

const useMenu = () => {
    const [menuData, setMemuData] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setMemuData(data)
                setLoading(false)
            })
    }, [])
    return [menuData,loading]
};

export default useMenu;