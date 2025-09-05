import "./App.css";
import ItemAddModal from "./home/itemAdd/ItemAddModal";
import ItemPage from "./home/items/ItemPage";

function App() {
  return (
    <>
      <div>
        <ItemPage></ItemPage>
        <ItemAddModal></ItemAddModal>
      </div>
    </>
  );
}

export default App;
