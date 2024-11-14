import React from 'react';

const Category = () => {
    const data = [
        {
            "id": 1,
            "name": "Computers",
            "slug": "computers"
        },
        {
            "id": 2,
            "name": "Phones",
            "slug": "phones"
        },
        {
            "id": 3,
            "name": "Smart Watches",
            "slug": "smart-watches"
        },
    ]
    return (
        <div className={"bg-white p-4 rounded-lg flex md:flex-col gap-4"}>
            {
                data.map(item=><div className={"bg-base-300 p-4 rounded-full"}>{item.name}</div>)
            }
        </div>
    );
};

export default Category;