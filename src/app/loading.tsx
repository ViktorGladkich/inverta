export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <div className="relative h-16 w-16">
        <div className="absolute h-full w-full rounded-full border-4 border-neutral-100 opacity-50"></div>
        <div className="absolute h-full w-full rounded-full border-4 border-t-neutral-900 animate-spin"></div>
      </div>
    </div>
  );
}
