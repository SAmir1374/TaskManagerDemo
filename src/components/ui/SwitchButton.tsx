import { Switch } from "@headlessui/react";

interface Props {
  enable?: boolean;
  setEnable?: () => void;
  enable_title?: string;
  disenable_title?: string;
}

function SwitchButton({
  enable = false,
  setEnable,
  enable_title = "حالت روز",
  disenable_title = "حالت شب",
}: Props) {
  return (
    <div className="flex py-16">
      <Switch
        checked={enable}
        onChange={setEnable}
        className={`
          relative inline-flex bg-white h-[25px] w-[54px] shrink-0 cursor-pointer rounded-full border-[1.5px] border-gray transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${enable ? "translate-x-[-24px]" : "translate-x-[-1.5px]"}
            pointer-events-none absolute inset-y-[0.25px] inline-block h-[21px] w-[26px] transform rounded-full ${
              enable ? "rounded-r-none" : "rounded-e-none"
            } ${
            enable ? "bg-gray" : "bg-primary"
          } shadow-lg ring-0 transition-all duration-1000 ease-in-out`}
        />
      </Switch>
      <p className="mx-3.5">
        {enable ? `${disenable_title}` : `${enable_title}`}
      </p>
    </div>
  );
}

export default SwitchButton;
