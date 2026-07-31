type PrimaryButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

function PrimaryButton({
  onClick,
  children,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-sky-500 px-8 py-3 font-semibold text-black transition hover:bg-sky-400"
    >
      {children}
    </button>
  );
}

export default PrimaryButton;