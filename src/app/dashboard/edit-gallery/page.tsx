'use client'

import { useState } from "react";
import GalleryList from "./GalleryList";
import AddOrUpdateGallery from "./AddOrUpdateGallery";

interface Gallery {
  id: number;
  title: string;
  description?: string;
  [key: string]: any; // Allow additional optional fields
}

const GalleryPage: React.FC = () => {
  const [editingGallery, setEditingGallery] = useState<Gallery | null>(null);

  const handleEdit = (gallery: Gallery) => {
    setEditingGallery(gallery);
  };

  const handleSave = () => {
    setEditingGallery(null); // Reset form after save
  };

  return (
    <div>
      {editingGallery ? (
        <AddOrUpdateGallery gallery={editingGallery} onSave={handleSave} />
      ) : (
        <GalleryList onEdit={handleEdit} />
      )}
    </div>
  );
};

export default GalleryPage;
