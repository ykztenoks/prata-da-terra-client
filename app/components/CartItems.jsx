import Image from "next/image";

export default function CartItems({ image, name, quantity, price }) {
  return (
    <>
      <tr>
        <td>{name}</td>

        <td>{quantity}</td>
        <td>{price}</td>
      </tr>
    </>
    // <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
    //   <div class="rounded-lg md:w-2/3">
    //     <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
    //       <img
    //         src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    //         alt="product-image"
    //         class="w-full rounded-lg sm:w-40"
    //       />
    //       <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
    //         <div class="mt-5 sm:mt-0">
    //           <h2 class="text-lg font-bold text-gray-900">{name}</h2>
    //         </div>
    //         <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
    //           <div class="flex items-center border-gray-100">
    //             <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
    //               {" "}
    //               -{" "}
    //             </span>
    //             <input
    //               class="h-8 w-8 border bg-white text-center text-xs outline-none"
    //               type="number"
    //               value="2"
    //               min="1"
    //             />
    //             <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
    //               {" "}
    //               +{" "}
    //             </span>
    //           </div>
    //           <div class="flex items-center space-x-4">
    //             <p class="text-sm">259.000 ₭</p>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke-width="1.5"
    //               stroke="currentColor"
    //               class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 d="M6 18L18 6M6 6l12 12"
    //               />
    //             </svg>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
