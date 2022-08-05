export default function SettingsSection(props: any) {
  const { title }: { title: string } = props;
  return (
    <div className="flex flex-col gap-4">
      <span className="text-2xl">{title}</span>
      <div className="flex flex-col gap-2">{props.children}</div>
    </div>
  );
}
