import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function UserModal({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
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
            <div className="fixed inset-0" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex justify-end text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[346px] h-[782px] max-w-md flex flex-col transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    type="button"
                    className="rounded-md self-end border border-transparent  px-4 py-2 text-sm font-medium hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    X
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Войти или создать профиль
                  </Dialog.Title>
                  <form className="mt-2">
                    <div className="my-2">
                      <label htmlFor="phone" className="text-[#808080] mb-3">
                        Номер телефона
                      </label>
                      <input
                        className="w-full border p-2 outline-none"
                        id="phone"
                        type="text"
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="phone" className="text-[#808080] mb-3">
                        Пароль
                      </label>
                      <input
                        className="w-full border p-2 outline-none"
                        id="password"
                        type="password"
                      />
                    </div>
                    <a
                      href="#"
                      className="w-[120px] ml-auto block my-4 text-[#808080]"
                    >
                      Забыли пароль?
                    </a>
                    <button className="w-full py-3 bg-yellow-300">Войти</button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
