import CreateVendors from "./_components/CreateVendors";
import VendorsList from "./_components/VendorList";

export default function VendorsPage() {
    return (
        <div>
            <div className="text-2xl font-bold">
                Vendors
            </div>
            <CreateVendors />
            <VendorsList />
        </div>
    )
}