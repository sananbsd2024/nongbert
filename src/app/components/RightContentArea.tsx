import NewsListPage from "./Newslist";
import NewsSellListPage from "./Newssell";
import GalleryPage from "./Gallery";

export default function RightContentAreaPage() {
    return (
        <div>
            <NewsListPage />
            <NewsSellListPage />
            <GalleryPage />
        </div>
    );
}
