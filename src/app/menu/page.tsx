import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col md:flex-row items-center">
      {menu.map(category => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-2/3 bg-cover p-8 md:h-1/2"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm mt-8 mb-2">{category.desc}</p>
            <button className="text-white bg-black py-2 px-4 rounded-md">
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
