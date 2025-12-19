import React from "react";

const WATCHES = [
  {
    id: 1,
    name: "Apple Watch Series 9",
    category: "Midnight Aluminum",
    price: "$399",
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "New",
  },
  {
    id: 2,
    name: "Apple Watch Ultra 2",
    category: "Titanium Case",
    price: "$799",
    image: "https://images.pexels.com/photos/110471/pexels-photo-110471.jpeg?auto=compress&cs=tinysrgb&w=600",
    tag: "Pro",
  },
  {
    id: 3,
    name: "Apple Watch SE",
    category: "Starlight Sport",
    price: "$249",
    image: "https://images.pexels.com/photos/1334600/pexels-photo-1334600.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Series 9 - Gold",
    category: "Stainless Steel",
    price: "$699",
    image: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function WatchGallery() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 rounded-2xl shadow-md">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            The Watch Collection
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">Minimal design, maximum impact.</p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {WATCHES.map((watch) => (
            <div key={watch.id} className="group relative flex flex-col">
              {/* Image Container */}
              <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-200 group-hover:opacity-90 transition-all duration-300 ease-in-out shadow-sm group-hover:shadow-md">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                {watch.tag && (
                  <span className="absolute top-3 left-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full text-gray-900 dark:text-white">
                    {watch.tag}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="mt-4 flex flex-col items-center text-center">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    <a href="/">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {watch.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {watch.category}
                  </p>
                </div>
                <p className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {watch.price}
                </p>
              </div>

              {/* Minimalist Button */}
              <button className="mt-4 w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2.5 rounded-xl text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}