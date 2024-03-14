import axios from "axios";
import { useState } from "react";

const SubmissionList = () => {
    const [userId, setUserID] = useState('')

    const handleUserNameToUserId = async (e) => {
        e.preventDefault()
        const userName = e.target?.userName?.value
        try {
            const response = await axios.get(`https://uhunt.onlinejudge.org/api/uname2uid/${userName}`);
            // console.log(response.data);
            setUserID(response.data)
            e.target.reset()
            
        } catch (error) {
            console.log(error);
        }

    }

    const handleCloseModal =()=>{
        document.getElementById('my_modal_5').close();
        setUserID('')
    }
    return (
        <div>
            <form className=" pt-11">
                <div className="flex justify-center gap-11">
                    <div>
                        <label htmlFor="userId" >User Id</label>
                        <input type="text" id="userId" placeholder="Your user id" className="input input-bordered input-primary w-full max-w-xs  mt-2" />


                        <div onClick={() => document.getElementById('my_modal_5').showModal()} className="tooltip" data-tip="Click to get your user id">
                            <i className="fa-solid fa-circle-info relative left-64 -top-9"></i>
                        </div>

                    </div>
                    <div>
                        <label htmlFor="count" className="">Submission Count</label>
                        <input type="text" id="count" placeholder="Submission count" className="input input-bordered input-primary w-full max-w-xs  mt-2" />

                        <div className="tooltip" data-tip="The amount of submission you want to check">
                            <i className="fa-solid fa-circle-info relative -left-5"></i>
                        </div>
                    </div>
                </div>
            </form>

            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="modal-action">
                        <form onSubmit={handleUserNameToUserId} className=" w-full" method="dialog ">
                            <div className="flex flex-col pl-20 ">
                                <label htmlFor="userName" className="text-xl">User name</label>
                                <input required type="text" name="userName" id="userName" placeholder="Your user name" className="input input-bordered input-primary w-[70%]  mt-2" />
                            </div>
                           <button onClick={handleCloseModal} className="btn relative text-red-400 hover:text-red-600 bottom-[81%] left-[93%]">X</button>


                            <input type="submit" className="my-3 mx-auto text-center btn w-[40%] ml-20" value="Submit" />
                        </form>
                    </div>
                    {
                        userId && <p className="font-semibold text-blue-700">Your user id is: {userId} </p>
                    }
                </div>
            </dialog>
        </div>
    );
};

export default SubmissionList;