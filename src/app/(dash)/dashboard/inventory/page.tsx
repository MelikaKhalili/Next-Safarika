import InventorySection from "@/components/dash/inventory/inventory";
export default function InventoryPage({
  isSidebarOpen,
}: {
  isSidebarOpen: boolean;
}) {
  return (
    <div>
      <InventorySection />
    </div>
  );
}
