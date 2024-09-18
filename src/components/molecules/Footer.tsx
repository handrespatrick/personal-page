export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex h-56 w-full flex-col gap-5 bg-[#646cff] pt-6">
      <span>© {currentYear}. All rights reserved.</span>
      <strong>This page is proudly made by me.</strong>
    </div>
  );
}
