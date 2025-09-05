import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import AddFrom from "./AddFrom";

const ItemAddModal = () => {
  return (
    <div className="pt-10">
      <AlertDialog>
        <AlertDialogTrigger>Add Item</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AddFrom></AddFrom>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="w-full">Cancel</AlertDialogCancel>
            {/* <AlertDialogAction>Add Item</AlertDialogAction> */}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ItemAddModal;
