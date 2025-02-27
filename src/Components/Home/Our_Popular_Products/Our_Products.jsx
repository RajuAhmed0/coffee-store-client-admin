import React, { useEffect, useState } from 'react'
import { MdDelete, MdEdit, MdRemoveRedEye } from 'react-icons/md';
import { RiCupLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Our_Products = () => {

    const [coffeeData, setCoffeeData] = useState(null)
    console.log(coffeeData);

    useEffect(() => {
        fetch('http://localhost:4000/coffee')
            .then(res => res.json())
            .then(data => setCoffeeData(data))
            .catch(error => console.error('Error:', error));

    }, [])


    const handleDeleteBtn = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/coffee/${id}`, {
                    method: "DELETE"
                })

                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const coffeeInfo = coffeeData.filter(coffee => coffee._id !== id)
                            setCoffeeData(coffeeInfo)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })
            }
        });

    }



    return (
        <div className="bg-cover 2xl:bg-[url('https://i.ibb.co.com/j0J5JcS/1.png')] xl:bg-[url('https://i.ibb.co.com/j0J5JcS/1.png')]   lg:bg-none md:bg-none sm:bg-none">
            <div className="text-center pb-10 md:mt-[120px] mt-16 max-w-[1320px] mx-auto">
                <p className="railwayFont font-normal text-xl text-[#1B1A1A] mb-2">
                    --- Sip & Savor ---
                </p>
                <h3 className="text-[#331A15] md:text-[55px] text-4xl font-normal md:mb-4 mb-2">
                    Our Popular Products
                </h3>
                <Link
                    to="/Add_New_Coffee"
                    className="btn rounded-none mt-4 mb-12 border-2 border-[#331A15] hover:text-black bg-[#E3B577] hover:bg-[#e3b477ef] text-2xl font-normal"
                >
                    <span className="text-white ">Add Coffee</span>
                    <RiCupLine className="text-chocolate" />
                </Link>

                <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-6 xl:mx-0 mx-3'>
                    {
                        coffeeData?.map((coffee, index) => (
                            <div key={index} className="bg-[#F5F4F1] xl:p-8 md:p-3 p-5 flex gap-3 flex-col sm:flex-row items-center rounded-md">
                                <div>
                                    <img src={coffee.photo} alt={coffee.name} className="max-w-44" />
                                </div>
                                <div className="flex-grow xl:text-xl text-start text-[#5C5B5B] space-y-2">
                                    <p className='railwayFont'>
                                        <span className="font-semibold text-[#1B1A1A] railwayFont ">Name:</span> {coffee.name}
                                    </p>
                                    <p className='railwayFont'>
                                        <span className="font-semibold text-[#1B1A1A] railwayFont ">Chef:</span> {coffee.chef}
                                    </p>
                                    <p className='railwayFont'>
                                        <span className="font-semibold text-[#1B1A1A] railwayFont ">Price:</span> {coffee.price} Taka
                                    </p>
                                </div>
                                <div className="flex gap-4 sm:flex-col">
                                    <Link
                                        to={`/coffee/${coffee._id}`}
                                        className="bg-[#D2B48C] w-10 h-10 flex justify-center hover:text-black items-center text-white rounded"
                                    >
                                        <MdRemoveRedEye size={25} />
                                    </Link>
                                    <Link
                                        to={"/Update_Existing_Coffee"}
                                        className="bg-[#3C393B] w-10 h-10 flex justify-center items-center hover:text-[#D2B48C] text-white rounded"
                                    >
                                        <MdEdit size={25} />
                                    </Link>
                                    <button onClick={() => handleDeleteBtn(coffee._id)} className="bg-[#EA4744] w-10 h-10 flex justify-center items-center hover:text-black text-white rounded active:scale-95 transition-all">
                                        <MdDelete size={25} />
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Our_Products;