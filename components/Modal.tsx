"use client"
import Image from 'next/image'
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const Modal = () => {

    let [isOpen, setIsOpen] = useState(true)

    const openModal = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);

    return (
        <>
            <button type="button" className="btn"
                onClick={openModal}
            >
                Track
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" open={isOpen} onClose={closeModal} className="dialog-container">
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >

                        </span>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                        >
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <Image
                                                src="/assets/icons/logo.svg"
                                                alt="logo"
                                                width={28}
                                                height={28}
                                            />
                                        </div>
                                        <Image
                                            src="/assets/icons/x-close.svg"
                                            alt="close"
                                            width={24}
                                            height={24}
                                            className="cursor-pointer"
                                            onClick={closeModal}
                                        />
                                    </div>
                                    <h4>
                                        Stay updated with shein product pricing right in your inbox
                                    </h4>
                                </div>
                                <form className="flex flex-col mt-5">
                                    <label htmlFor="email" className="text-sm
                                    font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <div className="dialog-input_container">
                                        <Image
                                            src="/assets/icons/mail.svg"
                                            alt='mail'
                                            width={18}
                                            height={18}
                                        />

                                        <input
                                            required
                                            type="email"
                                            id="email"
                                            placeholder="Enter your email address"
                                            className="dialog-input"
                                        />
                                    </div>
                                    <button>
                                        Track
                                    </button>
                                </form>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Modal