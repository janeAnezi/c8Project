import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

const ProfileInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userTags, setUserTags] = useState([
    "breakfast",
    "lunch",
    "dinner",
    "snack",
    "vegetarian",
    "gluten-free",
  ]);

  const [filteredTags, setFilteredTags] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchedTag, setSearchedTag] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleTagSelection = (tag) => {
    setSearchTerm(tag);
    setShowSuggestions(false);
  };

  const handleSearch = () => {
    setSearchedTag(searchTerm);
    // Perform search action here
  };

  const handleUndoSearch = () => {
    setSearchTerm("");
    setSearchedTag("");
    // Undo search action here
  };

  useEffect(() => {
    const fetchFilteredTags = async () => {
      const filtered = userTags.filter((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTags(filtered);
      // Save filtered tags to Firestore with the new modular syntax
      const tagsRef = collection(db, "filteredTags");
      await setDoc(doc(tagsRef, "filtered"), { tags: filtered });
    };

    fetchFilteredTags();
  }, [searchTerm, userTags]);

  return (
    <div className="max-w-md mx-auto mb-11 p-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search tags..."
          className="w-full pl-2 pr-4 py-2 border-b focus:outline-none focus:ring focus:border-blue-300"
          value={searchTerm}
          onChange={handleInputChange}
        />

        <button
          className="absolute right-0 top-0 mt-2 mr-2 px-3 py-1 bg-blue-500 text-white rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
        {searchedTag && (
          <button
            className="absolute right-0 top-0 mt-2 mr-2 px-3 py-1 bg-gray-300 text-gray-700 rounded-md"
            onClick={handleUndoSearch}
          >
            Undo Search
          </button>
        )}
        <ul
          className="absolute bg-white w-full mt-1 rounded-md border border-gray-300"
          style={{ display: showSuggestions ? "block" : "none" }}
        >
          {filteredTags.map((tag, index) => (
            <li
              key={index}
              className="p-2"
              onClick={() => handleTagSelection(tag)}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileInput;
