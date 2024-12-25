'use client';

import { useState } from "react";
import GalleryList from "./GalleryList";
import AddOrUpdateGallery from "./AddOrUpdateGallery";

// Define type for Gallery
interface Gallery {
  id: string;
  title: string;
  description: string;
  // Add other relevant fields if needed
}

const GalleryPage = () => {
  const [editingGallery, setEditingGallery] = useState<Gallery | null>(null);

  const handleEdit = (gallery: Gallery) => {
    setEditingGallery(gallery); // Set the selected gallery for editing
  };

  const handleSave = () => {
    setEditingGallery(null); // Reset to gallery list after saving
  };

  return (
    <div className="gallery-page">
      {editingGallery ? (
        <AddOrUpdateGallery gallery={editingGallery} onSave={handleSave} />
      ) : (
        <GalleryList onEdit={handleEdit} />
      )}
    </div>
  );
};

export default GalleryPage;
