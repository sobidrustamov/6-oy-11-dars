import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProducts } from "../../../pages/home/service/query/useGetProducts";

export default function CotologModal({ isOpen, setIsOpen }) {
  const { data } = useGetProducts('category');
  const navigate = useNavigate();

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

          <div className="fixed inset-0 overflow-y-auto bg-[#00000043]">
            <div className="flex justify-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[1087px] mt-[110px] transform overflow-hidden bg-slate-50 p-6 align-middle shadow-xl transition-all">
                  <div className="grid grid-cols-3">
                    {data?.map((item) => {
                      return (
                        <div
                          onClick={() => {
                            navigate(`/products/${item.datakey}`);
                            setIsOpen(false);
                          }}
                          key={item.id}
                          className="border p-3"
                        >
                          <img
                            className="w-[50%] mx-auto"
                            src={item.img}
                            alt="img"
                          />
                          <p className="text-center">{item.title}</p>
                        </div>
                      );
                    })}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
