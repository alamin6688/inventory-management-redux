import { useGetItemsQuery } from "@/redux/api/itemCreateApi";
import { DataTable } from "./data-table";
import { getColumns, type Item } from "./columns";
import { useState } from "react";
import UpdateForm from "../updateItem/UpdateItem";

function ItemPage() {
  const [editItem, setEditItem] = useState<Item | null>(null);
  const { data, isLoading } = useGetItemsQuery(undefined);

  if (isLoading) {
    return <p>loading...</p>;
  }

  const handleEdit = (item: Item) => {
    setEditItem(item);
    // console.log("Edit item:", item);
  };

  return (
    <div>
      <h2 className="pb-8">Item Page</h2>

      <DataTable columns={getColumns(handleEdit)} data={data}></DataTable>

      {editItem && (
        <UpdateForm
          item={editItem}
          open={true}
          onClose={() => setEditItem(null)}
        />
      )}
    </div>
  );
}

export default ItemPage;
