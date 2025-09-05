import { useGetItemsQuery } from "@/redux/api/itemCreateApi";
import { DataTable } from "./data-table";
import { getColumns, type Item } from "./columns";

function ItemPage() {
  const { data, isLoading } = useGetItemsQuery(undefined);

  const handleEdit = (item: Item) => {
    // TODO: Implement edit logic (e.g., open modal)
    console.log("Edit item:", item);
  };

  const columns = getColumns(handleEdit);

  if (isLoading) {
    return <p>loading...</p>;
  }
  console.log(data);

  return (
    <div>
      <h2 className="pb-8">Item Page</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default ItemPage;
