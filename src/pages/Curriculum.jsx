import robotImage from "../images/Robot.png";
import { Dialog, Tab, Transition } from "@headlessui/react";
import CurriculumCard from "../components/curriculum/CurriculumCard";
import { Fragment, useState } from "react";

function Curriculum() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [url, setUrl] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const onSubmit = () => {
    console.log(title);
    console.log(subject);
    console.log(url);
    console.log(startDate);
    console.log(endDate);
    console.log(status);
    // closeModal();
  };

  return (
    <div className="pt-20">
      <img
        src={robotImage}
        alt="robot"
        className="max-h-[400px] object-cover w-full md:px-10"
      />

      <div className="px-4 md:px-10 bg-gray-50">
        <div className="py-5 px-2 md:p-10 bg-white my-10 flex flex-col">
          <div className="flex relative justify-center">
            <h1 className="text-2xl">My Curriculum</h1>
          </div>
          <div className="w-full space-1 px-2 py-6">
            <Tab.Group defaultIndex={0}>
              <Tab.List className="flex">
                <Tab className="w-full rounded-lg py-2.5 text-sm md:text-lg font-medium leading-5 ring-white/60 ring-offset-2 ring-offset-yellow-400 focus:outline-none focus:bg-yellow-100">
                  All
                </Tab>

                {/* Selects this tab by default */}
                <Tab className="w-full rounded-lg py-2.5 text-sm md:text-lg font-medium leading-5 ring-white/60 ring-offset-2 ring-offset-yellow-400 focus:outline-none focus:bg-yellow-100">
                  Ongoing
                </Tab>

                <Tab className="w-full rounded-lg py-2.5 text-sm md:text-lg font-medium leading-5 ring-white/60 ring-offset-2 ring-offset-yellow-400 focus:outline-none focus:bg-yellow-100">
                  Completed
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="my-10">
                    <CurriculumCard
                      title={"Google Data Analytics Professional Certificate"}
                      subject={"Engineering"}
                    />
                  </div>
                </Tab.Panel>

                {/* Displays this panel by default */}
                <Tab.Panel>
                  <div className="my-10">
                    <CurriculumCard
                      title={"Google Data Analytics Professional Certificate"}
                      subject={"Engineering"}
                    />
                  </div>
                </Tab.Panel>

                <Tab.Panel>
                  <div className="my-10">
                    <CurriculumCard
                      title={"Google Data Analytics Professional Certificate"}
                      subject={"Engineering"}
                    />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          <div className="w-full flex justify-end space-1 pr-2">
            <div className="inset-0 max-w-32 flex justify-end">
              <button
                type="button"
                onClick={openModal}
                className="rounded-md w-full bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 "
              >
                Add
              </button>
            </div>
          </div>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Create
                    </Dialog.Title>
                    <form
                      className="mt-2 flex flex-col gap-4 px-4"
                      onSubmit={onSubmit}
                    >
                      <div>
                        <label
                          htmlFor="title"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="url"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Url
                        </label>
                        <input
                          type="text"
                          id="url"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="startDate"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Start Date
                        </label>
                        <input
                          type="date"
                          id="startDate"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="endDate"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          End Date
                        </label>
                        <input
                          type="date"
                          id="endDate"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="status"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Study Status
                        </label>

                        <select
                          id="status"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option value="">Choose study status</option>
                          <option value="true">Ongoing</option>
                          <option value="false">Completed</option>
                        </select>
                      </div>
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="w-full justify-center rounded-md border border-transparent bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-900 hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                        >
                          Add
                        </button>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
}

export default Curriculum;
