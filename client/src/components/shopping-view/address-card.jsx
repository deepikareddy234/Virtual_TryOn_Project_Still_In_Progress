import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Label } from "../ui/label";

function AddressCard({
  addressInfo,
  handleDeleteAddress,
  handleEditAddress,
  setCurrentSelectedAddress,
  selectedId,
}) {
  return (
    <Card
      onClick={
        setCurrentSelectedAddress
          ? () => setCurrentSelectedAddress(addressInfo)
          : null
      }
      className={`cursor-pointer border-red-700 max-w-sm w-full ${
        selectedId?._id === addressInfo?._id
          ? "border-red-900 border-[4px]"
          : "border-black"
      }`}
    >
      <CardContent className="grid p-4 gap-3">
        <Label className="block w-full break-all">
          Address: {addressInfo?.address}
        </Label>
        <Label className="block w-full">City: {addressInfo?.city}</Label>
        <Label className="block w-full">pincode: {addressInfo?.pincode}</Label>
        <Label className="block w-full">Phone: {addressInfo?.phone}</Label>
        <Label className="block w-full break-all">
          Notes: {addressInfo?.notes}
        </Label>
      </CardContent>

      <CardFooter className="p-3 flex justify-between">
        <Button
          onClick={() => handleEditAddress(addressInfo)}
          className="bg-black text-white hover:bg-gray-500"
        >
          Edit
        </Button>
        <Button
          onClick={() => handleDeleteAddress(addressInfo)}
          className="bg-black text-white hover:bg-gray-500"
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AddressCard;
