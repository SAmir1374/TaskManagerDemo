import { useEffect, useState } from "react";

import Card from "../ui/Card";
import WorkSpaceColor from "./WorkSpaceColor";
import Review from "./Review";
import NewTaskInput, { NewTaskStepOneFormDataType } from "../ui/NewTaskInput";
import Button from "../ui/Button";
import PlusIcon from "../icons/PlusIcon";
import { Dialog } from "@headlessui/react";
import { WorkspaceCreateWorkspace } from "../../api/Workspace/CreateWorkspace";
import { toast } from "react-hot-toast";
import { WorkspaceGetAll } from "../../api/Workspace/GetAllWorkspaces";

const taskPanel = [
  { id: 1, title: "ساختن ورک اسپیس جدید" },
  { id: 2, title: "انتخاب رنگ وک اسپیس" },
  { id: 3, title: "مرور اطلاعات" },
];

function WorkTask() {
  const [step, setStep] = useState(1);
  const { mutate, isSuccess } = WorkspaceCreateWorkspace();
  const { refetch } = WorkspaceGetAll();

  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setStep(1);
    setName("");
    setColor("");
    setIsOpen(false);
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success("ورک اسپیس با موفقیت ایجاد شد.");
      setIsOpen(false);
      refetch();
    }
  }, [isSuccess]);

  function handleBackClick() {
    if (step > 1) {
      setStep(step - 1);
    } else {
      handleClose();
    }
  }

  function handleSubmitStepOne(data: NewTaskStepOneFormDataType) {
    setName(data.name);
    setStep(2);
  }

  function handleSubmitStepTwo(data: string) {
    setColor(data);
    setStep(3);
  }
  function handleSubmitStepThree() {
    mutate({ name });
  }

  return (
    <>
      <Button
        className="!py-1 !bg-gray-semi-light flex items-center justify-center mt-3"
        onClick={() => setIsOpen(true)}
      >
        <PlusIcon className="stroke-black" />
        <span className="text-black text-sm">ساخت اسپیس جدید</span>
      </Button>
      <Dialog
        open={isOpen}
        onClose={() => handleClose()}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex flex-col items-center justify-center p-4">
          <Card
            close={() => handleClose()}
            back={handleBackClick}
            title={taskPanel[step - 1].title}
            className="m-0 w-[500px]"
          >
            <div className="mt-[40px] flex justify-start px-1">
              {step === 1 && <NewTaskInput onSubmit={handleSubmitStepOne} />}
              {step === 2 && (
                <WorkSpaceColor title={name} onSubmit={handleSubmitStepTwo} />
              )}
              {step === 3 && (
                <Review
                  name={`${name}`}
                  color={`${color}`}
                  onSubmit={handleSubmitStepThree}
                />
              )}
            </div>
          </Card>
          <div className="flex justify-center items-end flex-row-reverse">
            {taskPanel.map((item, index) => {
              return (
                <span
                  key={item.id}
                  className={`w-2 h-2 mt-[40px] mx-2 rounded-full ${
                    step === index + 1 ? "bg-white" : "bg-[#8A8989]"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default WorkTask;
