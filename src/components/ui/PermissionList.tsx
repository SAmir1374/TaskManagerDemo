import Card from "./Card";

type PermissionListItemType = {
  id: number;
  title: string;
  description: string;
};

const permissionListItems: PermissionListItemType[] = [
  {
    id: 0,
    title: "دسترسی کامل",
    description:
      "توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه",
  },
  {
    id: 1,
    title: "دسترسی ویرایش",
    description:
      "توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند پروژه را حذف یا تسک جدید بسازد.",
  },
  {
    id: 2,
    title: "دسترسی کامنت",
    description:
      "توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما توانایی ویرایش تنظیمات پروژه را ندارد.",
  },
  {
    id: 3,
    title: "فقط دسترسی مشاهده",
    description: "توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد.",
  },
];

type Props = {
  onSelect?: (id: number) => void;
};

function PermissionList({ onSelect }: Props) {
  return (
    <Card className="border w-64 !p-2 flex flex-col gap-2">
      {permissionListItems.map((item) => (
        <button
          className="text-right hover:bg-slate-100 py-2 px-1 rounded-2xl"
          onClick={() => onSelect && onSelect(item.id)}
        >
          <p className="text-xs font-semibold pb-1">{item.title}</p>
          <p className="text-[10px] font-normal text-gray-dark">
            {item.description}
          </p>
        </button>
      ))}
    </Card>
  );
}

export default PermissionList;
