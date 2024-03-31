import Delete from "./Component/Delete";
import Get from "./Component/Get";
import Post from "./Component/Post";
import Update from "./Component/Update";

const App = () => {
  return (
    <div className="grid grid-cols-4 gap-5 justify-between items-center border-2">
      <Get />
      <Post />
      <Update />
      <Delete />
    </div>
  );
};

export default App;