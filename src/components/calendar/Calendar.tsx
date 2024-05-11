import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import faLocale from "@fullcalendar/core/locales/fa";
import listPlugin from "@fullcalendar/list";
import { Dialog, Popover, Transition } from "@headlessui/react";
import PlusIcon from "../icons/PlusIcon";
import CloseIcon from "../icons/CloseIcon";
import { useMemo, useState } from "react";
import Button from "../ui/Button";
import { DayCellContentArg } from "@fullcalendar/core/index.js";
import { toJalaliDate } from "../../helpers/toJalaliDate";
import "./style.css";
import FlagIcon from "../icons/FlagIcon";

function Calendar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(props: DayCellContentArg) {
    setCurrentDate(props.date);
    setIsOpen(true);
  }

  const ShowDate = useMemo(() => {
    const date = toJalaliDate(currentDate, "medium");
    return `${date[0]} ${date[1]}`;
  }, [currentDate]);

  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Dialog.Panel className="fixed w-[500px] max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all border-primary border">
                <div className="mt-2 flex flex-row">
                  <button>
                    <CloseIcon
                      className="stroke-gray w-10 h-10"
                      onClick={closeModal}
                    />
                  </button>
                  <input
                    placeholder="نام تسک را وارد کنید"
                    className="flex-1"
                  />
                </div>

                <div className="mt-4 flex flex-row justify-between items-center">
                  <div className="flex gap-4">
                    <button>
                      <FlagIcon className="stroke-red-400" />
                    </button>
                    <p>{ShowDate}</p>
                  </div>
                  <Button type="button" onClick={closeModal}>
                    ساختن تسک
                  </Button>
                </div>
              </Dialog.Panel>
              {/* <div className="fixed z-50 bg-white overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2"></div>
                <div className="bg-gray-50 p-4">
                  <a
                    href="##"
                    className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    <span className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        Documentation
                      </span>
                    </span>
                    <span className="block text-sm text-gray-500">
                      Start integrating products and tools
                    </span>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </Dialog>
      </Transition>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={false}
        locale={faLocale}
        contentHeight="700px"
        fixedWeekCount={false}
        firstDay={6}
        dayCellClassNames="group"
        dayCellContent={(props) => {
          return (
            <div className="flex justify-between ">
              <button
                className="bg-primary rounded-md invisible group-hover:visible"
                onClick={() => openModal(props)}
              >
                <PlusIcon className="stroke-white" />
              </button>

              <span className="-z-50">{props.dayNumberText}</span>
            </div>
          );
        }}
      />
    </>
  );
}

export default Calendar;
