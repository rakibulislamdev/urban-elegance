import UrbanSubHeading from "./UrbanSubHeading";
import UrbanItems from "./UrbanItems";
import UrbanCart from "./UrbanCart";
import { useContext, useEffect, useState } from "react";
import { UrbanDataContext } from "../../context";
import useUrbanCategory from "../../hooks/useUrbanCategory";
import useDebounce from "../../hooks/useDebounce";

export default function UrbanEleganceBoard() {
  const [sort, setSort] = useState(false);
  const [filter, setFilter] = useState(false);
  const [sortOrder, setSortOrder] = useState("");
  const [sortFilterData, setSortFilterData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { urbanData } = useContext(UrbanDataContext);
  const { urbanCategory } = useUrbanCategory();
  const debounceSearchTerm = useDebounce(setSearchTerm, 500);

  function handleSortOrder(order) {
    setSortOrder(order);
  }

  function handleFilterCategory(category) {
    setSelectedCategory((prev) => (prev === category ? "" : category));
  }

  function handleFilter() {
    setFilter(!filter);
    setSort(false);
  }

  function handleSort() {
    setSort(!sort);
    setFilter(false);
  }

  useEffect(() => {
    let updateData = [...urbanData];

    if (sortOrder === "low") {
      updateData.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high") {
      updateData.sort((a, b) => b.price - a.price);
    }

    if (selectedCategory.length > 0) {
      updateData = updateData.filter(
        (item) => item.category === selectedCategory
      );
    }

    if (searchTerm.trim() !== "") {
      updateData = updateData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setSortFilterData(updateData);
  }, [sortOrder, urbanData, selectedCategory, searchTerm]);

  return (
    <div>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <UrbanSubHeading />
        <div className="mt-10">
          <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="w-full">
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={handleSort}
                  >
                    Sort
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {sort && (
                    <div
                      className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex={-1}
                    >
                      <div className="py-1" role="none">
                        <span
                          className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-0"
                          onClick={() => handleSortOrder("low")}
                        >
                          Low to High
                        </span>
                        <span
                          className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-0"
                          onClick={() => handleSortOrder("high")}
                        >
                          High to Low
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                {/* Sort Options */}
              </div>

              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                    id="filter-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={handleFilter}
                  >
                    Filter
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {filter && (
                  <div
                    className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="filter-button"
                    tabIndex={-1}
                    id="filter-dropdown"
                  >
                    <div className="py-1" role="none">
                      {urbanCategory.map((category, index) => (
                        <label
                          key={index}
                          className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
                        >
                          <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4"
                            id="filter-option-1"
                            onChange={() => handleFilterCategory(category)}
                            checked={selectedCategory === category}
                          />
                          <span className="ml-2">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Search and Cart */}
            <div className="flex gap-2 items-center">
              {/* Search */}
              <div className="flex flex-1 items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 focus-within:!ring-2 ring-inset focus-within:!ring-teal-500 rounded-md">
                <svg
                  className="mr-2 h-5 w-5 stroke-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  className="block w-full appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none placeholder:text-sm sm:text-sm sm:leading-6"
                  placeholder="Find anything..."
                  aria-label="Search components"
                  id="headlessui-combobox-input-:r5n:"
                  role="combobox"
                  type="text"
                  aria-expanded="false"
                  aria-autocomplete="list"
                  defaultValue=""
                  style={{ caretColor: "rgb(107, 114, 128)" }}
                  onChange={(e) => debounceSearchTerm(e.target.value)}
                />
              </div>

              <UrbanCart />
            </div>
          </div>
        </div>
        <UrbanItems sortFilterData={sortFilterData} />
      </div>
    </div>
  );
}
