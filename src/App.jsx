import PostsPage from "./components/PostsPage";
import PostsList from "./components/PostsList";
import PostContext from "./context/PostContext";
import PostCard from "./components/PostCard";


const posts = [
  { id: 1, title: "The Benefits of Meditation", content: "Meditating daily helps reduce stress and improve focus." },
  { id: 2, title: "How to Organize a Productive Day", content: "Set priorities, avoid distractions, and take strategic breaks." },
  { id: 3, title: "Traveling on a Budget", content: "Book in advance, choose affordable accommodations, and explore free attractions." },
  { id: 4, title: "Healthy Eating: Where to Start?", content: "Eat fresh foods, limit sugar intake, and drink plenty of water daily." },
];



function App() {

  return (
    <>
      <PostContext.Provider value={{ posts }}>

        <PostsPage />
        <PostsList />
        <PostCard />

      </PostContext.Provider>
    </>
  )
}

export default App
