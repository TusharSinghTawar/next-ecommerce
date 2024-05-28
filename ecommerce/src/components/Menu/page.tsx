// import React from 'react'

// const Menu = () => {
//     const data = [
//         { id: 1, name: "Home", url: "/" },
//         { id: 2, name: "About", url: "/about" },
//         { id: 3, name: "Categories", subMenu: true },
//         { id: 4, name: "Contact", url: "/contact" },
//     ];
    

// return (
//     <div><ul>
//         { data.map((e)=>{<li className='flex items-center justify-start ps-4 active:text-blue-700 hover:bg-blue-700 text-white focus:' >{e.name}</li>})}
     
//         </ul></div>
// )
// }

// export default Menu
import React from 'react';

const Menu = () => {
    const data = [
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "About", url: "/about" },
        { id: 3, name: "Categories", subMenu: true },
        { id: 4, name: "Contact", url: "/contact" }, 

    ];
    const subMenuData = [
        { id: 1, name: "Jordan", doc_count: 11 },
        { id: 2, name: "Sneakers", doc_count: 8 },
        { id: 3, name: "Running shoes", doc_count: 64 },
        { id: 4, name: "Football shoes", doc_count: 107 },
    ];

    return (
        <div>
            <ul className='hidden md:flex items-center gap-8 font-medium text-black '>
                {data.map((e) => {return(
                    // eslint-disable-next-line react/jsx-key
                    <React.Fragment key={e.id}>
                        {!!e?.subMenu ? (<li></li>):(<li></li>)}
                    <li className='flex items-center justify-start ps-4 text-black active:text-blue-700 hover:bg-blue-700 text-white focus:'>
                        {e.name}
                    </li>
                    </React.Fragment >
                )})}
            </ul>
        </div>
    );
};

export default Menu;