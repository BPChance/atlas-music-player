export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="text-supablue dark:text-supapink p-8 text-center">
      &copy; {year} Atlas School
    </div>
  );
}
