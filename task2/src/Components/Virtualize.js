import {useEffect, useState} from "react";
import "./Virtualize.css";


export function Virtualize(props) {
    const [scrollTop, setScrollTop] = useState(0);

    const visibleItems = props.items.slice(Math.ceil(scrollTop / props.rowHeight), Math.ceil(scrollTop / props.rowHeight) + 4);
    const ulHeight = props.items.length * props.rowHeight;
    const offsetY = Math.ceil(scrollTop / props.rowHeight) * props.rowHeight;

    const handleScroll = (e) => {
        setScrollTop(e.currentTarget?.scrollTop);
    }

    return (
        <div className="virtualize-component" onScroll={handleScroll}>
            <div className="virtualize-container" style={{"--height": ulHeight}}>
                {visibleItems ?
                    <ul style={{transform: `translateY(${offsetY}px)`}}>
                        {visibleItems.map((item, index) => {
                            return <li>{item}</li>
                        })}
                    </ul>
                    :
                    <span>List is empty</span>
                }
            </div>
        </div>
    )
}