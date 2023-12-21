interface DocumentSectionProps {
  section: string;
}

export default function DocumentSection(props: DocumentSectionProps) {
  return (
    <div className="w-full bg-neutral-200 p-4">
      <h1 className="text-center text-2xl font-bold">{props.section}</h1>
    </div>
  );
}
